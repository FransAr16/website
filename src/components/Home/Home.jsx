import React, { useState } from 'react'
import './home.css'
import ScrollDown from './ScrollDown'
import BorderLine from './BorderLine'

// LOGO IMAGES
import Profile from '../../assets/Images/profile3.jpg'
import Profile0 from '../../assets/Images/bg-img-0.png'
import Profile1 from '../../assets/Images/bg-img-1.png'
import IconReact from '../../assets/Logo/react.svg'
import IconHtml from '../../assets/Logo/html.png'
import IconCss from '../../assets/Logo/css.png'
import IconJs from '../../assets/Logo/js.png'

// USE SOUND
import useSound from 'use-sound'
import hoverSound from '../../assets/Sound/Valorant - Choose Gaming Sound Effect.mp3'


const Home = () => {

    // HOVER SOUND EFFECT
    const soundUrl = hoverSound;
    const [isButtonHovered, setIsButtonHovered] = useState(false);

    const [playHover] = useSound(soundUrl, { volume: 5 });

    const handleHover = () => {
        if (!isButtonHovered) {
        playHover();
        setIsButtonHovered(true);
        }
    };

    const handleMouseLeave = () => {
        setIsButtonHovered(false);
    };


  return (
    <>
    <section className="home" id="home">
        <div className="home__container ">
            <div className="home__content">
                {/* <i class="ri-double-quotes-l quotes-icon quotes-start"></i> */}
                <h2 className='home__title'>
                    Coding is hard but
                    <span className='dot__point'>
                        <i class="ri-square-fill square-icon"></i>
                        <i class="ri-square-fill square-icon"></i>
                        <i class="ri-square-fill square-icon"></i>
                    </span>
                </h2>
                <h2 className='home__title'>
                    The satisfaction is priceless
                </h2>
                {/* <p className='home__desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quam necessitatibus consequuntur veritatis? Quasi at nostrum incidunt, laboriosam, natus quas exercitationem odit quibusdam vero aliquid totam recusandae nisi. Expedita, non?</p> */}
                {/* <i class="ri-double-quotes-r quotes-icon quotes-end"></i> */}
            </div>

            <div className="home__img">
                <div className='home__images'>
                    {/* <div className="icon-react tech__icon"> */}
                    <img src={IconReact} 
                    className='icon__code icon-reactdesk' 
                    onMouseEnter={handleHover}
                    onMouseLeave={handleMouseLeave}
                    alt="" />
                    {/* </div> */}
                    
                    <div className="boxs__img">
                        <img src={Profile0} className='images__back0' alt="" />
                        <img src={Profile1} className='images__back1' alt="" />
                        <img src={Profile} className='images__img' alt="" />
                    </div>
                </div>

                <div className='boxs__tech'>
                    <div className="tech__icon">
                        <img src={IconReact} 
                        className='icon__code icon-reactmob' 
                        onMouseEnter={handleHover}
                        onMouseLeave={handleMouseLeave}
                        alt="" />
                    </div>

                    <div className="tech__icon">
                        <img src={IconHtml} 
                        className='icon__code' 
                        onMouseEnter={handleHover}
                        onMouseLeave={handleMouseLeave}
                        alt="" />
                    </div>
                    <div className="tech__icon">
                        <img src={IconCss} 
                        className='icon__code' 
                        onMouseEnter={handleHover}
                        onMouseLeave={handleMouseLeave}
                        alt="" />
                    </div>
                    <div className="tech__icon">
                        <img src={IconJs} 
                        className='icon__code' 
                        onMouseEnter={handleHover}
                        onMouseLeave={handleMouseLeave}
                        alt="" />
                    </div>
                </div>
            </div>

            {/* NUMBERPAGE */}
            <div className="number__page__home">
                <span className='text__page'>001</span>
            </div>

            <ScrollDown />
            <BorderLine />
        </div>
    </section>









    </>

  )
}

export default Home