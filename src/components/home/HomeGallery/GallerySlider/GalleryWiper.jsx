import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper/modules";

import { forwardRef, useImperativeHandle, useRef } from "react";
import galletyPhoto1 from "../../../../../public/images/gallery-photo (1).png";
import galletyPhoto2 from "../../../../../public/images/gallery-photo (2).png";
import galletyPhoto3 from "../../../../../public/images/gallery-photo (3).png";
import galletyPhoto4 from "../../../../../public/images/gallery-photo (4).png";
import Image from "next/image";

const GallerySwiper = forwardRef((_, ref) => {
  const swiperInstanceRef = useRef(null);

  useImperativeHandle(ref, () => ({
    nextSlide: () => swiperInstanceRef.current?.slideNext(),
    prevSlide: () => swiperInstanceRef.current?.slidePrev(),
  }));
  return (
    <div>
      <Swiper
        onSwiper={(swiper) => {
          swiperInstanceRef.current = swiper;
        }}
        slidesPerView={2}
        spaceBetween={30}
        modules={[Pagination]}
        breakpoints={{
          480: { slidesPerView: 2, spaceBetween: 12 },
          640: { slidesPerView: 2, spaceBetween: 16 },
          768: { slidesPerView: 3, spaceBetween: 20 },
          1024: { slidesPerView: 4, spaceBetween: 24 },
        }}
      >
        <SwiperSlide className="">
          <Image src={galletyPhoto1} alt="gallery-1" className="img-fluid" />
        </SwiperSlide>
        <SwiperSlide className="">
          <Image src={galletyPhoto2} alt="gallery-2" className="img-fluid" />
        </SwiperSlide>
        <SwiperSlide className="">
          <Image src={galletyPhoto3} alt="gallery-3" className="img-fluid" />
        </SwiperSlide>
        <SwiperSlide className="">
          <Image src={galletyPhoto4} alt="gallery-4" className="img-fluid" />
        </SwiperSlide>
        <SwiperSlide className="">
          <Image src={galletyPhoto1} alt="gallery-5" className="img-fluid" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
});

export default GallerySwiper;

