import Todo from "./Todo";

const TodoList = ({ todoList, setTodoList }) => {
  return (
    <div>
      {todoList.map((i) => (
        <Todo
          key={i.id}
          todoitem={i}
          todoList={todoList}
          setTodoList={setTodoList}
        ></Todo>
      ))}
    </div>
  );
};

export default TodoList;
