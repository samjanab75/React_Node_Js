import { useState } from "react";

const Task2 = () => {
  const [fruits, setFruits] = useState(["Apple", "Orange", "Mango"]);

  const updateFruit = () => {
    setFruits(fruits.map(fruit => fruit === "Orange" ? "Banana" : fruit));
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-4">Task 2 - Fruits</h2>

      {fruits.map((fruit, index) => (
        <p key={index}>{fruit}</p>
      ))}

      <button
        onClick={updateFruit}
        className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
      >
        Update Fruit
      </button>
    </div>
  );
};

export default Task2;