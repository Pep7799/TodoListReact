import React from 'react';
import Content from './Content';
import Header from './Header';
import AddItem from './AddItem';
import Search from './Search';
import Footer from './Footer';

function App() {
  const [items, setItems] = React.useState(JSON.parse(localStorage.getItem('list')));

const [newItem, setNewItem] = React.useState("")
const [searchAll, setSearchAll] = React.useState("")


const addItem = (item) => {
const id = items.length ? items[items.length - 1].id + 1 : 1 
const newListItems = {id, checked:false, item}
const listItems = [...items, newListItems]
setItems(listItems)
localStorage.setItem('list', JSON.stringify(listItems))
}

const handleCheck = (id) => {
  const listItems = items.map((item) => item.id === id ? {...item, checked:!item.checked} : item)
  setItems(listItems)
  localStorage.setItem('list', JSON.stringify(listItems))
}

const handleDelete = (id) => {
  const listItems = items.filter((item) => item.id !== id)
  setItems(listItems)
  localStorage.setItem('list', JSON.stringify(listItems))
}

const handleAdd = (e) => {
  e.preventDefault();
  if (!newItem) return;
  addItem(newItem)
  setNewItem("");
}


  return (
    <div>
      <Header title = "July TO DO" />
   
      <AddItem 
      handleAdd = {handleAdd}
      newItem = {newItem}
      setNewItem = {setNewItem} />
         <Search 
      searchAll = {searchAll}
      setSearchAll = {setSearchAll}
      />
      
        
      <Content
        items = {items.filter(item =>((item.item).toLowerCase()).includes(searchAll.toLowerCase()))}
        handleCheck = {handleCheck}
        handleDelete = {handleDelete}
        />
      <Footer length = {items.length}/>
    </div>
  );
  
}

export default App
