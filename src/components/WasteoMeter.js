import React, {Fragment, useState, useEffect} from 'react';
import Button from "react-bootstrap/cjs/Button";
import Container from "react-bootstrap/cjs/Container";
import Col from 'react-bootstrap/cjs/Col'
import List from './List'

const WasteoMeter = ({showSpecifics, setShowSpecifics, allPrograms, totalAmount}) => {

    const click = e => {
        e.preventDefault()
        console.log(showSpecifics)
        if (showSpecifics === true) {
            setShowSpecifics(false)
        } else setShowSpecifics(true)
    }

    return (
               <Col xs={11} md={6} xl={4} className={'containerAlt'} style={{ textAlign: 'left',backgroundColor: 'white'}} >
                   <h2>Waste-o-Meter</h2>
                       <h1 className={'big'}>
                           ${totalAmount}
                       </h1>
                       <Button variant={'warning'} onClick={click}>
                           ShowDetail
                       </Button>
                       <List
                           allPrograms={allPrograms}
                           setShowSpecifics={setShowSpecifics}
                           showSpecifics={showSpecifics}/>
               </Col>

    )
}
export default WasteoMeter;