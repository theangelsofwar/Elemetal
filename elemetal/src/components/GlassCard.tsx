import React from 'react';
import styled from 'styled-components'
import { Link } from 'gatsby';
//for medium artcles
import Image from './image';
import Glow  from 'hoverglow';

const StyledGlass = styled.div`
  border: 3px ridge rgba(238, 239, 249, 0.926);
  display: inline-block;
  justify-content: center;
  color: darkslategray;
  align-items: center;
  align-content: center;
  border-radius: 42px;
  margin: auto;
  padding: 1em;
  box-sizing: border-box;
  background-image: linear-gradient(to bottom right, rgba(255, 255, 255, 0.83), rgba(255, 255, 255, 0.83), rgba(255, 255, 255, 0.83), rgba(112, 98, 119, 0.603));
  .projectLink {
    color: lightsteelblue;
    &:hover {
      color: deeppink;
      cursor: pointer;
    }
  }
`

const Title = styled.h2`
  color: darkslategray;
  font-size: 1.3em;
  font-weight: 2px;
  margin: 1.1em;
  padding: .5em;
  @media (max-width: 500px) {
    font-size: .75rem;
  }
`


const StyledPhoto = styled.img`
{
  width: 76vw;
  height: 30vh;
  margin: auto;
  object-fit: cover;
  border-radius: 66px;
  border: 3px ridge rgba(222, 200, 255, .23);
}  
`

const Description = styled.p`
  color: darkslategray;
  font-weight: 2px;
  margin: auto;
  padding: 1.1em;
  @media (max-width: 500px) {
    font-size: .75rem;
  }
`

interface Props {
  title: String
  description: String
  photo: any
  link: any
}
{/* <Link 
aria-label={`Continue reading: ${title}`}
to={`/blog${slug}`}
state={{ prevPath: location.pathname }}
>
  {title}
</Link> */}

const GlassCard = ({ title, description, photo, link }: Props): JSX.Element => (
 
  <StyledGlass>
  <Title> {title} </Title>
  {link && (
        <p
          className='glasscard'
          onClick={() => window.open(`${link.url}`, "_blank")} 
          >
          <StyledPhoto src={photo} /><br />
          <center> {link.title} </center>

        </p>
      )}
      <Description> {description} </Description>
    </StyledGlass>
  );

export default GlassCard;