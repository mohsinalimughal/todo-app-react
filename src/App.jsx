import { useState } from 'react'

function App() {

  const [title , settitle] = useState("")
  const [description , setdescription] = useState("")
  const [todo , settodo] = useState([])



function Addtodo(e) {
  e.preventDefault()
  todo.push({title: title , description: description})
  settodo([...todo])
  console.log(todo)
}

function Edittodo(i) {
  console.log("Edit", i)
  const updatedtodo = prompt("Enter updated todo")
   todo[i].title = updatedtodo
  settodo([...todo])
}

function Deletetodo(i) {
  console.log("Delete" , i) 
  todo.splice(i,1)
  settodo([...todo])
  
}

  return (
    <>
      <h1>Todo App</h1>
      <input value={title} onChange={(e)=>settitle(e.target.value)} type="text" /><br /><br />
      <input value={description} onChange={(e)=>setdescription(e.target.value)} type="text" /><br /><br />
      <button onClick={Addtodo}>Add</button>
    <div>
      {todo.map((item,index)=>{
        return(
          <div>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <button onClick={()=>Edittodo(index)}>Edit</button>
            <button onClick={()=>Deletetodo(index)}>Delete</button>
          </div>
        )
      })


      }
    </div>
    
    </>

  )
}

export default App
