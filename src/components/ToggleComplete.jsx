import { useDispatch } from "react-redux";
import { toggleTodo } from "../features/todo/todoSlice";

function ToggleComplete({ todo }) {
  const dispatch = useDispatch();

  return (
    <input
      type="checkbox"
      checked={todo.completed}
      onChange={() => dispatch(toggleTodo(todo.id))}
      className="cursor-pointer"
    />
  );
}

export default ToggleComplete;