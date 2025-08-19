"use client";

import ReactMarkdown from "react-markdown";

export default function BlogDetailsContent({ content }) {
  if (!content) return null;

  return (
    <section className="mt-10">
      <div className="prose prose-lg prose-slate !max-w-full prose-headings:text-primary prose-p:text-base-content/90 prose-a:text-primary prose-a:no-underline hover:prose-a:underlineprose-strong:text-primary prose-strong:font-boldprose-code:text-primary prose-code:bg-base-200 prose-code:px-2 prose-code:py-1 prose-code:roundedprose-pre:bg-base-200 prose-pre:border prose-pre:border-base-300prose-blockquote:border-l-primary prose-blockquote:bg-base-200/50prose-li:text-base-content/90">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </section>
  );
}
