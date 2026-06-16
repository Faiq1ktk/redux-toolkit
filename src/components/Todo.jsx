import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";
import ToggleComplete from "./ToggleComplete";
import UpdateTodo from "./UpdateTodo";

function Todos() {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  return (
    <>
      <div className="text-white text-xl mt-6">Todos</div>

      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex items-center gap-3 bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            <ToggleComplete todo={todo} />

            <UpdateTodo todo={todo} />

            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;