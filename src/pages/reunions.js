import React, { Component } from 'react'

import NavBtn from '../components/nav.btn'

// 1992, 2007, 2009, 2011, 2013, 2015, and 2017 Reunions
import R2017 from '../components/reunions/2017'
import R2015 from '../components/reunions/2015'
import R2013 from '../components/reunions/2013'
import R2011 from '../components/reunions/2011'

import '../scss/reunions.scss'

class ReunionsPage extends Component {
  constructor() {
    super()
    this.state = {
      reunions: ['2017', '2015', '2013', '2011', '2009', '2007', '1992'],
      currentView: '2017',
      reunionKey: {
        '2017': <R2017 />,
        '2015': <R2015 />,
        '2013': <R2013 />,
        '2011': <R2011 />,
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
    console.log('2017' in reunionKey)
    return (
      <main role="main">
        <hr className="style-ox" />
        <nav>
          {reunions.map(year =>
            <NavBtn
              year={year}
              cView={currentView}
              handleClick={this.handleView}
              key={`reunion_${year}`}
              isActive={year in reunionKey}
            />
          )}
        </nav>
        <hr className="style-ox" />
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
