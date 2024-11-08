import React from 'react'
import './annaly.css'
import logo from '/images/logo1.webp'
import SvgCom from './SvgCom'
const Annaly = () => {
  return (
    <div className='annaly'>
    <img src={logo} alt=""
    data-aos="fade-up"
      data-aos-duration = '2000'
     />
    <div className='mySvg'
    data-aos="fade-up"
      data-aos-duration = '2000'
    >
    <SvgCom/>
    </div>
    <h1 
    data-aos="fade-up"
    data-aos-duration = '2000'> Deep Dive into our Annaly Trade Capital </h1>
    <div className='content'>
    <div className="paras">
    <p 
    data-aos="fade-up"
    data-aos-duration = '2000'>Annaly Trade Capital (ATCAPITAL) is a premier, diversified capital management firm with a broad range of
investment strategies focused on the finance market. Our approach leverages industry expertise to provide
sustainable growth and robust financial solutions for our clients. At Annaly Trade Capital, we are your trusted
partner in private investments, dedicated to delivering sustainable yield and attractive returns through
market cycles. With over 25 years of experience, we lead the residential mortgage finance market with $12
billion in permanent capital and a portfolio of diversified investment strategies.</p>
    <p 
    data-aos="fade-up"
    data-aos-duration = '2000'>
    At our Annaly, we utilize multi-strategy hedge fund models that allow for agility and flexibility. Unlike
traditional investment funds, which may be confined to specific sectors or asset classes, hedge funds can
deploy capital wherever market opportunities arise. This freedom, combined with our analytical rigor, enables
us to capitalize on market inefficiencies, take advantage of arbitrage opportunities, and hedge against
downside risks.
    </p>
    </div>
    <div className='headings'
    data-aos="fade-up"
    data-aos-duration = '2000'>
    <h2>Our Hedge Fund Models Focus On:</h2>
    <p>
        -<span>Absolute return strategies</span>: We aim to deliver positive returns in any market condition by employing hedging
        techniques and risk management tools.
    </p>
    <p>
        -<span>Active management</span>:Our team constantly monitors and adjusts positions to respond dynamically to market
        conditions.
    </p>
    <p>
        -<span>Leverage and derivatives</span>:While carefully controlled, we use leverage and derivatives to enhance returns and
        mitigate risks.
    </p>
    </div>
    </div>
    </div>
  )
}

export default Annaly