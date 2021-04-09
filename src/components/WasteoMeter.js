import React, {Fragment, useState, useEffect} from 'react';
import Button from "react-bootstrap/cjs/Button";
import Container from "react-bootstrap/cjs/Container";
import Col from 'react-bootstrap/cjs/Col'
import List from './List'

const WasteoMeter = ({showSpecifics, setShowSpecifics, allPrograms, totalAmount, total,setTotal}) => {


    const click = e => {
        e.preventDefault()
        console.log(showSpecifics)
        if (showSpecifics === true) {
            setShowSpecifics(false)
        } else setShowSpecifics(true)
    }

    const formatter = new Intl.NumberFormat('en-GB')
    const div = formatter.format(totalAmount)
    setTotal(div)

    return (
        <div >
               <Col   className={'containerAlt'} style={{pading:'2px', margin:'5px', textAlign: 'left',backgroundColor: 'white'}} >
                   <h2>Waste-o-Meter</h2>
                       <h1 className={'big'}>
                           ${
                                total
                            }
                       </h1>
                       <Button variant={'warning'} onClick={click}>
                           ShowDetail
                       </Button>
                       <List
                           allPrograms={allPrograms}
                           setShowSpecifics={setShowSpecifics}
                           showSpecifics={showSpecifics}/>
               </Col>
        </div>
    )
}
export default WasteoMeter;