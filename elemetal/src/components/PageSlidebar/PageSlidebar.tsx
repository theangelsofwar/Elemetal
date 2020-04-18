/* tslint:disable */
import { Link } from 'gatsby';
import React from 'react';
import { scaleRotate as Slider } from 'react-burger-menu';
import './styless.css';
import '../../../node_modules/augmented-ui/augmented.css';
import Layout from '../layout';
import SEO from '../seo';
const PageSlidebar = ():JSX.Element => {

  const showSettings= (event:any) => {
    event.preventDefault();
  }

  return (
    <Layout>
    <div id='scaleRotate' className='pageslidebar'>
    <Slider pageWrapId={'page-wrap'} outerContainerId={'carraway'} customBurgerIcon={ <img src="../../images/yvtfavicon.png" alt=""/> }>
      <a id='home' className='menu-item' href='/'> Home</a>
      <a id='bio' className='menu-item' href='./bio'> Bio </a>
      <a id='resume' className='menu-item' href='../../carraway/Resume'> Resume </a>
      <a id='opensourcegrid' className='menu-item' href='../../carraway/opensourceGrid'> Open Source </a>
      <a id='publicationsgrid' className='menu-item' href='../../carraway/publicationsGrid'> Publications </a>
      <a id='contactinqueries' className='menu-item' href='../../carraway/contactinqueries'> Query </a>
      <a onClick={showSettings} className='menu-item--small' href=""> System Settings</a>
    </Slider>
    </div>
    </Layout>
  )
}

export default PageSlidebar;