import React from 'react'
import Image from 'next/image'

function SkillsCard() {
  return (
    <>
    <div className="main-skills-card">
        <div className="upper-skills">
        <Image
              width={125}
              height={125}
              src="/images/snakes.png"
              alt="twitter"
              style={{boxShadow:"rgb(38, 57, 77) 0px 20px 30px -10px",padding:"5px",borderRadius:"30%"}}
        />
        <Image
              width={125}
              height={125}
              src="/images/html5.png"
              alt="twitter"
              style={{boxShadow:"rgb(38, 57, 77) 0px 20px 30px -10px",padding:"5px",borderRadius:"30%"}}
        />
        <Image
              width={125}
              height={125}
              src="/images/css3.png"
              alt="twitter"
              style={{boxShadow:"rgb(38, 57, 77) 0px 20px 30px -10px",padding:"5px",borderRadius:"30%"}}
        />
        </div>
        <div className="lower-skills">
        <Image
              width={125}
              height={125}
              src="/images/js.png"
              alt="twitter"
              style={{boxShadow:"rgb(38, 57, 77) 0px 20px 30px -10px",padding:"5px",borderRadius:"30%"}}
        />
        <Image
              width={125}
              height={125}
              src="/images/physics.png"
              alt="twitter"
              style={{boxShadow:"rgb(38, 57, 77) 0px 20px 30px -10px",padding:"5px",borderRadius:"30%"}}
        />
        <Image
              width={125}
              height={125}
              src="/images/next2.png"
              alt="twitter"
              style={{boxShadow:"rgb(38, 57, 77) 0px 20px 30px -10px",padding:"5px",borderRadius:"30%"}}
        />
        </div>
        <div className="lower-skills" >
        <Image
              width={125}
              height={125}
              src="/images/unity.png"
              alt="twitter"
              style={{boxShadow:"rgb(38, 57, 77) 0px 20px 30px -10px",padding:"5px",borderRadius:"30%"}}
              
        />
        <Image
              width={125}
              height={125}
              src="/images/c-sharp.png"
              alt="twitter"
              style={{boxShadow:"rgb(38, 57, 77) 0px 20px 30px -10px",padding:"5px",borderRadius:"30%"}}
        />
        <Image
              width={125}
              height={125}
              src="/images/Flutter.png"
              alt="twitter"
              style={{boxShadow:"rgb(38, 57, 77) 0px 20px 30px -10px",padding:"5px",borderRadius:"30%"}}
        />
        </div>
    </div>
    </>
  )
}

export default SkillsCard