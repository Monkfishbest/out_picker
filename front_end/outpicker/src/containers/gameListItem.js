import React from 'react';
import MissplayInfo from '../components/missplayInfo';
import SaveGame from '../components/saveGame'
import APIConstantsService from '../services/APIConstantsService';

import styled from 'styled-components';

const MatchItem = styled.ul`
    // removes bs default styling
    list-style-type: none;
    // sets the width of the content of the ul to be 80% of 
    width: 80%;
    // adds padding of 60px around the content of the ul
    padding: 0px;
    // sets the minimum space needed to seprate this element for those around it, auto allows it to be centred
    margin: auto;
    // sets a boarder to wrap the UL 
    border: 2px black solid;


`

const MatchTitle = styled.h3`
    // sets background colour based of the match was won on note
    background-color: ${props => props.didWin ? "#5AFF15" : "#FC6471" };
    // increases font size
    font-size: 30px;
    // increases font
    font-weight: 700;
    // removes the min "personal space" of element, allowing it to get comfy with the other elements in the list 
    margin: 0px;
`

const MatchDetail = styled.li`
    font-size: 30px;
    font-weight: 700;
    margin: 0px;
    border: solid black ;
    border-top-width: 2px;
    border-bottom-width: ${props => props.bottomSection ? "4px" : "2px"};
    

    /* (for the top border, right border, bottom border, and the left border). */


`


const GameListItem = ({game, databaseActions}) => {

    // is this right or wrong? should it just be in the return? 
    const didWin = APIConstantsService.didWinMatch(game)
    
    return (
    <>
        <MatchItem>
                <MatchDetail><MatchTitle didWin={didWin}>Match ID:{game.match_id}</MatchTitle></MatchDetail>
                <MatchDetail>Hero: {APIConstantsService.getHeroName(game.hero_id)}</MatchDetail>
                <MatchDetail>Kills:{game.kills}</MatchDetail>
                <MatchDetail>Deaths:{game.deaths}</MatchDetail>
                <MatchDetail bottomSection={true}>Assists:{game.assists}</MatchDetail>
            {game.hasOwnProperty('missPlays') ? <MissplayInfo game={game} databaseActions={databaseActions}/> : <SaveGame databaseActions={databaseActions} game={game}/>}
        </MatchItem>
    </>

    )
};

export default GameListItem;
