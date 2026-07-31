const Task7 = () => {
  const heroes = [
    "Vijay",
    "Ajith",
    "Suriya",
    "SK",
    "Dhanush",
  ];

  return (
   <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition duration-300">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">
        Task 7 - Array Rendering
      </h2>

      {heroes.map((hero, index) => (
        <p key={index}>{hero}</p>
      ))}
    </div>
  );
};

export default Task7;