import classNames from 'classnames';
import React, { ReactNode } from 'react';
import styled from 'styled-components';

import colors from '../utils/colors';

const StyledPanelContainer = styled.section`
  background-color: ${colors.secondary.light0};
  box-shadow: rgba(222,222,222,.6) 0px 3px 10px;
  @media (max-width: 45em) {
    margin: 1rem !important;
    padding: 1rem 2rem !important;
  }
`;

interface Props {
  children: ReactNode
  className?: string
  maxWidth?: number
}

const StyledPanel = ({ children, className, maxWidth=9 }: Props): JSX.Element => (
  <StyledPanelContainer
    className={classNames(
      `br center mv5-ns mw7 mw${maxWidth}-ns pa5-ns`,
      className,
    )}
    style={{ transition: 'all 0.5s ease-in-out' }}
  >
    {children}
  </StyledPanelContainer>
)

export default StyledPanel;