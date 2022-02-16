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
            .then(missPlay =>{return savedGames.findIndex(game => game.id === missPlay.game.id)} )
            .then((indexToUpdate) => {
                console.log("INDEX TO UPDATE")
                console.log(indexToUpdate)
                const copyOfSavedGames = savedGames
                console.log("copy of saved games 1 ")
                console.log(copyOfSavedGames)
                copyOfSavedGames[indexToUpdate].missPlays.push(savedMissplay)
                console.log("copy of saved games 2")
                console.log(copyOfSavedGames)
                setSavedGames(copyOfSavedGames)
            })
        },

        deleteGame(game){
            DBService.deleteGame(game.id)            
            setSavedGames(savedGames.filter(savedGame => savedGame.id !== game.id))
        },

        deleteMissPlay(missPlay){
            DBService.deleteMissplay()
            const copyOfSavedGames = savedGames
            const indexToUpdate = copyOfSavedGames.findIndex(game => game.id === missPlay.game.id)
            copyOfSavedGames[indexToUpdate].missPlays.splice(indexToUpdate, 1)
            setSavedGames(copyOfSavedGames)
        }
    }



    return( 
    <>
        <About/>
        {!recentGames ? null : <GamesContainer games={recentGames} databaseActions={databaseActions}/>} 
        {!savedGames ? null : <GamesContainer games={savedGames} databaseActions={databaseActions} />}
        <p>this part works (outpicker container)</p>
    </>
    )
}

// condition ? expr_if_true : expr_if_false

export default OutpickerContainer; 



