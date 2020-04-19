/* tslint:disable */
import React from 'react';
import styled from 'styled-components';
import Image from './image';
//nested styled component
// box-shadow: 0 1px 4px rgba(0, 0, 0, .19), 0 1px 1px rgba(0, 0, 1, .24);
const StyledContainer = styled.div`
  border: 17px ridge rgba(43, 221, 168, 0.406);
  display: inline-block;
  justify-content: center;
  align-items: center;
  border-radius: 42px;
  padding: 17px;
  overflow-y: scroll;
  box-sizing: border-box;
  background: rgba(54, 32, 65, 0.782);
  .projectLink {
    color: lightsteelblue;
    &:hover {
      color: deeppink;
      cursor: pointer;
    }
  }
`
const Title = styled.h2`
  color: aliceblue;
  font-weight: 300;
  position: center;
  padding: 6px;
  margin: auto;
  @media (max-width: 500px) {
    font-size: 1rem;
  }
`

const Description = styled.p`
  color: ghostwhite;
  font-weight: 300;
  margin: auto;
  padding: 2px;
  @media (max-width: 500px) {
    font-size: .75rem;
  }
`

const StyledPhoto = styled.img`
  width: 96%;
  height: 40vh;
  max-height: 40vh;
  margin: auto;
  object-fit: cover;
  border-radius: 66px;
  border: 6px ridge rgba(222, 200, 255, .23);  
`


interface Props {
  title: String
  description: String
  photo: String
  link: any
}

const Card = ({ title, description, photo, link }: Props): JSX.Element => (
  <StyledContainer>
    <StyledPhoto src={photo} />
    <Title> {title} </Title>
    <Description> {description} </Description>
    {link && (
      <p 
        className="projectLink"
        onClick={() => window.open(`${link.url}`, "_blank")}
      >
        {link.title}
      </p>
    )}
  </StyledContainer>
); 

export default Card;