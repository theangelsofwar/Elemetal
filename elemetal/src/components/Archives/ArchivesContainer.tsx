import React from 'react';
import GlassCard from '../../components/GlassCard';
import '../../carraway/glow/glow.scss';
const ArchivesContainer = (): JSX.Element => {


  return(
    <div id='archives' className='archives'>
    <div id='glow' className='glow'> <p> <header> Angels Of War </header> </p> </div>
    <p> Writing Pieces </p> <br />
    <GlassCard 
      photo={require("../../images/angelsOfWar.png")}
      title="Frozen In Time"
      link={{
        url: "https://medium.com/yve-vestal-titan/frozen-in-time-42b77ce8bb1f",
        title: "A moment Frozen In Time, A Snow Flake"
      }}
      description="Angels Of War Publication"
    />
    <br />
    <br />
    <hr />
    <br />
    <h6>
      My Other Projects
    </h6>
    <br />
    <p> Aesthetic Tumblr/Pinterest Clone </p>
    <br />
    <h6>
      Algorithms Blog: Becoming E-Leet
    </h6>

    <p>
      My Wordpress:

    </p>
  </div>
  )
}


export default ArchivesContainer;