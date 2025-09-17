"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import "./event-cards.scss";
import Image from "next/image";
import Link from "next/link";
import { useImperativeHandle, forwardRef, useRef } from "react";
import { events } from "./../../../../data/siteData";

export function EventCard({ date, title, body, id, img }) {
  return (
    <div className="event__card d-md-block d-flex justify-content-center text-md-start text-center">
      <div className="evetn__img d-md-block  d-flex justify-content-center">
        <Image
          src={img}
          alt={title}
          className="img-fluid"
          width={250}
          height={150}
        />
      </div>
      <p className="event__date mt-2">{date}</p>
      <p className="event__title font-athina text-truncate">{title}</p>
      <p className="event__body m-0 text-gray text-truncate mb-2">{body}</p>
      <Link href={`/events/${id}`} className="card__link font-inter">
        READ MORE
      </Link>
    </div>
  );
}
const SwiperCards = forwardRef((_, ref) => {
  const swiperInstanceRef = useRef(null);

  useImperativeHandle(ref, () => ({
    nextSlide: () => swiperInstanceRef.current?.slideNext(),
    prevSlide: () => swiperInstanceRef.current?.slidePrev(),
  }));

  return (
    <>
      <Swiper
        onSwiper={(swiper) => {
          swiperInstanceRef.current = swiper;
        }}
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        spaceBetween={30}
        className="mySwiper"
        breakpoints={{
          480: { slidesPerView: 1, spaceBetween: 12 },
          640: { slidesPerView: 2, spaceBetween: 16 },
          768: { slidesPerView: 3, spaceBetween: 20 },
          1024: { slidesPerView: 4, spaceBetween: 24 },
        }}
      >
        {events.map((event) => (
          <SwiperSlide
            key={event.id}
            className="d-md-block d-flex justify-content-center"
          >
            <EventCard
              title={event.title}
              date={event.date}
              img={event.imgSrc}
              id={event.id}
              body={event.description}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
});

export default SwiperCards;

