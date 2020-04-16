import {Link} from 'gatsby'
import React from 'react'
import NavBar, {ElementsWrapper} from 'react-scrolling-nav'
// import {Box, Flex} from 'rebass'
// {/* <Flex px={2} color="mintcream" bg="gainsboro" alignItems="center">
//     <Box mx="auto" />
//     <Link to="/"> Home </Link>
//     <Link to="/about"> About </Link>
//     <Link to="/opensource"> Open Source Projects</Link>
//     <Link to="/publications"> Publications </Link>
//     <Link to="/resume"> Resume </Link>
//     <Link to="/technologies"> Technologies</Link>
//     <Link to="/contact"> Contact </Link>
//   </Flex> */}

const Navbar = () => {
  const navbarItems = [
    {
      label: 'Home',
      target: 'home',
    },
    {
      label: 'About',
      target: 'about',
    },
    {
      label: 'OpenSource',
      target: 'opensource',
    },
    {
      label: 'Publications',
      target: 'publications',
    },
    {
      label: 'Resume',
      target: 'resume',
    },
    {
      label: 'Technologies',
      target: 'technologies',
    },
    {
      label: 'Contact',
      taget: 'contact',
    },
  ]

  return (
    <div>
      <NavBar
        items={navbarItems}
        offset={-40}
        duration={500}
        delay={0}
        height={76}
        backgroundColor="darkslategray"
        coverWidth={1086}
        navWidth={696}
        linkClass="link"
        activeLinkClass="activeLink"
      />
      <div className="container">
        <ElementsWrapper items={navbarItems}>
          <div name="home" className="item">
            {' '}
            Home{' '}
          </div>
          <div name="about" className="item">
            {' '}
            About{' '}
          </div>
          <div name="opensource" className="item">
            {' '}
            Open Source{' '}
          </div>
          <div name="publications" className="item">
            {' '}
            Publications
          </div>
          <div name="resume" className="items">
            {' '}
            Resume{' '}
          </div>
          <div name="technologies" className="item">
            {' '}
            Technologies{' '}
          </div>
        </ElementsWrapper>
      </div>
    </div>
  )
}

export default Navbar
