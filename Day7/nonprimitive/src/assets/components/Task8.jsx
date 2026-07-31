const Task8 = () => {
  const student = {
    name: "Samjana",
    course: "React JS",
    experience: "Fresher",
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition duration-300">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">
        Task 8 - Object Rendering
      </h2>

      <p>Name : {student.name}</p>

      <p>Course : {student.course}</p>

      <p>Experience : {student.experience}</p>
    </div>
  );
};

export default Task8;