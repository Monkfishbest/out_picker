import React from 'react';
import GameListItem from './gameListItem';


const GameListContainer = ({games, postGame}) => {

    
    return(
    
    <ul>
        {games.map(game => { return <GameListItem game={game} postGame={postGame}/> })}
    </ul>
    
    )    


};

export default GameListContainer;
