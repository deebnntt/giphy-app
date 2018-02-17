import React from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'
import { fetchTrendingGifs, fetchSearchedGifs } from '../helpers/api.js'
import GifList from './GifList.js'
import Search from './Search.js'

 class GifContainer extends React.Component {
   constructor(props) {
   		super(props);
   		this.state = {
   			trending: [],
        results: [],
        searchTerms: [],
        currentSearchInput: "",
        currentSearchTerm: ""
   	 }
   }

   componentDidMount() {
     fetchTrendingGifs()
      .then(json => this.setState({ trending: json.data }))
   }

   handleClick = (e) => {
     const searchTerm = e.target.innerHTML
      this.setState({ currentSearchTerm: searchTerm })
     fetchSearchedGifs(searchTerm)
      .then(json => this.setState({ results: json.data }))
   }

   handleSearchInput = (e) => {
     this.setState({ currentSearchInput: e.target.value })
   }

   handleSearch = (e) => {
     e.preventDefault()
     const searchTerm = this.state.currentSearchInput
     const updatedTerms = [...this.state.searchTerms, searchTerm]
     this.setState({ searchTerms: updatedTerms, currentSearchTerm: searchTerm,  currentSearchInput: "" })
     fetchSearchedGifs(searchTerm)
      .then(json => this.setState({ results: json.data }))
    e.target.reset();
    }

    // { this.state.searchTerms.length > 0 ? <a href='#trending-section'>trending gifs</a> : null }

   render() {

     return (
       <div>
          <Search handleSearch={this.handleSearch} handleClick={this.handleClick} handleSearchInput={this.handleSearchInput} terms={this.state.searchTerms} currentSearchInput={this.state.currentSearchInput}/>
          <div className="gif-container">
            { this.state.currentSearchTerm ? <h1>{this.state.currentSearchTerm}</h1> : null }
            { this.state.currentSearchTerm ? <GifList gifs={this.state.results}/> : null }
            <ScrollableAnchor id={'trending'}>
              <div>
                <h1>trending</h1>
                <GifList gifs={this.state.trending}/>
              </div>
            </ScrollableAnchor>
          </div>
       </div>
     )
   }
 }


 export default GifContainer
