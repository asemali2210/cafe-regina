import Image from 'next/image'
import logo from '../../../public/images/logo.svg';
// Centered logo divider reused between homepage sections.
function DividerLogo() {
  return (
    <div className='divider__logo d-flex align-items-center'>
        <div className='line'></div>
        <div className='logo'>
            <Image src={logo} width={100} height={100} alt='cafe-regina'></Image>
        </div>
        <div className='line'></div>
    </div>
  )
}

export default DividerLogo

