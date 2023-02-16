import style from "../style.module.css";
import shortid from "shortid";

const Form = ({ todo, setTodo, todoList, setTodoList }) => {
  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setTodoList([...todoList, { name: todo, id: shortid.generate() }]);
    //console.log(todoList);
    setTodo("");
  };
  return (
    <div className={style.todoform}>
      <form onSubmit={handleSubmit}>
        <input
          className={style.todoinput}
          value={todo}
          onChange={handleChange}
          placeholder="add item"
        />
        <button className={style.todobutton} type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default Form;
