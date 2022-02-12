import React from 'react';
import GameListItem from './gameListItem';


const GameListContainer = ({games, postGame, handleCLickSave}) => {

    
    return(
    
    <ul>
        {games.map(game => { return <GameListItem game={game} postGame={postGame}/> })}
    </ul>
    
    )    


};

export default GameListContainer;
