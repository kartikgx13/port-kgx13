import { faBars, faBook, faBookSkull, faBuilding, faBuildingShield, faBullseye, faCircle, faCircleInfo, faCross, faDiagramProject, faGears, faHome, faLaptopCode, faRectangleAd, faRectangleXmark, faScrewdriverWrench, faServer, faTimes, faUserPlus, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import { useState } from 'react'
import { Link, ScrollLink } from 'react-scroll'

const inter = Inter({ subsets: ['latin'] })

function Navbar(props) {
  const [navbarBackground, setNavbarBackground] = useState("transparent")
  const [navbarShadow, setNavShadow] = useState("transparent")
  const [navlink, setNavLink] = useState("black")
  const [click,setClick]=useState(false)
  const handleClick=()=>setClick(!click)

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 700) {
        setNavbarBackground('#394867') // change to the desired background color
        setNavShadow("rgba(100, 100, 111, 0.2) 0px 7px 29px 0px")
        setNavLink("white")

      } else {
        setNavbarBackground("transparent")
        setNavShadow("none")
        setNavLink("black")
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
    <section className="nav-header-section">
    <div className="navbar-container" style={{ backgroundColor: navbarBackground,boxShadow:navbarShadow }}>
        <div className="navbar-logo">
        <h2 style={{color:navlink}}>Portfolio</h2>
        </div>
        <div className="nav-links-container">
          <ul className={click ? "nav-links active" : "nav-links"}>
            <li>
            <Link  style={{color:navlink}} to="home" offset={0} spy={true} smooth={true} duration={500}>
            <FontAwesomeIcon
            icon={faHome}
            style={{width:"20px",paddingRight:"7px",color:navlink}}
            />Home
            </Link>
            </li>
            <li>
            <Link  style={{color:navlink}} to="about" offset={0} spy={true} smooth={true} duration={500}>
            <FontAwesomeIcon
            icon={faCircleInfo}
            style={{width:"20px",paddingRight:"7px",color:navlink}}
            />
            About
            </Link>
            </li>
            <li>
            <Link  style={{color:navlink}} to="skills" offset={0} spy={true} smooth={true} duration={500}>
            <FontAwesomeIcon
            icon={faScrewdriverWrench}
            style={{width:"20px",paddingRight:"7px",color:navlink}}
            />
            Skills
            </Link></li>
            <li>
            <Link  style={{color:navlink}} to="#" offset={0} spy={true} smooth={true} duration={500}>
            <FontAwesomeIcon
            icon={faBook}
            style={{width:"20px",paddingRight:"7px",color:navlink}}
            />
            Education
            </Link></li>
            <li>
            <Link  style={{color:navlink}} to="projects" offset={0} spy={true} smooth={true} duration={500}>
            <FontAwesomeIcon
            icon={faGears}
            style={{width:"20px",paddingRight:"7px",color:navlink}}
            />
            Projects
            </Link></li>
            <li style={{color:navlink}}>
            <Link  style={{color:navlink}} to="#" offset={0} spy={true} smooth={true} duration={500}>
            <FontAwesomeIcon
            icon={faUserPlus}
            style={{width:"20px",paddingRight:"7px",color:navlink}}
            />
            Connect
            </Link>
            </li>
          </ul>
        </div>
        <div className="hamburger-menu" onClick={handleClick}>
          {
          click ? (<FontAwesomeIcon
            icon={faXmark}
            style={{width:"1.5rem",height:"1.5rem",color:"white"}}
            />) 
            : (<FontAwesomeIcon
              icon={faBars}
              style={{width:"1.5rem",height:"1.5rem",color:navlink}}
              />)}
        </div>
    </div>
    </section>
    </>
  )
}

export default Navbar