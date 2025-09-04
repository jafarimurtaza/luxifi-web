import Image from "next/image";
import { AiOutlineCalendar, AiOutlineUser } from "react-icons/ai";
import { formatDate } from "../../lib/utils/dateFormatter";
import ShareButton from "./ShareButton";
import { WEBSITE_DETAILS } from "../../lib/constants";

export default function BlogDetailsHero({ post }) {
  return (
    <>
      {/* Hero Image */}
      {post.cover_image && (
        <div className="relative w-full lg:h-[600px] md:h-[300px] h-[200px] rounded-2xl overflow-hidden mb-10">
          <Image
            src={post.cover_image.url}
            alt={post.title}
            fill
            className="object-cover aspect-video"
            priority={true}
          />
        </div>
      )}

      {/* Title */}
      <h1 className="text-4xl font-bold mb-4 text-primary">{post.title}</h1>

      {/* Meta Information with Share Button */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div className="flex items-center gap-4 text-sm text-base-content/60">
          <span className="flex items-center gap-1">
            <AiOutlineCalendar size={16} /> {formatDate(post.publishedAt)}
          </span>
          <span className="flex items-center gap-1">
            <AiOutlineUser size={16} /> {WEBSITE_DETAILS.AUTHOR}
          </span>
        </div>

        {/* Share Button */}
        <ShareButton post={post} />
      </div>
    </>
  );
}
