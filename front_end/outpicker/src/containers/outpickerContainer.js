import React, {useState, useEffect} from 'react'; 
import About from '../components/about';
import DBService from '../services/DBService';

import OpenDotaAPIGamesService from '../services/OpenDotaAPIService';
import RecentGamesContainer from './recentGamesContainer';
import SavedGameContainer  from './savedGamesContainer';


const OutpickerContainer = () => {

    const [recentGames, setRecentGames] = useState(null)
    const [savedGames, setSavedGames] = useState(null)

    
    // Loads recent games and saved games from API and DB. 
    useEffect( () => {

        // try {
        //     OpenDotaAPIGamesService.getRecentMatches()     
        //     .then(games => setRecentGames(games))    
        // } catch (error) {
        //     return new Error(error.printStackTrace())
        // }
        
        DBService.getSavedGames()
        .then(savedGames => setSavedGames(savedGames))
        
    }, [])


    const saveGame = (game) => {
        DBService.saveGame(game)
        .then(savedGame => setSavedGames([...savedGames, savedGame]))
    }

    return( 
    <>
        <About/>
        {!recentGames ? null : <RecentGamesContainer recentGames={recentGames} postGame={saveGame} />} 
        {!savedGames ? null : <SavedGameContainer savedGames={savedGames} />}
    </>
    )
}

// condition ? expr_if_true : expr_if_false

export default OutpickerContainer; 
