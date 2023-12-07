'use client'
import { ComponentMapper } from "@/helpers";

export default function Home({ params }: any) {
  
  const slug = params.slug.join('/');
  let components = [];

  // PASS THAT SLUG TO THE API, AND GET COMPONENTS LIST.

  // I'M USING THESE CONDITIONS TO SIMULATE MULTIPLE PAGES
  if(slug.includes('dynamic')) {
    components = [
      {  id: 'carousel', name: 'carousel' },
      {  id: 'footer', name: 'footer' },
    ];
  } else {
    components = [
      {  id: 'header', name: 'header' },
      {  id: 'footer', name: 'footer' }
    ];
  }

  return (
    <main>
      {components.map((component) => {
        const Component = ComponentMapper[component.name];
        return <Component key={component.id} data={{...component}} />;
      })}
    </main>
  )
}
