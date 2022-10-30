import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGhost } from '@fortawesome/free-solid-svg-icons'
import { hover } from '@testing-library/user-event/dist/hover'


const Navbar = () => {
  return (
    <Link to='/'>
      <div className='navbar'>
          <div className='name-logo'>
            <FontAwesomeIcon className='ghost-icon'
            icon={faGhost} 
            size="2x"
            />
            <h1><span className='website-name'> Krypto Labs </span></h1>
          </div>
      </div>
      {/* <div className='branding'>
        <h4>Powered by</h4>
        <img className='coingecko-logo'  src={coingecko} alt="" />
        <h4>CoinGecko API</h4>
      </div> */}
    </Link>
    
  )
}

export default Navbar