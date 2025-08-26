import Image from 'next/image';
import './home-menu.scss';
import menuDrink from '../../../../public/images/menu-drink.png';
import menuHunger from '../../../../public/images/menu-hunger.png';
import ArrowLink from '@/components/LinkArrow/ArrowLink';
import DividerLogo from '@/components/DividerLogo/DividerLogo';
import HomeSugestion from '../Suggestions/HomeSugestion';
function HomeMenu() {
  return (
    <div className='home-menu'>
        <div className='container'>
            <div className='row align-items-center'>
                <div className='col-md-4'>
                    <div className='menu__main'>
                        <p className='h2 font-athina menu__title text-white'>
                            Extensive Drinks
                        </p>
                        <p className='meun__description text-gray'>
                            At Café Regina you will always find something you would like to drink. They have a very extensive drinks menu, so there is something for everyone. So be sure to contact us via telephone number or email address or simply drop by the café for a pleasant time! 
                        </p>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='menu__image'>
                        <Image src={menuDrink} alt='drinks' className='img-fluid  _img' />
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='menu__items'>
                        <ul className='list-unstyled font-athina text-white'>
                            <li className='menu__item'>Beers Bottle</li>
                            <li className='menu__item'>Aperitifs/Degestives</li>
                            <li className='menu__item'>Draft beers</li>
                            <li className='menu__item'>Soft drinks</li>
                        </ul>
                        <ArrowLink content='ALL MENU' href='/' />
                    </div>
                </div>
            </div>
            <div className='row align-items-center'>
                <div className='col-md-4'>
                    <div className='menu__main'>
                        <p className='h2 font-athina menu__title text-white'>
                            Small Hunger
                        </p>
                        <p className='meun__description text-gray'>
                           Also if you want to eat, you should go to Café Regina! For example, you can eat something here if you are feeling a little hungry. There is the farmer's board. The board is filled with a selection of artisan cheeses, cold cuts and crispy freshly baked bread. At the weekend  you will find many tasty Flemish classics here, such as home-made stew and pork cheeks with abbey beer. 
                        </p>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='menu__image'>
                        <Image src={menuHunger} alt='drinks' className='img-fluid _img' />
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='menu__items'>
                        <ul className='list-unstyled font-athina text-white'>
                            <li className='menu__item'>Refreshments</li>
                            <li className='menu__item'>Pancakes / Waffles</li>
                            <li className='menu__item'>Savory </li>
                            <li className='menu__item'>Little Hunger</li>
                        </ul>
                        <ArrowLink content='ALL MENU' href='/' />
                    </div>
                </div>
            </div>
        </div>
        <DividerLogo />
      <HomeSugestion />

    </div>
  )
}

export default HomeMenu