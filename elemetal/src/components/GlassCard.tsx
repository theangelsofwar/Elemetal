import React from 'react';
import styled from 'styled-components'
import { Link } from 'gatsby';
//for medium artcles


{/* <Link 
aria-label={`Continue reading: ${title}`}
to={`/blog${slug}`}
state={{ prevPath: location.pathname }}
>
  {title}
</Link> */}
const Title = styled.h3`
  margin: auto;
`;

const Content = styled.p`
  margin: 0;
`;

const GlassCard = (): JSX.Element => {

  return (
    <React.Fragment>
      <div id='glassanimals' >
        <br />
       
      </div>

    </React.Fragment>
  )
}

export default GlassCard;