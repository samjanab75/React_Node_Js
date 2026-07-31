import { useState } from "react";

const Task5 = () => {
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Sudhan",
    },
    {
      id: 2,
      name: "Rahul",
    },
  ]);

  const updateStudent = () => {
    setStudents(
      students.map(student =>
        student.id === 2
          ? { ...student, name: "Vijay" }
          : student
      )
    );
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-4">Task 5 - Students</h2>

      {students.map(student => (
        <p key={student.id}>
          {student.id} - {student.name}
        </p>
      ))}

      <button
        onClick={updateStudent}
        className="mt-4 bg-indigo-500 text-white px-4 py-2 rounded"
      >
        Update Student
      </button>
    </div>
  );
};

export default Task5;