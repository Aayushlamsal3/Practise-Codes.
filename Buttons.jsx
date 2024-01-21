import React from 'react'

const Buttons = ({SelectedItems,Second}) => {
  return (
    <div>

        {Second.map((CurrElem)=>{
            return <button className='btn btn-warning' onClick={()=>SelectedItems(CurrElem)} >{CurrElem}</button>
        })}
          <div>
    </div>
    </div>
  )
}

export default Buttons;
