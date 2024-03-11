import './footer.css'

const Footer = () => {
  return (
    <section className="footer" id="footer">
        <div className="footer__container">
            <div className="footer__title">O_O</div>

            <ul className="footer__list">
                <li>
                    <a href="#home" className='footer__link'>Home</a>
                </li>
                
                <li>
                    <a href="#project" className='footer__link'>Project</a>
                </li>
                
                <li>
                    <a href="#about" className='footer__link'>About</a>
                </li>
            </ul>

            <div className="footer__social">
                <a href="https://www.facebook.com/" className="footer__social-link" target='_blank'>
                    <i class="ri-facebook-circle-fill"></i>
                </a>

                <a href="https://www.instagram.com/" className="footer__social-link" target='_blank'>
                    <i class="ri-instagram-line"></i>
                </a>

                <a href="https://www.twitter.com/" className="footer__social-link" target='_blank'>
                    <i class="ri-twitter-x-line"></i>
                </a>
            </div>

                <span className="footer__copy">&#169;Copyright 2024 by Frans. All right reserved</span>



            {/* BORDER LINE ======================================================================*/}
            <div className='shapes'>
                <i class="ri-add-line shape add3"></i>
                <i class="ri-add-line shape add4"></i>
            </div>

            {/* NUMBERPAGE */}
            <div className="number__page__home">
                <span className='text__page'>Footer</span>
            </div>
        </div>
    </section>
  )
}

export default Footer