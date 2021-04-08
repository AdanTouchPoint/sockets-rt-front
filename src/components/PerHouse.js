import React, {Fragment,useState, useEffect} from 'react';
import Button from "react-bootstrap/cjs/Button";
import Container from "react-bootstrap/cjs/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
const PerHouse = ({totalPerPerson, totalPerHouse}) => {
    return(
        <div  className={'containerText'} >
           <Col sm={12}>
               <Row className={'cantidad1'}>
                   <h2>Per HouseHold</h2>
                    <h3> $ {totalPerHouse} </h3>
               </Row>
           </Col>
            <Col sm={12}>
                <Row className={'cantidad2'}>
                    <h2>Per HouseHold</h2>
                    <h3> $ {totalPerHouse} </h3>
                </Row>
            </Col>
        </div>
    )
}
export default PerHouse