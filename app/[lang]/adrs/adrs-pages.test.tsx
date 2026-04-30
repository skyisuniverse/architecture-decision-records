// app/[lang]/adrs/adrs-pages.test.tsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import type { Locale } from '@/i18n-config';

// Representative slugs to test (add/remove as needed)
const testSlugs = [
  'nano-assembly-adr',
  'terraforming-mars-adr',
  'faster-factories-with-optimus-semi-cybercab-adr',
  'starship-instant-reusability-adr',
  'nano-assembled-optimus-adr',
  'quantum-computing-adr',
] as const;

describe('ADR Content Pages', () => {
  testSlugs.forEach((slug) => {
    it(`renders ${slug} page correctly with all standard elements`, async () => {
      // Dynamic import of the real Next.js page component
      const { default: Page } = await import(`./${slug}/page`);

      const params = Promise.resolve({ lang: 'en' as Locale, slug });

      const pageElement = await Page({ params });
      render(pageElement);

      // 1. Main title (h1) – always present
      expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();

      // 2. Published date – always rendered
      expect(screen.getByText(/Published/i)).toBeInTheDocument();

      // 3. "Architecture Decision Records" section heading
      expect(
        screen.getByRole('heading', { level: 2, name: /Architecture Decision Records/i })
      ).toBeInTheDocument();

      // 4. At least one ADR card (link)
      const cards = screen.getAllByRole('link');
      expect(cards.length).toBeGreaterThan(0);

      // 5. At least one status chip text (Draft, Accepted, etc.)
      // This is the reliable way since MUI Chip does not use role="status"
      expect(screen.getAllByText(/Draft|Accepted|Rejected/i).length).toBeGreaterThan(0);
    });
  });
});