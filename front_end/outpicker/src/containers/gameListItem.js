import React from 'react';
import MissplayInfo from '../components/missplayInfo';
import SaveGame from '../components/saveGame'
import APIConstantsService from '../services/APIConstantsService';

const GameListItem = ({game, postGame}) => {
    
    return (<>
        <li key={game.match_id}>
        <p>Kills:{game.kills}</p>
        <p>Deaths:{game.deaths}</p>
        <p>Match ID:{game.match_id}</p>
        <p>Hero: {APIConstantsService.getHeroName(game.hero_id)}</p>
        <p> Did you win? : {APIConstantsService.didWinMatch(game)}</p>
        </li>
        {game.hasOwnProperty('missPlays') ? <MissplayInfo missplays={game.missPlays} /> : <SaveGame postGame={postGame}/> }
        </>

    )
};

export default GameListItem;

// game.missPlays.map((missplay) => 
//              <ExtenedInfo missplay={missplay}>)