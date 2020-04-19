import React from 'react'

const GlowQuote = (props: any): JSX.Element => (
  <React.Fragment>
    <div id='glow'>
      {props.children}
    </div>
  </React.Fragment>

)

export default GlowQuote
