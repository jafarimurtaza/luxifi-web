import HomeMain from "./components/HomeMain/HomeMain";
import { pageMetadata } from "./lib/seo/pageMetadata";

export const metadata = pageMetadata.home;

export default function Home() {
  return (
    <main>
      <HomeMain />
    </main>
  );
}
