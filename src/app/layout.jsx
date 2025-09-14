import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/main.scss";
import Footer from "./../components/Footer/Footer";

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
    default: "Café Regina",
    template: "%s | Café Regina",
  },
  description:
    "Authentic café in Zelzate. Drinks, small bites, weekend suggestions, photos and contact information.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${HarmondSemiBold.className} ${geistSans.variable} ${geistMono.variable} ${athinaRegular.className} `}
      >
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
