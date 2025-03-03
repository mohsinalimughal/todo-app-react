import { useState } from 'react';
import './App.css'; // Import the CSS file

function App() {
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [todo, settodo] = useState([]);

  function Addtodo(e) {
    e.preventDefault();
    todo.push({ title: title, description: description });
    settodo([...todo]);
    console.log(todo);
  }

  function Edittodo(i) {
    console.log("Edit", i);
    const updatedtodo = prompt("Enter updated todo");
    todo[i].title = updatedtodo;
    settodo([...todo]);
  }

  function Deletetodo(i) {
    console.log("Delete", i);
    todo.splice(i, 1);
    settodo([...todo]);
  }

  return (
    <div className="app">
      <h1 className="app-title">Todo App</h1>
      <form onSubmit={Addtodo} className="todo-form">
        <input
          value={title}
          onChange={(e) => settitle(e.target.value)}
          type="text"
          placeholder="Title"
          className="todo-input"
        />
        <br /><br />
        <input
          value={description}
          onChange={(e) => setdescription(e.target.value)}
          type="text"
          placeholder="Description"
          className="todo-input"
        />
        <br /><br />
        <button onClick={Addtodo} className="add-button">Add</button>
      </form>
      <div className="todo-list">
        {todo.map((item, index) => (
          <div key={index} className="todo-item">
            <h2 className="todo-title">{item.title}</h2>
            <p className="todo-description">{item.description}</p>
            <div className="todo-actions">
              <button onClick={() => Edittodo(index)} className="edit-button">Edit</button>
              <button onClick={() => Deletetodo(index)} className="delete-button">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;