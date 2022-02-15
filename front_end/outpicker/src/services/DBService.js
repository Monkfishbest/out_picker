const DBService = {

    getSavedGames(){
        return fetch('http://localhost:8080/games')
        .then(res => res.json())
    },


    saveGame(game){
        return fetch('http://localhost:8080/games', {
            method: 'POST',
            body: JSON.stringify(game),
            headers:{
                'Content-Type':'application/json'
            }
        })
        .then(res => res.json())
    },

    saveMissplay(missplay){
        return fetch('http://localhost:8080/missplays', {
            method: 'POST',
            body: JSON.stringify(missplay),
            headers:{
                'Content-Type':'application/json'
            }
        })
        .then(res => res.json())
    },

    deleteGame(id){
        return fetch(`http://localhost:8080/games/${id}`, {
            method: 'DELETE',
            headers:{
                'Content-Type':'application/json'
            }
        })
    }

}


export default DBService; 