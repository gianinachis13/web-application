import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import Airplane from './Airplane';
import Scores from "./../components/Scores";

export default (props) => {
  const { airplane, hits, shots } = props;
  return (
    <Col>
      <Row>
        <div className='scoresPanel'>
          <Col>
            <Scores hits={hits} shots={shots}/>
          </Col>
          <Col>
            <Airplane airplane={airplane}/>
          </Col>
        </div>
      </Row>
    </Col>
  )
}
