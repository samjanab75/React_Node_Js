const Task9 = () => {
  const students = [
    {
      id: 1,
      name: "Sam",
      course: "React",
    },
    {
      id: 2,
      name: "John",
      course: "Java",
    },
    {
      id: 3,
      name: "Sara",
      course: "Python",
    },
  ];

  return (
   <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition duration-300">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">
        Task 9 - Array of Objects
      </h2>

      {students.map((student) => (
        <div
          key={student.id}
          className="border rounded-lg p-3 mb-3"
        >
          <p>Name : {student.name}</p>

          <p>Course : {student.course}</p>
        </div>
      ))}
    </div>
  );
};

export default Task9;