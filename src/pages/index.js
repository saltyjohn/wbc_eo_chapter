import React from 'react'
import Link from 'gatsby-link'

import sortTableData from '../utils/sortTableData'

const ContactComponent = (props) => {
  return (
    <div>
      {props.rows.map((row, i) => {
        const rowData = Object.values(row);
        if (i !== 0) {
          // TODO: RIP logic / styling goes here
          return (
            <div
              style={{
                margin: '.5em 0',
                padding: '1em',
                backgroundColor: 'tan',
                // borderRadius: '.8em',
                // boxShadow: '0 0 0 .6em #111',
                // outline: '.6em solid #111',

              }}
              key={`${row}_${i}`}
            >
              <div
                style={{
                  fontWeight: 700,
                  lineHeight: 1.3,
                  letterSpacing: 1.2,
                  fontSize: 24,
                }}
              >
                {rowData[1]}
              </div>
              <div
                style={{
                  color: '#eee',
                  fontSize: 20,
                  fontWeight: 600,
                }}
              >
                {rowData[0]}
              </div>
              <div>
                {rowData[2]}
              </div>
            </div>
          )
        }
      })}
    </div>
  )
}

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
      .then(contacts => this.setState({ alumComm: contacts['table_0'], brothers: contacts['table_1'] }))
      .catch(err => console.log(err))
  }

  render() {
    const { alumComm, brothers } = this.state

    return (
      <main role="main">
        <section>
          <h1>Contacts</h1>
          <section>
            <h3>Alumni Committee</h3>
            {alumComm ? <ContactComponent rows={Object.values(alumComm)} /> : <div>loading</div>}
          </section>
        </section>
      </main>
    )
  }
}

export default IndexPage
