import React from 'react'

const GifCard = (props) => {
  return <div  className="card">
    <a href={props.url} target="_blank"><img src={props.img}/></a>
    <a href={props.url} target="_blank"><h3>{props.title}</h3></a>
  </div>
};

export default GifCard
