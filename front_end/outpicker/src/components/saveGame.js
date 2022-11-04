import React, {useState} from 'react'; 

import styled from 'styled-components';

const SaveButton = styled.button`
      /* sets background colour based off if its been saved already or not*/
      background-color: ${props => props.showButton ? "#61E8E1" : "grey"};
      /* sets text clour */
      color: #5E6973;
      font-size: 20px;
      padding: 10px;
      
`

const saveGame = ({game, databaseActions}) => {


      const handleClick= (event) => {
            event.preventDefault()
            databaseActions.postGame(game)
            
      }

      return (
      <>
           {!databaseActions.isSavedAlready(game) ?  <SaveButton showButton={true} onClick={handleClick} > Save Game </SaveButton> : <SaveButton showButton={false} > Save Game </SaveButton>} 
      </>
      )
}


export default saveGame;
