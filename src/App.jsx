import { useState } from "react";
import "./app.css";
import Navbar from "./Navbar";
import { Link } from "react-router-dom"

export default function App() {
  const [todos, setTodos] = useState([]);

  const createTodo = () => {
    const todo = {
      title: "New Activity",
      date: new Date(),
    };

    setTodos((prev) => [...prev, todo]);
  };

  return (
    <div>
      <Navbar />

      <div className="main-content">
        <div className="content-header">
          <h3 className="content-header_title">Activitty</h3>
          <div>
            <button
              className="btn btn-primary btn-rounded"
              onClick={createTodo}
            >
              <span className="material-symbols-outlined">add</span>
              Tambah
            </button>
          </div>
        </div>

        <div className="todos">
          {todos.map((item, index) => (
            <div className="todo-item" key={index}>
              <Link to={`/activity/${index}`}>
                <span>{item.title}</span>
              </Link>

              <span className="fa fa-trash"></span>
            </div>
          ))}
        </div>

        {todos.length === 0 && (
          <div>
            <div className="empty-state">
              <img src="/ilustration/activity-empty-state.png" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
