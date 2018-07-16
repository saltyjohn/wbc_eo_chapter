import React from 'react'

import mainImg from '../../img/archives/1968_theta_chi.jpg'

const hints = `Dean Andrews, Dean Markwood, Herb or Waldo, "Wagon Wheel" Mae, Kim & Tonya, Sarina Scrungebucket, Douglas Niedermeyer, Dean Wormer, "The El Pooks"`

const Archive1968 = () => (
  <div className="section-content">
    <img src={mainImg} alt="1968 Epsilon Omicron House" />
    <div className="recap" style={{ textAlign: 'center' }}>
      <h4>How many of the "Brothers" can you identify?</h4>
      <p>Helpful Hints</p>
      <p>The following are <strong>NOT</strong> in the picture:</p>
      <ul style={{ textAlign: 'left' }}>
        {hints.split(',').map((hint, i) => <li style={{ margin: '0 auto' }} key={`${hint}_${i}`}><span>{hint.trim()}</span></li>)}
      </ul>
    </div>
  </div>
)

export default Archive1968
