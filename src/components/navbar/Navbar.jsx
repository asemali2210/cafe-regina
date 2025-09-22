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
import {
  itemContentVariants,
  leftVariants,
  lineVariants,
  linkContentVariants,
  listVariants,
  navBoxItemVariants,
  overlayDuration,
  overlayVariants,
  rightLogoVariants,
  rightVariants,
  underlineBoldVariants,
} from "./animationVariants";

// Button that opens and closes the mobile menu.
const NavToggleButton = ({ isExpanded, onClick }) => (
  <button
    className="nav__toggler"
    onClick={onClick}
    aria-expanded={isExpanded}
    aria-controls="mobile-menu"
    aria-label="Toggle navigation"
  >
    <CgMenuRight />
  </button>
);

// Single navigation item that animates into view.
export const MotionLi = ({ content, href, isActive, itemNum, sequenceIndex }) => {
  // Stagger each link so they appear one after another.
  const delay = overlayDuration + sequenceIndex * 0.1;

  return (
    <li className="overflow-hidden">
      <motion.div
        className={`navbar__item${isActive ? " --active" : ""}`}
        variants={itemContentVariants}
        animate="open"
        initial="closed"
        whileHover="hover"
        transition={{
          duration: 0.35,
          ease: "easeOut",
          delay,
          when: "beforeChildren",
        }}
      >
        <Link href={href}>
          <span className="navbar__item__number">({itemNum})</span>
          <motion.span className="link-content" variants={linkContentVariants}>
            {content}
          </motion.span>
          <span className="__nav__icon">
            <IoNavigate />
          </span>
        </Link>
        <motion.span className="underline-think" variants={lineVariants}></motion.span>
        <motion.span className="underline-bold d-inline-block" variants={underlineBoldVariants}></motion.span>
        <motion.div className="item__overlay" variants={overlayVariants}></motion.div>
      </motion.div>
    </li>
  );
};

// Main navbar wrapper that holds desktop and mobile content.
function Navbar({ homepage }) {
  // Track if the mobile menu is open.
  const [openNav, setOpenNav] = useState(false);
  // Current route path from Next.js.
  const pathname = usePathname();
  // Add homepage styling when the navbar sits on the landing page.
  const navbarClasses = homepage ? "navbar-main --homepage" : "navbar-main";

  // Flip the menu visibility when the toggle button is pressed.
  const toggleNav = () => {
    setOpenNav((current) => !current);
  };

  return (
    <div className={navbarClasses}>
      <div className="container">
        <div className="row align-items-lg-center justify-content-between">
          <div className="col-3 col-md-2">
            <div className="navbar__logo">
              <Link href="/">
                <Image
                  className="img-fluid"
                  src={logo}
                  width={100}
                  height={100}
                  alt="Cafe Regina logo"
                />
              </Link>
            </div>
          </div>
          <div className="col-9 d-flex justify-content-end">
            <NavToggleButton onClick={toggleNav} isExpanded={openNav} />
          </div>
        </div>
      </div>

      {/* Animated mobile drawer for small screens. */}
      <AnimatePresence>
        {openNav && (
          <div className="navbar__menu overflow-hidden">
            {/* Dim overlay that sits behind the menu. */}
            <motion.div
              className="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: overlayDuration }}
              exit={{ opacity: 0 }}
            ></motion.div>

            {/* Column with the list of links. */}
            <motion.div
              className="navbar__items"
              aria-hidden={!openNav}
              animate={openNav ? "open" : "closed"}
              initial="closed"
              variants={leftVariants}
              exit="exit"
            >
              <motion.ul id="mobile-menu"
                className="navbar__list-items list-unstyled font-inter"
                variants={listVariants}
              >
                {navItems.map((item, index) => (
                  <MotionLi
                    key={`mobile-${item.path}`}
                    content={item.label}
                    href={item.href}
                    isActive={pathname === item.path}
                    itemNum={index + 1}
                    sequenceIndex={index}
                  />
                ))}
              </motion.ul>
            </motion.div>

            {/* Column with logo and contact info. */}
            <motion.div
              className="navbar__menu__right d-flex align-items-center justify-content-center"
              initial="closed"
              animate={openNav ? "open" : "closed"}
              variants={rightVariants}
              exit="exit"
            >
              <div className="row row-gap-md-5">
                <div className="col-12 d-flex justify-content-end">
                  <NavToggleButton onClick={toggleNav} isExpanded={openNav} />
                </div>
                <div className="col-12 d-md-flex justify-content-center d-none">
                  <motion.div className="navbar__logo" variants={rightLogoVariants}>
                    <Link href="/">
                      <Image
                        className="img-fluid"
                        src={logo}
                        width={150}
                        height={100}
                        alt="Cafe Regina logo"
                      />
                    </Link>
                  </motion.div>
                </div>
                <div className="col-6 d-flex justify-content-center">
                  <motion.div className="nav__box__item" variants={navBoxItemVariants}>
                    <p className="nav__box__item-title font-harmond">Opening Hours</p>
                    <p>
                      Monday-Friday: <br /> 08:00 am - 12:00 am
                    </p>
                    <p>
                      Saturday-Sunday: <br /> 07:00 am - 11:00 pm
                    </p>
                  </motion.div>
                </div>
                <div className="col-6 d-flex justify-content-center">
                  <motion.div className="nav__box__item" variants={navBoxItemVariants}>
                    <p className="nav__box__item-title font-harmond">Contact Us</p>
                    <p>
                      Grote Markt 15 9060 Zelzate <br /> (East Flanders) Belgium{" "}
                    </p>
                    <p>+0468 06 80 91</p>
                    <p>info@caferegina.be</p>
                    <p>VAT BE 0768.703.620</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Navbar;
