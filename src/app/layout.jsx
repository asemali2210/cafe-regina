import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/main.scss";
import Footer from "./../components/Footer/Footer";
import InitialLoader from "./../components/shared/Loader/InitialLoader";

const athinaRegular = localFont({
  src: "../../public/fonts/Athina-Regular.otf",
  display: "swap",
});

const HarmondSemiBold = localFont({
  src: "../../public/fonts/Harmond-SemBdItaCond.otf",
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: undefined, // set to your site URL when known
  title: {
    default: "CafAc Regina",
    template: "%s | CafAc Regina",
  },
  description:
    "Authentic cafAc in Zelzate. Drinks, small bites, weekend suggestions, photos and contact information.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${HarmondSemiBold.className} ${geistSans.variable} ${geistMono.variable} ${athinaRegular.className} `}
      >
        <InitialLoader />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
