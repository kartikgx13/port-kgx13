import React from 'react'

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
    </>
  )
}

export default ProgressCard