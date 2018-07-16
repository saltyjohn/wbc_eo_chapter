import React from 'react'

import eoHouse from '../../img/EO_House_Sketch.jpg'
import groupImg01 from '../../img/2015/2015_group_01.jpg'
import groupImg02 from '../../img/2015/2015_group_02.jpg'
import locationImg01 from '../../img/2015/deck.jpg'
import locationImg02 from '../../img/2015/deck2.jpg'
import oxMeeting from '../../img/2015/New_England_OX_Meeting.jpg'

const recap = `
June 2nd thru 5th, 2011
The Epsilon Omicron brothers of Theta Chi invaded the Pier IV in Somers Point, NJ

The fairer side of the group included:
Sally Everson,  Kathy Ullom, Ellen Mayer, Suzi Nichols, Sandy Pearl, Sandy Glenn, Marge,
Nadine Fisler, Joan Jones, and Jackie Moon who joined us in the fun and festivities.






2011 reunion hats were presented to those brothers and spouses in attendance.
`

const attendance = `Bill Baer, Ken Bletsch, Art Dalle Molle, Tom Dalle Molle, Barry Everson, Bob Fisler, Tim Glenn, Byron Gregory, Dave Hasbrouck, Rick Jones, Denny Lang, Mark Lewis, Ben Lyster, Gene McGrath, John Monacella, Jody Moreau, Peter Nangeroni, Mike Nichols, Ray Pearl, Steve Rogers, John Ullom, Scott Weaver.`
const fairer = `Sally Everson,  Kathy Ullom, Ellen Mayer, Suzi Nichols, Sandy Pearl, Sandy Glenn, Marge, Nadine Fisler, Joan Jones, and Jackie Moon`

const Reunion2011 = () => (
  <div className="reunion-content">
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
        {attendance.split(',').map(attendee => <li><span>{attendee.trim()}</span></li>)}
      </ul>
      <p><strong>The fairer side of the group included:</strong></p>
      <ul>
        {fairer.split(',').map(fairest => <li><span>{fairest.trim()}</span></li>)}
      </ul>
      <p>who joined us in the fun and festivities.</p>
      <p>There were lots of happy memories and Hell Week stories all of which led to great laughter....</p>
      <p>The brothers enjoyed terrific seafood at the Crab Trap Restaurant every evening.</p>
      <p>Saturday afternoon a group went over to The Clam Bar for an afternoon feast.</p>
      <p>Outings to the boardwalk, golf, and gambling rounded out the reunion weekend.</p>
      <p>Saturday afternoon at 5:00 PM there was a <strong>moment of silence</strong> in memory of <strong><em>brother Bill Simpson</em></strong> followed by an open bar hosted by the fraternity in his honor.</p>
      <p></p>
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
      <h4>Additional Photos:</h4>
      <a href="http://s590.photobucket.com/user/OX_Burg/library/2015%20NJ%20Reunion%20Part%20I?sort=4&page=1" target="_blank">Dianne & Benute</a>
      <a href="http://s590.photobucket.com/user/OX_Burg/library/2015%20NJ%20Reunion%20-%20Part%20II?sort=9&page=1" target="_blank">Sally & Boo</a>
    </div>
    <hr />
  </div>
)

export default Reunion2011
