import React from 'react'

import groupImg01 from '../../img/2015/2015_group_01.jpg'
import locationImg01 from '../../img/2015/deck.jpg'
import locationImg02 from '../../img/2015/deck2.jpg'

const recap = `


First timers included Bob " Duck" Salzman and Ernie Chadderton with his wife Lynn. In addition, there were several from the mid 1970's- Mike Gasser, Rich Porecca, Fred Stokes, Mary Jo Thompson, and Cindy Simons to name a few. This 70's group promised to bring even more brothers to our 2017 reunion.

Thursday evening the brothers gathered at the pool bar for happy hour and "plenty of laughs". The group, at least 30 in number, then enjoyed a terrific dinner at the Crab Trap restaurant. On Friday evening many returned to the Crab Trap for another great meal.  Afterwards, the brothers in "true Chi tradition" took over the pool area for an evening of partying with plenty of beer.

Saturday morning a group of brothers, including Locker, Benute, Haste, Has,Germ, and Ray Pearl participated in a "Hangover Yoga" on the beach. Many thanks to Brother Locker who was in charge, as a hilarious time was had by all.

Saturday afternoon activities included appetizers and drinks which were served in air conditioned "comfort". A moment of silence was held for brothers Augie, Rat, JC Cusack, Roger Bush, Edgar "Bo" Speer, son of brother EB, and family members lost over the last few years.  Brain presented to all brothers a sketch of our Huffman St  Fraternity house.

EO_House_Sketch.jpg (8855 bytes)

Brother Greek was named OX historian and was presented an award.

A golf committee including Steve Rogers and Brain was formed to plan golf outings on non reunion years.

 Our next reunion will be in 2017.

Brother Benute
`

const Reunion = () => (
  <div className="reunion-content">
    <img src={groupImg01} alt="2017 Epsilon Omicron Alumni Gathering group photo 1" />
    <p style={{ fontSize: 16, textAlign: 'center' }}>Missing from Group Photo:<br /> Byron "Greek" Gregory, David "Has" Hasbrouck, Ellen McGrath, Jason Simpson, and Phyllis Simpson</p>
    <div className="location" style={{ textAlign: 'center' }}>
      <h3>Somers Point, NJ</h3>
    </div>
    <div className="img-container">
      <img src={locationImg01} alt="Pier IV Deck Image 1" />
      <a href="http://www.hiddenvalleyresort.com/">PIER IV</a>
      <img src={locationImg02} alt="Pier IV Deck Image 2" />
    </div>
    {/* <hr className="style-eight" /> */}
    <div className="recap">
      <h4>Reunion Recap: </h4>
      <p style={{ textIndent: '2em' }}>The brothers of Epsilon Omicron Theta Chi invaded the shores of Somers Point, NJ, June 11th, 12th, 13th, and 14th. Seventy one brothers, spouses, and friends, including several "first timers, enjoyed the fellowship and beer while reliving the many great memories of the last 40 years.</p>
      <hr />
      {/* <img src={groupImg02} alt="2017 Epsilon Omicron Alumni Gathering group photo 2" /> */}
      <hr />
      <p>
        <strong>
          <em>
            Brother Benute
          </em>
        </strong>
      </p>
    </div>

    <hr className="style-eight" />

    <div className="addt-photos">
      <h4>Additional Photos:</h4>
      <a href="">Bill Jackman Collection</a>
    </div>
  </div>
)

export default Reunion
