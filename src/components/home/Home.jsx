import React from 'react'
import './Home.css'
import home from '/images/home.webp'

const Home = () => {
  return (
    <div className='home'>
    
    <div className="home-content">
      <div className="left" 
      data-aos="fade-right"
      data-aos-duration = '1000'
      >
        <div>
        <h1>ANNALY</h1>
        <h2>TRADE CAPITAL</h2>
        </div>
        <p>A Leading Diversified Capital Manager</p>
        <img src="https://preview.canva.site/eadd094b-d463-4045-b69f-8c2971e4bc5a" alt="" />
      </div>
      <div className="right" 
      data-aos="fade-left"
      data-aos-duration = '1000'
      >
        <img src={home} alt="" />
        <div className="right-bar"></div>
      </div>
    </div>
    
    </div>
  )
}

export default Home