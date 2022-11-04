import React, {useState, useEffect} from 'react'; 
import styled from 'styled-components';

import About from '../components/about';
import Header from '../components/header';
import GamesContainer from './gamesContainer';
import DBService from '../services/DBService';
import OpenDotaAPIGamesService from '../services/OpenDotaAPIService';


const VeiwButton = styled.button`
    /* sets background colour */
    background-color: #FC6471;
    /* sets text clour */
    color: #F1D302;
    padding: 5px 10px 5px 10px; 
    font-size: 16px;
    border-radius: 5px 5px 5px 5px;
    margin: 5px 10px;
    height: 60px;
`



const OutpickerContainer = () => {

    const [recentGames, setRecentGames] = useState(null)
    const [savedGames, setSavedGames] = useState(null)
    const [showVeiw, setShowVeiw] = useState("home")
    
    
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
                const copyOfSavedGames = [... savedGames]
                copyOfSavedGames[indexToUpdate].missPlays.push(missPlay)
                return copyOfSavedGames
            })
            .then(copyOfSavedGames => setSavedGames(copyOfSavedGames))
        },

        isSavedAlready(gameToBeSaved){
            const isSaved = savedGames.some((game) => {
                return game.match_id === gameToBeSaved.match_id
            })
            return isSaved
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

    // based of 'showVeiw' peice of state will determain what page will displayed to the user, buttons allow changing of this particular bit of state, this function simply handles each. 
    const viewRenderer = (view) => {
        if(view === "home"){
            return <About setShowVeiw={setShowVeiw} VeiwButton={VeiwButton}/>
        } else if (view === "recent"){
            return <GamesContainer games={recentGames} databaseActions={databaseActions} />
        } else if (view === "saved") {
            return <GamesContainer games={savedGames} databaseActions={databaseActions} />
        } else {
            return null
        }
    } 



    return( 
    <> 
        <Header setShowVeiw={setShowVeiw} VeiwButton={VeiwButton} showVeiw={showVeiw}></Header>
        {recentGames && savedGames ? viewRenderer(showVeiw) : <p> LOADING PLS WAIT </p>}
    </>
    )
}


export default OutpickerContainer; 



