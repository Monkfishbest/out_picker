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
    useEffect(() => {

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
            .then(missPlay =>  {
                const indexToUpdate = savedGames.findIndex(game => game.id === missPlay.game.id)
                const copyOfSavedGames = savedGames
                copyOfSavedGames[indexToUpdate].missPlays.push(missPlay)
                // Does seem to push the missplay to the end of the missplays array 
                console.log(copyOfSavedGames)
                return copyOfSavedGames
            })
            .then(copyOfSavedGames => setSavedGames(copyOfSavedGames))
        },

        editMissPlay(){

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



// postMissplay(missplay){
//     DBService.saveMissplay(missplay)
//     .then(missPlay =>{
//         console.log("missplay")
//         console.log(missPlay)
//         const indexToUpdate = savedGames.findIndex(game => game.id === missPlay.game.id)
//         const copyOfSavedGames = savedGames
//         console.log("copy of saved games before push")
//         console.log(copyOfSavedGames)
//         copyOfSavedGames[indexToUpdate].missPlays.push(missPlay)
//         console.log("copy of saved games after push")
//         console.log(copyOfSavedGames)
//         return copyOfSavedGames
//     })
//     .then((copyOfSavedGames) => {setSavedGames(copyOfSavedGames) })
// },
