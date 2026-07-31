const StudentList = ({ students }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">

      <h2 className="text-2xl font-bold text-blue-600 mb-4">
        Task 3 - Array Of Objects Props
      </h2>

      {students.map((student) => (
        <div
          key={student.id}
          className="border rounded-lg p-3 mb-3 hover:bg-slate-100 transition"
        >
          <p>
            <b>ID :</b> {student.id}
          </p>

          <p>
            <b>Name :</b> {student.name}
          </p>

          <p>
            <b>Course :</b> {student.course}
          </p>
        </div>
      ))}

    </div>
  );
};

export default StudentList;