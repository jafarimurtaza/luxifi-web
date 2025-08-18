import { BLOG, TAGS } from "./constants";
import { getServer } from "./server";

export async function endpointTemplate({ endpoint, message, tags, params }) {
  try {
    const url = `${getServer()}/${endpoint}?populate=*&${params}`;

    const response = await fetch(url, {
      next: {
        revalidate: 4, // 4 seconds
        tags: tags,
      },
    });

    if (!response.ok) {
      return {
        error: true,
        message: "Something unexpected happened, please try again later.",
      };
    }
    return await response.json();
  } catch (error) {
    console.error(`${message}`, error);
    return { error: true, message: "Failed to fetch data" };
  }
}

export async function getBlogPosts() {
  return endpointTemplate({
    endpoint: "blogs",
    params: `pagination[pageSize]=${BLOG.PAGE_SIZE}`,
    tags: [TAGS.BLOGS],
    message: "Failed to fetch blog posts",
  });
}

export async function getBlogDetails(slug) {
  return endpointTemplate({
    endpoint: "blogs",
    params: `filters[slug][$eq]=${slug}`,
    tags: [TAGS.BLOG_DETAILS],
    message: "Failed to fetch blog details",
  });
}
