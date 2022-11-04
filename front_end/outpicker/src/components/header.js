import React from 'react'; 
import styled from 'styled-components'

const OutPickerHeader = styled.header`
    display: flex; 
    /* checks if the VeiwButton prop is passed to the component and adjusts the title spacing acorddingly  */
    justify-content:  ${props => props.children[1] === null ? "center" : "space-between"};
    color: #F1D302; 
    padding: 10px 20px;
    align-items: center;

`

const Title = styled.h1`
    border: #61E8E1 solid 5px;
    padding: 20px;
    margin: 30px 30px 30px 60px;
`


const Header = ({setShowVeiw, VeiwButton, showVeiw}) =>{


    const handleChangeVeiw = (event) => {
        setShowVeiw(event.target.id)
    }

    // Should this be in the above component and passed down?
    const handleVeiw = (showVeiw) => {
        if (showVeiw === "home") {
            return (
                null 
            )
        } else if (showVeiw === "recent"){
            return (
            <>
                <VeiwButton onClick={handleChangeVeiw} id="saved">Show Saved Games</VeiwButton> 
                <VeiwButton onClick={handleChangeVeiw} id="home">Show Home Page</VeiwButton>
            </>
                )

        } else if (showVeiw === "saved"){
            return (
            <>
                <VeiwButton onClick={handleChangeVeiw} id="recent">Show Recent Games</VeiwButton> 
                <VeiwButton onClick={handleChangeVeiw} id="home">Show Home Page</VeiwButton>
            </>
            )
        }

    }


    return (
        <OutPickerHeader>
            <Title>OutPicker - because knowing is half the battle</Title>
            {handleVeiw(showVeiw)}
        </OutPickerHeader>
    )



}

export default Header