const StudentCard = ({ name, age, course, isPlaced }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">

      <h2 className="text-2xl font-bold text-blue-600 mb-4">
        Task 1 - Primitive Props
      </h2>

      <p>
        <b>Name :</b> {name}
      </p>

      <p>
        <b>Age :</b> {age}
      </p>

      <p>
        <b>Course :</b> {course}
      </p>

      <p>
        <b>Status :</b>{" "}
        {isPlaced ? (
          <span className="text-green-600 font-bold">
            Placed
          </span>
        ) : (
          <span className="text-red-600 font-bold">
            Not Placed
          </span>
        )}
      </p>

    </div>
  );
};

export default StudentCard;