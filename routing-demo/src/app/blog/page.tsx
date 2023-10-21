export default async function Blog() {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("all blog posts");
    }, 2000);
  });
  return <h1>My blog post count</h1>;
}
