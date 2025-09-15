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
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function HomeHeader() {
  const homeHeader = useRef();
  const headerText1 = useRef();
  const headerText2 = useRef();
  const headerTextFadeOut = useRef();
  const headerImgSlideBottom = useRef();
  const headerImgSlideTop = useRef();
  const arrowRef = useRef();
  const arrowBlock = useRef();

  useGSAP(
    () => {
      //
      const split = new SplitText(arrowRef.current, {
        type: "lines,words",
        linesClass: "lines",
      });
      // Animate the first two title lines into view
      gsap.fromTo(headerText1.current, { y: "100%" }, { y: 0, duration: 3 });
      gsap.fromTo(headerText2.current, { y: "100%" }, { y: 0, duration: 1.5 });
      gsap.fromTo(
        homeHeader.current,
        { backgroundSize: null },
        {
          filter: "contrast(1.03) brightness(1.04)",
          ease: "none",
          duration: 3,
        }
      );
      // Pinned scroll timeline: fade text + parallax images
      const tlArrow = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: {
          // Pin the whole header section while scrubbing
          trigger: arrowBlock.current,
          start: "+=1000",
          scrub: 1.6,
          toggleActions: "play none none reverse",
          once: false,
        },
      });

      if (split) {
        tlArrow.to(
          split.words,
          {
            xPercent: 0,
            autoAlpha: 1,
            filter: "blur(0px)",
            duration: 0.8,
            stagger: { each: 0.05, from: "start" },
          },
          0
        );
      }
      // Pinned scroll timeline: fade text + parallax images
      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          // Pin the whole header section while scrubbing
          trigger: homeHeader.current,
          start: "top top",
          end: "+=900",
          scrub: 1.6,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // Fade all header text and move side images for subtle parallax
      tl.to(headerTextFadeOut.current, { opacity: 0 }, 0)
        .to(
          headerImgSlideTop.current,
          { yPercent: -12, rotation: -2, scale: 1.06 },
          0
        )
        .to(
          headerImgSlideBottom.current,
          { yPercent: -12, rotation: -2, scale: 1.06 },
          0
        );
    },
    { scope: homeHeader } // keeps selectors scoped & auto-cleans on unmount
  );

  return (
    <div className="home-header" ref={homeHeader}>
      <Navbar homepage />

      <div className="container">
        <div className="row row-gap-xl-0 row-gap-5">
          <div
            className="header__content font-harmond"
            ref={headerTextFadeOut}
            style={{ zIndex: 99 }}
          >
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
                <p className="header__content-text">Café Regina</p>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="header__top-text d-flex flex-column align-items-center  align-items-md-start   justify-content-center  font-athina">
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
          </div>
          <div className="col-12">
            <div className="row align-items-center">
              <div className="col-3 align-self-end">
                <Image
                  src={imageSlider2}
                  ref={headerImgSlideBottom}
                  alt="Café Regina header image (left)"
                  className="img-fluid"
                  quality={100}
                />
              </div>
              <div className="col-6 d-flex justify-content-center">
                <div className="overflow-hidden">
                  <Image
                    src={imageSlider1}
                    alt="Café Regina header image (center)"
                    className="img-fluid w-100"
                    quality={100}
                  />
                </div>
              </div>
              <div className="col-3 align-self-start">
                <Image
                  src={imageSlider3}
                  ref={headerImgSlideTop}
                  alt="Café Regina header image (right)"
                  className="img-fluid"
                  quality={100}
                />
              </div>
            </div>
          </div>
          <div
            className="col-xl-3 col-md-6 order-xl-2 order-md-2 order-2 justify-content-center align-items-center d-flex flex-column "
            ref={arrowBlock}
          >
            <div className="bottom__content">
              <p className="header__right-text font-inter">
                Café Regina is not only the oldest, but also the nicest café in
                Zelzate and the surrounding area. So be sure to come by and
                enjoy a good time!
              </p>
              <div ref={arrowRef}>
                <ArrowLink href="/contact" content="Contact" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeHeader;
