import React, { Component } from 'react';
import Hitpoints from "./Hitpoints";

export default (props) =>  {
  let { airplane } = props;

    return (
      <ul className='flotillaContainer'>
        { airplane &&
          airplane.map((ship, index) => {
            return (
              <li key={index} className='shipItem'>
                <img src={ship.icon} className="shipIcon" alt="shipIcon"/>
                <Hitpoints hitPoints={ship.hitPoints - ship.hits} hits={ship.hits}/>
              </li>
            )
          })
        }
      </ul>
    );

}


