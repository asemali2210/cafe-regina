"use client";
import Link from "next/link";
import "./navbar.scss";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logo from "@/public/images/logo.svg";
import { FaBarsProgress } from "react-icons/fa6";
import { useState } from "react";
import { motion } from "framer-motion";

const containerDuration = 0.25;
const containerVariants = {
  open: {
    height: "auto",
    paddingTop: 10,
    paddingBottom: 10,
    transition: { duration: containerDuration, ease: "easeOut", when: "beforeChildren" },
  },
  closed: {
    height: 0,
    paddingTop: 0,
    paddingBottom: 0,
    transition: { duration: containerDuration, ease: "easeInOut", when: "afterChildren" },
  },
};
const listVariants = {
  open: {
    transition: { staggerChildren: 0.06 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};
const itemVariants = {
  closed: { y: 12, opacity: 0 },
  open: { y: 0, opacity: 1 },
};

const navItems = [
  { label: "home", href: "/", path: "/" },
  { label: "drinks", href: "/drinks", path: "/drinks" },
  { label: "small hunger", href: "/small-hunger", path: "/small-hunger" },
  { label: "suggestions", href: "/suggestions", path: "/suggestions" },
  { label: "photos", href: "/photos", path: "/photos" },
  { label: "about us", href: "/about", path: "/about" },
  { label: "contact us", href: "/contact", path: "/contact" },
];

export const MotionLi = ({ content, href, pathName, existPathName }) => {
  return (
    <motion.li
      variants={itemVariants}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={`navbar__item ${pathName === existPathName ? "--active" : ""}`}
    >
      <Link href={href}>{content}</Link>
    </motion.li>
  );
};
function Navbar({ homepage }) {
  const [openNav, setOpenNav] = useState(false);
  const pathname = usePathname();
  const toggleNav = () => {
    setOpenNav((v) => !v);
  };

  return (
    <div className={`navbar-main  ${homepage && "--homepage"}`}>
      <div className="container">
        <div className="row align-items-md-center ">
          <div className="col-4 col-md-3">
            <div className="navbar__logo">
              <Link href="/">
                <Image
                  className="img-fluid"
                  src={logo}
                  width={100}
                  height={100}
                  alt="Café Regina logo"
                />
              </Link>
            </div>
          </div>
          <div className="col-8 d-md-none d-flex justify-content-end">
            <button
              className="nav__toggler"
              onClick={toggleNav}
              aria-expanded={openNav}
              aria-controls="mobile-menu"
              aria-label="Toggle navigation"
            >
              <FaBarsProgress />
            </button>
          </div>
          <div className="col-12 col-md-9">
            {/* Desktop menu: always visible on md+ */}
            <div className="navbar__items d-none d-md-block">
              <ul className="navbar__list-items list-unstyled font-inter">
                {navItems.map((item) => (
                  <li
                    key={`desktop-${item.path}`}
                    className={`navbar__item ${
                      pathname === item.path ? "--active" : ""
                    }`}
                  >
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile menu: keep mounted, animate state */}
            <motion.div
              id="mobile-menu"
              className="navbar__items d-md-none"
              variants={containerVariants}
              initial={false}
              animate={openNav ? "open" : "closed"}
              style={{ pointerEvents: openNav ? "auto" : "none" }}
              aria-hidden={!openNav}
            >
              <motion.ul
                className="navbar__list-items list-unstyled font-inter"
                variants={listVariants}
                initial={false}
                animate={openNav ? "open" : "closed"}
              >
                {navItems.map((item) => (
                  <MotionLi
                    key={`mobile-${item.path}`}
                    content={item.label}
                    href={item.href}
                    pathName={pathname}
                    existPathName={item.path}
                  />
                ))}
              </motion.ul>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
