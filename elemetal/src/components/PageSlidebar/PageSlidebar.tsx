/* tslint:disable */
import { Link } from 'gatsby';
import SEO from '../seo';
import React from 'react';
import { scaleRotate as Slider } from 'react-burger-menu';
import TransitionLink from 'gatsby-plugin-transition-link';
import Layout from '../layout';
// import '../../carraway/glow/glow.scss';
import './styless.scss';
//Link to="/"
//move this to be nested in the layout

const PageSlidebar = (): JSX.Element => {

  return (
    <div id='scaleRotate' className='pageslidebar'>
    <Slider pageWrapId={'page-wrap'} outerContainerId={'carraway'} customBurgerIcon={ <img src={require("../../images/angelsOfWar.png")} alt=""/> }>
      <a id='home' className='menu-item' href='/'> <span className='gradient'>  </span>  <TransitionLink to='/' activeClass='active' className='transition-link'> Home </TransitionLink>  </a>
      <a id='bio' className='menu-item' href= '/bio/'> <span className='gradient'>  </span>  <TransitionLink to='/bio/' activeClass='active' className='transition-link'> Bio  </TransitionLink> </a>
      <a id='resume' className='menu-item' href='/Resume/'> <span className='gradient'>  </span>  <TransitionLink to='/Resume/' activeClass='active' className='transition-link'> Resume </TransitionLink> </a>
      <a id='opensourcegrid' className='menu-item' href='/opensourceGrid/'> <span className='gradient'> </span> <TransitionLink to='/opensourceGrid/' activeClass='active' className='transition-link'> Open Source </TransitionLink> </a>
      <a id='publicationsgrid' className='menu-item' href='/publicationsGrid/'> <span className='gradient'>  </span>  <TransitionLink to='/publicationsGrid/' activeClass='active' className='transition-link'> Publications </TransitionLink> </a>
      <a id='contactinqueries' className='menu-item' href='/contactInqueries/'> <span className='gradient'>  </span>  <TransitionLink to='/contactInqueries/' activeClass='active' className='transition-link'> Query </TransitionLink> </a>
      <a id='systemsettings' className='menu-item' href='/systemSettings/'> <span className='gradient'>   </span> <TransitionLink to='/systemSettings/' activeClass='active' className='transition-link'> System Settings </TransitionLink> </a>
      <a id='archives' className='menu-item' href='/archives/'> <span className='gradient'>  </span> <TransitionLink to='/archives/' activeClass='active' className='transition-link'> Archives </TransitionLink>  </a>
    </Slider>
    </div>
  )
};

export default PageSlidebar;