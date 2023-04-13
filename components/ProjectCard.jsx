import React from 'react'
import Image from 'next/image'

function ProjectCard() {
  return (
    <>
    <div className="flip-card">
     <div className="flip-card-inner">
       <div className="flip-card-front">
       <Image
              width={300}
              height={300}
              src="/images/about1.jpg"
              alt="my-image"
          />
       </div>
       <div className="flip-card-back">
         <h1>John Doe</h1> 
         <p>Architect & Engineer</p> 
         <p>We love that guy</p>
       </div>
     </div>
   </div>
    </>
  )
}

export default ProjectCard