'use client';
import Image from 'next/image';
import arrowLeft from '../../../../public/images/arrow-to-left.svg';
import arrowRight from '../../../../public/images/arrow-to-right.svg';
import { useRef } from 'react';
import GallerySwiper from './GallerySlider/GalleryWiper';
import './home-gallery.scss';
import DividerLogo from '@/components/DividerLogo/DividerLogo';

function HomeGallery() {
    const swiperRef = useRef();
    
  return (
    <div className='home__gallery bg-dark-1 pt-5'>
        <DividerLogo />
        <div className='py-5'>
            <div className='container mt-3'>
                <div className='row'>
                    <div className='col-md-5'>
                        <div className='home__gallery__content mt-4'>
                            <p className='text-white font-harmond h1 text-uppercase'>Photo Gallery</p>
                            <p className='text-gray font-inter'>If you are looking for an authentic café in Zelzate, Café Regina is the right place for you! You can be inspired by the atmospheric photos on this page. This gives you a taste of what you can expect when you visit the café. So be sure to check out these photos! </p>
                            <div className='arrows_ctr d-flex gap-4 mt-4'>
                                <div className='arrow-left' onClick={() => swiperRef.current.nextSlide()}>
                                    <Image src={arrowLeft} alt='arrow' />
                                </div>
                                <div className='arrow-right' onClick={() => swiperRef.current.prevSlide()}>
                                    <Image src={arrowRight} alt='arrow' />
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div className='col-md-7 '>
                        <GallerySwiper ref={swiperRef}/>
                    </div>
                </div>
            </div>
        </div>
        <DividerLogo />
    </div>
  )
}

export default HomeGallery