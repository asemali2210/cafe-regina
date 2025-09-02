import './news-letter.scss';

function Newsletter() {
  return (
    <div className='newsletter py-5'>
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-md-6'>
                    <div className='newsletter__header text-center'>
                        <p className='font-harmond text-white h2 mb-3'>Stay informed</p>
                        <p className='font-inter text-gray'>Stay up to date with everything that happens at Café Regina! This business believes it is important to keep its valued guests informed of news, events and special offers. You can always find all the latest news in the newsletter, so be sure to take a look.</p>
                    </div>
                </div>
                <div className='col-md-8'>
                    <div className='newsletter__form p-5 mt-5  d-flex flex-column justify-content-center align-items-center'>
                        <div className='form__header text-center d-flex flex-column gap-2'>
                            <p className='font-harmond text-white h2'>Newsletter</p>
                            <p className='font-harmond _heading'>Subscribe to Our Newsletter</p>
                            <p className='text-white font-inter'>And never miss latest Updates!</p>
                        </div>
                        <form className='_form mt-5 d-flex align-item-center gap-2 justify-content-center'>
                            <input className='newsletter__input font-inter ' type='email' placeholder='Email Address' />
                            <button className='newssletter__submit font-inter' type='submit' >SUBSCRIBE</button>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Newsletter