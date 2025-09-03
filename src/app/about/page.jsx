"use client";

import "@/style/pages/about.scss";
import DividerLogo from "@/components/DividerLogo/DividerLogo";
import Newsletter from "@/components/shared/Newsletter/Newsletter";
import PageHeader from "@/components/shared/PageHeader/PageHeader";
import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";
import { useState, useLayoutEffect, useRef, useEffect } from "react";

export default function About() {
  const containerRef = useRef(null);
  const [selectedTab, setSelectedTab] = useState(1);
  const [indicatorPos, setIndicatorPos] = useState(null);

  useEffect(() => {
    const activeEl = containerRef.current.querySelector(
      `[data-year="${selectedTab}"]`
    );
    console.log(activeEl.offsetLeft);
    if (activeEl) {
      const itemLeft = activeEl.offsetLeft;
      const itemWidth = activeEl.getBoundingClientRect().width;
      setIndicatorPos(itemLeft + itemWidth / 2 - 15);
    }
  }, [selectedTab]);

  return (
    <div className="about__page bg-dark-1">
      <PageHeader
        title1="Know about cafe"
        title2="Regina"
        descirptions="Wilt u genieten van een Weekend Suggestie in Zelzate? Dan bent u bij Café Regina aan het juiste adres! In het weekend bij Café Regina kun je jezelf trakteren op een heerlijke warme maaltijd die met veel zorg en liefde wordt bereid. Kom dus zeker eens langs in de zaak of neem contact op!"
        linkContent="CONTACT US"
        linkHref="/contact"
      />
      <div className="container">
        <div className="about__main text-white overflow-hidden">
          <div className="timeline__years d-flex flex-column">
            <ul className="year-items list-unstyled" ref={containerRef}>
              {descriptionsData.map((item) => (
                <motion.li
                  key={item.id}
                  initial={false}
                  className={`year-item ${
                    selectedTab == item.id ? `is-active` : ""
                  }`}
                  data-year={item.id}
                  onClick={() => setSelectedTab(item.id)}
                >
                  {item.year}
                </motion.li>
              ))}
              <div className="arrow__up">
                <motion.img
                  src="./images/about-arrow-up.png"
                  alt="arrow"
                  animate={{
                    left: indicatorPos,
                  }}
                  transition={{ duration: 1 }}
                />
              </div>
            </ul>
          </div>
          <div className="descriptions__container">
            <AnimatePresence mode="wait">
              <motion.div
                className="descrption__body"
                key={selectedTab ? selectedTab : "e"}
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: "-100%", opacity: 0 }}
                transition={{ duration: 0.7 }}
              >
                <p className="timeline__heading font-harmond">
                  {descriptionsData[selectedTab - 1].title}
                </p>
                <p className="timeline__body">
                  {descriptionsData[selectedTab - 1].descripton}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
      <DividerLogo />
      <Newsletter />
    </div>
  );
}

