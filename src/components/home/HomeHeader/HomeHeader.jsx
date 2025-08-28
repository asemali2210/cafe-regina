'use client';
import Image from 'next/image';
import Navbar from '../../navbar/Navbar';
import './home-header.scss';
import imageSlider2 from '@/../public/images/header-slider-image-2.png';
import imageSlider1 from '@/../public/images/header-slider-image-1.png';
import imageSlider3 from '@/../public/images/header-slider-image-3.png';
import ArrowLink from '../../LinkArrow/ArrowLink';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { SplitText } from "gsap/SplitText";
import { TextPlugin } from "gsap/TextPlugin";
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

function HomeHeader() {
    const homeHeader = useRef();
    const headerText1 = useRef();
    const headerText2 = useRef();
    const headerText3 = useRef();
     useGSAP(() => {
        gsap.to(
        homeHeader.current,
            {
                backgroundSize: "100%",
                duration: 3,
            }
        );
        gsap.fromTo(
        headerText1.current,
            {y: "100%"},
            {
                y: 0,
                duration: 3,
            }
        );
        gsap.fromTo(
        headerText2.current,
            {y: "100%"},
            {
                y: 0,
                duration: 1.5,
            }
        );
  }, {});
  return (
    <div className='home-header' ref={homeHeader}>
      <Navbar homepage/>
      <div className='header__content font-harmond'>
        <div className=''>
            <div className='text__container position-relative overflow-hidden'>
                <p className='header__content-text' ref={headerText1}>Geniet Van Een</p>
            </div>
            <div className='text__container position-relative overflow-hidden'>
                <p className='header__content-text' ref={headerText2}>Gezellige Tijd Bij</p>
            </div>
            <div className='text__container position-relative overflow-hidden'>
                <p className='header__cosntent-text' ref={headerText3}> Café Regina</p>
            </div>
        </div>
      </div>
        <div className='container'>
            <div className='row'>
                <div className='col-md-2 d-flex flex-column justify-content-between'>
                    <div className='header__top-text font-athina'>
                        <div className='__top '>
                            <p className='_name'>CAFE </p><span className='_line'></span>
                        </div>
                        <div className='d-flex _bottom-left'>
                            <p className='_name' >REGINA </p>
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