import { faBars, faBuilding, faBuildingShield, faBullseye, faCircle, faCircleInfo, faCross, faDiagramProject, faHome, faLaptopCode, faRectangleAd, faRectangleXmark, faServer, faTimes, faUserPlus, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useRef } from 'react'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

function Navbar() {
  const [click,setClick]=useState(false)
  const handleClick=()=>setClick(!click)

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