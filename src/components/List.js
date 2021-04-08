import React, {Fragment,useState, useEffect} from 'react';

const List = ({showSpecifics,setShowSpecifics,allPrograms})=> {
    const formatter = new Intl.NumberFormat('en-GB', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0
    })



    return(
        <div style={{maxHeight:'200px', background: "#768191", overflow: 'auto',color:'white', fontSize:'25px'}} hidden={showSpecifics}>
           {allPrograms.length > 0 ? allPrograms.map((item,index)=> (
            <ul>
                <li  style={{padding:'.5 em', margin:'.5em'}} key={index}> {item.programa} { formatter.format(item.monto)}</li>
            </ul>
        )): null }
        </div>

    )
}

export default List