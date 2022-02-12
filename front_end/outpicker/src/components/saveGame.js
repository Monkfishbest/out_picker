import React from 'react'; 

const saveGame = ({game, postGame}) => {
    
   const handleClick= (event) => {
        event.preventDefault()
        postGame(game)
   }

    return (
    <>
    <p>this is the save game componenet </p>
          <button onClick={handleClick}> press me </button>
    </>
    )
}
    

export default saveGame;

// Can we define the handle click function in a parent componenet?  
// This will have the functionaily to save/add comments to a game 