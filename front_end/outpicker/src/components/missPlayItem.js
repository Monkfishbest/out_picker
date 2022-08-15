import React from 'react'; 


const MissPlayItem = ({missplay, id}) => {

    return <>
        <li key={id}>
            <p> Type: {missplay.missPlayType} </p>
            <p> Severtiy: {missplay.missPlaySeverity}</p>
            <p> Description: {missplay.description} </p>
            <p> Adjustment: {missplay.adjustment}</p>
            <p> Forced misstake?: {missplay.forced.toString()}</p>
        </li>
    </>

}

export default MissPlayItem


