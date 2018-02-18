import React from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'
import { connect } from 'react-redux'
import { fetchTrending, fetchSearched, setCurrentTerm, addSearchTerm } from '../actions/gifs.js'
import GifList from './GifList.js'
import Search from './Search.js'

 class GifContainer extends React.Component {
   constructor(props) {
   		super(props);
   		this.state = {
        currentSearchInput: "",
   	 }
   }

   componentDidMount() {
     this.props.fetchTrending()
   }

   handleClick = (e) => {
     const searchTerm = e.target.innerHTML
     this.props.setCurrentTerm(searchTerm)
     this.props.fetchSearched(searchTerm)
   }

   handleSearchInput = (e) => {
     this.setState({ currentSearchInput: e.target.value })
   }

   handleSearch = (e) => {
     e.preventDefault()
     const searchTerm = this.state.currentSearchInput
     this.props.addSearchTerm(searchTerm)
     this.props.setCurrentTerm(searchTerm)
     this.props.fetchSearched(searchTerm)
     this.setState({ currentSearchInput: "" })
     e.target.reset();
    }

   render() {

     return (
       <div>
          <Search handleSearch={this.handleSearch} handleClick={this.handleClick} handleSearchInput={this.handleSearchInput} terms={ this.props.terms } currentSearchInput={this.state.currentSearchInput}/>
          <div className="gif-container">
            { this.props.currentTerm ? <h1>{this.props.currentTerm}</h1> : null }
            { this.props.results ? <GifList gifs={this.props.results}/> : null }
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
      trending: state.trending,
      results: state.results,
      terms: state.terms,
      currentTerm: state.currentTerm
    };
  }

 function mapDispatchToProps(dispatch) {
   return {
     fetchTrending: () => {
       dispatch(fetchTrending())
     },
     fetchSearched: (term) => {
       dispatch(fetchSearched(term))
     },
     addSearchTerm: (term) => {
       dispatch(addSearchTerm(term))
     },
     setCurrentTerm: (term) => {
       dispatch(setCurrentTerm(term))
     },
   }
 }

 export default connect(mapStateToProps, mapDispatchToProps)(GifContainer)
