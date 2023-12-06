import Link from "next/link";

// CAROUSEL PRESENTATIONAL COMPONENT.
export default function Carousel({ data }: any) {

  // We will not do any logic related code here. this component just needs the data to be rendered.

  const { heading, link } = data;
  
  return (
    <main>
      <h1>{heading}</h1>
      <Link href={link} >Go to first page</Link>
    </main>
  )
}
