/* tslint:disable */

import React from 'react';
// import { Download } from 'react-feather';
import styled from 'styled-components';

import StyledLink from '../StyledLink';
import colors from '../utils/colors';


interface Props {
  link: string,
  title: string
}
const PortfolioItem = ({ link, title }: Props):JSX.Element => (
  <li className="f4 portfolio-item flex items-center mb2">
    <a href={link}>
      {title}
    </a>
    <StyledLink className="fw6 f4" href={link}>
      {title}
    </StyledLink>
  </li>
)

export default PortfolioItem;