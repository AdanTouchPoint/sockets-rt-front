import React from 'react';
import Button from "react-bootstrap/cjs/Button";
import Col from 'react-bootstrap/cjs/Col'
import List from './List'
import Container from "react-bootstrap/cjs/Container";
const WasteoMeter = ({showSpecifics, setShowSpecifics, allPrograms, totalAmount, total,setTotal}) => {
    const click = e => {
        e.preventDefault()
        if (showSpecifics === true) {
            setShowSpecifics(false)
        } else setShowSpecifics(true)
    }
    const formatter = new Intl.NumberFormat('en-GB')
    let div = formatter.format(totalAmount)
    setTotal(div)
    return (
        <Container style={{padding:'15px 0', boxShadow:'-15px 15px lightslategray', maxWidth:'600px', margin:'5px', textAlign: 'left',backgroundColor: 'white'}} sm={5} xl={12} >
               <Col     >
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
        </Container>
    )
}
export default WasteoMeter;