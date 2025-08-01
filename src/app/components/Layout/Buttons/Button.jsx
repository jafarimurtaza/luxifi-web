import Link from "next/link";
import React from "react";

export default function Button({ href, children }) {
  return (
    <button className="btn btn-outline btn-secondary m-4">
      <Link href={href}>{children}</Link>
    </button>
  );
}
