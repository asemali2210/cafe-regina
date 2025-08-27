import DividerLogo from "@/components/DividerLogo/DividerLogo";
import HomeEvents from "@/components/home/HomeEvents/HomeEvents";
import HomeGallery from "@/components/home/HomeGallery/HomeGallery";
import HomeHeader from "@/components/home/HomeHeader/HomeHeader";
import HomeMenu from "@/components/home/HomeMenu/HomeMenu";
import HomeSugestion from "@/components/home/Suggestions/HomeSugestion";

export default function Home() {
  return (
    <div >
      <HomeHeader />
      <HomeMenu />
      <HomeEvents />
      <HomeGallery />
      <DividerLogo />
    </div>
  );
}
