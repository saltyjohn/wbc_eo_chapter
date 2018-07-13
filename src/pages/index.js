import React from 'react'
import Link from 'gatsby-link'

import Alumni from '../components/contact.alumni'
import Loading from '../components/loading'

import sortTableData from '../utils/sortTableData'
import '../scss/home.scss'

// TODO: move fetch into layout
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
      .then(contacts =>
        this.setState({
          alumComm: contacts['table_0'],
          brothers: contacts['table_1']
        })
        //  FOR TESTING LOADING COMPONENT
        // setTimeout(() => {
        //   this.setState({
        //     alumComm: contacts['table_0'],
        //     brothers: contacts['table_1']
        //   })
        // }, 200)
      )
      .catch(err => console.log(err))
  }

  render() {
    const { alumComm, brothers } = this.state
    return (
      <main role="main">
        <section>
          <h3>Alumni Committee</h3>
          {alumComm ? <Alumni rows={Object.values(alumComm)} /> : <Loading />}
        </section>
      </main>
    )
  }
}

export default IndexPage
