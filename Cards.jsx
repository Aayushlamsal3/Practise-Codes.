import React from 'react'

const Cards = ({items}) => {
  return (
    <>
       <div className="box">
    {items.map((elem,ind)=>{
      const{id,name,image,category}=elem
      return  (   <div className="card" style={{width: "18rem"}} key={ind}>
      <img className="card-img-top" src={elem.image} alt="Card image cap"/>
      <div className="card-body">
        <h5 className="card-title">{elem.id}</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Order Now</a>
      </div>
    </div>)
    })}
    </div>
    </>
  )
}

export default Cards;
