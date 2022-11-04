import React from 'react'; 
import GameListContainer from './gameListContainer';

const GamesContainer = ({games, databaseActions}) => {    

    
    

    return (
    <>
        <GameListContainer games={games} databaseActions={databaseActions} />
    </>
    )

}

export default GamesContainer; 

// TODO: this looks like a redudent component. Could most likey remove this. 
