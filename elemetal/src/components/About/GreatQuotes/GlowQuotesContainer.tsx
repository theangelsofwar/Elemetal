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
  quote: "Destruction is a form of Creation"
}, {
  author: "Travis Scott",
  source: "The Butterfy Effect",
  quote: "For this life we cannot change"
}, {
  author: "Ralph Waldo Emerson",
  source: "Self Reliance, The Enlightenment Period",
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
