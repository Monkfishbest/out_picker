import React from 'react'; 
import GameListContainer from './gameListContainer';

const SavedGameContainer = ({savedGames}) => {
    
    return <>
        <GameListContainer games={savedGames}/>
    </>

};

export default SavedGameContainer;
