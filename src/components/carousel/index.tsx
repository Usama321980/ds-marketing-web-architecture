import Link from "next/link";
import Carousel from "./carousel";

// CAROUSEL LOGICAL COMPONENT
export default function CarouselContainer({ id, name }: any) {

  // WE WILL GET COMPONENT'S DATA FROM CONTENTFULL AGAINST COMPONENT UNIQUE KEY
  // We will have all the logic here in the container component. and will pass the data to the presentational component.
  
  const data = { heading: 'CAROUSEL', link: "/work/live" };

  return (
    <Carousel {...data}/>
  )
}
