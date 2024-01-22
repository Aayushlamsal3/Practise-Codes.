import React, { useState } from 'react'
import Buttons from './Buttons';
import Cards from "./Cards"
import Menu from './Menu';

const Home = () => {

  const CategoryItems= [...new Set(Menu.map((value,ind)=>{
    return value.category
  }))]
  console.log(CategoryItems)

  const[Items,SetItems]=useState(Menu)


  const FilterItems=(AlongData)=>{
    const UpdatedData=Menu.filter((Filterate,Index)=>{
      return Filterate.category === AlongData
    })
    SetItems(UpdatedData)
  }

  const[Second,SetSecond]=useState(CategoryItems)

  return(
    <>
    <div>
<Buttons Filter={FilterItems} Second={Second}  />
    </div>
    <Cards items={Items} />

    </>
  )
}

export default Home;

