import Link from "next/link";

export default function Carousel({ data }: any) {
  return (
    <main>
      <h1>{data.heading}</h1>
      <Link href={data.link} >Go to first page</Link>
    </main>
  )
}
