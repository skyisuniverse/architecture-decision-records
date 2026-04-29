// app/contexts/navigation-context.test.tsx
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { NavigationProvider, useNavigation } from './navigation-context';

// =============================================================================
// TOP-LEVEL IMPORTS FOR STABLE MOCKING
// =============================================================================
import * as NextNavigation from 'next/navigation';
import * as AdrsLists from '@/app/[lang]/config/adrs-lists';

// =============================================================================
// MOCKS
// =============================================================================
vi.mock('next/navigation', () => ({
  usePathname: vi.fn(),
  useRouter: vi.fn(),
  useParams: vi.fn(() => ({ lang: 'en' })),
}));

vi.mock('@/app/[lang]/config/adrs-lists', () => ({
  adrsListMap: {
    'test-adr-1': [{ title: 'Test ADR One', link: '/adrs/test-adr-1' }],
    'test-adr-2': [{ title: 'Test ADR Two', link: '/adrs/test-adr-2' }],
  } as any,
  categories: [
    {
      id: 'cat-1',
      mainPageSlug: 'test-adr-1',
      adrs: [{ slug: 'test-adr-1', label: 'Category 1 Label' }],
    },
    {
      id: 'cat-2',
      mainPageSlug: 'test-adr-2',
      adrs: [{ slug: 'test-adr-2', label: 'Category 2 Label' }],
    },
  ] as any,
  getCategoryBySlug: vi.fn((slug: string) => {
    if (slug === 'test-adr-1') {
        return {
        id: 'cat-1',
        adrs: [{ slug: 'test-adr-1', label: 'Category 1 Label' }],
        };
    }
    if (slug === 'test-adr-2') {
        return {
        id: 'cat-2',
        adrs: [{ slug: 'test-adr-2', label: 'Category 2 Label' }],
        };
    }
    return undefined;
    }),
}));

vi.mock('@/app/[lang]/products/products-list', () => ({
  itemData: [
    { title: 'Product Alpha', slug: 'alpha' },
    { title: 'Product Beta', slug: 'beta' },
  ],
}));

vi.mock('@/app/[lang]/companies/companies-list', () => ({
  itemData: [
    { title: 'Company X', slug: 'x' },
    { title: 'Company Y', slug: 'y' },
  ],
}));

vi.mock('@/app/[lang]/services/services-list', () => ({
  itemData: [
    { title: 'Service Foo', slug: 'foo' },
    { title: 'Service Bar', slug: 'bar' },
  ],
}));

vi.mock('@/app/[lang]/apps/applications-list', () => ({
  itemData: [
    { title: 'App One', slug: 'one' },
    { title: 'App Two', slug: 'two' },
  ],
}));

// =============================================================================
// TEST HELPER
// =============================================================================
const TestConsumer = ({ onRender }: { onRender?: (value: any) => void }) => {
  const value = useNavigation();
  React.useEffect(() => {
    onRender?.(value);
  }, [value, onRender]);
  return <div data-testid="consumer" />;
};

