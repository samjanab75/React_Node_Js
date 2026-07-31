const Task1 = () => {
  const course = "React JS";

  return (<div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition duration-300">
      <h2 className="text-2xl font-bold text-blue-600 mb-3">
        Task 1 - String Rendering
      </h2>

      <h1 className="text-xl">{course}</h1>
    </div>
  );
};

export default Task1;