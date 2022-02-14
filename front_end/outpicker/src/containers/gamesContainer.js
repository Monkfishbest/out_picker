import React from 'react'; 
import GameListContainer from './gameListContainer';

const GamesContainer = ({games, databaseActions}) => {    

    return <>
    <p>
            this is the games container 
    </p>
        <GameListContainer games={games} databaseActions={databaseActions} />
    </>

}
// Note that we should add some more content to this page. 

export default GamesContainer; 
