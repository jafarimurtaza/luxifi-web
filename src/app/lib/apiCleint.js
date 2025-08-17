export default async function getBlogPosts() {
  const getServer = process.env.NEXT_PUBLIC_STRAPI_URL;
  try {
    const response = await fetch(`${getServer}blogs?populate=*`);
    if (!response.ok) {
      throw new Error("Failed to fetch blog posts");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.warn(error);
  }
}
