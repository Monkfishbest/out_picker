import React from 'react';
import styled from 'styled-components';

import GameListItem from './gameListItem';



const GameList = styled.section`
        margin: 30px;
`

const GameListContainer = ({games, databaseActions}) => {

    
    return(
        <GameList>
            {games.map(game => { return <GameListItem game={game} databaseActions={databaseActions} key={game.match_id} /> })}
        </GameList>
    
    )    


};

export default GameListContainer;
