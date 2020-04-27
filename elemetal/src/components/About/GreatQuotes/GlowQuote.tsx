import React from 'react'
import '../../../carraway/glow/glow.scss';
const GlowQuote = (props: any): JSX.Element => (
  <React.Fragment>
    <div id='glow'>
      {props.children}
    </div>
  </React.Fragment>

)

export default GlowQuote
