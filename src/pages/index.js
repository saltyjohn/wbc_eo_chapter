import React from 'react'
import Link from 'gatsby-link'

import sortTableData from '../utils/sortTableData'

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS_qPust89H1RQDFlYI9m_3nfycv-oCz9ZpbNjJypP-1fpYsl1ORToKBAcfxw60BPmINemtBKsZrIxq/pubhtml#'
    fetch(url)
      // fetch html doc and convert to html text
      .then(data => data.text())
      .then(text => sortTableData(text))
      .then(contacts => this.setState({ contacts }))
  }

  render() {
    // const data = this.retrieveTableData(sheetURL);
    console.log(this.state)
    return (
      <main role="main">
        <section>
          <h2>Contacts</h2>
        </section>
      </main>
    )
  }
}

export default IndexPage
