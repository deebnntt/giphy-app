import React from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'
import { connect } from 'react-redux'
import { fetchTrending } from '../actions/gifs.js'
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
     this.props.fetchTrending()
   }

   // handleClick = (e) => {
   //   const searchTerm = e.target.innerHTML
   //    this.setState({ currentSearchTerm: searchTerm })
   //   fetchSearchedGifs(searchTerm)
   //    .then(json => this.setState({ results: json.data }))
   // }

   handleSearchInput = (e) => {
     this.setState({ currentSearchInput: e.target.value })
   }

   // handleSearch = (e) => {
   //   e.preventDefault()
   //   const searchTerm = this.state.currentSearchInput
   //   const updatedTerms = [...this.state.searchTerms, searchTerm]
   //   this.setState({ searchTerms: updatedTerms, currentSearchTerm: searchTerm,  currentSearchInput: "" })
   //   fetchSearchedGifs(searchTerm)
   //    .then(json => this.setState({ results: json.data }))
   //  e.target.reset();
   //  }

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
                { this.props.trending ? <GifList gifs={this.props.trending}/> : null }
              </div>
            </ScrollableAnchor>
          </div>
       </div>
     )
   }
 }

 function mapStateToProps(state) {
    return {
      trending: state.trending.data,
      results: state.results,
    };
  }

 function mapDispatchToProps(dispatch) {
   return {
     fetchTrending: () => {
       dispatch(fetchTrending())
     },
   }
 }

 export default connect(mapStateToProps, mapDispatchToProps)(GifContainer)
