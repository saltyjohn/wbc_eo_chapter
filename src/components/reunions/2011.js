import React from 'react'

import locationImg01 from '../../img/2015/deck.jpg'
import locationImg02 from '../../img/2015/deck2.jpg'

const recap = `
`

const attendance = `Bill Baer, Ken Bletsch, Art Dalle Molle, Tom Dalle Molle, Barry Everson, Bob Fisler, Tim Glenn, Byron Gregory, Dave Hasbrouck, Rick Jones, Denny Lang, Mark Lewis, Ben Lyster, Gene McGrath, John Monacella, Jody Moreau, Peter Nangeroni, Mike Nichols, Ray Pearl, Steve Rogers, John Ullom, Scott Weaver.`
const fairer = `Sally Everson,  Kathy Ullom, Ellen Mayer, Suzi Nichols, Sandy Pearl, Sandy Glenn, Marge, Nadine Fisler, Joan Jones, and Jackie Moon`

const Reunion2011 = () => (
  <div className="section-content">
    <div className="location" style={{ textAlign: 'center' }}>
      <h3>Somers Point, NJ</h3>
      <p><em>June 2nd thru 5th, 2011</em></p>
    </div>
    <div className="img-container">
      <img src={locationImg01} alt="Pier IV Deck Image 1" />
      <a href="http://www.hiddenvalleyresort.com/">PIER IV</a>
      <img src={locationImg02} alt="Pier IV Deck Image 2" />
    </div>
    <hr className="style-ox" />
    <div className="recap">
      <h4>Reunion Recap: </h4>
      <p><strong>The following brothers were in attendance:</strong></p>
      <ul>
        {attendance.split(',').map((attendee, i) => <li key={`${attendee}_${i}`}><span>{attendee.trim()}</span></li>)}
      </ul>
      <p><strong>The fairer side of the group included:</strong></p>
      <ul>
        {fairer.split(',').map((fairest, i) => <li key={`${fairest}_${i}`}><span>{fairest.trim()}</span></li>)}
      </ul>
      <p>who joined us in the fun and festivities.</p>
      <p>There were lots of happy memories and Hell Week stories all of which led to great laughter....</p>
      <p>The brothers enjoyed terrific seafood at the Crab Trap Restaurant every evening. Saturday afternoon a group went over to The Clam Bar for an afternoon feast. Outings to the boardwalk, golf, and gambling rounded out the reunion weekend. Saturday afternoon at 5:00 PM there was a <strong>moment of silence</strong> in memory of brother <strong style={{ color: '#f84242' }}><em>Bill Simpson</em></strong> followed by an open bar hosted by the fraternity in his honor.</p>
      <p>2011 reunion hats were presented to those brothers and spouses in attendance.</p>
      <p>
        <strong>
          <em>
            - Brother Benute
          </em>
        </strong>
      </p>
    </div>
    <hr className="style-ox" />
    <div className="addt-photos">
      <h4>Additional  Photo Collections by:</h4>
      <a href="http://s1089.photobucket.com/user/Burg_Theta_Chi/library/Reunion%202011%20-%20Benute%20Photos?sort=3&page=1" target="_blank">2011 Photos</a>
    </div>
    <hr />
  </div>
)

export default Reunion2011
