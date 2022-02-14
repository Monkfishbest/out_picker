import React from 'react'; 
import MissPlayItem from './missPlayItem';
import SaveMissplay from './savemissPlay';

const MissplayInfo = ({game, databaseActions}) => {


    return (
    <>
        <ul>
            {game.missPlays? game.missPlays.map(missplay => <MissPlayItem missplay={missplay}/>) : null}
        </ul>
        <SaveMissplay game={game} postMissplay={databaseActions.postMissplay}/>
    </>
    )

}

// should give some button to make missplays condtionally render. 
export default MissplayInfo; 

