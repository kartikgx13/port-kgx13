import { faBars, faBook, faBookSkull, faBuilding, faBuildingShield, faBullseye, faCircle, faCircleInfo, faCross, faDiagramProject, faGears, faHome, faLaptopCode, faRectangleAd, faRectangleXmark, faScrewdriverWrench, faServer, faTimes, faUserPlus, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { use } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import { useState } from 'react'
import { Link, ScrollLink } from 'react-scroll'

const inter = Inter({ subsets: ['latin'] })

function Navbar(props) {
  const [activeLink, setActiveLink] = useState("");


  //logic to change css of links after click
  const [click,setClick]=useState(false)
  const handleClick = (link) => {
    setActiveLink(link);
    setClick(!click);
  };

  const handleHamLink = ()=>{
    setClick(!click);
  }
  

  return (
    <>
    <section className="nav-header-section">
    <div className="navbar-container">
        <div className="navbar-logo">
        <h2>Portfolio</h2>
        </div>
        <div className="nav-links-container">
          <ul className={click ? "nav-links active" : "nav-links"}>
            <li>
            <Link
            className={activeLink === "home" ? "nav-link-clicked" : ""}
            onClick={() => handleClick("home")} 
             to="home" offset={0} spy={true} smooth={true} duration={500}>
            <FontAwesomeIcon
            icon={faHome}
            style={{width:"20px",paddingRight:"7px"}}
            />Home
            </Link>
            </li>
            <li>
            <Link 
            className={activeLink === "about" ? "nav-link-clicked" : ""}
            onClick={() => handleClick("about")}
             to="about" offset={0} spy={true} smooth={true} duration={500}>
            <FontAwesomeIcon
            icon={faCircleInfo}
            style={{width:"20px",paddingRight:"7px"}}
            />
            About
            </Link>
            </li>
            <li>
            <Link
            className={activeLink === "skill" ? "nav-link-clicked" : ""}
            onClick={() => handleClick("skill")} 
             to="skills" offset={0} spy={true} smooth={true} duration={500}>
            <FontAwesomeIcon
            icon={faScrewdriverWrench}
            style={{width:"20px",paddingRight:"7px"}}
            />
            Skills
            </Link></li>
            <li>
            <Link
            className={activeLink === "education" ? "nav-link-clicked" : ""}
            onClick={() => handleClick("education")} 
             to="education" offset={0} spy={true} smooth={true} duration={500}>
            <FontAwesomeIcon
            icon={faBook}
            style={{width:"20px",paddingRight:"7px"}}
            />
            Education
            </Link></li>
            <li>
            <Link
            className={activeLink === "projects" ? "nav-link-clicked" : ""}
            onClick={() => handleClick("projects")} 
             to="projects" offset={0} spy={true} smooth={true} duration={500}>
            <FontAwesomeIcon
            icon={faGears}
            style={{width:"20px",paddingRight:"7px"}}
            />
            Projects
            </Link>
            </li>
          </ul>
        </div>
        <div className="hamburger-menu" onClick={handleHamLink}>
          {
          click ? (<FontAwesomeIcon
            icon={faXmark}
            style={{width:"1.5rem",height:"1.5rem",color:"white"}}
            />) 
            : (<FontAwesomeIcon
              icon={faBars}
              style={{width:"1.5rem",height:"1.5rem"}}
              />)}
        </div>
    </div>
    </section>
    </>
  )
}

export default Navbar