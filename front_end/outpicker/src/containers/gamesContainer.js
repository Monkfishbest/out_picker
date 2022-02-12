import React from 'react'; 
import GameListContainer from './gameListContainer';

const GamesContainer = ({games, databaseActions}) => {    

    return <>
    <p>
        This is some info aobut the recent games, this should be the last 20 matches.
    </p>
        <GameListContainer games={games} databaseActions={databaseActions} />
    </>

}
// Note that we should add some more content to this page. 

export default GamesContainer; 
