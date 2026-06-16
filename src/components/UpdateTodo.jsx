import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateTodo } from "../features/todo/todoSlice";

function UpdateTodo({ todo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.text);

  const dispatch = useDispatch();

  const saveTodo = () => {
    if (todo.completed) return;

    if (!todoMsg.trim()) {
      alert("Todo text cannot be empty");
      return;
    }

    dispatch(
      updateTodo({
        id: todo.id,
        text: todoMsg.trim(),
      })
    );

    setIsEditing(false);
  };

  return (
    <>
      <input
        type="text"
        value={todoMsg}
        readOnly={!isEditing || todo.completed}
        onChange={(e) => setTodoMsg(e.target.value)}
        className={`flex-1 bg-transparent outline-none ${
          todo.completed
            ? "line-through text-gray-400 cursor-not-allowed"
            : "text-white"
        }`}
      />

      <button
        disabled={todo.completed}
        onClick={() => {
          if (todo.completed) return;

          if (isEditing) {
            saveTodo();
          } else {
            setIsEditing(true);
          }
        }}
        className={`text-white border-0 py-1 px-4 rounded text-md ${
          todo.completed
            ? "bg-gray-500 cursor-not-allowed opacity-60"
            : "bg-green-500 hover:bg-green-600 focus:outline-none"
        }`}
      >
        {isEditing ? "Save" : "Update"}
      </button>
    </>
  );
}

export default UpdateTodo;