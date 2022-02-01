import React from 'react'; 
import MissPlayItem from './missPlayItem';

const MissplayInfo = ({missplays}) => {

   
    return (
    <ul>
    {missplays.map(missplay => <MissPlayItem missplay={missplay}/>)}
    </ul>
    )

}

// should give some button to make missplays condtionally render. 
export default MissplayInfo; 

