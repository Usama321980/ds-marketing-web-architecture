'use client'
import Link from "next/link";

export default function Header({ data }: any) {

  const componentId = 'headerContentType';

  // API CALL TO GET COMPONENT DATA

  const data1 = {};

  return (
    <main>
      <p>{data.heading}</p>
      <Link href={data.link} >Go to second page</Link>
    </main>
  )
}
