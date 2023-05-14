import React from 'react'
import Image from 'next/image'

function ProjectCard(props) {
  return (
    <>
    <div className="project-card">
     <div className="project-card-details">
      <div className="project-image">
      <Image
              width={1000}
              height={200}
              src={props.image}
              alt="github"
      />
      </div>
       <div className="project-heading">
       <Image
              width={40}
              height={40}
              src={props.project_logo}
              alt="github"
              style={{borderRadius:"50%"}}
      />
      <h1>{props.project_title}</h1>
       </div>
       <div className="project-details">
        <p style={{margin:"0"}}>{props.paragraph}</p>
        <p style={{marginTop:"0.5rem"}}><b>{props.hashtags}</b></p>
       </div>
     </div>
     <div className="project-card-button">
     <Image
              width={30}
              height={30}
              src="/images/github3.png"
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