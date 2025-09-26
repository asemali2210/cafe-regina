import DividerLogo from "@/components/DividerLogo/DividerLogo";
import Newsletter from "@/components/shared/newsletter/Newsletter";
import PageHeader from "@/components/shared/PageHeader/PageHeader";
import Link from "next/link";
import "@/style/pages/drinks.scss";
import { suggestionsItems } from "@/data/siteData";

function SuggestionsPage() {
  return (
    <div className="drinks-page bg-dark-1">
      <PageHeader
        title1="Geniet Van De"
        title2="Suggesties!"
        descirptions={
          "Wilt u genieten van een Weekend Suggestie in Zelzate? Dan bent u bij Café Regina aan het juiste adres! In het weekend bij Café Regina kun je jezelf trakteren op een heerlijke warme maaltijd die met veel zorg en liefde wordt bereid. Kom dus zeker eens langs in de zaak of neem contact op!"
        }
        linkContent="CONTACT US"
        linkHref="/contact"
      />

      {/* Single-column menu section */}
      <section className="drinks-menu py-5">
        <div className="container">
          <div className="row mb-4">
            <div className="col-12 col-lg-10 mx-auto text-center mb-md-5">
              <h2 className="drinks-menu__heading font-athina text-white">
                Vlaamse Klassiekers
              </h2>
              <p className="text-gray font-inter">
                Er zijn heel wat verschillende suggesties waar u in het weekend
                van kan genieten bij deze zaak. Zo zijn er bijvoorbeeld de
                traditionele Vlaamse klassiekers die door de chef-kok op tafel
                getoverd worden. Zo kan u genieten van huisbereid stoofvlees,
                maar ook van varkenswangetjes met abdijbier. Een andere optie is
                dan weer konijn op grootmoeders wijze.
              </p>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-12 col-lg-8">
              <div className="drinks-menu__column">
                <ul className="drinks-menu__list">
                  {suggestionsItems.map((item) => (
                    <li key={item.title} className="drinks-menu__item">
                      <div className="drinks-menu__row">
                        <span className="drinks-menu__title font-harmond">
                          {item.title}
                        </span>
                        <span className="drinks-menu__dots" />
                        <Link
                          href="/contact"
                          className="drinks-menu__price font-inter text-uppercase"
                        >
                          view
                        </Link>
                      </div>
                      <div className="drinks-menu__meta font-inter">
                        {item.type}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DividerLogo />
      <Newsletter />
    </div>
  );
}

export default SuggestionsPage;


