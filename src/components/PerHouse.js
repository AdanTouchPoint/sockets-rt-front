import React from 'react';
import Col from "react-bootstrap/Col";
const PerHouse = ({totalPerPerson, totalPerHouse}) => {
    return(
<div className={'per'} style={{margin:'18px 0'}}>
           <Col>
               <h2 style={{color:'white'}} >Per HouseHold</h2>
               <div  className={'cantidad1'} >
                   <h3 style={{ alignItems:'center', padding:'33px', marginLeft:'70px'}}> ${totalPerHouse} </h3>
               </div>
           </Col>
        <Col>
            <h2 style={{color:'white'}} >Per Person</h2>
                <div  className={'cantidad2'}>
                    <h3 style={{alignItems:'center',padding:'40px', marginLeft:'50px'}}> ${totalPerPerson} </h3>
                </div>
            </Col>
</div>
    )
}
export default PerHouse