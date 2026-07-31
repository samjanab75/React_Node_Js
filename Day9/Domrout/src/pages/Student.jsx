const Student = ({ student }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 w-96 mx-auto mt-10">

      <h2 className="text-2xl font-bold text-blue-700 mb-4">
        Student Details
      </h2>

      <p>Name : {student.name}</p>

      <p>Age : {student.age}</p>

      <p>Course : {student.course}</p>

    </div>
  );
};

export default Student;