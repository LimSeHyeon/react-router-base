import { useRef } from 'react';
import { useSelector, useDispatch } from "react-redux"
import { addTodo, removeTodo} from '~/store/reducers/todo';

export default function TodoPage() {
    const todoInput = useRef();
    const todos = useSelector((state)=>state.todo.todos);
    const dispatch = useDispatch();
    return (
        <div>
            <div>TodoPage</div>

            <input type="text" ref={todoInput}/>
            <button
                onClick={() => {
                    const action = addTodo({
                        todo: {
                            text: todoInput.current.value,
                        },
                    });
                    console.log(action);
                    dispatch(action);
                }}
            >입력</button>
            

            <ul>
                {todos.map((todo)=>(
                    <li key={todo.id}>
                        {todo.text}
                        <button onClick={()=> {
                            const action = removeTodo({
                                todoId: todo.id
                            });
                            dispatch(action);
                        }}>
                        X</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}