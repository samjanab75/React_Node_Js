const Task2 = () => {
  const price = 50000;
  const discount = 5000;

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition duration-300">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">
        Task 2 - Number Rendering
      </h2>

      <p className="text-lg">Price : ₹{price}</p>

      <p className="text-lg">Discount : ₹{discount}</p>
    </div>
  );
};

export default Task2;