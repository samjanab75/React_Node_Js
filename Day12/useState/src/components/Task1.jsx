import { useState } from "react";

function Task1() {
  const [student, setStudent] = useState({
    name: "Sudhan",
    course: "React",
  });

  const updateCourse = () => {
    setStudent({
      ...student,
      course: "MERN",
    });
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-xl p-6">
      <h2 className="text-2xl font-bold text-center mb-4">
        Task 1
      </h2>

      <p className="text-lg mb-2">
        <span className="font-semibold">Name:</span> {student.name}
      </p>

      <p className="text-lg mb-6">
        <span className="font-semibold">Course:</span> {student.course}
      </p>

      <button
        onClick={updateCourse}
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Update Course
      </button>
    </div>
  );
}

export default Task1;