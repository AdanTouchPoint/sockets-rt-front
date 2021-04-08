import React, {Fragment,useState, useEffect} from 'react';

const List = ({showSpecifics,setShowSpecifics,allPrograms})=> {

    return(
        <div style={{maxHeight:'200px', background: "#768191", overflow: 'auto',color:'white', fontSize:'25px'}} hidden={showSpecifics}>
           {allPrograms.length > 0 ? allPrograms.map((item,index)=> (
            <ul>
                <li key={index}> {item.programa} $ {item.monto}</li>
            </ul>
        )): null }
        </div>

    )
}

export default List