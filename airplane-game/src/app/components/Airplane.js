import React from 'react';
import Hitpoints from "./Hitpoints";

export default (props) =>  {
  let { airplane } = props;

    return (
      <ul className='airplaneContainer'>
        { airplane &&
          airplane.map((airplane, index) => {
            return (
              <li key={index} className='airplaneItem'>
                <img src={airplane.icon} className="airplaneIcon" alt="airplaneIcon"/>
                <Hitpoints hitPoints={airplane.hitPoints - airplane.hits} hits={airplane.hits}/>
              </li>
            )
          })
        }
      </ul>
    );

}


