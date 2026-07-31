import { Link } from "react-router-dom";
import TaskCard from "../components/Taskcard";
import "../style/Task.css";

function Day1() {
  return (
    <div className="task-container">

      <Link to="/">
        <button className="back-btn">⬅ Back</button>
      </Link>

      <h1>📅 Day 1 - React Introduction</h1>

      <TaskCard
        title="Topics Covered"
        content="History of React, Features, Advantages, Disadvantages, Virtual DOM, JSX Introduction."
        status="Completed"
      />

      <TaskCard
        title="Interview Questions"
        content="What is React? Who developed React? What is Virtual DOM?"
        status="Pending"
      />

      <TaskCard
        title="Practice Task"
        content="Create a React application using Vite and display Welcome to React."
        status="Pending"
      />

    </div>
  );
}

export default Day1;