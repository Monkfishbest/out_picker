import React, {useState, useEffect} from 'react'; 
import About from '../components/about';
import DBService from '../services/DBService';

import OpenDotaAPIGamesService from '../services/OpenDotaAPIService';
import GamesContainer from './gamesContainer';


const OutpickerContainer = () => {

    const [recentGames, setRecentGames] = useState([])
    const [savedGames, setSavedGames] = useState([])
    const [savedMissplay, setSavedMissplay] = useState('')
    
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
            .then(savedGame => {
                savedGame.missPlays = []
                setSavedGames([...savedGames, savedGame])})
        },

        postMissplay(missplay){
            DBService.saveMissplay(missplay)
            .then(missPlay => setSavedMissplay(missPlay))

            const copyOfSavedGames = savedGames
            console.log(copyOfSavedGames)
            const indexToUpdate = copyOfSavedGames.findIndex(game => game.id === savedMissplay.game.id)
            copyOfSavedGames[indexToUpdate].missPlays.push(savedMissplay)
        },

        deleteGame(game){
            DBService.deleteGame(game.id)
            .then(res => console.log(res))
            
            setSavedGames(savedGames.filter(savedGame => savedGame.id !== game.id))
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



