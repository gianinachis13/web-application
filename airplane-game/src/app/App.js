import 'bootstrap/dist/css/bootstrap-theme.css';
import 'bootstrap/dist/css/bootstrap.css';
import _ from 'lodash'
import React, { useState } from 'react';
import { Grid, Row } from 'react-bootstrap';
import '../assets/css/App.css';
import BattleField from './components/BattleField.js';
import Nav from "./components/Nav";
import Stats from "./components/Stats";
import { shipType } from './constants/constants';
import { getBattleField, makeClone } from './helpers/generateBattleField';

export default () => {
  const [battleField, setBattleField] = useState(null)
  const [airplane, setAirplane] = useState(null)
  const [shots, setShots] = useState(0)
  const [hits, setHits] = useState(0)


  const onClick = () => {
    let newAirplane = _.cloneDeep(shipType);
    setBattleField(getBattleField())
    setHits(0)
    setShots(0)
    setAirplane(newAirplane)
  }

  const resetGame = () => {
    let newAirplane = _.cloneDeep(shipType);
    setBattleField(null)
    setHits(0)
    setShots(0)
    setAirplane(newAirplane)
  }

  const onCellClick = (x, y) => {
    let newBattleField = makeClone(battleField);
    let shot = shots + 1;
    let successHits = hits;
    let newAirplane = [...airplane];

    console.log("Battlefield:", battleField, "X:", x, "Y:", y)
    let cellValue = battleField[x][y];

    if (cellValue) {
      newAirplane[0].hits = newAirplane[0].hits + 1; //counting starts with 0 -> force 1
      newBattleField[x][y] = 'hitted';
      successHits += 1;
      setBattleField(newBattleField)
      setHits(successHits)
      setShots(shot)
      setAirplane(newAirplane)
    } else {
      newBattleField[x][y] = 'miss';
      setBattleField(newBattleField)
      setShots(shot)
    }
  }
  let statsPanel = (
    <Stats
      airplane={airplane}
      hits={hits}
      shots={shots}
    />
  );
  let battleFieldPanel = (
    <BattleField
      hits={hits}
      battleField={battleField}
      onClick={() => onClick()}
      onCellClick={(x, y) => onCellClick(x, y)}

    />
  )

  return (
    <div className='main-content'>
      <Nav
        resetGame={() => resetGame()}
      />
      <Grid>
        <Row className='show-grid'>{statsPanel}{battleFieldPanel}</Row>
      </Grid>
    </div>
  );
}