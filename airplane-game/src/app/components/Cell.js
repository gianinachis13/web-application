import React, { Component } from 'react';
import hit from './../../assets/img/Hit.png';
import miss from './../../assets/img/Miss.png';

export default (props) =>  {
  const { cellState, onCellClick, x, y } = props;

  const onClick = (x, y, cellState) => {
    if (cellState !== 'miss' && cellState !== 'hitted') {
      onCellClick(x, y);
    }
  }
  
    return (
      <div onClick={() => onClick(x, y, cellState)} className='cellStyle'>
        {cellState === 'miss' && <img src={miss} className='miss' alt='miss' width='auto' height='auto'/>}
        {cellState === 'hitted' && <img src={hit} className='hitted' alt='hitted' width='auto' height='auto'/>}
      </div>
    );
  
}
