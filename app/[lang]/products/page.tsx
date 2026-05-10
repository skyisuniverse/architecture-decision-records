// app/[lang]/products/page.tsx
import WithDictionary from "../components/WithDictionary";
import ProductsPage from "./ProductsPage";

export default function Page(props: any) {
  return (
    <WithDictionary {...props}>
      {(dict) => <ProductsPage dict={dict} />}
    </WithDictionary>
  );
}
