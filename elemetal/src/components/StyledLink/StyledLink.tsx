import { Link } from 'gatsby';
import React, {ReactNode} from 'react';
import styled from 'styled-components';
import colors from '../utils/colors';


interface Props {
  children: ReactNode | string
  className?: string
  hoverColor?: string
  href?: string
  linkColor?: string

}
 

const StyledLink = (props: Props): JSX.Element => {
  const { href, children, ...rest} = props;

  if(!href){
    return <span {...rest}> {children}</span>
  }
  
  return (
    <Link to={href} className={rest?.className}>
      {children}
    </Link>
  )
}

export default styled(StyledLink)`
  border-bottom: 2px solid ${(props) => props.linkColor || colors.defaultLink };
  position: relative;
  text-decoration: none;

  &::before {
    background-color: ${(props) => props.hoverColor || colors.defaultHover };
    bottom: -2px;
    content: '';
    height: 2px;
    left: 0;
    position: absolute;
    transform: scaleX(0);
    transition: all .25s ease-in-out 0s;
    visibility: hidden;
    width: 100%;
  }
  &:hover:before {
    transform: scaleX(1);
    visibility: visible;
  }
`