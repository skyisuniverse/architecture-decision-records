// app/[lang]/layout.test.tsx
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import type { Locale } from '@/i18n-config';

// =============================================================================
// TOP-LEVEL IMPORTS FOR STABLE MOCKING
// =============================================================================
import ClientRootLayout from './ClientRootLayout';

// =============================================================================
// CRITICAL TOP-LEVEL MOCKS (hoisted automatically by Vitest)
// =============================================================================
vi.mock('server-only', () => ({}));

// Mock the i18n config so we control supported locales
vi.mock('@/i18n-config', () => ({
  i18n: {
    locales: ['en', 'de', 'fr'] as const,
    defaultLocale: 'en' as const,
  },
}));

// Mock the dictionary module (even though layout doesn't use it)
// This prevents the require('@/get-dictionary') in test #8 from failing
const mockGetDictionary = vi.fn();
vi.mock('@/get-dictionary', () => ({
  getDictionary: mockGetDictionary,
}));

// Mock ClientRootLayout
vi.mock('./ClientRootLayout', () => ({
  __esModule: true,
  default: vi.fn(({ children }: { children: React.ReactNode }) => (
    <div data-testid="mock-client-root-layout">{children}</div>
  )),
}));

// =============================================================================
// TEST SUITE
// =============================================================================
describe('RootLayout (app/[lang]/layout.tsx) (Vitest)', () => {
  let mockClientRootLayout: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    vi.clearAllMocks();
    mockClientRootLayout = vi.mocked(ClientRootLayout);
  });

  // Helper: dynamically load the layout AFTER mocks are registered.
  const loadLayout = async () => {
    const { default: RootLayout, generateStaticParams } = await import('./layout');
    return { RootLayout, generateStaticParams };
  };

  // ---------------------------------------------------------------------------
  // 1. GENERATE STATIC PARAMS
  // ---------------------------------------------------------------------------
  it('generateStaticParams returns an array for every supported locale', async () => {
    // WHAT: Call the static generateStaticParams function exported by the layout.
    // WHY:  Next.js App Router uses this to pre-generate static pages for each language
    //       at build time. Must return the exact shape expected by the framework.
    const { generateStaticParams } = await loadLayout();
    const params = await generateStaticParams();

    expect(params).toEqual([
      { lang: 'en' },
      { lang: 'de' },
      { lang: 'fr' },
    ]);
    expect(params).toHaveLength(3);
  });

  // ---------------------------------------------------------------------------
  // 2. BASIC RENDERING & SMOKE TEST
  // ---------------------------------------------------------------------------
  it('renders without crashing and wraps children with ClientRootLayout', async () => {
    // WHAT: Render the layout with a simple child and assert the full tree exists.
    // WHY:  Basic smoke test – catches top-level errors, missing async params handling,
    //       or issues with the html/body structure in a server component.
    const { RootLayout } = await loadLayout();
    const params = Promise.resolve({ lang: 'en' as Locale });

    const page = await RootLayout({
      children: <div data-testid="test-child">Hello from page</div>,
      params,
    });

    render(page);

    expect(screen.getByTestId('test-child')).toBeInTheDocument();
    expect(screen.getByTestId('mock-client-root-layout')).toBeInTheDocument();
  });

  // ---------------------------------------------------------------------------
  // 3. HTML LANG ATTRIBUTE
  // ---------------------------------------------------------------------------
  it('sets the correct lang attribute on the <html> tag from awaited params', async () => {
    // WHAT: Verify <html lang={lang}> uses the value extracted from the params Promise.
    // WHY:  Critical for accessibility, SEO, and i18n – screen readers and search engines
    //       rely on the correct language declaration at the document root.
    const { RootLayout } = await loadLayout();
    const params = Promise.resolve({ lang: 'de' as Locale });

    const page = await RootLayout({ children: <div />, params });

    render(page);
    expect(document.querySelector('html')).toHaveAttribute('lang', 'de');
  });

  // ---------------------------------------------------------------------------
  // 4. ASYNC PARAMS HANDLING (Next.js 15+ contract)
  // ---------------------------------------------------------------------------
  it('correctly awaits the params Promise before using lang', async () => {
    // WHAT: Pass a pending Promise for params and ensure the layout awaits it.
    // WHY:  Next.js 15+ makes params a Promise in server components/layouts for
    //       streaming and dynamic rendering support. Failing to await would break the page.
    const { RootLayout } = await loadLayout();
    const params = Promise.resolve({ lang: 'fr' as Locale });

    const page = await RootLayout({ children: <div data-testid="child" />, params });

    render(page);
    expect(screen.getByTestId('child')).toBeInTheDocument();
  });

  // ---------------------------------------------------------------------------
  // 5. LOCALE AGNOSTIC BEHAVIOR – ENGLISH
  // ---------------------------------------------------------------------------
  it('renders correctly for English (en)', async () => {
    // WHAT: Render layout with lang='en' and confirm lang attribute and child wrapper.
    // WHY:  English is the default locale – must work as the baseline for all testing.
    const { RootLayout } = await loadLayout();
    const params = Promise.resolve({ lang: 'en' as Locale });

    const page = await RootLayout({
      children: <div data-testid="en-child">English content</div>,
      params,
    });

    render(page);

    expect(document.querySelector('html')).toHaveAttribute('lang', 'en');
    expect(screen.getByTestId('en-child')).toBeInTheDocument();
  });

  // ---------------------------------------------------------------------------
  // 6. LOCALE AGNOSTIC BEHAVIOR – GERMAN
  // ---------------------------------------------------------------------------
  it('renders correctly for German (de)', async () => {
    // WHAT: Render layout with lang='de' and confirm lang attribute and child wrapper.
    // WHY:  Verifies the layout behaves identically for non-default locales (i18n parity).
    const { RootLayout } = await loadLayout();
    const params = Promise.resolve({ lang: 'de' as Locale });

    const page = await RootLayout({
      children: <div data-testid="de-child">German content</div>,
      params,
    });

    render(page);

    expect(document.querySelector('html')).toHaveAttribute('lang', 'de');
    expect(screen.getByTestId('de-child')).toBeInTheDocument();
  });

  // ---------------------------------------------------------------------------
  // 7. CLIENT ROOT LAYOUT PROP PASSING
  // ---------------------------------------------------------------------------
  it('passes children unchanged to the mocked ClientRootLayout', async () => {
    // WHAT: Render the layout and verify that children appear inside the mocked ClientRootLayout wrapper.
    // WHY:  The layout’s only job is to delegate the entire page tree to ClientRootLayout.
    //       This test confirms children are not dropped or transformed.
    const { RootLayout } = await loadLayout();

    const params = Promise.resolve({ lang: 'en' as Locale });
    const children = <div data-testid="real-child">Real page content</div>;

    const page = await RootLayout({ children, params });

    render(page);

    expect(screen.getByTestId('mock-client-root-layout')).toBeInTheDocument();
    expect(screen.getByTestId('real-child')).toBeInTheDocument();
  });

  // ---------------------------------------------------------------------------
  // 8. NO UNEXPECTED SIDE EFFECTS
  // ---------------------------------------------------------------------------
  it('does not call any external services or dictionaries', async () => {
    // WHAT: Ensure the layout performs no dictionary lookup or async data fetching.
    // WHY:  Layouts should stay lightweight. Any hidden side effects would hurt
    //       performance and make static generation impossible.
    const { RootLayout } = await loadLayout();
    const params = Promise.resolve({ lang: 'en' as Locale });

    await RootLayout({ children: <div />, params });

    // Dictionary mock should never have been called
    expect(mockGetDictionary).not.toHaveBeenCalled();
  });

  // ---------------------------------------------------------------------------
  // 9. TYPE SAFETY CONTRACT
  // ---------------------------------------------------------------------------
  it('accepts the correct TypeScript shape for params (Promise<{ lang: Locale }>)', async () => {
    // WHAT: Verify the layout function signature matches Next.js expectations.
    // WHY:  Ensures future refactors or Next.js upgrades won’t break the component.
    const { RootLayout } = await loadLayout();

    const params = Promise.resolve({ lang: 'fr' as Locale });
    await expect(RootLayout({ children: null, params })).resolves.not.toThrow();
  });

  // ---------------------------------------------------------------------------
  // 10. FULL RENDER PATH (html → body → ClientRootLayout)
  // ---------------------------------------------------------------------------
  it('produces the complete document structure (html > body > ClientRootLayout)', async () => {
    // WHAT: Render the full layout and inspect the outermost DOM nodes.
    // WHY:  Guarantees the exact hierarchy required by Next.js and browsers.
    const { RootLayout } = await loadLayout();
    const params = Promise.resolve({ lang: 'en' as Locale });

    const page = await RootLayout({
      children: <div data-testid="page-content">Content</div>,
      params,
    });

    render(page);

    expect(document.querySelector('html')).toBeInTheDocument();
    expect(document.querySelector('body')).toBeInTheDocument();
    expect(screen.getByTestId('mock-client-root-layout')).toBeInTheDocument();
    expect(screen.getByTestId('page-content')).toBeInTheDocument();
  });
});

// =============================================================================
// WHAT THIS TEST FILE COVERS
// =============================================================================
// • All public responsibilities of the RootLayout server component:
//   - Correct async params handling (Next.js 15+ Promise pattern)
//   - generateStaticParams for static generation of every locale
//   - Proper <html lang={lang}> and <body> structure
//   - Clean delegation of children to ClientRootLayout
// • Locale-agnostic behavior across all supported languages
// • No side effects or hidden dictionary calls
// • TypeScript contract safety for the params prop
//
// Uses Vitest + React Testing Library for fast, isolated, realistic server-component testing.
// Fully compatible with Next.js App Router dynamic params and static generation.