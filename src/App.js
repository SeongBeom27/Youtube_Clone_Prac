import React, { Component } from 'react'
import './App.css'
import Rootcontent from './components/Rootcontent'

class App extends Component {
  render() {
    return (
      <div className="main">
        <section class="main">
          <div className="middle">
            <div className="menu">menu</div>
            <Rootcontent></Rootcontent>
          </div>
        </section>
      </div>
    )
  }
}

export default App
