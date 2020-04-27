import React from 'react'

import GlowQuote from './GlowQuote'
import '../../../carraway/glow/glow.scss';

const someQuotes=[{
  author: "",
  source: "House of Cards",
  quote: "If you don\'t like how the table is set, flip that table over"
}, {
  author: "Donnie Darko",
  source: "",
  quote: "<h4>Destruction<h4> is a <i>form</i> of <b> Creation <b> <br></br>"
}, {
  author: "Travis Scott",
  source: "The Butterfy Effect",
  quote: "For this life we cannot change"
}, {
  author: "Ralph Waldo Emerson",
  source: "Self Reliance, Enlightenment",
  quote: "Let us advance on Chaos and the Dark"
}]
//make random ever 4 words in bold
//digital butterfly
// ,'To Write Philosophy, meaning, create Art through Technology, for that is what life is about', ', 

const GlowQuotesContainer = (): JSX.Element => {
  return (
    <React.Fragment>
    <div id='glowquotescontainer' className='glow'>
      {someQuotes.map((element) => {
        return (
          <GlowQuote data={JSON.stringify(element)} />
        )
      })
      }
    </div>
    </React.Fragment>
  )
}

export default GlowQuotesContainer
