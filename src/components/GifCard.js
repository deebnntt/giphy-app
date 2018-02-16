import React from 'react'

const GifCard = (props) => {
  return <div>
    <img src={props.url}/>
    {props.url}
  </div>
};

export default GifCard
