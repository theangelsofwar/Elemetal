/* tslint:disable */
import { Link } from 'gatsby';
import React from 'react';
import { scaleRotate as Slider } from 'react-burger-menu';
import './styless.css';
// import '../../../node_modules/augmented-ui/augmented.css';
import Layout from '../layout';
import SEO from '../seo';

//Link to="/"
//move this to be nested in the layout

const PageSlidebar = (): JSX.Element => {

  const showSettings= (event:any) => {
    event.preventDefault();
  }

  return (
    <div id='scaleRotate' className='pageslidebar'>
    <Slider pageWrapId={'page-wrap'} outerContainerId={'carraway'} customBurgerIcon={ <img src="../../images/yvtfavicon.png" alt=""/> }>
      <a id='home' className='menu-item' href='../../pages/index'> <Link to='/'> Home </Link></a>
      <a id='bio' className='menu-item' href= '/'> <Link to='/bio'>Bio </Link></a>
      <a id='resume' className='menu-item' href='../../pages/Resume/'><Link to='/Resume'> Resume </Link></a>
      <a id='opensourcegrid' className='menu-item' href='../../pages/opensourceGrid'><Link to='/opensourceGrid'> Open Source </Link></a>
      <a id='publicationsgrid' className='menu-item' href='../../pages/publicationsGrid'> <Link to='/publicationsGrid'> Publications </Link></a>
      <a id='contactinqueries' className='menu-item' href='../../pages/contactInqueries'> <Link to='/contactInqueries'> Query </Link></a>
      <a onClick={showSettings} className='menu-item--small' href='../../pages/systemSettings' ><Link to='/systemSettings'> System Settings </Link></a>
    </Slider>
    </div>
  )
}

export default PageSlidebar;