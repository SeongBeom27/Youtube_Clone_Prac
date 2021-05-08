import React, { Component } from 'react'
import './Headline.css'

class Headline extends Component {
  render() {
    return (
      <div>
        <button name="Menu" id="headerbutton" type="button"></button>
        <header>Youtube</header>
        <div class="search-box">
          <input type="text" class="search-txt" name="" />
          <a class="search-btn" href="#">
            <i class="fas fa-search"></i>
          </a>
        </div>
      </div>
    )
  }
}

export default Headline
