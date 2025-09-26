"use client";

import {
  createRef,
  forwardRef,
  useImperativeHandle,
  useMemo,
  useRef,
} from "react";
import Image from "next/image";
import "./home-menu.scss";
import menuDrink from "../../../../public/images/menu-drink.png";
import menuHunger from "../../../../public/images/menu-hunger.png";
import DividerLogo from "../../DividerLogo/DividerLogo";
import SuggestionSection from "../Suggestions/SuggestionSection";
import ArrowLink from "../../LinkArrow/ArrowLink";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

const MenuSection = forwardRef(({ content }, ref) => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const imageRef = useRef(null);

  useImperativeHandle(
    ref,
    () => ({
      root: sectionRef.current,
      title: titleRef.current,
      imageWrapper: imageRef.current,
    }),
    []
  );

  return (
    <div className="row align-items-center mb-5" ref={sectionRef}>
      <div className="col-md-4">
        <div className="menu__main">
          <p className="h2 font-athina menu__title text-white" ref={titleRef}>
            {content.title}
          </p>
          <p className="menu__description text-gray">{content.description}</p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="menu__image" ref={imageRef}>
          <Image
            src={content.image}
            alt={content.imageAlt}
            className="img-fluid _img"
          />
        </div>
      </div>
      <div className="col-md-4">
        <div className="menu__items">
          <ul className="list-unstyled font-athina text-white">
            {content.items.map((item) => (
              <li key={item} className="menu__item">
                {item}
              </li>
            ))}
          </ul>
          <ArrowLink content={content.linkLabel} href={content.linkHref} />
        </div>
      </div>
    </div>
  );
});

MenuSection.displayName = "MenuSection";

const MENU_SECTIONS = [
  {
    id: "drinks",
    title: "Extensive Drinks",
    description:
      "At Cafe Regina you will always find something you would like to drink. We have a very extensive drinks menu, so there is something for everyone. Call, email or simply drop by the cafe for a pleasant time!",
    image: menuDrink,
    imageAlt: "Assorted drinks illustration",
    items: [
      "Bottled Beers",
      "Aperitifs / Digestifs",
      "Draft Beers",
      "Soft Drinks",
    ],
    linkHref: "/drinks",
    linkLabel: "ALL MENU",
  },
  {
    id: "small-hunger",
    title: "Small Hunger",
    description:
      "If you want to eat, you should also come to Cafe Regina! Fancy a little bite? Try the farmer's board, filled with artisan cheeses, cold cuts and crispy freshly baked bread. At the weekend you will find tasty Flemish classics like home-made stew and pork cheeks with abbey beer.",
    image: menuHunger,
    imageAlt: "Small hunger illustration",
    items: ["Refreshments", "Pancakes / Waffles", "Savory", "Little Hunger"],
    linkHref: "/small-hunger",
    linkLabel: "ALL MENU",
  },
];

function HomeMenu() {
  const containerRef = useRef(null);
  const sectionRefs = useMemo(() => MENU_SECTIONS.map(() => createRef()), []);

  useGSAP(
    () => {
      const splits = [];

      sectionRefs.forEach((sectionRef) => {
        const refs = sectionRef.current;
        if (!refs || !refs.root || !refs.title || !refs.imageWrapper) {
          return;
        }

        const split = new SplitText(refs.title, {
          type: "words",
          wordsClass: "menu__title-word",
        });
        splits.push(split);

        const words = split.words ?? [];
        if (!words.length) {
          return;
        }

        // Words float up on enter and roll back on exit so the cue replays whenever the section re-enters view.
        gsap.fromTo(
          words,
          { yPercent: 120, autoAlpha: 0 },
          {
            yPercent: 0,
            autoAlpha: 1,
            ease: "power3.out",
            duration: 0.8,
            stagger: 0.06,
            scrollTrigger: {
              trigger: refs.root,
              start: "top 50%",
              end: "bottom 65%",
              toggleActions: "play reverse play reverse",
            },
          }
        );

        const imageTimeline = gsap.timeline({
          defaults: { ease: "power2.out" },
          scrollTrigger: {
            trigger: refs.root,
            start: "top 85%",
            end: "bottom 60%",
            scrub: true,

            toggleActions: "play reverse play reverse",
          },
        });

        imageTimeline.fromTo(
          refs.imageWrapper,
          {
            yPercent: 20,
            scale: 0.3,
            autoAlpha: 0,
            rotate: 10,
          },
          { yPercent: 0, scale: 1, autoAlpha: 1, rotate: 0 }
        );

        // Subtle follow-through so the menu artwork leans with the scroll.
        imageTimeline.to(refs.imageWrapper, { yPercent: 0, rotate: 0 }, 0.35);
      });
    },
    { scope: containerRef }
  );

  return (
    <div className="home-menu overflow-hidden" ref={containerRef}>
      <div className="container">
        {MENU_SECTIONS.map((section, index) => (
          <MenuSection
            key={section.id}
            content={section}
            ref={sectionRefs[index]}
          />
        ))}
      </div>
      <DividerLogo />
      <SuggestionSection />
    </div>
  );
}

export default HomeMenu;
