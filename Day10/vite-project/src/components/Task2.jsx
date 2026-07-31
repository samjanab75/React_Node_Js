import { useState } from "react";

const Task2 = () => {
  const [name, setName] = useState("Sudhan");

  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">
        Task 2 - Name Change
      </h2>

      <h1 className="text-3xl mb-4">{name}</h1>

      <button
        onClick={() => setName("React Developer")}
        className="bg-green-600 text-white px-5 py-2 rounded-lg"
      >
        Change Name
      </button>
    </div>
  );
};

export default Task2;