import React from 'react'; 
import GameListContainer from './gameListContainer';

const GamesContainer = ({recentGames, postGame}) => {    

    return <>
    <p>
        This is some info aobut the recent games, this should be the last 20 matches.
    </p>
        <GameListContainer games={recentGames} postGame={postGame} />
    </>

}
// Note that we should add some more content to this page. 

export default GamesContainer; 
