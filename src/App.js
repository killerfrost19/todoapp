import { useState } from "react";
import Form from "./Components/Form";
import Header from "./Components/Header";
import TodoList from "./Components/TodoList";
import "./styles.css";

export default function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  return (
    <div className="App">
      <Header />
      <Form
        todo={todo}
        setTodo={setTodo}
        todoList={todoList}
        setTodoList={setTodoList}
      />
      <TodoList todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
}
