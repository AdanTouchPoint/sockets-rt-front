import React, {Fragment,useState, useEffect} from 'react';
import Button from "react-bootstrap/cjs/Button";
import Container from "react-bootstrap/cjs/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
const PerHouse = ({totalPerPerson, totalPerHouse}) => {
    return(
<div className={'per'}>
           <Col  className={'containerText'} >
               <Row sm={6} xl={4} className={'cantidad1'} >
                   <h2 className={'H2'} >Per HouseHold</h2>
                   <h3 className={'H3'} > ${totalPerHouse} </h3>
               </Row>
           </Col>
        <Col  className={'containerText'} style={{marginLeft:'2em'}}>
                <Row  sm={6} xl={4} className={'cantidad2'}>
                    <h2  className={'H2'}>Per Person</h2>
                    <h3 className={'H3'}  > $ {totalPerPerson} </h3>
                </Row>
            </Col>
</div>
    )
}
export default PerHouse