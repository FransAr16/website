import React, { useState } from 'react'
import './navbar.css'
import { Link } from 'react-scroll'

// USE SOUND
import useSound from 'use-sound'
import hoverSound from '../../assets/Sound/Valorant - Choose Gaming Sound Effect.mp3'
import activeSound from '../../assets/Sound/Valorant - Gaming Sound Effects click.mp3'

// LOGO
import Logo from '../../assets/Logo/icon-logo.svg'

const Navbar = () => {

    // TOGGLE BTN
    const [active, setActive] = useState("nav__menu")
    const [toggleIcon, setToggleIcon] = useState("nav__toggle")

    const navToggle = () => {
        active === "nav__menu" 
            ? setActive("nav__menu nav__active")
            : setActive("nav__menu")

        // ToggleIcon

        toggleIcon === "nav__toggle" 
            ? setToggleIcon("nav__toggle toggle")
            : setToggleIcon("nav__toggle")
    }

    // const [openMenu, setOpenMenu] = useState(false);

    // const toggleMenu = () => {
    //     setOpenMenu(!openMenu);
    // };

    
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


    // IF CLICK ITEM
    // Function to handle the activation of a link.
    const handleSetActive = (to) => {
        console.log(to);
        };

    function play() {
        new Audio(activeSound).play()
    }

  return (
    <>
    <section className="header" id="header">
        <nav className="nav__container container">
            <a href="#" className="nav__logo">
                <img src={Logo} className='logo' alt="" />
            </a>

            <div className={active} id='nav__menu'>
                <div className="nav__mobile">
                    {/* CLOSE BTN */}
                    {/* <a href="#" className="logo-mobile">
                        <img src={Logo} className='logo' alt="" />
                    </a> */}

                    <div onClick={navToggle} className="nav__close" id="nav-close">
                        <i class="ri-close-line toggle-icon"
                            onClick={play}>
                        </i>
                    </div>
                </div>
                
                <ul className="nav__list">
                    <li className="nav__item">
                        <Link 
                            spy={true}
                            smooth={true}
                            hashSpy={true}
                            offset={-160}
                            duration={0}
                            onSetActive={handleSetActive}
                            onMouseEnter={handleHover}
                            onClick={play}
                            onMouseLeave={handleMouseLeave}
                            to="home" 
                            className="nav__link">
                            Main
                        </Link>
                    </li>
                    
                    <li className="nav__item">
                        <Link 
                            spy={true}
                            smooth={true}
                            hashSpy={true}
                            offset={-80}
                            duration={0}
                            onSetActive={handleSetActive}
                            onMouseEnter={handleHover}
                            onClick={play}
                            onMouseLeave={handleMouseLeave}
                            to="skills" 
                            className="nav__link">
                            About
                        </Link>
                    </li>
                    
                    <li className="nav__item">
                        <Link 
                            spy={true}
                            smooth={true}
                            hashSpy={true}
                            offset={-60}
                            duration={0}
                            onSetActive={handleSetActive}
                            onMouseEnter={handleHover}
                            onClick={play}
                            onMouseLeave={handleMouseLeave}
                            to="project" 
                            className="nav__link">
                            Project
                        </Link>
                    </li>
                    
                    <li className="nav__item">
                        <Link 
                            spy={true}
                            smooth={true}
                            hashSpy={true}
                            offset={-20}
                            duration={0}
                            onSetActive={handleSetActive}
                            onMouseEnter={handleHover}
                            onClick={play}
                            onMouseLeave={handleMouseLeave}
                            to="contact" 
                            className="nav__link">
                            Contact
                        </Link>
                    </li>
                </ul>

                <div className="last__menu">
                    <Link 
                        spy={true}
                        smooth={true}
                        hashSpy={true}
                        offset={0}
                        duration={0}
                        onSetActive={handleSetActive}
                        onMouseEnter={handleHover}
                        onClick={play}
                        onMouseLeave={handleMouseLeave}
                        to="contact" 
                        className="nav__btn">
                        Contact
                    </Link>
                </div>
            </div>

            <div className="right__menu">
                <Link 
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    offset={0}
                    duration={0}
                    onSetActive={handleSetActive}
                    onMouseEnter={handleHover}
                    onClick={play}
                    onMouseLeave={handleMouseLeave}
                    to="contact" 
                    className="nav__btn">
                    Contact
                </Link>
            </div>

            <div onClick={navToggle} className={toggleIcon} id='nav-toggle'>
                <i class="ri-menu-3-line toggle-icon"
                    onClick={play}>
                </i>
            </div>
        </nav>
    </section>
    </>
  )
}

export default Navbar