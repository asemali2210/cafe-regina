import ArrowLink from '@/components/LinkArrow/ArrowLink'
import './home-suggestions.scss'
import Image from 'next/image'
import sliderImg1 from '../../../../public/images/slider-right (1).png';
import sliderImg2 from '../../../../public/images/slider-right (2).png';
import sliderImg3 from '../../../../public/images/slider-right (3).png';
import sliderImg4 from '../../../../public/images/sllider-left (1).png';
import sliderImg5 from '../../../../public/images/sllider-left (2).png';
import sliderImg6 from '../../../../public/images/sllider-left (3).png';
function HomeSugestion() {
  return (
    <div className='home__suggestions'>
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-8 d-flex align-items-center text-center flex-column'>
                    <div className="suggestions__content d-flex align-items-center justify-content-center text-center flex-column">
                        <p className='heading-xl mb-3'>
                        Weekend Suggestion
                        </p>
                        <p className='text-gray'>
                            During the weekend at Café Regina you can treat yourself to a delicious hot meal that is prepared with a lot of care and love. Our chef gets to work and conjures up traditional Flemish classics that will delight your taste buds. So be sure to drop by or contact this business! 
                        </p>
                        <ArrowLink content='READ MORE' href='/' moreClass="my-5"/>
                    </div>
                </div>
            </div>
        </div>
        <div className='home__suggestions__images'>
            <div className='container-fluid overflow-hidden'>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='images__left d-flex'>
                            <div className='imgae_2'>
                                <Image src={sliderImg2} alt='drink' className='img-fluid _img' width={250}/>
                            </div>
                            <div className='imgae_3'>
                                <Image src={sliderImg3} alt='drink' className='img-fluid _img' width={250}/>
                            </div>
                            <div className='imgae_1'>
                                <Image src={sliderImg1} alt='drink'className='img-fluid _img' width={250}/>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='images__right  d-flex'>
                            <div className='imgae_2'>
                                <Image src={sliderImg4} alt='drink' className='img-fluid _img'  width={250}/>
                            </div>
                            <div className='imgae_1'>
                                <Image src={sliderImg6} alt='drink' className='img-fluid _img'  width={250}/>
                            </div>
                            <div className='imgae_3'>
                                <Image src={sliderImg5} alt='drink' className='img-fluid _img'  width={250}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeSugestion