import React from 'react'
import Image from 'next/image'

function SkillsCard() {
  return (
    <>
    <div className="main-skills-grid">
        <div className="grid-item">
        <Image
              width={100}
              height={100}
              src="/images/snakes.png"
              alt="twitter"
              
        />
        </div>
        <div className="grid-item">
        <Image
              width={100}
              height={100}
              src="/images/html5.png"
              alt="twitter"
              
        />
        </div>
        <div className="grid-item">
        <Image
              width={100}
              height={100}
              src="/images/css3.png"
              alt="twitter"
             
        />
        </div>
        <div className="grid-item">
        <Image
              width={100}
              height={100}
              src="/images/js.png"
              alt="twitter"
              
        />
        </div>

        <div className="grid-item">
        <Image
              width={100}
              height={100}
              src="/images/physics.png"
              alt="twitter"
              
        />
        </div>
        <div className="grid-item">
        <Image
              width={100}
              height={100}
              src="/images/next3.png"
              alt="twitter"
        />
        </div>
        <div className="grid-item">
        <Image
              width={100}
              height={100}
              src="/images/unity.png"
              alt="twitter"

        />
        </div>
        <div className="grid-item">
        <Image
              width={100}
              height={100}
              src="/images/c-sharp.png"
              alt="twitter"
        />
        </div>
        <div className="grid-item">
        <Image
              width={100}
              height={100}
              src="/images/Flutter.png"
              alt="twitter"
        />
        </div>
    </div>
    </>
  )
}

export default SkillsCard