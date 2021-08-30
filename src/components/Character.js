import React from "react"
import styled from "styled-components"




export default function Character(props){

    const characterDetails = props.props
    
    const newChar = characterDetails.map(i => {
        return (
            <MainDiv>
                <h3>{i.name}</h3>
                <p>Gender: {i.gender}</p>
                <p>Birth Year: {i.birth_year}</p>
                <p>Hair Color: {i.hair_color}</p>
                <p>Eye Color:{i.eye_color}</p>
                <p>Height in cm:{i.height}</p>
            </MainDiv>
        )
    })
    return newChar
} 

const MainDiv = styled.div`
  background-color: #e0dcda;
  margin: 1% 40%;
  padding: 10px;
  border: 1px solid #b0a9a5;
  border-radius: 16px;
`;
