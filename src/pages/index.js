import React from 'react'


import Alumni from '../components/alumni.comm'
import Brothers from '../components/alumni.brothers'

import sortTableData from '../utils/sortTableData'
// import searchIcon from '../icons/zondicons/search.svg'
import '../scss/home.scss'

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };
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
      )
      .catch(err => console.log(err))
  }

  render() {
    const { alumComm, brothers } = this.state
    return (
      <main role="main">
        <section>
          <div className="section-head">
            <h2>Alumni Committee</h2>
          </div>
          {alumComm ? <Alumni rows={Object.values(alumComm)} /> : <div />}
        </section>
        <section>
          <div className="section-head">
            <h2>Brothers of 1968 - 1973</h2>
          </div>
          {brothers ? <Brothers rows={Object.values(brothers)} /> : <div />}
        </section>
      </main>
    )
  }
}

export default IndexPage
