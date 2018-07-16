import React from 'react'

import eoHouse from '../../img/EO_House_Sketch.jpg'
import groupImg01 from '../../img/2015/2015_group_01.jpg'
import groupImg02 from '../../img/2015/2015_group_02.jpg'
import locationImg01 from '../../img/2015/deck.jpg'
import locationImg02 from '../../img/2015/deck2.jpg'
import oxMeeting from '../../img/2015/New_England_OX_Meeting.jpg'

const recap = `
`

const Reunion2015 = () => (
  <div className="reunion-content">
    <img src={groupImg01} alt="2015 Epsilon Omicron Alumni Gathering group photo 1" />
    <p style={{ fontSize: 16, textAlign: 'center' }}>Missing from Group Photo:<br /> Byron "Greek" Gregory, David "Has" Hasbrouck, Ellen McGrath, Jason Simpson, and Phyllis Simpson</p>
    <div className="location" style={{ textAlign: 'center' }}>
      <h3>Somers Point, NJ</h3>
    </div>
    <div className="img-container">
      <img src={locationImg01} alt="Pier IV Deck Image 1" />
      <a href="http://www.hiddenvalleyresort.com/">PIER IV</a>
      <img src={locationImg02} alt="Pier IV Deck Image 2" />
    </div>
    <hr className="style-ox" />
    <div className="recap">
      <h4>Reunion Recap: </h4>
      <p style={{ textIndent: '2em' }}>The brothers of Epsilon Omicron Theta Chi invaded the shores of Somers Point, NJ, June 11th, 12th, 13th, and 14th. Seventy one brothers, spouses, and friends, including several "first timers, enjoyed the fellowship and beer while reliving the many great memories of the last 40 years.</p>
      <p>First timers included Bob "<em>Duck</em>" Salzman and Ernie Chadderton with his wife Lynn. In addition, there were several from the mid 1970's- Mike Gasser, Rich Porecca, Fred Stokes, Mary Jo Thompson, and Cindy Simons to name a few. This 70's group promised to bring even more brothers to our 2017 reunion.</p>
      <p>Thursday evening the brothers gathered at the pool bar for happy hour and "plenty of laughs". The group, at least 30 in number, then enjoyed a terrific dinner at the Crab Trap restaurant. On Friday evening many returned to the Crab Trap for another great meal.  Afterwards, the brothers in "true Chi tradition" took over the pool area for an evening of partying with plenty of beer.</p>
      <p>Saturday morning a group of brothers, including Locker, Benute, Haste, Has,Germ, and Ray Pearl participated in a "Hangover Yoga" on the beach. Many thanks to Brother Locker who was in charge, as a hilarious time was had by all.</p>
      <hr />
      <img src={groupImg02} alt="2015 Epsilon Omicron Alumni Gathering group photo 2" />
      <hr />
      <p>Saturday afternoon activities included appetizers and drinks which were served in air conditioned "comfort". A moment of silence was held for brothers Augie, Rat, JC Cusack, Roger Bush, Edgar "Bo" Speer, son of brother EB, and family members lost over the last few years.  Brain presented to all brothers a sketch of our Huffman St  Fraternity house.</p>
      <img src={eoHouse} alt="" />
      <p>Brother Greek was named OX historian and was presented an award.</p>
      <p>A golf committee including Steve Rogers and Brain was formed to plan golf outings on non reunion years.</p>
      <p>Our next reunion will be in 2017.</p>
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
    <div className="recap">
      <h4 style={{ textAlign: 'center', color: '#f84242' }}>If you fail to plan, then you plan to fail!</h4>
      <img src={oxMeeting} alt="July 1, 2014 Planning Session in Glastonbury, CT" width="90%" style={{ marginBottom: '0' }} />
      <p style={{ fontSize: 14, textAlign: 'center', }}><em>July 1, 2014 -  Planning Session - Glastonbury, CT</em></p>
      <h5 style={{ fontSize: 20, textAlign: 'center', fontWeight: '700' }}>"Brain", "Benute", "Duck", and "Rat (RIP)"</h5>
      <hr />
      <p style={{ textAlign: 'center' }}>
        A Few of New England's Chi's Hard At Work
      </p>
      <iframe
        src="https://www.youtube.com/embed/PTU2He2BIc0"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
      />
    </div>
  </div>
)

export default Reunion2015
