import React from 'react';
import { Col } from 'react-bootstrap';
import Cell from "./Cell";
import StartButton from "./StartButton";

export default (props) => {
  let { battleField, hits, onCellClick, onClick } = props;
  return (
    <Col className='battleFieldPanel'>
      {!battleField &&
      <table className={`emptyBattleField centered`}>
        <tbody>
        <tr>
          <td className='emptyBattleField'>
            <StartButton onClick={() => onClick()}/>
          </td>
        </tr>
        </tbody>
      </table>
      }
      {battleField && hits < 5 &&
      <table className={`battlefieldTable centered`}>
        <tbody>
        {battleField.map((row, x) => {
          return (
            <tr key={x}>{row.map((column, y) => {
              return (
                <td
                  key={y}
                  className='tableCell'
                >
                  <Cell
                    onCellClick={() => onCellClick(x, y)}
                    x={x}
                    y={y}
                    cellState={column}
                  />
                </td>
              )
            })}</tr>
          )
        })}
        </tbody>
      </table>
      }
      {hits === 5 &&
      <table className={`emptyBattleField centered`}>
        <tbody>
        <tr>
          <td>
            <div className='text-center'>
              <h1>Game over</h1>
              <StartButton onClick={() => onClick()}/>
            </div>
          </td>
        </tr>
        </tbody>
      </table>
      }
    </Col>
  );
}
