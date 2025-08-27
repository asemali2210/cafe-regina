import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination } from 'swiper/modules';

import { forwardRef, useImperativeHandle } from 'react';
import galletyPhoto1 from '../../../../../public/images/gallery-photo (1).png';
import galletyPhoto2 from '../../../../../public/images/gallery-photo (2).png';
import galletyPhoto3 from '../../../../../public/images/gallery-photo (3).png';
import galletyPhoto4 from '../../../../../public/images/gallery-photo (4).png';
import Image from 'next/image';


const GallerySwiper = forwardRef((prop, ref) => {
    let swiperInstance = null;

    useImperativeHandle(ref, () => ({
    nextSlide: () => swiperInstance.slideNext(),
    prevSlide: () => swiperInstance.slidePrev(),
  }));
    return(
        <div>
            <Swiper 
            onSwiper={(swiper) => (swiperInstance = swiper)}
                slidesPerView={4}
                spaceBetween={30}
                modules={[Pagination]}
            >
                 <SwiperSlide>
                    <Image src={galletyPhoto1} alt='gallery-1' className='img-fluid'/>
                 </SwiperSlide>
                 <SwiperSlide>
                    <Image src={galletyPhoto2} alt='gallery-2' className='img-fluid'/>
                 </SwiperSlide>
                 <SwiperSlide>
                    <Image src={galletyPhoto3} alt='gallery-3' className='img-fluid'/>
                 </SwiperSlide>
                 <SwiperSlide>
                    <Image src={galletyPhoto4} alt='gallery-4' className='img-fluid'/>
                 </SwiperSlide>
                 <SwiperSlide>
                    <Image src={galletyPhoto1} alt='gallery-5' className='img-fluid'/>
                 </SwiperSlide>
            </Swiper>
        </div>
    )
})


export default GallerySwiper