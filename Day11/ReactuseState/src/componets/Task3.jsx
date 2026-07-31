import { useState } from "react";

const Task3 = () => {
  const [student, setStudent] = useState({
    name: "Sudhan",
    course: "JS",
  });

  const updateCourse = () => {
    setStudent({
      ...student,
      course: "React",
    });
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-4">Task 3 - Student</h2>

      <p>Name : {student.name}</p>
      <p>Course : {student.course}</p>

      <button
        onClick={updateCourse}
        className="mt-4 bg-purple-500 text-white px-4 py-2 rounded"
      >
        Update Course
      </button>
    </div>
  );
};

export default Task3;