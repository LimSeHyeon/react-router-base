import { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo } from "~/store/reducers/todo";

export default function TodoPage() {
  const todoInput = useRef();
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();
  const [cancelTodo, setCancelTodo] = useState(null);
  return (
    <div>
      <div>TodoPage</div>
      <input type="text" ref={todoInput} />
      {cancelTodo && <button onClick={cancelTodo}>취소</button>}
      <button
        onClick={() => {
          const action = addTodo({
            todo: {
              text: todoInput.current.value,
            },
          });
          action.meta = {
            delay: 5000,
          };
          const cancelFn = dispatch(action);
          setCancelTodo(() => {
            return () => {
              cancelFn();
              setCancelTodo(undefined);
            };
          });
          console.log(action);
          // dispatch(action);
        }}
      >
        입력
      </button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button
              onClick={() => {
                const action = removeTodo({
                  todoId: todo.id,
                });
                dispatch(action);
              }}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
