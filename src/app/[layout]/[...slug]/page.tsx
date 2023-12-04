'use client'
import { ComponentMapper } from "@/helpers";

export default function Home({ params }: any) {
  
  const slug = params.slug.join('/');
  let components = [];
  
  // PASS THAT SLUG TO THE API, AND COMPONENTS LIST.

  if(slug === 'dynamic') {
    components = [
      {  id: 'carousel', name: 'carousel', data: { heading: 'CAROUSEL', link: "/work/live" }},
      {  id: 'footer', name: 'footer', data: { heading: 'FOOTER 1', link: "" }},
    ];
  } else {
    components = [
      {  id: 'header', name: 'header', data: { heading: 'HEADER 1', link: "/work/dynamic" }},
      {  id: 'footer', name: 'footer', data: { heading: 'FOOTER 1', link: "" }},
    ];
  }
  
  return (
    <main>
      {components.map((component) => {
        const Component = ComponentMapper[component.name];
        return <Component key={component.id} data={component.data} />;
      })}
    </main>
  )
}