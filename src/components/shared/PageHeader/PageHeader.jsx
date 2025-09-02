import ArrowLink from '@/components/LinkArrow/ArrowLink'
import React from 'react'
import './page-header.scss';
import Navbar from '@/components/navbar/Navbar';
function PageHeader({title1,title2,descirptions,linkHref, linkContent}) {
  return (
    <header className="about__header">
        <Navbar />
        <div className='container'>
            <p className="header__title font-harmond text-white">{title1}</p>
            <div className="header__bottom mb-4 text-white d-flex align-items-center">
                <p className="header__title _title-2 font-harmond text-white">{title2}</p>
                <p className='header__despription font-inter text-gray'>{descirptions}</p>
            </div>
            <div className='d-flex'>
            <ArrowLink href={linkHref} content={linkContent} />
            </div>
        </div>
    </header>
  )
}

export default PageHeader