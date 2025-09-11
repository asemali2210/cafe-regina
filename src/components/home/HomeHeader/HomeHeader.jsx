"use client";
import Image from "next/image";
import Navbar from "../../navbar/Navbar";
import "./home-header.scss";
import imageSlider2 from "@/public/images/header-slider-image-2.png";
import imageSlider1 from "@/public/images/header-slider-image-1.png";
import imageSlider3 from "@/public/images/header-slider-image-3.png";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import ArrowLink from "./../../LinkArrow/ArrowLink";

function HomeHeader() {
  const homeHeader = useRef();
  const headerText1 = useRef();
  const headerText2 = useRef();
  const headerText3 = useRef();
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.to(homeHeader.current, {
      backgroundSize: "cover",
      duration: 3,
    });
    gsap.fromTo(
      headerText1.current,
      { y: "100%" },
      {
        y: 0,
        duration: 3,
      }
    );
    gsap.fromTo(
      headerText2.current,
      { y: "100%" },
      {
        y: 0,
        duration: 1.5,
      }
    );
  }, {});

  return (
    <div className="home-header" ref={homeHeader}>
      <Navbar homepage />
      <div className="header__content font-harmond">
        <div>
          <div className="text__container position-relative overflow-hidden">
            <p className="header__content-text" ref={headerText1}>
              Geniet Van Een
            </p>
          </div>
          <div className="text__container position-relative overflow-hidden">
            <p className="header__content-text" ref={headerText2}>
              Gezellige Tijd Bij
            </p>
          </div>
          <div className="text__container position-relative overflow-hidden">
            <p className="header__content-text" ref={headerText3}>
              Café Regina
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row row-gap-xl-0 row-gap-5">
          <div className="col-xl-2 col-md-6 col-12 d-flex flex-column justify-content-md-between  align-items-center">
            <div className="header__top-text d-flex flex-column align-items-center justify-content-center font-athina">
              <div className="__top ">
                <p className="_name">CAFE </p>
                <span className="_line"></span>
              </div>
              <div className="d-flex _bottom-left">
                <p className="_name">REGINA </p>
                <div className="_adrees">
                  GROTE MARKT 15,
                  <br />
                  <span> 9060 ZELZATE</span>
                </div>
              </div>
            </div>
            <div className=" image__slider-left d-flex justify-content-center ">
              <Image
                src={imageSlider2}
                width={150}
                height={300}
                alt="Café Regina header image (left)"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-xl-7 col-md-12 order-xl-1 order-md-2">
            <div className="image__slider-main d-flex justify-content-center mb-lg-0 mb-md-5">
              <Image
                src={imageSlider1}
                width={380}
                height={200}
                alt="Café Regina header image (center)"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-xl-3 col-md-6 order-xl-2 order-md-1 ">
            <div className="image__slider-right d-flex justify-content-center">
              <Image
                src={imageSlider3}
                width={200}
                height={400}
                alt="Café Regina header image (right)"
                className="img-fluid"
              />
            </div>
            <div className="bottom__content">
              <p className="header__right-text font-inter">
                Café Regina is not only the oldest, but also the nicest café in
                Zelzate and the surrounding area. So be sure to come by and
                enjoy a good time!
              </p>
              <ArrowLink href="/contact" content="Contact" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeHeader;
