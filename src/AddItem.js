import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const AddItem = ({newItem, setNewItem, handleAdd}) => {
  const input = React.useRef();

  return ( 
    <form className='add-form' onSubmit={handleAdd}>
        <label htmlFor="add-item" className='add-label'></label>
        <input 
        autoFocus
        type="text" 
        placeholder='Add to the list'
        className='add-input'
        value={newItem}
        onChange = {(e) => setNewItem(e.target.value)}
        ref = {input}
        required/>
        <button 
        className='add-submit'
        type='submit'
        aria-label='Add'
        onClick={() => input.current.focus()}>
            <FontAwesomeIcon
            icon={faPlus}/>
        </button>
    </form>
  )
}

export default AddItem