import HomeEvents from "@/components/home/HomeEvents/HomeEvents";
import HomeHeader from "@/components/home/HomeHeader";
import HomeMenu from "@/components/home/HomeMenu/HomeMenu";
import HomeSugestion from "@/components/home/Suggestions/HomeSugestion";

export default function Home() {
  return (
    <div >
      <HomeHeader />
      <HomeMenu />
      <HomeEvents />
    </div>
  );
}
