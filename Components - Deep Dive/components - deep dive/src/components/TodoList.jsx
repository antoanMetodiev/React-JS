import TodoItem from "./TodoItem";
import { useState, useEffect } from "react";

export default function TodoList() {
    const URL = 'http://localhost:3030/jsonstore/todos';

    const [tBodyState, setBodyState] = useState([]);   // tuk moje da gurmi poradi tova che ne si slojil nachalna stoinost v useState();
    
    useEffect(() => {
        fetch(URL)
            .then(response => response.json())
            .then(data => {

                console.log(Object.values(data));
                setBodyState(Object.values(data));

            }).catch(() => console.log('Something is wrong with GET Request!'));
    }, [])

    return (
        <tr>
            {tBodyState.map(todo => {
                <TodoItem key={todo._id} text={todo.text} isCompleted={todo.isCompleted} />
            })}
        </tr>
    );
}