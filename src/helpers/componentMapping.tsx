import { Footer, Header, Carousel } from "@/components";

interface ComponentMapping {
  [key: string]: React.ComponentType<any>;
}

const componentMapping: ComponentMapping = {
  header: Header,
  footer: Footer,
  carousel: Carousel
};

export default componentMapping;