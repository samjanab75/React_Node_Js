import { useState } from "react";

const Task5 = () => {
  const [course, setCourse] = useState("JavaScript");

  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">
        Task 5 - Course Update
      </h2>

      <h1 className="text-3xl mb-4">{course}</h1>

      <button
        onClick={() => setCourse("React JS")}
        className="bg-red-600 text-white px-5 py-2 rounded-lg"
      >
        Update Course
      </button>
    </div>
  );
};

export default Task5;