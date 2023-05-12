import React from 'react'
import Image from 'next/image'

function SkillsCard() {
  return (
    <>
    <div className="main-skills-card">
        <div className="upper-skills">
        <Image
              width={100}
              height={100}
              src="/images/snakes.png"
              alt="twitter"
              style={{boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px",padding:"5px",borderRadius:"30%"}}
        />
        <Image
              width={100}
              height={100}
              src="/images/html5.png"
              alt="twitter"
              style={{boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px",padding:"5px",borderRadius:"30%"}}
        />
        <Image
              width={100}
              height={100}
              src="/images/css3.png"
              alt="twitter"
              style={{boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px",padding:"5px",borderRadius:"30%"}}
        />
        </div>
        <div className="lower-skills">
        <Image
              width={100}
              height={100}
              src="/images/js.png"
              alt="twitter"
              style={{boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px",padding:"5px",borderRadius:"30%"}}
        />
        <Image
              width={100}
              height={100}
              src="/images/physics.png"
              alt="twitter"
              style={{boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px",padding:"5px",borderRadius:"30%"}}
        />
        <Image
              width={100}
              height={100}
              src="/images/next2.png"
              alt="twitter"
              style={{boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px",padding:"5px",borderRadius:"30%"}}
        />
        </div>
        <div className="lower-skills" >
        <Image
              width={100}
              height={100}
              src="/images/unity.png"
              alt="twitter"
              style={{boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px",padding:"5px",borderRadius:"30%"}}
              
        />
        <Image
              width={100}
              height={100}
              src="/images/c-sharp.png"
              alt="twitter"
              style={{boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px",padding:"5px",borderRadius:"30%"}}
        />
        <Image
              width={100}
              height={100}
              src="/images/Flutter.png"
              alt="twitter"
              style={{boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px",padding:"5px",borderRadius:"30%"}}
        />
        </div>
    </div>
    </>
  )
}

export default SkillsCard