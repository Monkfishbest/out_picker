import React from 'react';
import styled from 'styled-components'

const IntroParagraph = styled.p`
    padding: 20px; 
    font-size: 20px;
    font-weight: 900;
    margin: 15px 20px 15px;
`

const SubTitle = styled.h2`
    margin-bottom: 10px;
`

const Intro = styled.section`
    color: #F1D302; 
    display: flex; 
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const Buttons = styled.div`
    margin: 5px 20px 15px;
`

const About = ({setShowVeiw, VeiwButton}) => {


    // Sets what veiw should be rendered and displayed based off the id of the button being pressed.
    const handleChangeVeiw = (event) => {
        setShowVeiw(event.target.id)
    }

    return( 
        <>
            <Intro>
                    <SubTitle>Welcome!</SubTitle>
                    <IntroParagraph>
                        Hello and welcome to my stats and mistake tracker for the game DOTA 2&#8482; owned by Valve&#8482;. This project was orginally created to get a better handle on react for my current job teaching at CodeClan&#8482; and then to further my skills in desigin and CSS
                    </IntroParagraph>
                    <Buttons>
                        <VeiwButton  onClick={handleChangeVeiw} id="recent">Show Recent Games</VeiwButton>
                        <VeiwButton  onClick={handleChangeVeiw} id="saved">Show Saved Games</VeiwButton>
                    </Buttons>
            </Intro>
        </>
    )
}

export default About; 

