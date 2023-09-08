import React from 'react'
import './App.css'
import Logo from './asserts/Untitled design.jpg'
import Header1 from './asserts/header-1.jpg';
import Header2 from './asserts/header-2.jpg';

function App() {
  return (
    <div>
      <div className="container">
        <header>
          <nav>
            <img src={Logo} alt="logo" className='Logo' />
            <ul>
              <li><a href="">Home</a></li>
              <li><a href="">About</a></li>
              <li><a href="">Features</a></li>
            </ul>
          </nav>
        </header>
        <div className="header-content">
          <div className="card-image">
            <div class="header__image">
              <img src={Header1} alt="header" />
              <img src={Header2} alt="header" />
            </div>
          </div>
          <div className="card-text">
            <p>Book</p>
            <h2>The Smiling <br /> agent for travel</h2>
            <p class="section__subtitle">
              Make your travel more enjoyable with us. We are the best travel
              agency and we are providing the best travel services for our
              clients.
            </p>
          </div>
          {/* <div className="card-image"></div> */}
        </div>
        <div className="about-container">
          <div className="about">
            <h2 className='sub'>About Quest</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App