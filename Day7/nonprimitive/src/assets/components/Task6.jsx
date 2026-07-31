const Task6 = () => {
  const getCompanyName = () => {
    return "Google";
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition duration-300">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">
        Task 6 - Function Rendering
      </h2>

      <h3>{getCompanyName()}</h3>
    </div>
  );
};

export default Task6;