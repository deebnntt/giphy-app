import React from 'react'
import GifCard from './GifCard.js'

 class GifList extends React.Component {
   constructor(props) {
   		super(props);
   		this.state = {
   	 }
   }

   render() {

     const mappedGifs = this.props.gifs.map(g => {
      return <GifCard className="card" key={g.id} title={g.title} url={g.images.downsized.url} />
    })

     return (
       <div className="list">
          {mappedGifs}
       </div>
     )
   }
 }


 export default GifList
