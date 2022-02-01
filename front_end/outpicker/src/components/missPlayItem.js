import React from 'react'; 


const MissPlayItem = ({missplay}) => {

    return <>
        <li key={missplay.id}>
            <p> Type: {missplay.missPlayType} </p>
            <p> Severtiy: {missplay.missPlaySeverity}</p>
            <p> Description: {missplay.description} </p>
            <p> Adjustment: {missplay.adjustment}</p>
            <p> Forced misstake?: {missplay.forced.toString()}</p>
        </li>
    </>

}

export default MissPlayItem


