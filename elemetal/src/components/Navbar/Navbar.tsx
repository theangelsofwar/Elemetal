import {Link} from 'gatsby'
import React from 'react'
import {Box, Flex} from 'rebass'

const Navbar = () => (
  <>
    <Flex px={2} color="mintcream" bg="gainsboro" alignItems="center">
      <Box mx="auto" />
      <Link to="/"> Home </Link>
      <Link to="/about"> About </Link>
      <Link to="/opensource"> Open Source Projects</Link>
      <Link to="/publications"> Publications </Link>
      <Link to="/resume"> Resume </Link>
      <Link to="/technologies"> Technologies</Link>
      <Link to="/contact"> Contact </Link>
    </Flex>
  </>
)

export default Navbar
