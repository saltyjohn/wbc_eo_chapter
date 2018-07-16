import React, { Component } from 'react'

import B1968 from '../components/archives/1968'
import B1969 from '../components/archives/1969'
import B1970 from '../components/archives/1970'
import B1971 from '../components/archives/1971'

import NavBtn from '../components/nav.btn'

import '../scss/reunions.scss'

class ArchivesPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      archives: ['1968', '1969', '1970', '1971'],
      currentView: '1968',
      archiveKey: {
        '1968': <B1968 />,
        '1969': <B1969 />,
        '1970': <B1970 />,
        '1971': <B1971 />,
      }
    }
    this.handleView = this.handleView.bind(this)
  }

  handleView(e) {
    const targetID = e.target.id
    this.setState({
      currentView: targetID
    })
  }

  render() {
    const { archives, currentView, archiveKey } = this.state
    return (
      <main role="main">
        <hr className="style-ox" style={{ marginTop: '1em' }} />
        <nav>
          {archives.map(year =>
            <NavBtn
              year={year}
              cView={currentView}
              handleClick={this.handleView}
              key={`archive_${year}`}
              isActive={year in archiveKey}
            />
          )}
        </nav>
        <hr className="style-ox" />
        <section>
          <div style={{ textDecoration: 'none' }} className="section-head">
            <h2>Spring</h2>
            <h2 style={{ textDecoration: 'underline' }}>{currentView}</h2>
            <h2>@ The 'Burg</h2>
          </div>
          {archiveKey[currentView]}
        </section>
      </main >
    )
  }
}


export default ArchivesPage
