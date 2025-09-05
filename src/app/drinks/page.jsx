import DividerLogo from "@/components/DividerLogo/DividerLogo";
import Newsletter from "@/components/shared/Newsletter/Newsletter";
import PageHeader from "@/components/shared/PageHeader/PageHeader";
import React from "react";
import "@/style/pages/drinks.scss";
import { menuColumns } from "@/data/siteData";

function drinksPage() {
  return (
    <div className="drinks-page bg-dark-1">
      <PageHeader
        title1="View The Extensive"
        title2="Drinks Menu"
        descirptions={
          "Would you like to enjoy an extensive drinks menu in Zelzate and the surrounding area? Then look no further, because Café Regina is the place to be! You will find many different drinks here, so you will certainly find something you will like. So be sure to visit the store or contact us! "
        }
        linkContent="CONTACT US"
        linkHref="/contact"
      />
      {/* Second section: two-column menu */}
      <section className="drinks-menu py-5">
        <div className="container">
          <div className="row justify-content-center column-gap-5">
            {menuColumns.map((col) => (
              <div key={col.heading} className="col-12 col-lg-5 ">
                <div className="drinks-menu__column">
                  <h3 className="drinks-menu__heading tex-white font-athina">
                    {col.heading}
                  </h3>
                  <ul className="drinks-menu__list">
                    {col.items.map((item) => (
                      <li key={item.title} className="drinks-menu__item">
                        <div className="drinks-menu__row">
                          <span className="drinks-menu__title">
                            {item.title}
                          </span>
                          <span className="drinks-menu__dots" />
                          <span className="drinks-menu__price">
                            ${item.price.toFixed(2)}
                          </span>
                        </div>
                        <div className="drinks-menu__meta">{item.type}</div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <DividerLogo />
      <Newsletter />
    </div>
  );
}

export default drinksPage;
