import { useState } from "react";

const Task1 = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Task 1 - Counter</h2>

      <h1 className="text-5xl font-bold text-blue-600 mb-4">
        {count}
      </h1>

      <button
        onClick={() => setCount(count + 1)}
        className="bg-blue-600 text-white px-5 py-2 rounded-lg"
      >
        Increase
      </button>
    </div>
  );
};

export default Task1;