const descriptionsData = [
  {
    id: 1,
    year: 1927,
    title: "1927 – Local Favorite",
    descripton:
      "By 1927, our small family kitchen had grown into a beloved neighborhood spot. The world was going through uncertain times, yet our doors remained open as a place of comfort and stability. Families gathered here not just to eat, but to feel a sense of normalcy and warmth when life outside felt heavy. The menu expanded slightly, adding dishes that blended tradition with simple creativity, always staying true to the flavors people trusted. Wooden benches filled with laughter, conversations, and the comforting sound of clinking plates. Neighbors began calling us their “second home,” a title we carried with pride. In those years, our restaurant became a sanctuary, a place where food nourished the body, and hospitality nourished the soul.",
  },
  {
    id: 2,
    year: 1957,
    title: "1957 – The Golden Era",
    descripton:
      "In 1957, our restaurant entered what many still call “the golden era.” By then, we had become well-known across the city, attracting not only locals but also travelers who had heard about our food. This was the time of true expansion—our dining space grew, our kitchen was upgraded, and our menu blossomed with new flavors while keeping the classics that everyone adored. We introduced signature dishes that became legends in their own right, meals people still remember to this day. The atmosphere buzzed with energy, filled with celebrations, family milestones, and unforgettable evenings. It was more than dining; it was an experience. We were no longer just a restaurant; we were a cornerstone of the community’s cultural and culinary life.",
  },
  {
    id: 3,
    year: 1965,
    title: "1965 – A Modern Touch",
    descripton:
      "By 1965, the world was changing quickly, and we embraced modernity while keeping our roots strong. Our restaurant introduced new cooking methods, state-of-the-art equipment, and a refreshed interior that blended tradition with a contemporary touch. Guests loved the balance of old and new—classic recipes prepared with refined techniques, plated more elegantly, and served in a brighter, more welcoming space. This was also a time when international influences started to inspire our chefs, who began experimenting with global flavors while staying faithful to our identity. Families, professionals, and young dreamers gathered under our roof, making our space lively and diverse. Each plate told a story of evolution, showing that tradition could coexist beautifully with progress, creating timeless experiences for every guest.",
  },
  {
    id: 4,
    year: 1979,
    title: "1979 – A Family Legacy",
    descripton:
      "In 1979, the torch passed to the next generation, and with it came a renewed passion to preserve our legacy while adding new chapters. The children of the founder stepped into leadership with fresh ideas, but with the same dedication to quality and hospitality. They introduced seasonal menus, inspired by fresh local produce, and expanded the range of flavors to meet the tastes of a new era. Yet, despite these changes, the essence of family never faded—guests were still welcomed with warmth, meals were still crafted with love, and traditions remained at the heart of everything. It was during these years that many families began passing down their own tradition of dining with us, making our story inseparable from theirs.",
  },
  {
    id: 5,
    year: 1990,
    title: "1990 – A New Chapter",
    descripton:
      "By 1990, our restaurant had evolved into a gathering place for large groups, celebrations, and cherished moments. Birthdays, anniversaries, and weddings were hosted within our walls, filling the air with joy, music, and clinking glasses. We expanded our dining halls to accommodate more guests, creating spaces that felt both elegant and familiar. The kitchen team grew, introducing more diverse offerings while keeping our signature classics alive. We became a destination not just for meals, but for memories. Our reputation spread beyond the neighborhood, drawing people from across the city who wanted to be part of our story. This was a new chapter where our restaurant transformed from a simple eatery into a cultural landmark, celebrated by generations of loyal guests.",
  },
  {
    id: 6,
    year: 1999,
    title: "1999 – Reaching Beyond",
    descripton:
      "As the century came to a close, 1999 marked a year of recognition and wider influence. Word of mouth had already carried our name across the city, but now we were reaching visitors from different regions, travelers who sought to experience our legacy firsthand. Our menu reflected both heritage and ambition—traditional meals that honored our beginnings, alongside innovative dishes that spoke to a new millennium. The restaurant became a melting pot of cultures, ideas, and celebrations. Our staff grew into a family of passionate professionals, all united by one goal: to make every guest feel at home. In 1999, we weren’t just serving food—we were serving history, experience, and the promise of something timeless for everyone who walked in.",
  },
  {
    id: 7,
    year: 2010,
    title: "2010 – Tradition Meets Innovation",
    descripton:
      "The year 2010 marked a turning point where tradition gracefully met innovation. Technology entered the dining world, and we adapted by offering online reservations, modern kitchen systems, and services that made the experience smoother without losing its warmth. Our chefs embraced creativity, merging classic recipes with modern techniques, presenting plates that were as visually stunning as they were delicious. Guests experienced convenience, but always with the comfort of heritage. Families who had dined with us for decades now brought younger generations, creating beautiful continuity across the years. Our atmosphere grew more dynamic, a blend of nostalgia and excitement for the future. It was proof that a restaurant could honor its roots while confidently stepping into the modern age of dining.",
  },
  {
    id: 8,
    year: 2025,
    title: "2025 – 100 Years of Flavor",
    descripton:
      "Now, in 2025, we proudly celebrate a century of flavor, family, and unforgettable memories. For one hundred years, our restaurant has been more than just a place to eat—it has been a home, a community, and a story shared across generations. We look back with gratitude at the countless meals, the laughter, and the traditions that built our legacy. At the same time, we look forward with excitement, embracing innovation while never forgetting our roots. Every dish we serve today carries the spirit of 1927, the courage of our founders, and the love of everyone who has kept our dream alive. A hundred years later, we remain committed to serving with passion, care, and the promise of another century ahead.",
  },
];
