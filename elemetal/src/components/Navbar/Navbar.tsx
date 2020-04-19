import {Link} from 'gatsby'
import React from 'react'
import NavBar, {ElementsWrapper} from 'react-scrolling-nav';
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

// {/* <div id='resume' className='item'>
//             <Link to='#resume' />
//           </div> */}
//   </Flex> */}

const Navbar = (): JSX.Element => {
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
        offset={-80}
        duration={500}
        delay={0}
        height={76}
        backgroundColor="darkslategray"
        coverWidth={1186}
        navWidth={696}
        linkClass="link"
        activeLinkClass="activeLink"
      />
      <div className="container">
        <ElementsWrapper items={navbarItems}>
          <div id='home' className='item'>
            <Link to='#home' />
          </div>
          <div id='about' className='item'>
            <Link to='#about' />
          </div>
          <div id='opensource' className='item'>
            <Link to='#opensource' />
          </div>
          <div id='publications' className='item'>
            <Link to='#publications' />
          </div>
          
          <div id='technologies' className='item'>
            <Link to='#technologies' />
          </div>
        </ElementsWrapper>
      </div>
    </div>
  )
}

export default Navbar
