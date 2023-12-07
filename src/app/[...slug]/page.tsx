'use client'
import { ComponentMapper } from "@/helpers";

export default function Home({ params }: any) {
  
  let components = [
      {  id: 'header', name: 'header'},
      {  id: 'footer', name: 'footer'},
      {  id: 'carousel', name: 'carousel'},
    ];
  
  return (
    <main>
      {components.map((component) => {
        const Component = ComponentMapper[component.name];
        return <Component key={component.id} data={{...component}} />;
      })}
    </main>
  )
}
