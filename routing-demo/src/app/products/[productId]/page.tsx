import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { productId: string };
};

export const generateMetadata = async (
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> => {
  const parentMetadata = await parent;
  return {
    title: `Product ${params.productId}`,
    description: parentMetadata.title?.absolute,
  };
};

export default function ProductDetails({ params }: Props) {
  return <h1>Details about product {params.productId}</h1>;
}
