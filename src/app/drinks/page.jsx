import Newsletter from "@/components/shared/Newsletter/Newsletter";
import PageHeader from "@/components/shared/PageHeader/PageHeader";
import React from "react";
import "@/style/pages/drinks.scss";
import { menuColumns } from "@/data/siteData";
import DividerLogo from "@/components/DividerLogo/DividerLogo";

export const metadata = {
  title: "Drinks Menu",
  description:
    "Enjoy an extensive drinks menu in Zelzate at Café Regina. Find something you like and contact us.",
};

function drinksPage() {
  const mid = Math.ceil(menuColumns.length / 2);
  const leftCols = menuColumns.slice(0, mid);
  const rightCols = menuColumns.slice(mid);
  const formatPrice = (n) =>
    new Intl.NumberFormat("nl-BE", {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 2,
    }).format(n);
  return (
    <div className="drinks-page bg-dark-1">
      <PageHeader
        title1="View The Extensive"
        title2="Drinks Menu"
        descirptions={
          "Would you like to enjoy an extensive drinks menu in Zelzate and the surrounding area? Then look no further, because Café Regina is the place to be! You will find many different drinks here, so you will certainly find something you will like. So be sure to visit the store or contact us!"
        }
        linkContent="CONTACT US"
        linkHref="/contact"
      />
      {/* Second section: two-column menu */}
      <section className="drinks-menu py-5">
        <div className="container">
          <div className="row mb-4">
            <div className="col-12 col-lg-9 mx-auto text-center mb-md-5">
              <h2 className="drinks-menu__heading font-harmond text-white">
                Explore Our Drinks
              </h2>
              <p className="text-gray font-inter ">
                During the weekend at Café Regina you can treat yourself to a
                delicious hot meal that is prepared with a lot of care and love.
                Our chef gets to work and conjures up traditional Flemish
                classics that will delight your taste buds. So be sure to drop
                by or contact this business! 
              </p>
            </div>
          </div>
          <div className="row justify-content-center column-gap-5">
            <div className="col-12 col-lg-5">
              {leftCols.map((col) => (
                <div key={col.heading} className="drinks-menu__column">
                  <h3 className="drinks-menu__heading text-white font-athina">
                    {col.heading}
                  </h3>
                  <ul className="drinks-menu__list">
                    {col.items.map((item) => (
                      <li key={item.title} className="drinks-menu__item">
                        <div className="drinks-menu__row">
                          <span className="drinks-menu__title font-harmond">
                            {item.title}
                          </span>
                          <span className="drinks-menu__dots" />
                          <span className="drinks-menu__price font-inter">
                            {formatPrice(item.price)}
                          </span>
                        </div>
                        <div className="drinks-menu__meta font-inter">
                          {item.type}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="col-12 col-lg-5">
              {rightCols.map((col) => (
                <div key={col.heading} className="drinks-menu__column">
                  <h3 className="drinks-menu__heading text-white font-athina">
                    {col.heading}
                  </h3>
                  <ul className="drinks-menu__list">
                    {col.items.map((item) => (
                      <li key={item.title} className="drinks-menu__item">
                        <div className="drinks-menu__row">
                          <span className="drinks-menu__title font-harmond">
                            {item.title}
                          </span>
                          <span className="drinks-menu__dots" />
                          <span className="drinks-menu__price font-inter">
                            {formatPrice(item.price)}
                          </span>
                        </div>
                        <div className="drinks-menu__meta">{item.type}</div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <DividerLogo />
      <Newsletter />
    </div>
  );
}

export default drinksPage;
