import React, { Component } from 'react'

import ReunionNavButton from '../components/btn.reunion'
// 1992, 2007, 2009, 2011, 2013, 2015, and 2017 Reunions
import R_2017 from '../components/reunions/2017'

import '../scss/reunions.scss'

class ReunionsPage extends Component {
  constructor() {
    super()
    this.state = {
      reunions: ['2017', '2015', '2013', '2011', '2009', '2007', '1992'],
      currentView: '2017',
      reunionKey: {
        '2017': <R_2017 />
      }
    }
    this.handleView = this.handleView.bind(this)
  }

  handleView(e) {
    const targetID = e.target.id;
    this.setState({
      currentView: targetID
    })
  }

  render() {
    const { reunions, currentView, reunionKey } = this.state
    return (
      <main role="main">
        <nav>
          {reunions.map(year =>
            <ReunionNavButton
              year={year}
              cView={currentView}
              handleClick={this.handleView}
              key={`reunion_${year}`}
            />
          )}
        </nav>
        <section>
          <div className="section-head">
            <h2>{currentView} Reunion</h2>
          </div>
          {reunionKey[currentView]}
        </section>
      </main>
    )
  }
}


export default ReunionsPage
