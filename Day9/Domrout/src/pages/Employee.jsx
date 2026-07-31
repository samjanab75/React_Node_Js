const Employee = ({ employee }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 w-96 mx-auto mt-10">

      <h2 className="text-2xl font-bold text-blue-700 mb-4">
        Employee Details
      </h2>

      <p>Name : {employee.name}</p>

      <p>Email : {employee.email}</p>

      <p>Department : {employee.department}</p>

    </div>
  );
};

export default Employee;