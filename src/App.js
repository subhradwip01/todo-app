import { useState ,useEffect } from "react";
import './App.css';
import Header from "./component/Header"
import TodoList from './component/TodoList';
import Input from './component/Input';
function App() {
  const todoItems=JSON.parse(localStorage.getItem("todos")) || [];
  const [todoitemsList, settodoItemsList] = useState(todoItems);
  const [isEdit,setIsEdit]=useState(false);
  const [editId,setEditID]=useState(null);
  const [editItem,setEditItem]=useState("");
  
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todoitemsList))
  }, [todoitemsList]);

  // Adding new todo
  const addHandler=(TodoItem)=>{
    if(!isEdit){
    settodoItemsList(prevList=>{
      const updatedList = [...prevList];
      updatedList.unshift({ text: TodoItem, id: new Date().getTime().toString() , done:false });
      return updatedList;
    })
  }else{
    const task = todoitemsList.find((item) => item.id === editId);
    task.text=TodoItem;
    setIsEdit(false);
    setEditID(null);
    setEditItem("");

  }
    // console.log(todoitemsList);
  }

  // Delting a todo
  const deleteHandler=(itemID)=>{
    settodoItemsList(prevList=>{
      const newList=prevList.filter(listItem=>listItem.id!==itemID)
      return newList;
    })
  }

  // Todo complted checker
  const completeHandler=(itemID)=>{
    const task=todoitemsList.find(item=>item.id===itemID);
    if(task.done===false){
    task.done=true
  }
    else{
      task.done=false
    }
    settodoItemsList([...todoitemsList])
  }

  // Editing the to do list
  const editHandler=(itemID)=>{
    setIsEdit(true);
    setEditID(itemID);
    const task = todoitemsList.find((item) => item.id === itemID);
    setEditItem(task.text);
  }

  let todoContent = (
    <div style={{ textAlign: "center", margin: "10px" }}>
      No tasks found. Maybe add one? ✍
    </div>
  );

  if (todoitemsList.length > 0) {
    todoContent =( <TodoList todoItems={todoitemsList} onDelete={deleteHandler} onComplete={completeHandler} onEdit={editHandler}/>);
  }
  return (
    <div className="App">
      <div className="container">
        <Header></Header>
        <Input
          onAddItem={addHandler}
          onEdit={{
            isEdit: isEdit,
            editItem: editItem,
          }}
        ></Input>
        {todoContent}
      </div>
      <div className="input"></div>
    </div>
  );
}

export default App;
