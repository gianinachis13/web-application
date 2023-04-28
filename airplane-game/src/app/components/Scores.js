import React, { useState } from 'react'

export default (props) => {
  const { hits, shots } = props;
  const [previousShots, setPreviousShots] = useState([])

  const showHistory = () => {
    setPreviousShots(currentShot => {
      return [...currentShot, shots]
    });
  }

  return (
    <div className='panel'>
      <div className='scorePanel text-center'>
        <div className='scoreHits'>
          <h2 className='scores'>{hits}</h2>
          <hr />
          <p className='scoreText'>Hits</p>
        </div>
        <div className='scoreShots'>
          <h2 className='scores'>{shots}</h2>
          <hr />
          <p className='scoreText'>Shots</p>
        </div>
        <div>
        </div>
      </div>
      <div>
        <button onClick={showHistory}>
          HISTORY
        </button>

        {previousShots && previousShots.map((nr) => {
          return (
            <div key={nr}>
              {nr > 0 ?
                <li >
                  Number of shots required to destroy the airplane: {nr}
                </li>
                : 'There is no history available'
              }
            </div>
          )
        })}
      </div>

    </div>
  )

}
