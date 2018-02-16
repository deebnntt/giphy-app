import React from 'react'
import { fetchTrendingGifs } from '../helpers/api.js'
import GifList from './GifList.js'

 class GifContainer extends React.Component {
   constructor(props) {
   		super(props);
   		this.state = {
   			gifs: [],
   	 }
   }

   componentDidMount() {
     fetchTrendingGifs()
      .then(json => this.setState({ gifs: json.data }))
   }

   render() {

     return (
       <div>
          <GifList gifs={this.state.gifs}/>
       </div>
     )
   }
 }


 export default GifContainer
