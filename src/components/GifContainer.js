import React from 'react'
import { fetchTrendingGifs } from '../helpers/api.js'
import GifList from './GifList.js'

 class GifContainer extends React.Component {
   constructor(props) {
   		super(props);
   		this.state = {
   			trending: [],
   	 }
   }

   componentDidMount() {
     fetchTrendingGifs()
      .then(json => this.setState({ trending: json.data }))
   }

   render() {

     return (
       <div>
          <h2>Trending</h2>
          <GifList gifs={this.state.trending}/>
       </div>
     )
   }
 }


 export default GifContainer