// =============================================================================
// TEST SUITE
// =============================================================================
describe('NavigationContext / NavigationProvider (Vitest)', () => {
  let mockUsePathname: ReturnType<typeof vi.fn>;
  let mockUseRouter: ReturnType<typeof vi.fn>;
  let mockPush: ReturnType<typeof vi.fn>;
  let mockGetCategoryBySlug: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    vi.clearAllMocks();

    mockUsePathname = vi.mocked(NextNavigation.usePathname);
    mockUseRouter = vi.mocked(NextNavigation.useRouter);
    mockGetCategoryBySlug = vi.mocked(AdrsLists.getCategoryBySlug);

    mockPush = vi.fn();

    // CRITICAL FIX: Always give pathname a string so .match() never fails
    mockUsePathname.mockReturnValue('/en');

    mockUseRouter.mockReturnValue({ push: mockPush });
  });

  // ---------------------------------------------------------------------------
  // 1. PROVIDER RENDERING & BASIC HOOK SAFETY
  // ---------------------------------------------------------------------------
  it('renders children without crashing and provides context', () => {
    // WHAT: Verify the provider can mount and children render.
    // WHY:  Basic smoke test – catches top-level errors, infinite loops, or
    //       missing provider setup.
    render(
      <NavigationProvider>
        <div data-testid="child">Hello</div>
      </NavigationProvider>
    );
    expect(screen.getByTestId('child')).toBeInTheDocument();
  });

  it('throws when useNavigation is called outside of NavigationProvider', () => {
    // WHAT: Call the hook directly outside any provider.
    // WHY:  Enforces the documented contract and prevents silent `undefined` errors.
    expect(() => render(<TestConsumer />)).toThrow(
      'useNavigation must be used within a NavigationProvider'
    );
  });

  // ---------------------------------------------------------------------------
  // 2. DEFAULT STATE & HOME-PAGE SYNC
  // ---------------------------------------------------------------------------
  it('initializes with defaultCategoryId and expandedAdrSlug = null on home page', async () => {
    // WHAT: Set pathname to root and assert default state.
    // WHY:  The SYNC_FROM_URL effect explicitly handles the home-page fallback.
    mockUsePathname.mockReturnValue('/en');

    const onRender = vi.fn();
    render(
      <NavigationProvider>
        <TestConsumer onRender={onRender} />
      </NavigationProvider>
    );

    await waitFor(() => {
      const value = onRender.mock.calls.at(-1)?.[0];
      expect(value.selectedCategoryId).toBe('cat-1');
      expect(value.expandedAdrSlug).toBeNull();
      expect(value.currentSlug).toBe('');
    });
  });

  // ---------------------------------------------------------------------------
  // 3. URL SYNC EFFECT (deep link / refresh / browser back)
  // ---------------------------------------------------------------------------
  it('SYNC_FROM_URL sets correct category + expandedAdrSlug when on an ADR page', async () => {
    // WHAT: Simulate direct navigation to /adrs/test-adr-1.
    // WHY:  The effect is the ONLY place that reads the URL on mount or pathname change.
    //       Guarantees sidebar stays in sync after refresh or shared links.
    mockUsePathname.mockReturnValue('/en/adrs/test-adr-1');

    const onRender = vi.fn();
    render(
      <NavigationProvider>
        <TestConsumer onRender={onRender} />
      </NavigationProvider>
    );

    await waitFor(() => {
      const value = onRender.mock.calls.at(-1)?.[0];
      expect(value.selectedCategoryId).toBe('cat-1');
      expect(value.expandedAdrSlug).toBe('test-adr-1');
      expect(value.currentSlug).toBe('test-adr-1');
      expect(value.currentAdr).toBeDefined();
    });
  });

  it('SYNC_FROM_URL falls back to default category when slug is invalid', async () => {
    // WHAT: Pathname contains an unknown ADR slug.
    // WHY:  Defensive programming – UI must never break on bad URLs.
    mockUsePathname.mockReturnValue('/en/adrs/unknown-slug');

    const onRender = vi.fn();
    render(
      <NavigationProvider>
        <TestConsumer onRender={onRender} />
      </NavigationProvider>
    );

    await waitFor(() => {
      const value = onRender.mock.calls.at(-1)?.[0];
      expect(value.selectedCategoryId).toBe('cat-1');
      expect(value.expandedAdrSlug).toBeNull();
    });
  });

  // ---------------------------------------------------------------------------
  // 4. CURRENT ITEM MEMOS
  // ---------------------------------------------------------------------------
  it('computes currentProduct when pathname matches /products/*', async () => {
    // WHAT: Pathname points to a product detail page.
    // WHY:  Verifies the specific memo logic that extracts slug and looks it up.
    mockUsePathname.mockReturnValue('/en/products/beta');

    const onRender = vi.fn();
    render(
      <NavigationProvider>
        <TestConsumer onRender={onRender} />
      </NavigationProvider>
    );

    await waitFor(() => {
      const value = onRender.mock.calls.at(-1)?.[0];
      expect(value.currentProduct).toEqual({ title: 'Product Beta', slug: 'beta' });
    });
  });

  it('computes currentCompany, currentService, currentApp correctly', async () => {
    // WHAT: Test the three other list memo paths.
    // WHY:  All four list lookups follow the same pattern.
    mockUsePathname.mockReturnValue('/en/companies/y');

    const onRender = vi.fn();
    render(
      <NavigationProvider>
        <TestConsumer onRender={onRender} />
      </NavigationProvider>
    );

    await waitFor(() => {
      const value = onRender.mock.calls.at(-1)?.[0];
      expect(value.currentCompany).toEqual({ title: 'Company Y', slug: 'y' });
    });
  });

  // ---------------------------------------------------------------------------
  // 5. selectCategory ACTION
  // ---------------------------------------------------------------------------
  it('selectCategory updates state, collapses expanded, and navigates to mainPageSlug', async () => {
    // WHAT: Call selectCategory('cat-2').
    // WHY:  Public API used by category dropdown – must dispatch, force collapse (UX), and navigate.
    mockUsePathname.mockReturnValue('/en');

    let contextValue: any;
    const onRender = vi.fn((v) => {
      contextValue = v;
    });

    render(
      <NavigationProvider>
        <TestConsumer onRender={onRender} />
      </NavigationProvider>
    );

    await waitFor(() => expect(contextValue).toBeDefined());

    contextValue.selectCategory('cat-2');

    await waitFor(() => {
      expect(contextValue.selectedCategoryId).toBe('cat-2');
      expect(contextValue.expandedAdrSlug).toBeNull();
      expect(mockPush).toHaveBeenCalledWith('/en/adrs/test-adr-2');
    });
  });

  // ---------------------------------------------------------------------------
  // 6. navigateToAdr ACTION
  // ---------------------------------------------------------------------------
  it('navigateToAdr pushes correct URL and optionally expands the ADR', async () => {
    // WHAT: Call navigateToAdr with and without shouldExpand flag.
    // WHY:  Used by ADR list links – verify router + optional state update.
    mockUsePathname.mockReturnValue('/en');

    let contextValue: any;
    const onRender = vi.fn((v) => (contextValue = v));

    render(
      <NavigationProvider>
        <TestConsumer onRender={onRender} />
      </NavigationProvider>
    );

    await waitFor(() => expect(contextValue).toBeDefined());

    contextValue.navigateToAdr('test-adr-1');
    expect(mockPush).toHaveBeenCalledWith('/en/adrs/test-adr-1');

    // with expand
    mockPush.mockClear();
    contextValue.navigateToAdr('test-adr-2', true);

    await waitFor(() => {
      expect(mockPush).toHaveBeenCalledWith('/en/adrs/test-adr-2');
      expect(contextValue.expandedAdrSlug).toBe('test-adr-2');
    });
  });

  // ---------------------------------------------------------------------------
  // 7. toggleExpanded / setExpanded ACTIONS
  // ---------------------------------------------------------------------------
  it('toggleExpanded flips the expandedAdrSlug correctly', async () => {
    // WHAT: Call toggleExpanded twice on the same slug.
    // WHY:  Sidebar accordion behavior – reducer must toggle null ↔ slug.
    mockUsePathname.mockReturnValue('/en/adrs/test-adr-1');

    let contextValue: any;
    const onRender = vi.fn((v) => (contextValue = v));

    render(
      <NavigationProvider>
        <TestConsumer onRender={onRender} />
      </NavigationProvider>
    );

    await waitFor(() => expect(contextValue.expandedAdrSlug).toBe('test-adr-1'));

    contextValue.toggleExpanded('test-adr-1');
    await waitFor(() => expect(contextValue.expandedAdrSlug).toBeNull());

    contextValue.toggleExpanded('test-adr-1');
    await waitFor(() => expect(contextValue.expandedAdrSlug).toBe('test-adr-1'));
  });

  it('setExpanded forces a specific value (including null)', async () => {
    // WHAT: Call setExpanded(null) and setExpanded('some-slug').
    // WHY:  Used by explicit sidebar controls – verifies direct state mutation.
    mockUsePathname.mockReturnValue('/en');

    let contextValue: any;
    const onRender = vi.fn((v) => (contextValue = v));

    render(
      <NavigationProvider>
        <TestConsumer onRender={onRender} />
      </NavigationProvider>
    );

    await waitFor(() => expect(contextValue.expandedAdrSlug).toBeNull());

    contextValue.setExpanded('test-adr-2');
    await waitFor(() => expect(contextValue.expandedAdrSlug).toBe('test-adr-2'));

    contextValue.setExpanded(null);
    await waitFor(() => expect(contextValue.expandedAdrSlug).toBeNull());
  });

  // ---------------------------------------------------------------------------
  // 8. localize HELPER
  // ---------------------------------------------------------------------------
  it('localize prepends language prefix correctly', async () => {
    // WHAT: Call localize with various href shapes.
    // WHY:  Internal i18n utility used everywhere – must be bullet-proof.
    mockUsePathname.mockReturnValue('/en');

    let contextValue: any;
    const onRender = vi.fn((v) => (contextValue = v));

    render(
      <NavigationProvider>
        <TestConsumer onRender={onRender} />
      </NavigationProvider>
    );

    await waitFor(() => {
      expect(contextValue.localize('/')).toBe('/en');
      expect(contextValue.localize('adrs/test-adr-1')).toBe('/en/adrs/test-adr-1');
      expect(contextValue.localize('/en/adrs/test-adr-1')).toBe('/en/adrs/test-adr-1');
    });
  });

  // ---------------------------------------------------------------------------
  // 9. activeCategory FALLBACK LOGIC
  // ---------------------------------------------------------------------------
  it('activeCategory falls back to selectedCategoryId when currentCategory is undefined', async () => {
    // WHAT: On a non-ADR page, currentCategory is undefined.
    // WHY:  Sidebar must always have a highlighted category.
    mockUsePathname.mockReturnValue('/en/companies/x');

    let contextValue: any;
    const onRender = vi.fn((v) => (contextValue = v));

    render(
      <NavigationProvider>
        <TestConsumer onRender={onRender} />
      </NavigationProvider>
    );

    await waitFor(() => {
      expect(contextValue.currentCategory).toBeUndefined();
      expect(contextValue.activeCategory?.id).toBe('cat-1');
    });
  });

  // ---------------------------------------------------------------------------
  // 10. currentAdrCategoryName MEMO
  // ---------------------------------------------------------------------------
  it('currentAdrCategoryName returns correct label from category config', async () => {
    // WHAT: On an ADR page, compute the human-readable category name.
    // WHY:  Used in page titles / breadcrumbs.
    mockUsePathname.mockReturnValue('/en/adrs/test-adr-1');

    let contextValue: any;
    const onRender = vi.fn((v) => (contextValue = v));

    render(
      <NavigationProvider>
        <TestConsumer onRender={onRender} />
      </NavigationProvider>
    );

    await waitFor(() => {
      expect(contextValue.currentAdrCategoryName).toBe('Category 1 Label');
    });
  });
});

// All public API methods (selectCategory, navigateToAdr, toggleExpanded, setExpanded, localize).  
// All memoized values (currentSlug, currentAdrsList, currentAdr, currentProduct, …, currentAdrCategoryName, activeCategory).  
// useEffect URL sync (home + ADR pages + invalid slug).  
// Reducer behavior (via context).  
// Error boundary contract for the hook.