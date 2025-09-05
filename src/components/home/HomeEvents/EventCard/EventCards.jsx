"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "./event-cards.scss";
import Image from "next/image";
import Link from "next/link";
import { useImperativeHandle, forwardRef } from "react";
import { events } from "@/data/siteData";

export function EventCard({ date, title, body, id, img }) {
  return (
    <div className="event__card">
      <div className="evetn__img">
        <Image
          src={img}
          alt={title}
          className="img-fluid"
          width={250}
          height={150}
        />
      </div>
      <p className="event__date">{date}</p>
      <p className="event__title font-athina text-truncate">{title}</p>
      <p className="event__body m-0 text-gray">{body}</p>
      <Link href={`/events/${id}`} className="card__link font-inter">
        READ MORE
      </Link>
    </div>
  );
}
const SwiperCards = forwardRef((props, ref) => {
  let swiperInstance = null;

  useImperativeHandle(ref, () => ({
    nextSlide: () => swiperInstance.slideNext(),
    prevSlide: () => swiperInstance.slidePrev(),
  }));

  return (
    <>
      <Swiper
        onSwiper={(swiper) => (swiperInstance = swiper)}
        slidesPerView={4.5}
        spaceBetween={30}
        modules={[Pagination]}
        className="mySwiper"
      >
        {events.map((event) => (
          <SwiperSlide>
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
