import React from 'react'

import Alumni from '../components/alumni.comm'
import Brothers from '../components/alumni.brothers'

import eoSketch from '../img/EO House Sketch.jpg'
import newFlag from '../img/New-flag.gif'
import spring70 from '../img/Spring70.jpg'

import sortTableData from '../utils/sortTableData'
import '../scss/page.scss'

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
          <img src={eoSketch} alt="Epsilon Omicron Sketch" />
          {alumComm ? <Alumni rows={Object.values(alumComm)} /> : <div />}
        </section>
        <img src={newFlag} alt="New Alumni Flag" />
        <hr className="style-ox" />
        <section>
          <div className="section-head">
            <h2>Brothers
              <br />
              1968 - 1973</h2>
          </div>
          <img src={spring70} alt="Spring 1970 Frat House Group Photo" width="300" />
          {brothers ? <Brothers rows={Object.values(brothers)} /> : <div />}
        </section>
      </main>
    )
  }
}

export default IndexPage
