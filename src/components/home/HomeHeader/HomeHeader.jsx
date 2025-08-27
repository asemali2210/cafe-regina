import Image from 'next/image';
import Navbar from '../../navbar/Navbar';
import './home-header.scss';
import imageSlider2 from '@/../public/images/header-slider-image-2.png';
import imageSlider1 from '@/../public/images/header-slider-image-1.png';
import imageSlider3 from '@/../public/images/header-slider-image-3.png';
import Link from 'next/link';
import ArrowLink from '../../LinkArrow/ArrowLink';

function HomeHeader() {
  return (
    <div className='home-header'>
      <Navbar homepage/>
      <div className='header__content font-harmond'>
        <p className='header__content-text'>Geniet Van Een <br /> Gezellige Tijd Bij  <br /> Café Regina</p>
      </div>
        <div className='container'>
            <div className='row'>
                <div className='col-md-2 d-flex flex-column justify-content-between'>
                    <div className='header__top-text font-athina'>
                        <div className='__top '>
                            <p className='_name'>CAFE </p><span className='_line'></span>
                        </div>
                        <div className='d-flex _bottom-left'>
                            <p className='_name'>REGINA </p>
                            <div className='_adrees'>GROTE MARKT 15,<br /><span> 9060 ZELZATE</span></div>
                        </div>
                    </div>
                    <div className=' image__slider-left d-flex justify-content-center '>
                        <Image src={imageSlider2} width={150} height={300} alt='images'  className='img-fluid' />
                    </div>
                </div>
                <div className='col-md-8'>
                    <div className='image__slider-main d-flex justify-content-center'>
                        <Image src={imageSlider1} width={380} height={200} alt='images' className='img-fluid'/>
                    </div>
                </div>
                <div className='col-md-2'>
                    <div className='image__slider-right d-flex justify-content-center'>
                        <Image src={imageSlider3} width={200} height={400} alt='images'  className='img-fluid'/>
                    </div>
                    <div className='bottom__content'>
                        <p className='header__right-text font-inter'>Café Regina is not only the oldest, but also the nicest café in Zelzate and the surrounding area. So be sure to come by and enjoy a good time! </p>
                        <ArrowLink href='/content' content='Contact' />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeHeader