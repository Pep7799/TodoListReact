import React from 'react';
import ToList from './ToList';

const Content = ({ items, handleCheck, handleDelete}) => {


  
    
    return (
        <main>   
            {items.length ?(        
                    <ToList
                    items = {items}
                    handleCheck = {handleCheck}
                    handleDelete = {handleDelete}/>
                ) : (
                    <p style={{marginTop: "30px"}}>"Yayy, your July list is empty... You did it"</p>)} 
          
        </main>
    )
}

export default Content
