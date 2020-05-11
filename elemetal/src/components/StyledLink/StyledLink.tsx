import { Link } from 'gatsby';
import React, {ReactNode} from 'react';
import styled from 'styled-components';
import colors from '../utils/colors';
//HOC
//${(props: any) => props.linkColor || colors.defaultLink };
// ${(props: any) => props.hoverColor || colors.defaultHover };
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
  position: relative;
  border-bottom: 2px solid #0abab5;
  text-decoration: none;

  &::before,
  &:after {
    background-color: ghostwhite;
    opacity: 0;
    bottom: -2px;
    content: '';
    height: 2px;
    left: 0;
    position: absolute;
    transform: scaleX(0);
    transition: opacity 0.25s ease-out, transform 0.25s ease-out;
    visibility: hidden;
    width: 100%;
  }

  &:before {
    left: 0;
    top: -0.75rem;
    transform-origin: center left;
  }

  &:after {
    right: 0;
    bottom: -0.75rem;
    transform-origin: center right;
  }

  &:hover, 
  &:focus {
    color: #0abab5;
    transition: color 0.2s ease-out;
  }

  &.active {
    color: #0abab5;
    transition: color 0.2s ease-out;

    &:before, 
    &:after {
      opacity: 1;
      transoform: scaleX(1);
    }
  }

  &:hover:before {
    transform: scaleX(1);
    visibility: visible;
  }
`