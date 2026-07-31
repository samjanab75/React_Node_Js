const Task10 = () => {
  const companyName = "Floating Waves";

  const totalEmployees = 250;

  const isHiring = true;

  const ceo = {
    name: "Samjana Bhandari",
  };

  const departments = [
    "Development",
    "Marketing",
    "HR",
    "Sales",
  ];

  const employees = [
    {
      id: 1,
      name: "Sam",
    },
    {
      id: 2,
      name: "John",
    },
    {
      id: 3,
      name: "Sara",
    },
  ];

  const getLocation = () => {
    return "Chennai";
  };

  return (
   <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition duration-300">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">
        Task 10 - Mixed Rendering
      </h2>

      <p>Company : {companyName}</p>

      <p>Total Employees : {totalEmployees}</p>

      <p>Hiring : {isHiring ? "Yes" : "No"}</p>

      <p>CEO : {ceo.name}</p>

      <h3 className="font-bold mt-4">Departments</h3>

      {departments.map((dept, index) => (
        <p key={index}>{dept}</p>
      ))}

      <h3 className="font-bold mt-4">Employees</h3>

      {employees.map((emp) => (
        <p key={emp.id}>{emp.name}</p>
      ))}

      <h3 className="mt-4">Location : {getLocation()}</h3>
    </div>
  );
};

export default Task10;