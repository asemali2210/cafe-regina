import Image from "next/image";
import "./home-menu.scss";
import menuDrink from "../../../../public/images/menu-drink.png";
import menuHunger from "../../../../public/images/menu-hunger.png";
import DividerLogo from "../../DividerLogo/DividerLogo";
import HomeSugestion from "../Suggestions/HomeSugestion";
import ArrowLink from "./../../LinkArrow/ArrowLink";

function HomeMenu() {
  return (
    <div className="home-menu">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4">
            <div className="menu__main">
              <p className="h2 font-athina menu__title text-white">
                Extensive Drinks
              </p>
              <p className="meun__description text-gray">
                At Café Regina you will always find something you would like to
                drink. We have a very extensive drinks menu, so there is
                something for everyone. Call, email or simply drop by the café
                for a pleasant time!
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="menu__image">
              <Image
                src={menuDrink}
                alt="Assorted drinks illustration"
                className="img-fluid  _img"
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="menu__items">
              <ul className="list-unstyled font-athina text-white">
                <li className="menu__item">Bottled Beers</li>
                <li className="menu__item">Aperitifs / Digestifs</li>
                <li className="menu__item">Draft Beers</li>
                <li className="menu__item">Soft Drinks</li>
              </ul>
              <ArrowLink content="ALL MENU" href="/drinks" />
            </div>
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col-md-4">
            <div className="menu__main">
              <p className="h2 font-athina menu__title text-white">
                Small Hunger
              </p>
              <p className="meun__description text-gray">
                If you want to eat, you should also come to Café Regina! Fancy a
                little bite? Try the farmer's board, filled with artisan
                cheeses, cold cuts and crispy freshly baked bread. At the
                weekend you will find tasty Flemish classics like home‑made stew
                and pork cheeks with abbey beer.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="menu__image">
              <Image
                src={menuHunger}
                alt="Small hunger illustration"
                className="img-fluid _img"
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="menu__items">
              <ul className="list-unstyled font-athina text-white">
                <li className="menu__item">Refreshments</li>
                <li className="menu__item">Pancakes / Waffles</li>
                <li className="menu__item">Savory</li>
                <li className="menu__item">Little Hunger</li>
              </ul>
              <ArrowLink content="ALL MENU" href="/small-hunger" />
            </div>
          </div>
        </div>
      </div>
      <DividerLogo />
      <HomeSugestion />
    </div>
  );
}

export default HomeMenu;
