import React from 'react'

function HorizontalProgress() {
  return (
    <>
      <div className="wrapper">
        <div className="skill">
          <p>45%</p>
            <div className='skill-bar skill2' style={{backgroundImage:"linear-gradient(to right,#00ebd3,#00b1e8)",backgroundRepeat:"no-repeat",borderRadius:"0.5rem"}}>
             <span className='skill-count2'>React</span>
            </div>
        </div>
        <div className="skill">
       <p>35%</p>
            <div className='skill-bar skill3' style={{backgroundImage:"linear-gradient(to right,#555555,#262626)",backgroundRepeat:"no-repeat",borderRadius:"0.5rem"}}>
             <span className='skill-count3'>Next.js</span>
            </div>
        </div>
        <div className="skill">
       <p>55%</p>
            <div className='skill-bar skill4' style={{backgroundImage:"linear-gradient(to right,#324a5e,#2b9ed8)",backgroundRepeat:"no-repeat",borderRadius:"0.5rem"}}>
             <span className='skill-count4'>Python</span>
            </div>
        </div>
        <div className="skill">
        <p>70%</p>
            <div className='skill-bar skill1' style={{backgroundImage:"linear-gradient(to right,#f36324,#e44c24)",backgroundRepeat:"no-repeat",borderRadius:"0.5rem"}}>
             <span className='skill-count1'>HTML/CSS/JS</span>
            </div>
        </div>
        <div className="skill">
       <p>30%</p>
            <div className='skill-bar skill5' style={{backgroundImage:"linear-gradient(to right,#f89838,#349ccc)",backgroundRepeat:"no-repeat",borderRadius:"0.5rem"}}>
             <span className='skill-count5'>Sklearn</span>
            </div>
        </div>
        <div className="skill">
           <p>25%
           </p>
            <div className='skill-bar skill6' style={{backgroundImage:"linear-gradient(to right,#f3bb3b,#e45c2b)",backgroundRepeat:"no-repeat",borderRadius:"0.5rem"}}>
             <span className='skill-count6'>Tensorflow</span>
            </div>
        </div>
      </div>
    </>
  )
}

export default HorizontalProgress