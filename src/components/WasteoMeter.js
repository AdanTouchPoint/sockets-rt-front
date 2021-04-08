import React, {Fragment, useState, useEffect} from 'react';
import Button from "react-bootstrap/cjs/Button";
import Container from "react-bootstrap/cjs/Container";
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

            <Container xl={8} className={'containerAlt'} style={{backgroundColor: 'white'}}>
                <h2>Waste-o-Meter</h2>
                <div>
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
                </div>
            </Container>


    )
}
export default WasteoMeter;