import React from 'react'

const GifCard = (props) => {
  return <div>
    <img src={props.url}/><br />
    <h3>{props.title}</h3>
  </div>
};

export default GifCard
