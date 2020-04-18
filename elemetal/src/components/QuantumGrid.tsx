/* tslint:disable */

import React from 'react';
import {
  NavWrapper, 
  Navbar,
  Nav, 
  NavItem,
  Item,
  NavBrand,
  NavLink
} from './TerraNova/Navigation';
import ScrollIntoView from 'react-scroll-into-view';


const QuantumGrid = (props: any): JSX.Element => (
  <React.Fragment>
  <Navbar>
    <NavWrapper>
      <NavBrand>
        <Nav>
          <NavItem>
            <ScrollIntoView selector="#about">
              <Item>
                <NavLink
                  onClick={() => 
                  (window.location.href="#about")
                  }>
                    {'About'}
                </NavLink>
              </Item>
            </ScrollIntoView>

            <ScrollIntoView selector="#opensource">
              <Item>
                <NavLink
                  onClick={() => 
                  (window.location.href="#opensource")
                  }>
                    {'Open Source'}
                </NavLink>
              </Item>
            </ScrollIntoView>

            <ScrollIntoView selector="#publications">
              <Item>
                <NavLink
                  onClick={() => 
                  (window.location.href="#publications")
                  }>
                    {'Publications'}
                </NavLink>
              </Item>
            </ScrollIntoView>

            <ScrollIntoView selector="#resume">
              <Item>
                <NavLink
                  onClick={() => 
                  (window.location.href="#resume")
                  }>
                    {'Resume'}
                </NavLink>
              </Item>
            </ScrollIntoView>

            <ScrollIntoView selector="#technologies">
              <Item>
                <NavLink
                  onClick={() => 
                  (window.location.href="#technologies")
                  }>
                    {'Technologies'}
                </NavLink>
              </Item>
            </ScrollIntoView>

            <ScrollIntoView selector="#contact">
              <Item>
                <NavLink
                  onClick={() => 
                  (window.location.href="#contact")
                  }>
                    {'Contact'}
                </NavLink>
              </Item>
            </ScrollIntoView>

          </NavItem>
        </Nav>
      </NavBrand>
    </NavWrapper>
  </Navbar>
  </React.Fragment>
);

export default QuantumGrid;





