import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

const EachList = ({handleCheck, handleDelete, item}) => {
  return (
    <li className="item">
      <input
         onChange={() => handleCheck(item.id)}
         type="checkbox"
         checked={item.checked}
         />
      <label
        style={(item.checked) ? {textDecoration: "line-through"} : null}
        onDoubleClick={() => handleCheck(item.id)}>
        {item.item}
      </label>
                                
      <FontAwesomeIcon 
        onClick={() => handleDelete (item.id)} 
        icon={faTrashCan}  
        role= "button" 
        tabIndex="0"
        aria-label={`Delete ${item.item}`}/>                                
      </li>
  )
}

export default EachList