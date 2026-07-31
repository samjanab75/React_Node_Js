import { useState } from "react";

const Task3 = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">
        Task 3 - Login Status
      </h2>

      <h1 className="text-3xl mb-4">
        {isLogin ? "Welcome User" : "Please Login"}
      </h1>

      <button
        onClick={() => setIsLogin(true)}
        className="bg-purple-600 text-white px-5 py-2 rounded-lg"
      >
        Login
      </button>
    </div>
  );
};

export default Task3;