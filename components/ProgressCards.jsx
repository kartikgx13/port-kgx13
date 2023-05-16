import React from 'react'
import {CircleProgress} from 'react-gradient-progress'

function ProgressCards() {
  return (
    <>
    <div className="main-progress-container">
        <div className="progress-item">
        <div><CircleProgress percentage={70} strokeWidth={10} width={140} primaryColor={['#e44c24','#f0885e']} secondaryColor="#c7c7c7"/></div>
            <h2>HTML/CSS/JS</h2>
        </div>
        <div className="progress-item">
        <div><CircleProgress percentage={55} strokeWidth={10} width={140} primaryColor={['#314757','#2e6d94']} secondaryColor="#c7c7c7"/></div>
            <h2>Python</h2>
        </div> 
        <div className="progress-item"> 
        <div><CircleProgress percentage={35} strokeWidth={10} width={140} primaryColor={['#349ccc','#fc9c3c']} secondaryColor="#c7c7c7"/></div>
            <h2>Sklearn</h2> 
        </div>
        <div className="progress-item"> 
        <div><CircleProgress percentage={45} strokeWidth={10} width={140} primaryColor={['#00b0e8','#00ebd2']} secondaryColor="#c7c7c7"/></div>
            <h2>React.js</h2> 
        </div>
        <div className="progress-item">
        <div><CircleProgress percentage={40} strokeWidth={10} width={140} primaryColor={['#262626','#555555']} secondaryColor="#c7c7c7"/></div>
            <h2>Next.js</h2> 
        </div> 
        <div className="progress-item">
        <div><CircleProgress percentage={30} strokeWidth={10} width={140} primaryColor={['#e45c2b','#f3bb3b']} secondaryColor="#c7c7c7"/></div>
            <h2>Tensorflow</h2>
        </div>
    </div>
    </>
  )
}

export default ProgressCards