import React from 'react'
import './HeaderMobile.scss'
import  logo  from "../../images/GOAT2.jpg"
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

function HeaderMobile() {

    return (
        <section class="top-nav">
        <div>
        <img src={logo} className="logo" />
        </div>
        <div className='header-buttons'>
          <div className='search'>
            <SearchOutlinedIcon />
          </div>
          <div className='shop'>
            <ShoppingBagOutlinedIcon />
          </div>

 
        </div>
        <input id="menu-toggle" type="checkbox" />
        <label class='menu-button-container' for="menu-toggle">
        <div class='menu-button'></div>
      </label>
        <ul class="menu">
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
          <li>Four</li>
          <li>Five</li>
        </ul>
      </section>
    )
}

export default HeaderMobile