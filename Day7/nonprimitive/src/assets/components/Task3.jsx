const Task3 = () => {
  const isLogin = true;

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition duration-300">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">
        Task 3 - Boolean Rendering
      </h2>

      <h3 className="text-lg">
        {isLogin ? "Welcome User" : "Please Login"}
      </h3>
    </div>
  );
};

export default Task3;