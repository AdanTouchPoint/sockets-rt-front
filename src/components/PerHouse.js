import React, {Fragment,useState, useEffect} from 'react';
import Button from "react-bootstrap/cjs/Button";
import Container from "react-bootstrap/cjs/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
const PerHouse = ({totalPerPerson, totalPerHouse}) => {
    return(
<div className={'per'} style={{margin:'15px 0'}}>
           <Col  className={'containerText'} >
               <h2  >Per HouseHold</h2>
               <Row sm={6} xl={4} className={'cantidad1'} >
                   <h3 style={{padding:'10px '}}> {totalPerHouse} </h3>
               </Row>
           </Col>
        <Col  className={'containerText'} >
            <h2 style={{margin:'10px'}}>Per Person</h2>
                <Row sm={6} xl={4} className={'cantidad2'}>
                    <h3> {totalPerPerson} </h3>
                </Row>
            </Col>
</div>
    )
}
export default PerHouse