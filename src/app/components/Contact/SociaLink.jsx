
import Link from 'next/link'
import React from 'react'

export default function SocialLink({ name, href, icon }) {
  return (
    <Link
    href={href}
    className="w-10 h-10 bg-base-content/40 rounded-full flex items-center justify-center hover:bg-accent/20 transition-colors"
    aria-label={name}
  >
    <span className=" text-primary ">{icon}</span>
  </Link>
  )
}
