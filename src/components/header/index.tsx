'use client'
import Link from "next/link";

export default function Header({ data }: any) {
  return (
    <main>
      <p>{data.heading}</p>
      <Link href={data.link} >Go to second page</Link>
    </main>
  )
}
