import React from "react"
import {useState} from "react"

function Todo(){
    const [listTodo , setListTodo ] = useState(null)
    const [ listArray , setListArray] = useState([])

const handleInput =(e)=>{
    var targetValue = e.target.value
    setListTodo(targetValue)
    console.log(e.target.value)
}

const handleAddList = ()=>{
    var copyarry = [...listArray ,listTodo ]
    setListArray(copyarry)
    var inputId = document.getElementById("input")
       inputId.value = " "
}
console.log(listArray)
console.log(listTodo)

const handleAllTodoClear = ()=>{
    var copyarry = [...listArray ]
    copyarry = []
    setListArray(copyarry)
}

 return(
     <div  style={{width:'80%', border:'1px solid black' , height:"400px", marginLeft:'auto', marginRight:'auto', backgroundColor:'green',display:"flex",alignItems:'center' , flexDirection:"column" }} >
       <input id="input" name="enterTodo" onChange={(e)=>{handleInput(e)}} style={{width:'80%', padding:'20px',marginLeft:'auto', marginRight:'auto' , textAlign:'center'}} type="text" placeholder="enterTodo" />
       <button onClick={()=>{handleAddList()}}>add</button>
       <button onClick={()=>{handleAllTodoClear()}}>clear-all</button>
         {
      listArray.map((item)=>{
    return(
        <div style={{display:'flex', flexDirection:"column-reverse"}}>
        <div >
           {item}
        </div>
        </div>
    )
      })
         }
     </div>
 )
}
export default Todo