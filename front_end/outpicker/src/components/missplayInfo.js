import React from 'react'; 
import MissPlayItem from './missPlayItem';
import SaveMissplay from './savemissPlay';

const MissplayInfo = ({game, databaseActions}) => {


        const handleDelete= () => {
        databaseActions.deleteGame(game)
    }

    return (
    <>
        <ul>
            {game.missPlays? game.missPlays.map(missplay => <MissPlayItem missplay={missplay}/>) : null}
        </ul>
        <SaveMissplay game={game} postGame={databaseActions.postGame}/>
        <button onClick={handleDelete}> Delete Game</button> 
    </>
    )

}

// should give some button to make missplays condtionally render. 
export default MissplayInfo; 

