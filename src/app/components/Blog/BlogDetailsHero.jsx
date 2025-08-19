import Image from "next/image";
import { AiOutlineCalendar, AiOutlineUser } from "react-icons/ai";
import { formatDate } from "../../lib/utils/dateFormatter";

export default function BlogDetailsHero({ post }) {
  return (
    <>
      {/* Hero Image */}
      {post.cover_image && (
        <div className="relative w-full h-[200px] md:h-[400px] lg:h-[600px] rounded-2xl overflow-hidden my-10">
          <Image
            src={post.cover_image.url}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
            className="object-cover aspect-video"
          />
        </div>
      )}

      {/* Title */}
      <h1 className="text-2xl md:text-4xl font-bold mb-4 text-primary">
        {post.title}
      </h1>

      {/* Meta Information */}
      <div className="flex items-center gap-4 text-sm text-base-content/60 mb-8">
        <span className="flex items-center gap-1">
          <AiOutlineCalendar size={16} /> {formatDate(post.publishedAt)}
        </span>
        <span className="flex items-center gap-1">
          <AiOutlineUser size={16} /> Adam Taheri
        </span>
      </div>
    </>
  );
}
