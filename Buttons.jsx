import React from 'react'

const Buttons = ({Filter,Second}) => {
  return(
    <>
    {Second.map((value,ind)=>{
      return     <button className='btn btn-primary' onClick={()=>Filter(value)} >{value}</button>
    })}
  </>
)
}
export default Buttons;
