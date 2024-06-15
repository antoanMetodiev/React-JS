export default function TodoItem(props) {


    return (
        <tr className="todo">
            <td>{props.text}</td>
            <td>{props.isCompleted}</td>
            <td className="todo-action">
                <button className="btn todo-btn">Change status</button>
            </td>
        </tr>
    );
}