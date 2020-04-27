import React from 'react'
import '../../../carraway/glow/glow.scss';

interface Props {
  data: any
}

const GlowQuote = ({ data } : Props): JSX.Element => (
  <React.Fragment>
    <div className='glow'>
      {data}
    <h3> {data["quote"]} </h3>
    <h4> {data["author"]} </h4>
    <h4> {data["source"]} </h4>
    </div>
  </React.Fragment>

)

export default GlowQuote
