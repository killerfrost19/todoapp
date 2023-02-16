import style from "../style.module.css";

function Todo({ todoitem, todoList, setTodoList }) {
  const handleDelete = () => {
    setTodoList(todoList.filter((i) => i.id !== todoitem.id));
  };
  return (
    <div className={style.todoitem}>
      <h3 className={style.todoname}>{todoitem.name}</h3>
      <button onClick={handleDelete} className={style.deletebutton}>
        Done
      </button>
    </div>
  );
}

export default Todo;
