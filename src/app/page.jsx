import HomeEvents from "./../components/home/HomeEvents/HomeEvents";
import HomeMenu from "./../components/home/HomeMenu/HomeMenu";
import HomeHeader from "./../components/home/HomeHeader/HomeHeader";
import HomeGallery from "./../components/home/HomeGallery/HomeGallery";
import Newsletter from "./../components/shared/Newsletter/Newsletter";
import Footer from "./../components/Footer/Footer";

export const metadata = {
  title: "Home",
  description:
    "Café Regina in Zelzate — enjoy a warm atmosphere, extensive drinks, small bites and weekend suggestions.",
};

export default function Home() {
  return (
    <>
      <HomeHeader />
      <HomeMenu />
      <HomeEvents />
      <HomeGallery />
      <Newsletter />
      <Footer />
    </>
  );
}
