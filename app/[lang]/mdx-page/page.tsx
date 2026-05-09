// app/[lang]/mdx-page/page.tsx  (no changes needed)
import WithDictionary from "@/app/[lang]/components/WithDictionary";
import type { Locale } from "@/i18n-config";

import MDXContent from "./index.mdx";
import { getMDXComponents } from "@/mdx-components";
import { NavigationProvider } from "@/app/[lang]/contexts/navigation-context";

export default function MdxPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  return (
    <WithDictionary params={params}>
      {(dict) => (
        <NavigationProvider dict={dict}>
          <MDXContent components={getMDXComponents(dict)} />
        </NavigationProvider>
      )}
    </WithDictionary>
  );
}
