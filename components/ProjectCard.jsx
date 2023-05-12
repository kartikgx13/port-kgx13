import React from 'react'
import Image from 'next/image'

function ProjectCard() {
  return (
    <>
    <div className="project-card">
     <div className="project-card-details">
      <div className="project-image">
      <Image
              width={1000}
              height={200}
              src="/images/snake-frenzy.jpg"
              alt="github"
      />
      </div>
       <div className="project-heading">
       <Image
              width={40}
              height={40}
              src="/images/snake-logo-trim.jpg"
              alt="github"
              style={{borderRadius:"50%"}}
      />
      <h1>Snake Frenzy</h1>
       </div>
       <div className="project-details">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam labore illo error velit temporibus sapiente doloremque cum suscipit culpa, consequuntur quasi asperiores iste reprehenderit iure ipsam. Voluptatibus eius dolorem quibusdam?</p>
        <p><b>#game #unity #C #Mathgames</b></p>
       </div>
     </div>
     <div className="project-card-button">
     <Image
              width={20}
              height={20}
              src="/images/github.png"
              alt="github"
              style={{borderRadius:"50%"}}

      />
      Github Link 
     </div>
   </div>
    </>
  )
}

export default ProjectCard