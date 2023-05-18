import React from 'react'
<<<<<<< HEAD
import GradientCircleProgressbar from './ProgressCode'

function ProgressCard() {
  return (
    <>
    <GradientCircleProgressbar percentage={50}/>
=======

function ProgressCard(props) {
  return (
    <>
    <div class="box">
      <div class="percent">
        <svg>
          <circle cx="50" cy="50" r="50"></circle>
          <circle cx="50" cy="50" r="50"></circle>
        </svg>
        <div class="num">
          <h2>{props.percentage}<span>%</span></h2>
        </div>
      </div>
      <h2 class="text">{props.name}</h2>
   </div>
>>>>>>> a0b9e47d18cb81fb4623f5db92f79c46cdd5ae65
    </>
  )
}

export default ProgressCard