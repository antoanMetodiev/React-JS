import React from "react";
import TodoList from "./TodoList";

export default function Main() {
    function buttonClick(event) {
        const currentRow = event.target.parentElement.parentElement;
        currentRow.classList.add('is-completed');

        const allChildren = currentRow.children;

        const taskElement = allChildren[0];
        const statusElement = allChildren[1];
        const actionButtonContainer = allChildren[2];

        statusElement.textContent = 'Complete';
    }


    return (
    <main className="main">
    
      <section className="todo-list-container">
            <h1>Todo List</h1>

            <div className="add-btn-container">
                <button className="btn">+ Add new Todo</button>
            </div>

        <div className="table-wrapper">

{/*           
          <div className="loading-container">
            <div className="loading-spinner">
              <span className="loading-spinner-text">Loading</span>
            </div>
          </div> */}

          
          <table className="table">
            <thead>
              <tr>
                <th className="table-header-task">Task</th>
                <th className="table-header-status">Status</th>
                <th className="table-header-action">Action</th>
              </tr>
            </thead>
            <tbody>

              {/* <tr className="todo is-completed">
                <td>Give dog a bath</td>
                <td>Complete</td>
                <td className="todo-action">
                  <button onClick={buttonClick} className="btn todo-btn">Change status</button>
                </td>
              </tr> */}

              <TodoList/>





              
            </tbody>
          </table>
        </div>
      </section>
  </main>
    );
}