import { faBars, faBuilding, faBuildingShield, faBullseye, faCircle, faCircleInfo, faDiagramProject, faHome, faLaptopCode, faRectangleAd, faRectangleXmark, faServer, faTimes, faUserPlus, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useRef } from 'react'
import { Inter } from 'next/font/google'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

function Navbar() {
  const navref=useRef();
  const showNavbar=()=>{
    navref.current.classList.toggle("responsive-nav");
  }

  return (
    <>
    <section className="nav-header-section">
    <div className="navbar-container">
        <div className="navbar-logo">
        <h2>Portfolio</h2>
        </div>
        <div className="nav-links-container">
          <ul className="nav-links">
            <li>
            <FontAwesomeIcon
            icon={faHome}
            style={{width:"20px",paddingRight:"7px"}}
            />Home
            </li>
            <li>
            <FontAwesomeIcon
            icon={faCircleInfo}
            style={{width:"20px",paddingRight:"7px"}}
            />
            About</li>
            <li>
            <FontAwesomeIcon
            icon={faBullseye}
            style={{width:"20px",paddingRight:"7px"}}
            />
            Skills</li>
            <li>
            <FontAwesomeIcon
            icon={faLaptopCode}
            style={{width:"20px",paddingRight:"7px"}}
            />
            Work Experience</li>
            <li>
            <FontAwesomeIcon
            icon={faDiagramProject}
            style={{width:"20px",paddingRight:"7px"}}
            />
            Projects</li>
            <li>
            <FontAwesomeIcon
            icon={faUserPlus}
            style={{width:"20px",paddingRight:"7px"}}
            />Connect</li>
          </ul>
        </div>
    </div>
    </section>
    </>
  )
}

export default Navbar