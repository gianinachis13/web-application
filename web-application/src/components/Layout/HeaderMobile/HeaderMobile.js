import React from 'react'
import './HeaderMobile.scss'
import  logo  from "../../images/GOAT2.jpg"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

function HeaderMobile() {

    return (
        <section class="top-nav">
        <div>
        <img src={logo} className="logo" />
        </div>
        <div>
        <FontAwesomeIcon icon="fa-sharp fa-solid fa-user" />
 
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