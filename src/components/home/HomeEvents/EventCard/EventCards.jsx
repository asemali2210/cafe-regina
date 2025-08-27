'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import './event-cards.scss';
import eventImg1 from '../../../../../public/images/event (1).png';
import eventImg2 from '../../../../../public/images/event (2).png';
import eventImg3 from '../../../../../public/images/event (3).png';
import eventImg4 from '../../../../../public/images/event (4).png';
import eventImg5 from '../../../../../public/images/event (5).png';
import Image from 'next/image';
import Link from 'next/link';
import { useImperativeHandle,forwardRef  } from 'react';
export  function EventCard({date,title,body,id,img}) {
  return (
    <div className='event__card'>
      <div className='evetn__img'>
        <Image src={img} alt={title} className='img-fluid' />
      </div>
      <p className='event__date'>{date}</p>
      <p className='event__title font-athina'>{title}</p>
      <p className='event__body m-0 text-gray'>{body}</p>
      <Link href={`/events/${id}`} className='card__link font-inter'>READ MORE</Link>
    </div>
  )
}
const SwiperCards = forwardRef((props, ref) => {

   let swiperInstance = null;

    useImperativeHandle(ref, () => ({
    nextSlide: () => swiperInstance.slideNext(),
    prevSlide: () => swiperInstance.slidePrev(),
  }));
  const cardsData = [
    {
      title: 'Lorem ipsum dolor',
      date: '16 Apr 2021',
      body: 'Lorem Ipsum is simply dummy text of the printing.',
      id: 1,
      img: eventImg1
    },
    {
      title: 'Lorem ipsum dolor',
      date: '16 Apr 2021',
      body: 'Lorem Ipsum is simply dummy text of the printing.',
      id: 2,
      img: eventImg2
    },
    {
      title: 'Lorem ipsum dolor',
      date: '16 Apr 2021',
      body: 'Lorem Ipsum is simply dummy text of the printing.',
      id: 3,
      img: eventImg3
    },
    {
      title: 'Lorem ipsum dolor',
      date: '16 Apr 2021',
      body: 'Lorem Ipsum is simply dummy text of the printing.',
      id: 4,
      img: eventImg4
    },
    {
      title: 'Lorem ipsum dolor',
      date: '16 Apr 2021',
      body: 'Lorem Ipsum is simply dummy text of the printing.',
      id: 5,
      img: eventImg5
    },
  ]
  return (
    <>
      <Swiper
        onSwiper={(swiper) => (swiperInstance = swiper)}
        slidesPerView={4.5}
        spaceBetween={30}
        modules={[Pagination]}
        className="mySwiper"
      >
        {
          cardsData.map( cardDate => (
            
        <SwiperSlide>
          <EventCard title={cardDate.title} date={cardDate.date} img={cardDate.img} id={cardDate.id} body={cardDate.body}/>
        </SwiperSlide>
          ))
        }
      </Swiper>
    </>
  );
});



 export default SwiperCards;