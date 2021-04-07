import React, {Fragment,useState, useEffect} from 'react';
import Button from "react-bootstrap/cjs/Button";

const PerHouse = ({totalPerPerson, totalPerHouse}) => {
    return(
        <div>
           <div>
               <h2>Per HouseHold</h2>
               <div>
                   <img/>
                   <h3> $ {totalPerHouse} </h3>
               </div>
           </div>
            <div>
                <h2>Per Person</h2>
                <div>
                    <img/>
                    <h3> $ {totalPerPerson} </h3>
                </div>
            </div>
        </div>
    )
}
export default PerHouse