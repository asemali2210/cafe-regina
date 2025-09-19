"use client";
import Link from "next/link";
import "./navbar.scss";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logo from "@/public/images/logo.svg";
import { CgMenuRight } from "react-icons/cg";
import { IoNavigate } from "react-icons/io5";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navItems } from "@/data/siteData";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";

export const MotionLi = ({
  content,
  href,
  pathName,
  existPathName,
  itemNum,
}) => {
  return (
    <li className="overflow-hidden">
      <div
        transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
        className={`navbar__item ${
          pathName === existPathName ? "--active" : ""
        }`}
      >
        <Link href={href}>
          <span className="navbar__item__number">({itemNum})</span>
          {content}
          <span className="__nav__icon">
            <IoNavigate />
          </span>
        </Link>
      </div>
    </li>
  );
};

function Navbar({ homepage }) {
  const [openNav, setOpenNav] = useState(false);
  const pathname = usePathname();
  const toggleNav = () => {
    setOpenNav((v) => !v);
  };
  const overlayDuration = 0.4;
  const leftVariants = {
    open: {
      x: 0,
      transition: {
        duration: 0.45,
        ease: "easeOut",
        delay: overlayDuration,
      },
    },
    closed: {
      x: "-100%",
      transition: { duration: 0.7, ease: "easeIn" },
    },
    exit: {
      x: "-100%",
      transition: { duration: 0.7, ease: "easeIn" },
    },
  };
  const rightVariants = {
    open: {
      x: "0%",
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: overlayDuration,
      },
    },
    closed: {
      x: "100%",
      transition: { duration: 0.7, ease: "easeIn" },
    },
    exit: {
      x: "100%",
      transition: { duration: 0.7, ease: "easeIn" },
    },
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
          <div className="col-9  d-flex justify-content-end">
            <button
              className="nav__toggler"
              onClick={toggleNav}
              aria-expanded={openNav}
              aria-controls="mobile-menu"
              aria-label="Toggle navigation"
            >
              <CgMenuRight />
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {openNav ? (
          <div className="navbar__menu overflow-hidden">
            <motion.div
              className="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: overlayDuration }}
              exit={!openNav ? { opacity: 0 } : null}
            ></motion.div>
            <>
              <motion.div
                className="navbar__items"
                aria-hidden={!openNav}
                animate={openNav ? "open" : "closed"}
                initial="closed"
                variants={leftVariants}
                exit="exit"
              >
                <ul className="navbar__list-items list-unstyled font-inter">
                  {navItems.map((item) => (
                    <MotionLi
                      key={`mobile-${item.path}`}
                      content={item.label}
                      href={item.href}
                      pathName={pathname}
                      existPathName={item.path}
                      itemNum={navItems.indexOf(item) + 1}
                    />
                  ))}
                </ul>
              </motion.div>
              <motion.div
                className="navbar__menu__right d-flex align-items-center justify-content-center"
                initial="closed"
                animate={openNav ? "open" : "closed"}
                variants={rightVariants}
                exit="exit"
              >
                <div className="row row-gap-md-5">
                  <div className="col-12 d-flex justify-content-end">
                    <button
                      className="nav__toggler"
                      onClick={toggleNav}
                      aria-expanded={openNav}
                      aria-controls="mobile-menu"
                      aria-label="Toggle navigation"
                    >
                      <CgMenuRight />
                    </button>
                  </div>
                  <div className="col-12 d-md-flex justify-content-center d-none">
                    <div className="navbar__logo">
                      <Link href="/">
                        <Image
                          className="img-fluid"
                          src={logo}
                          width={150}
                          height={100}
                          alt="Café Regina logo"
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="col-6 d-flex justify-content-center">
                    <div className="nav__box__item">
                      <p className="nav__box__item-title font-harmond">
                        Opening Hours
                      </p>
                      <p>
                        Monday–Friday: <br /> 08:00 am – 12:00 am
                      </p>
                      <p>
                        Saturday–Sunday: <br /> 07:00 am – 11:00 pm
                      </p>
                    </div>
                  </div>
                  <div className="col-6 d-flex justify-content-center">
                    <div className="nav__box__item">
                      <p className="nav__box__item-title font-harmond">
                        Contact Us
                      </p>
                      <p>
                        Grote Markt 15 9060 Zelzate <br /> (East Flanders)
                        Belgium{" "}
                      </p>
                      <p>+0468 06 80 91</p>
                      <p>info@caferegina.be</p>
                      <p>VAT BE 0768.703.620</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </>
          </div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export default Navbar;
