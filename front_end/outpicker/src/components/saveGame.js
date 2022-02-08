import React from 'react'; 
//https://medium.com/@paulryan17/create-a-kickass-save-button-in-react-2e0fa725f0ba

const saveGame = ({game, postGame }) => {
    
    return (
            <button onClick={postGame}> press me </button>
    )
}
    

export default saveGame;

// This will have the functionaily to save/add comments to a game 