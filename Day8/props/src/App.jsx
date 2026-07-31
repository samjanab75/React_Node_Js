import StudentCard from "./assets/components/StudentCard";
import EmployeeCard from "./assets/components/EmployeeCard";
import StudentList from "./assets/components/StudentList";

const App = () => {

  // Task 1
  const name = "Sudhan";
  const age = 25;
  const course = "React";
  const isPlaced = true;

  // Task 2
  const employee = {
    name: "Rahul",
    email: "rahul@gmail.com",
    city: "Chennai",
    experience: "3 Years",
  };

  // Task 3
  const students = [
    { id: 1, name: "Sudhan", course: "React" },
    { id: 2, name: "Rahul", course: "MERN" },
    { id: 3, name: "Vijay", course: "Node JS" },
    { id: 4, name: "Kavin", course: "Angular" },
    { id: 5, name: "Priya", course: "Java Full Stack" },
  ];

  return (
    <div className="min-h-screen bg-slate-100 p-10">

      <h1 className="text-4xl font-bold text-center text-blue-700 mb-10">
        React Props Assignment
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        <StudentCard
          name={name}
          age={age}
          course={course}
          isPlaced={isPlaced}
        />

        <EmployeeCard employee={employee} />

        <StudentList students={students} />

      </div>

    </div>
  );
};

export default App;