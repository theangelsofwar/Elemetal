import React from 'react'
import '../../../carraway/glow/glow.scss';

interface Props {
  data: any
}

const GlowQuote = ({ data } : Props): JSX.Element => {
  data = JSON.parse(data);
  const quote = JSON.stringify(data.quote);
  const author = JSON.stringify(data.author);
  const source = JSON.stringify(data.source);
  return (
    <React.Fragment>
    <div className='glow'>
    <h3> {quote} </h3>
    {author.length>2 && <h3> -{author} </h3>}
    {source.length>2 && <h3> in {source} </h3>}
    <br />
    </div>
  </React.Fragment>
  )
  

}

export default GlowQuote
