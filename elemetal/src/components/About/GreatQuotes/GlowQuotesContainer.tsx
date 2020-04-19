import React from 'react'

import GlowQuote from './GlowQuote'

const someQuotes=['To Write Philosophy, meaning, create Art through Technology, for that is what life is about', '<h4>Destruction<h4> is a <i>form</i> of <b> Creation <b> <br></br> -Donnie Darko', 
'For this life we cannot change -Travis Scott, The Butterfy Effect']
//make random ever 4 words in bold
//digital butterfly


const GlowQuotesContainer = (): JSX.Element => {
  return (
    <React.Fragment>
    <div id='glowquotescontainer' className='glow-quotes-container'>
      <GlowQuote />
    </div>
    </React.Fragment>
  )
}

export default GlowQuotesContainer
