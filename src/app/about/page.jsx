"use client";

import "@/style/pages/about.scss";
import DividerLogo from "@/components/DividerLogo/DividerLogo";
import Newsletter from "@/components/shared/Newsletter/Newsletter";
import PageHeader from "@/components/shared/PageHeader/PageHeader";
import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";
import { useState, useRef, useEffect } from "react";
import { descriptionsData } from "@/data/siteData";
export default function About() {
  const containerRef = useRef(null);
  const [selectedTab, setSelectedTab] = useState(1);
  const [indicatorPos, setIndicatorPos] = useState(null);

  // Keyboard navigation for the year tabs (Left/Right/Home/End/Enter/Space)
  const handleYearKeyDown = (e, id) => {
    const idx = descriptionsData.findIndex((d) => d.id === id);
    const lastIdx = descriptionsData.length - 1;
    let nextIdx = idx;
    switch (e.key) {
      case "ArrowRight":
        nextIdx = idx === lastIdx ? 0 : idx + 1;
        break;
      case "ArrowLeft":
        nextIdx = idx === 0 ? lastIdx : idx - 1;
        break;
      case "Home":
        nextIdx = 0;
        break;
      case "End":
        nextIdx = lastIdx;
        break;
      case "Enter":
      case " ":
        setSelectedTab(id);
        return;
      default:
        return;
    }
    const nextId = descriptionsData[nextIdx].id;
    setSelectedTab(nextId);
    setTimeout(() => {
      const el = containerRef.current?.querySelector(`[data-year="${nextId}"]`);
      el?.focus();
    }, 0);
  };

  // Recalculate indicator position when the selected year changes
  useEffect(() => {
    const activeEl = containerRef.current?.querySelector(
      `[data-year="${selectedTab}"]`
    );
    if (activeEl) {
      const itemLeft = activeEl.offsetLeft;
      const itemWidth = activeEl.getBoundingClientRect().width;
      // Center the 30px-wide arrow under the active year
      setIndicatorPos(itemLeft + itemWidth / 2 - 15);
    }
  }, [selectedTab]);

  // Keep indicator aligned on resize
  useEffect(() => {
    const onResize = () => {
      const activeEl = containerRef.current?.querySelector(
        `[data-year="${selectedTab}"]`
      );
      if (activeEl) {
        const itemLeft = activeEl.offsetLeft;
        const itemWidth = activeEl.getBoundingClientRect().width;
        setIndicatorPos(itemLeft + itemWidth / 2 - 15);
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [selectedTab]);

  return (
    <div className="about-page bg-dark-1">
      <PageHeader
        title1="Know about cafe"
        title2="Regina"
        descirptions="Wilt u genieten van een Weekend Suggestie in Zelzate? Dan bent u bij Café Regina aan het juiste adres! In het weekend bij Café Regina kun je jezelf trakteren op een heerlijke warme maaltijd die met veel zorg en liefde wordt bereid. Kom dus zeker eens langs in de zaak of neem contact op!"
        linkContent="CONTACT US"
        linkHref="/contact"
      />
      <div className="container">
        <div className="about-page__main text-white overflow-hidden">
          {/* Years navigation */}
          <div className="about-timeline__years d-flex flex-column">
            <ul
              className="about-timeline__year-list list-unstyled"
              ref={containerRef}
              role="tablist"
              aria-label="Timeline years"
            >
              {descriptionsData.map((item) => (
                <motion.li
                  key={item.id}
                  initial={false}
                  className={`about-timeline__year ${
                    selectedTab == item.id ? `about-timeline__year--active` : ""
                  }`}
                  data-year={item.id}
                  role="tab"
                  id={`year-tab-${item.id}`}
                  aria-selected={selectedTab === item.id}
                  aria-controls={`year-panel-${item.id}`}
                  tabIndex={selectedTab === item.id ? 0 : -1}
                  onClick={() => setSelectedTab(item.id)}
                  onKeyDown={(e) => handleYearKeyDown(e, item.id)}
                >
                  {item.year}
                </motion.li>
              ))}
              {/* Arrow image indicator under active year */}
              <div className="about-timeline__indicator">
                <motion.img
                  src="./images/about-arrow-up.png"
                  alt="Active year indicator"
                  animate={{ left: indicatorPos }}
                  transition={{ duration: 0.4 }}
                />
              </div>
              {/* Moving indicator under active year */}
            </ul>
          </div>
          {/* Description area for the selected year */}
          <div className="about-timeline__descriptions">
            <AnimatePresence mode="wait">
              <motion.div
                className="about-timeline__body"
                role="tabpanel"
                id={`year-panel-${selectedTab}`}
                aria-labelledby={`year-tab-${selectedTab}`}
                layout
                key={selectedTab ? selectedTab : "e"}
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: "-100%", opacity: 0 }}
                transition={{ duration: 0.7 }}
              >
                <p className="about-timeline__title font-harmond">
                  {descriptionsData[selectedTab - 1].title}
                </p>
                <p className="about-timeline__text">
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
