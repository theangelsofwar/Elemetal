import { withPrefix } from 'gatsby';
import PortfolioItem from '../../components/PortfolioItem';
import React from 'react';


const Resume = () => (
  <div id="resume" className="resume">
    <PortfolioItem 
      title="Resume"
      link={withPrefix('../../static/Resume/AngieYveRoaring20sResume.docx')}
     />

  </div>
);


export default Resume;