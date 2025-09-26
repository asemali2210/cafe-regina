"use client";

import Image from "next/image";
import SwiperCards from "./EventCard/EventCards";
import "./home-events.scss";
import arrowLeft from "../../../../public/images/arrow-to-left.svg";
import arrowRight from "../../../../public/images/arrow-to-right.svg";
import { useRef } from "react";
function HomeEvents() {
  // Hook into the swiper instance so the custom arrows can control it.
  const swiperRef = useRef(null);
  return (
    <div className="home__events bg-dark-1 pt-md-0 pt-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 d-flex align-items-center text-center flex-column">
            <div className="events__content d-flex align-items-center justify-content-center text-center flex-column">
              <p className="heading-xl mb-3">Events</p>
              <p className="text-gray p-m-0 p-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type.
              </p>
              <div className="arrows_ctr d-flex gap-4 mt-4">
                <div
                  className="arrow-left"
                  onClick={() => swiperRef.current?.prevSlide()}
                >
                  <Image src={arrowLeft} alt="arrow" width={150} height={150} />
                </div>
                <div
                  className="arrow-right"
                  onClick={() => swiperRef.current?.nextSlide()}
                >
                  <Image
                    src={arrowRight}
                    alt="arrow"
                    width={150}
                    height={150}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="events__cards__container">
              <SwiperCards ref={swiperRef} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeEvents;



