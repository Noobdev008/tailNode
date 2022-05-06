import React, { useState,useEffect } from 'react';
import './App.css';
import ToDoList from './component/Todo';

function App() {

  const [inputList, setInputList] = useState("");

  const [items, setItems] = useState([]);

  useEffect(() => {
		const data1 = localStorage.getItem("stringWhereWeStoreData");
		const loadedData = JSON.parse(data1);

		if(loadedData){
			setItems(loadedData);
		}
	}, [])

  useEffect(() => {
		var data1 = JSON.stringify(items);
		localStorage.setItem("stringWhereWeStoreData", data1);
	}, [items])
  

  const itemEvent = (event) => {
    setInputList(event.target.value);

  }
  const listItem = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList]
    });
    setInputList("");
  }

  const deleteItems = (id) => {
    setItems((oldItems)=>{
      return oldItems.filter((arrElem, index)=>{
            return index !== id;
      })
    })
  }
  const resetAll =()=>{
    setItems([])
  }


//   const isChecked = (id) => {
//     let updatedToDoList = items.map((item) => {
//         if(item.id === id){
//             item.isChecked = !item.isChecked;
//             if(item.isChecked === true){
//                 let newtodos = [...items]
//                 let index = newtodos.findIndex(obj => obj.id === id);
//                 let trueItem = newtodos[index];
//                 newtodos.forEach(element => {
//                     if(element.id === id){
//                         newtodos.splice(index, 1);
//                     }
//                 });
//                 let newCompleted = [...newtodos];
//                 newCompleted.unshift(trueItem);
//                 setItems(newCompleted);
//             }
//         }
//         return(
//             item
//      )
//    });
//    setItems(updatedToDoList);
// }

  return (
    <>
      <div className='main_div'>
        <div className='center_div'>
          <br />
          <h1>ToDo List</h1>
          <button className="reset" onClick = {resetAll}>Reset</button>
          <br />
          <input type="text" placeholder="Add Item" value={inputList} onChange={itemEvent} />
          <button className="button" onClick={listItem}> + </button>

          <ol>
            {/* <li> {inputList}</li> */}

            {items.map((itemvalue,index) => {
              return <ToDoList key={index}
                id={index}
                text={itemvalue}
              
                onSelect={deleteItems}
                 />
                
            })}
          

          </ol>
         
        </div>
        
      </div>
    </>
  );
}

export default App;
