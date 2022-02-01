import React from 'react';
import GameListItem from './gameListItem';


const GameListContainer = ({games}) => {

    
    return(
    
    <ul>
        {games.map(game => { return <GameListItem game={game}/> })}
    </ul>
    
    )    


};

export default GameListContainer;
