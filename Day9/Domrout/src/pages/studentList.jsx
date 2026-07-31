 const StudentList = ({ students }) => {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-10">
        Student List
      </h1>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
        {students.map((student) => (
          <div
            key={student.id}
            className="bg-white shadow-xl rounded-xl p-6 hover:scale-105 transition duration-300"
          >
            <h2 className="text-2xl font-bold text-blue-600 mb-3">
              Student {student.id}
            </h2>

            <p className="text-lg">
              <span className="font-semibold">Name:</span> {student.name}
            </p>

            <p className="text-lg">
              <span className="font-semibold">Course:</span> {student.course}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentList;