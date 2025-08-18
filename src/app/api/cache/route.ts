import { revalidateTag } from "next/cache";
import { TAGS } from "../../lib/constants";

export async function GET() {
  revalidateTag(TAGS.BLOGS);
  revalidateTag(TAGS.BLOG_DETAILS);
  return new Response(JSON.stringify({ message: "Cache revalidated" }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
