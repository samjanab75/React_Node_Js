import { useState } from "react";

const Task1 = () => {
  const [heroes, setHeroes] = useState([
    "Vijay",
    "Ajith",
    "Suriya",
  ]);

  const changeHero = () => {
    setHeroes(
      heroes.map((hero) =>
        hero === "Ajith" ? "SK" : hero
      )
    );
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Task 1</h2>

      {heroes.map((hero, index) => (
        <p key={index}>{hero}</p>
      ))}

      <button
        onClick={changeHero}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
      >
        Change Hero
      </button>
    </div>
  );
};

export default Task1;