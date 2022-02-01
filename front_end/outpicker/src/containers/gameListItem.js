import React from 'react';
import MissplayInfo from '../components/missplayInfo';
import APIConstantsService from '../services/APIConstantsService';

const GameListItem = ({game}) => {
    
    return (<>
        <li key={game.match_id}>
        <p>Kills:{game.kills}</p>
        <p>Deaths:{game.deaths}</p>
        <p>Match ID:{game.match_id}</p>
        <p>Hero: {APIConstantsService.getHeroName(game.hero_id)}</p>
        <p> Did you win? : {APIConstantsService.didWinMatch(game)}</p>
        </li>
        {!game.hasOwnProperty('missPlays') ? null : <MissplayInfo missplays={game.missPlays} />}
        </>

    )
};

export default GameListItem;

// game.missPlays.map((missplay) => 
//              <ExtenedInfo missplay={missplay}>)