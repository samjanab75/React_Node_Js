const Task4 = () => {
  const profileImage = null;

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition duration-300">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">
        Task 4 - Null Rendering
      </h2>

      <h3>{profileImage ? "Image Available" : "No Image Found"}</h3>
    </div>
  );
};

export default Task4;