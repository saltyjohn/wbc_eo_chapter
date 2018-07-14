import React from 'react'
import Alumni from '../components/alumni.comm'

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
          <nav>
            <h3>Alumni Committee</h3>
          </nav>
          {/* <div className="search-box">
            <img
              src={searchIcon}
              alt="search icon"
              width='26px'
              height='26px'
            />
            <input type="text" value={this.state.search} />
          </div> */}
          {alumComm ? <Alumni rows={Object.values(alumComm)} /> : <div />}
        </section>
      </main>
    )
  }
}

export default IndexPage
