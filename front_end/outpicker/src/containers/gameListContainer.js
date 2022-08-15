import React from 'react';
import GameListItem from './gameListItem';


const GameListContainer = ({games, databaseActions}) => {

    
    return(
        <ul>
            {games.map(game => { return <GameListItem game={game} databaseActions={databaseActions} key={game.match_id}/> })}
        </ul>
    
    )    


};

export default GameListContainer;
