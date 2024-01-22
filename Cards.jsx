import React from 'react'
import Menu from "./Menu"

const Cards = ({items}) => {
  return (
    <>
<div className="box">
{items.map((Value,index)=>{
  return     <div class="card" style={{width: "18rem"}}>
  <img class="card-img-top" src={Value.image} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
})}
</div>
    </>
  )
}

export default Cards;
