import Footer from "@/components/Footer/Footer";
import HomeEvents from "@/components/home/HomeEvents/HomeEvents";
import HomeGallery from "@/components/home/HomeGallery/HomeGallery";
import HomeHeader from "@/components/home/HomeHeader/HomeHeader";
import HomeMenu from "@/components/home/HomeMenu/HomeMenu";
import Newsletter from "@/components/shared/Newsletter/Newsletter";

export const metadata = {
  title: "Home",
  description:
    "Café Regina in Zelzate — enjoy a warm atmosphere, extensive drinks, small bites and weekend suggestions.",
};

export default function Home() {
  return (
    <div>
      <HomeHeader />
      <HomeEvents />
      <HomeGallery />
      <Newsletter />
      <Footer />
    </div>
  );
}
