import React from 'react'

 class Search extends React.Component {
   constructor(props) {
   		super(props);
   		this.state = {
   	 }
   }

   render() {

     const mappedTerms = this.props.terms.map((t, index) => {
      let term = t
      return <li className="li-links" onClick={this.props.handleClick} key={index} term={term}>{term}</li>
    })

     return (
       <div className="search-div">
         <form onSubmit={this.props.handleSearch}>
           <input type="text" placeholder="Search Gifs" onChange={this.handleChange} className="search" onChange={this.props.handleSearchInput} />
           <input type="submit" className="search" />
         </form>
         <ul>
            { this.props.terms.length > 0 ? <li>Searched Terms: </li> : null }
            { mappedTerms }
         </ul>
       </div>
     )
   }
 }


 export default Search
