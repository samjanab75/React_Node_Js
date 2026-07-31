import "../style/TaskCard.css";

function TaskCard({ title, content, status }) {
  return (
    <div className="task-card">

      <h2>{title}</h2>

      <p>{content}</p>

      <button className={status === "Completed" ? "completed" : "pending"}>
        {status}
      </button>

    </div>
  );
}

export default TaskCard;