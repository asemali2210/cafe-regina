"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import arrowLeft from "@/public/images/arrow-to-left.svg";
import arrowRight from "@/public/images/arrow-to-right.svg";
import img1 from "@/public/images/gallery-photo (1).png";
import img2 from "@/public/images/gallery-photo (2).png";
import img3 from "@/public/images/gallery-photo (3).png";
import img4 from "@/public/images/gallery-photo (4).png";
import "./photos-gallery.scss";

// Ten-image set loops across slides to keep the grid balanced.
const images = [img1, img2, img3, img4, img1, img2, img3, img4, img1, img2];
const slidesCount = images.length;

function PhotosGallery() {
  // Track the active slide so controls and indicator stay in sync.
  const [active, setActive] = useState(0);
  const swiperRef = useRef(null);

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  const handleIndicatorClick = (index) => {
    swiperRef.current?.slideTo(index);
    setActive(index);
  };

  return (
    <div className="photos-gallery bg-dark-1 py-5">
      <div className="container">
        <Swiper
          className="photos-gallery__swiper"
          slidesPerView={1}
          spaceBetween={15}
          speed={600}
          onSwiper={(swiperInstance) => {
            swiperRef.current = swiperInstance;
          }}
          onSlideChange={(swiperInstance) => {
            setActive(swiperInstance.activeIndex);
          }}
        >
          {Array.from({ length: slidesCount }).map((_, slideIdx) => (
            <SwiperSlide key={slideIdx}>
              <div className="photos-gallery__grid">
                {images.map((src, idx) => (
                  <div
                    key={`${slideIdx}-${idx}`}
                    className="photos-gallery__item"
                  >
                    <Image
                      src={src}
                      alt={`gallery-${idx + 1}`}
                      className="img-fluid"
                    />
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="photos-gallery__indicator mt-4">
          <button
            className="indicator__arrow __left"
            onClick={handlePrev}
            aria-label="Previous"
          >
            <Image src={arrowLeft} alt="prev" />
          </button>

          <div className="indicator__track">
            <div
              className="indicator__progress"
              style={{
                width:
                  slidesCount > 1
                    ? `${(active / (slidesCount - 1)) * 100}%`
                    : "100%",
              }}
            />
            <ul className="indicator__list list-unstyled">
              {Array.from({ length: slidesCount }).map((_, idx) => (
                <li
                  key={idx}
                  className={`indicator__item ${
                    idx === active ? "--active" : ""
                  }`}
                  onClick={() => handleIndicatorClick(idx)}
                >
                  {(idx + 1).toString().padStart(2, "0")}
                </li>
              ))}
            </ul>
          </div>

          <button
            className="indicator__arrow __right"
            onClick={handleNext}
            aria-label="Next"
          >
            <Image src={arrowRight} alt="next" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default PhotosGallery;


