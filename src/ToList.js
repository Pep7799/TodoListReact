import React from 'react'

import EachList from './EachList';

const ToList = ( { items, handleCheck, handleDelete} ) => {
  return (
    <ul>
          {items.map((item) => (
            <EachList
            key={item.id}
            item={item}
            handleCheck ={handleCheck}
            handleDelete = {handleDelete}/>
              
        ))}
    </ul>
  )
}

export default ToList