import React from 'react'
import Image from 'next/image'

function SkillsCard() {
  return (
    <>
    <div className="main-skills-card">
        <div className="upper-skills">
        <Image
              width={150}
              height={150}
              src="/images/snakes.png"
              alt="twitter"
        />
        <Image
              width={150}
              height={150}
              src="/images/html5.png"
              alt="twitter"
        />
        <Image
              width={150}
              height={150}
              src="/images/css3.png"
              alt="twitter"
        />
        </div>
        <div className="lower-skills">
        <Image
              width={150}
              height={150}
              src="/images/js.png"
              alt="twitter"
        />
        <Image
              width={150}
              height={150}
              src="/images/physics.png"
              alt="twitter"
        />
        <Image
              width={150}
              height={150}
              src="/images/next2.png"
              alt="twitter"
        />
        </div>
    </div>
    </>
  )
}

export default SkillsCard