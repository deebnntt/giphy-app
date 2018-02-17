import React from 'react'
import styled from 'styled-components';

const Input = styled.input`
  padding: 0.5em;
  color: #ff00ff;
  background: white;
  border: 2px solid blue;
  font-size: 1em;
  font-family: 'Roboto Mono', monospace;
  margin: 0;
`;

const Button = styled.input`
  padding: 0.5em;
  color: white;
  background: blue;
  border: none;
  border: 2px solid blue;
  font-size: 1em;
  font-family: 'Roboto Mono', monospace;
`;

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
           <Input type="text" placeholder="Search Gifs" onChange={this.handleChange} className="search" onChange={this.props.handleSearchInput} />
           <Button type="submit" className="search" />
         </form>
         <ul>
            { this.props.terms.length > 0 ? <li>recent searches: </li> : null }
            { mappedTerms }
            { this.props.terms.length > 0 ? <li className="li-links"><a href='#trending'>*trending gifs*</a></li> : null }
         </ul>
       </div>
     )
   }
 }

export default Search
