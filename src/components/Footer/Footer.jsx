import './footer.scss';
import { FaFacebookF } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import Link from 'next/link';
function Footer() {
  return (
    <footer className="footer__main">
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <div className="footer__col text-center">
                        <p className="text-white h3 font-harmond">Contact Us</p>
                        <p className="text-gray font-inter">Grote Markt 15 9060 Zelzate <br /> (East Flanders) Belgium </p>
                        <p className="text-gray font-inter">+0468 06 80 91</p>
                        <p className="text-gray font-inter">info@caferegina.be</p>
                        <p className="text-gray font-inter">VAT BE 0768.703.620</p>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className='footer__col text-center d-flex justify-content-center flex-column align-items-center'>
                        <p className='font-athina h2 text__logo'>CAFE REGINA</p>
                        <p className='font-inter text-white'>geniet van een gezellige tijd bij café regina</p>
                        <div className='socail__links d-flex aling-items-center gap-2 justify-content-center mt-4 text-white h5'>
                            <Link href='#'><FaFacebookF /></Link>
                            <Link href='#'><RiTwitterXLine /></Link>
                            <Link href='#'><FaInstagram /></Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="footer__col text-center">
                        <p className="text-white h3 font-harmond">opening Hours</p>
                        <p className="text-gray font-inter">Monday-Friday: <br /> 08:00 am -12:00 am</p>
                        <p className="text-gray font-inter">Saturday-Sunday: <br /> 07:00am -11:00 pm</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer