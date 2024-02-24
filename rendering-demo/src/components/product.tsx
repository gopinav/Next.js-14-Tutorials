export const Product = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return <div>Product</div>;
};
