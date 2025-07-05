import FeaturedWorksComp from "@/components/HomeComp/FeaturedWorksComp";

import HeroComp from "@/components/HomeComp/HeroComp";
import RecentPostsComp from "@/components/HomeComp/RecentPostsComp";
import Image from "next/image";

export default function Home() {
  return (
    <section className="h-full flex flex-col items-center w-full gap-6">
      <HeroComp />
      <RecentPostsComp />
      <FeaturedWorksComp />
    </section>
  );
}
