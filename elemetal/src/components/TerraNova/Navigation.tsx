import styled from 'styled-components';

export const Navbar = styled.div`
  align-items: center;
  z-index: 999;
  padding: 15px 0px;
  justify-content: center;
  color: darkslategray;
  `

export const NavWrapper =  styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  flex: 1 1 0%;
  padding: 0 50px;
`

export const NavBrand = styled.div`
  flex: 1 1 0%;
  color: paleturquoise;
`

export const Nav = styled.nav`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
`

export const NavItem = styled.ul`
  margin: 0;
  padding: 0;
  font-size: 1em;
  list-style: none;
  display: flex;
  justify-content: center;
  margin-left: 15px;
`

export const Item = styled.li`
  font-size: 1rem;
  color: mintcream;
  margin-left: 2rem;
  cursor: pointer;
  &:hover {
    color: mediumaquamarine;
  }
`
export const NavLink = styled.a`
  text-decoration: none;
`


