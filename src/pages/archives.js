import React, { Component } from 'react'

class ArchivesPage extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  changeRenuionView(e) {
    const targetID = e.target.id
  }

  render() {
    return (
      <main role="main">
        <section>
          <div className="section-head">
            <h2>Archives Page</h2>
          </div>
        </section>
      </main>
    )
  }
}


export default ArchivesPage
