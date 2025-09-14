"use client";
import Link from "next/link";
import "./navbar.scss";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logo from "@/public/images/logo.svg";
import { FaBarsProgress } from "react-icons/fa6";
import { useState } from "react";
import { motion } from "framer-motion";
import { navItems } from "@/data/siteData";
const containerDuration = 0.25;
const containerVariants = {
  open: {
    height: "auto",
    paddingTop: 10,
    paddingBottom: 10,

    borderTop: "2px solid #ffffff28",
    marginTop: " 15px",
    transition: {
      duration: containerDuration,
      ease: "easeOut",
      when: "beforeChildren",
    },
  },
  closed: {
    height: 0,
    paddingTop: 0,
    paddingBottom: 0,
    marginTop: "0",

    transition: {
      duration: containerDuration,
      ease: "easeInOut",
      when: "afterChildren",
    },
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
  closed: { y: "100%", opacity: 0, border: "none" },
  open: {
    y: 0,
    opacity: 1,
  },
};

export const MotionLi = ({ content, href, pathName, existPathName }) => {
  return (
    <li className="overflow-hidden">
      <motion.div
        variants={itemVariants}
        transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
        className={`navbar__item ${
          pathName === existPathName ? "--active" : ""
        }`}
      >
        <Link href={href}>{content}</Link>
      </motion.div>
    </li>
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
        <div className="row align-items-lg-center justify-content-between">
          <div className="col-3 col-md-2 ">
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
          <div className="col-9 d-lg-none d-flex justify-content-end">
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
          <div className="col-12 col-lg-10">
            {/* Desktop menu: always visible on md+ */}
            <div className="navbar__items d-none d-lg-block">
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
              className="navbar__items d-lg-none"
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
