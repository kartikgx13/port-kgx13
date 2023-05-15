import React from 'react'

function Timeline() {
  return (
    <>
     <div className="timeline">
      <div className="timeline_container left">
        <div className="timeline-content">
          <h2>Jun. 2008 - Apr. 2018</h2>
          <p><b>School Name:</b> Children&#39;s Academy <br/>
            <b>Board:</b> ICSE <br/>
            <b>10th Percentage:</b> 95&#46;67&#37;
          </p>
        </div>
      </div>
      <div className="timeline_container right">
        <div className="timeline-content">
          <h2>Jun. 2018 - Feb. 2020</h2>
          <p>
            <b>Jr&#46; College:</b> Thakur College of Science and Commerce <br/>
            <b>Board:</b> HSC <br/>
            <b>12th Percentage:</b> 88&#37; <br/>
            <b>Main Elective:</b> Computer Science
          </p>
        </div>
      </div>
      <div className="timeline_container left">
        <div className="timeline-content">
          <h2>Jul. 2020 - Jun. 2024</h2>
          <p>
            <b>College:</b> Thakur College of Engineering and Technology <br/>
            <b>Branch:</b> Computer Science <br/>
            <b>Avg. CGPA: </b>9.46
          </p>
        </div>
      </div>
     </div>
    </>
  )
}

export default Timeline