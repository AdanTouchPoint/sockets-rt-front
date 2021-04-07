import React, {Fragment, useState, useEffect} from 'react';
import Button from "react-bootstrap/cjs/Button";
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
        <div className={'container'} style={{backgroundColor: 'white'}}>
            <h2>Waste-o-Meter!!</h2>
            <div>
                <h1>
                    ${totalAmount}
                </h1>
                <Button onClick={click}>
                    ShowDetail
                </Button>
                <List
                    allPrograms={allPrograms}
                    setShowSpecifics={setShowSpecifics}
                    showSpecifics={showSpecifics}/>
            </div>
        </div>
    )
}
export default WasteoMeter;