import DividerLogo from "@/components/DividerLogo/DividerLogo";
import Newsletter from "@/components/shared/newsletter/Newsletter";
import PageHeader from "@/components/shared/PageHeader/PageHeader";
import "@/style/pages/drinks.scss";
import { smallHungerColumns } from "@/data/siteData";

function SmallHungerPage() {
  // Format euro prices before rendering the menu.
  const formatPrice = (n) =>
    new Intl.NumberFormat("nl-BE", {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 2,
    }).format(n);
  return (
    <div className="drinks-page bg-dark-1">
      <PageHeader
        title1="Small Hunger?"
        title2="Drop By!"
        descirptions={
          "Are you looking for a cozy café in Zelzate ? Then look no further, because Café Regina is the right place for you! You can of course drink a lot of different things here, but if you want to eat something small, you are more than welcome here. You can always come here if you are hungry!"
        }
        linkContent="contact us"
        linkHref="/contact"
      />

      {/* Section: Menu intro + two-column list */}
      <section className="drinks-menu py-5">
        <div className="container">
          <div className="row mb-4">
            <div className="col-12 col-lg-9 mx-auto text-center mb-md-5">
              <h2 className="drinks-menu__heading font-harmond text-white">
                Delicious Options
              </h2>
              <p className="text-gray font-inter">
                At Café Regina you will find plenty of delicious options. This
                way you can satisfy your tasty cravings without it being too
                heavy on the stomach. For example, you can opt for the farm
                plank. The board is filled with a selection of artisan cheeses,
                cold cuts and crispy freshly baked bread.
              </p>
            </div>
          </div>
          <div className="row justify-content-center column-gap-5">
            {smallHungerColumns.map((col) => (
              <div key={col.heading} className="col-12 col-lg-5 ">
                <div className="drinks-menu__column">
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

export default SmallHungerPage;



