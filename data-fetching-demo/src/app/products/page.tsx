import { cookies } from "next/headers";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
};

export default async function ProductsPage() {
  const productsResponse = await fetch("http://localhost:3001/products", {
    next: { revalidate: 10 },
  });
  const cookieStore = cookies();
  const theme = cookieStore.get("theme");
  console.log({ theme });
  const detailsResponse = await fetch("http://localhost:3001/products/1");
  const details = await detailsResponse.json();
  const products = await productsResponse.json();
  return (
    <ul className="space-y-4 p-4">
      {products.map((product: Product) => (
        <li
          key={product.id}
          className="p-4 bg-white shadow-md rounded-lg text-gray-700"
        >
          <h2 className="text-xl font-semibold">{product.title}</h2>
          <p>{product.description}</p>
          <p className="text-lg font-medium">${product.price}</p>
          <p>{details.title}</p>
        </li>
      ))}
    </ul>
  );
}
