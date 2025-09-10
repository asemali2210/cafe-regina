'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import arrowLeft from '@/public/images/arrow-to-left.svg';
import arrowRight from '@/public/images/arrow-to-right.svg';
import img1 from '@/public/images/gallery-photo (1).png';
import img2 from '@/public/images/gallery-photo (2).png';
import img3 from '@/public/images/gallery-photo (3).png';
import img4 from '@/public/images/gallery-photo (4).png';
import './photos-gallery.scss';

const images = [img1, img2, img3, img4, img1, img2, img3, img4, img1, img2];

function PhotosGallery() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((v) => (v === 0 ? 0 : v - 1));
  const next = () => setActive((v) => (v === images.length - 1 ? v : v + 1));

  return (
    <div className="photos-gallery bg-dark-1 py-5">
      <div className="container">
        {/* Grid: 2 rows x 5 columns */}
        <div className="photos-gallery__grid">
          {images.map((src, idx) => (
            <div key={idx} className="photos-gallery__item">
              <Image src={src} alt={`gallery-${idx + 1}`} className="img-fluid" />
            </div>
          ))}
        </div>

        {/* Indicator row */}
        <div className="photos-gallery__indicator mt-4">
          <button className="indicator__arrow" onClick={prev} aria-label="Previous">
            <Image src={arrowLeft} alt="prev" />
          </button>

          <div className="indicator__track">
            <div className="indicator__progress" style={{ width: `${(active / (images.length - 1)) * 100}%` }} />
            <ul className="indicator__list list-unstyled">
              {images.map((_, i) => (
                <li
                  key={i}
                  className={`indicator__item ${i === active ? '--active' : ''}`}
                  onClick={() => setActive(i)}
                >
                  {(i + 1).toString().padStart(2, '0')}
                </li>
              ))}
            </ul>
          </div>

          <button className="indicator__arrow" onClick={next} aria-label="Next">
            <Image src={arrowRight} alt="next" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default PhotosGallery;
