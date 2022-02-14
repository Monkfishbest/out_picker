import React, {useState, useEffect} from 'react'; 
import About from '../components/about';
import DBService from '../services/DBService';

import OpenDotaAPIGamesService from '../services/OpenDotaAPIService';
import GamesContainer from './gamesContainer';


const OutpickerContainer = () => {

    const [recentGames, setRecentGames] = useState([])
    const [savedGames, setSavedGames] = useState([])
    
    // Loads recent games and saved games from API and DB. 
    useEffect( () => {

        try {
            OpenDotaAPIGamesService.getRecentMatches()     
            .then(games => setRecentGames(games))    
        } catch (error) {
            return new Error(error.printStackTrace())
        }
        
        DBService.getSavedGames()
        .then(savedGames => setSavedGames(savedGames))
        
    }, [])



    const databaseActions = {

        postGame(game){
            DBService.saveGame(game)
            .then(savedGame => setSavedGames([...savedGames, savedGame]))
        },

        postMissplay(missplay){
            DBService.saveMissplay(missplay)
            .then(missPlay =>  {
                const indexToUpdate = savedGames.findIndex(game => {game.id = missPlay.game.id})
                const copyOfSavedGames = savedGames;
                copyOfSavedGames[indexToUpdate].missPlays.push(missPlay);
                setSavedGames[copyOfSavedGames];
            })
        }
    }

    return( 
    <>
        <About/>
        {!recentGames ? null : <GamesContainer games={recentGames} databaseActions={databaseActions}/>} 
        {!savedGames ? null : <GamesContainer games={savedGames} databaseActions={databaseActions} />}

    </>
    )
}

// condition ? expr_if_true : expr_if_false

export default OutpickerContainer; 
