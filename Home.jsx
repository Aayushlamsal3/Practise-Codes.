import React, { useState } from 'react'
import Menu from "./Menu"
import Cards from './Cards'
import Buttons from './Buttons'

const Home = () => {

  const newDatas=[...new Set(Menu.map((New)=>{
    return New.category;
  })),"all"]
  console.log(newDatas)

  const[Items,SetItems]=useState(Menu)

  const[Second,SetSecond]=useState(newDatas)
  

  const SelectedItems=(selected)=>{

    if(selected==="all"){
       return SetItems(Menu)
    }

    const UpdatedData= Menu.filter((PureData)=>{
     return PureData.category===selected;
    })
    SetItems(UpdatedData)
  }
  return (
    <div className='container container-fluid'>
<Buttons SelectedItems={SelectedItems} Second={Second} />
<Cards items={Items}/>
    </div>
  )
}

export default Home
