"use client";
import Link from "next/link";
import "./navbar.scss";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logo from "@/../public/images/logo.svg";
function Navbar({ homepage }) {
  const pathname = usePathname();
  return (
    <div className={`navbar-main  ${homepage && "--homepage"}`}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-6 col-md-3">
            <div className="navbar__logo">
              <Link href="/">
                <Image
                  className="img-fluid"
                  src={logo}
                  width={100}
                  height={100}
                  alt="cafe-regin"
                />
              </Link>
            </div>
          </div>
          <div className="col-md-9">
            <div className="navbar__items">
              <ul className="navbar__list-items list-unstyled">
                <li
                  className={`navbar__item ${
                    pathname === "/" ? `--active` : ``
                  }`}
                >
                  <Link href="/">Home</Link>
                </li>
                <li
                  className={`navbar__item ${
                    pathname === "drinks" ? `--active` : ``
                  }`}
                >
                  <Link href="/drinks">drinks</Link>
                </li>
                <li
                  className={`navbar__item ${
                    pathname === "small-hunger" ? `--active` : ``
                  }`}
                >
                  <Link href="/small-hunger">small hunger</Link>
                </li>
                <li
                  className={`navbar__item ${
                    pathname === "suggestions" ? `--active` : ``
                  }`}
                >
                  <Link href="/suggestions">suggestions</Link>
                </li>
                <li
                  className={`navbar__item ${
                    pathname === "photos" ? `--active` : ``
                  }`}
                >
                  <Link href="/photos">photos</Link>
                </li>
                <li
                  className={`navbar__item ${
                    pathname === "about" ? `--active` : ``
                  }`}
                >
                  <Link href="/about">about us</Link>
                </li>
                <li
                  className={`navbar__item ${
                    pathname === "contact" ? `--active` : ``
                  }`}
                >
                  <Link href="/contact">contact us</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
