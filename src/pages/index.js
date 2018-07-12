import React from 'react'
import Link from 'gatsby-link'

import oxPic from '../img/ox_new.jpg'

const my_sheet = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS_qPust89H1RQDFlYI9m_3nfycv-oCz9ZpbNjJypP-1fpYsl1ORToKBAcfxw60BPmINemtBKsZrIxq/pubhtml#'

fetch(my_sheet)
  .then(data => data.text())
  .then(text => {
    const parser = new DOMParser();
    const htmlDoc = parser.parseFromString(text, 'text/html');
    // query select from parsed html text
    console.log(htmlDoc.querySelectorAll('table'))
  })

const IndexPage = () => (
  <main role="main">
    {/* <img src={oxPic} alt="ox Picture" /> */}
    <section>
      <h2>Contacts</h2>
    </section>
  </main>
)

export default IndexPage
