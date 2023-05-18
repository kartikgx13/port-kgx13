import React from 'react'
import ProgressCard from './ProgressCard'

function ProgressTab() {
  return (
    <>
    <div className="main-progress-container">
        <div className="progress-item">
            <ProgressCard percentage="70" name="HTML/CSS/JS"/>
        </div>
        <div className="progress-item">
            <ProgressCard percentage="70" name="HTML/CSS/JS"/>
        </div>
        <div className="progress-item">
            <ProgressCard percentage="70" name="HTML/CSS/JS"/>
        </div>
        <div className="progress-item">
            <ProgressCard percentage="70" name="HTML/CSS/JS"/>
        </div>
        <div className="progress-item">
            <ProgressCard percentage="70" name="HTML/CSS/JS"/>
        </div>
        <div className="progress-item">
            <ProgressCard percentage="70" name="HTML/CSS/JS"/>
        </div>
    </div>
    </>
  )
}

export default ProgressTab