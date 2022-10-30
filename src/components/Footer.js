import React from 'react'
import {Link} from 'react-router-dom'
import './Footer.css'
import coingecko from '../assets/coingecko.png'

const Footer = () => {
    return (
      <Link to='/'>
        <div className='branding'>
          <h4>Powered by</h4>
          <img className='coingecko-logo'  src={coingecko} alt="" />
          <h4>CoinGecko API</h4>
        </div>
      </Link>
      
    )
  }

export default Footer