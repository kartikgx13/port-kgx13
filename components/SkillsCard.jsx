import React from 'react'
import Image from 'next/image'

function SkillsCard() {
  return (
    <>
    <div className="main-skills-grid">
        <div className="grid-item">
        <Image
              width={70}
              height={70}
              src="/images/snakes.png"
              alt="twitter"
              
        />
        </div>
        <div className="grid-item">
        <Image
              width={80}
              height={90}
              src="/images/html5.png"
              alt="twitter"
              
        />
        </div>
        <div className="grid-item">
        <Image
              width={80}
              height={90}
              src="/images/css3.png"
              alt="twitter"
             
        />
        </div>
        <div className="grid-item">
        <Image
              width={80}
              height={90}
              src="/images/js.png"
              alt="twitter"
              
        />
        </div>

        <div className="grid-item">
        <Image
              width={80}
              height={90}
              src="/images/physics.png"
              alt="twitter"
              
        />
        </div>
        <div className="grid-item">
        <Image
              width={80}
              height={90}
              src="/images/next3.png"
              alt="twitter"
        />
        </div>
        <div className="grid-item">
        <Image
              width={80}
              height={90}
              src="/images/mysql.png"
              alt="twitter"

        />
        </div>
        {/*<div className="grid-item">
        <Image
              width={80}
              height={90}
              src="/images/excel.png"
              alt="twitter"
        />
        </div>
        <div className="grid-item">
        <Image
              width={80}
              height={90}
              src="/images/powerbi.png"
              alt="twitter"
        />
  </div>*/}
    </div>
    </>
  )
}

export default SkillsCard