'use client'
import Link from "next/link";

export default function Header({ data }: any) {

  // GET COMPONENT DATA FROM API WITH COMPONENT UNIQUE KEY ( data.id )
  const { heading, link } = { heading: 'HEADER 1', link: "/work/dynamic" };

  return (
    <main>
      <p>{heading}</p>
      <Link href={link} >Go to second page</Link>
    </main>
  )
}
