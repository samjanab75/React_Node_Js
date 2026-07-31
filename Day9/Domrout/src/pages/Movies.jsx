 const Movies = ({ movies }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 w-96 mx-auto mt-10">

      <h2 className="text-2xl font-bold text-blue-700 mb-4">
        Movie List
      </h2>

      {movies.map((movie, index) => (
        <p key={index}>{movie}</p>
      ))}

    </div>
  );
};

export default Movies;