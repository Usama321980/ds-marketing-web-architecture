import { ISampleType } from "@/interfaces";
import Link from "next/link";

export default function Carousel({ data }: ISampleType) {
  
  // GET COMPONENT DATA FROM API WITH COMPONENT UNIQUE KEY ( data.id )
  const { heading, link } = { heading: 'COROUSEL 1', link: "/work/dynamic" };

  return (
    <main>
      <h1>{heading}</h1>
      <Link href={link} >Go to first page</Link>
    </main>
  )
}
