import React from 'react'; 
/*
Button save styling adapted from 
https://codepen.io/antronic/pen/NpQYRB 
credit goes to Jirachai Chansivanon 
*/


const saveGame = ({game, postGame }) => {
    
    return (
            <button onClick={postGame}> press me </button>
    )
}
    

export default saveGame;

// This will have the functionaily to save/add comments to a game 