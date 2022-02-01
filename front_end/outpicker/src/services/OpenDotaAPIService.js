const OpenDotaAPIGamesService = {

    getRecentMatches(){
        
       return fetch('https://api.opendota.com/api/players/38628747/recentMatches')
        .then(res => res.json())
    }

}

export default OpenDotaAPIGamesService; 