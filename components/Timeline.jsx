import React from 'react'

function Timeline() {
  return (
    <>
     <div className="timeline">
      <div className="timeline_container left">
        <div className="timeline-content">
          <h2>2008-2018</h2>
          <p>School Name: Children&#39;s Academy <br/>
            Board: ICSE <br/>
            10th Percentage: 95&#46;67&#37;
          </p>
        </div>
      </div>
      <div className="timeline_container right">
        <div className="timeline-content">
          <h2>2018-2020</h2>
          <p>
            Jr&#46; College: Thakur College of Science and Commerce <br/>
            Board: HSC <br/>
            12th Percentage: 88&#37; <br/>
            Main Elective: Computer Science
          </p>
        </div>
      </div>
      <div className="timeline_container left">
        <div className="timeline-content">
          <h2>2020-2024</h2>
          <p>
            College: Thakur College of Engineering and Technology <br/>
            Branch: Computer Science
          </p>
        </div>
      </div>
     </div>
    </>
  )
}

export default Timeline