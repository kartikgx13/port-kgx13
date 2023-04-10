import { faBars, faBuilding, faBuildingShield, faBullseye, faCircle, faCircleInfo, faCross, faDiagramProject, faHome, faLaptopCode, faRectangleAd, faRectangleXmark, faServer, faTimes, faUserPlus, faXmark } from '@fortawesome/free-solid-svg-icons'
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
  const [click,setClick]=useState(false)
  const handleClick=()=>setClick(!click)

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 700) {
        setNavbarBackground('#F8F8FF') // change to the desired background color
        setNavShadow("rgba(100, 100, 111, 0.2) 0px 7px 29px 0px")

      } else {
        setNavbarBackground("transparent")
        setNavShadow("none")
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
        <h2>Portfolio</h2>
        </div>
        <div className="nav-links-container">
          <ul className={click ? "nav-links active" : "nav-links"}>
            <li>
            <Link to="home" offset={0} spy={true} smooth={true} duration={500}>
            <FontAwesomeIcon
            icon={faHome}
            style={{width:"20px",paddingRight:"7px"}}
            />Home
            </Link>
            </li>
            <li>
            <Link to="about" offset={0} spy={true} smooth={true} duration={500}>
            <FontAwesomeIcon
            icon={faCircleInfo}
            style={{width:"20px",paddingRight:"7px"}}
            />
            About
            </Link>
            </li>
            <li>
            <Link to="skills" offset={0} spy={true} smooth={true} duration={500}>
            <FontAwesomeIcon
            icon={faBullseye}
            style={{width:"20px",paddingRight:"7px"}}
            />
            Skills
            </Link></li>
            <li>
            <Link to="#" offset={0} spy={true} smooth={true} duration={500}>
            <FontAwesomeIcon
            icon={faLaptopCode}
            style={{width:"20px",paddingRight:"7px"}}
            />
            Work Experience
            </Link></li>
            <li>
            <Link to="#" offset={0} spy={true} smooth={true} duration={500}>
            <FontAwesomeIcon
            icon={faDiagramProject}
            style={{width:"20px",paddingRight:"7px"}}
            />
            Projects
            </Link></li>
            <li>
            <Link to="#" offset={0} spy={true} smooth={true} duration={500}>
            <FontAwesomeIcon
            icon={faUserPlus}
            style={{width:"20px",paddingRight:"7px"}}
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
              style={{width:"1.5rem",height:"1.5rem",color:"rgb(27, 27, 27)"}}
              />)}
        </div>
    </div>
    </section>
    </>
  )
}

export default Navbar