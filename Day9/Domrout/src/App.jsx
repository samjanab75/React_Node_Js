 import { Routes, Route } from "react-router-dom";

import Navbar from "./assets/components/Navbar";

import Home from "./pages/Home";
import Student from "./pages/Student";
import Employee from "./pages/Employee";
import Products from "./pages/Products";
import Movies from "./pages/Movies";
import StudentList from "./pages/StudentList";

const App = () => {

  const student = {
    name: "Sudhan",
    age: 25,
    course: "React JS",
  };

  const employee = {
    name: "Rahul",
    email: "rahul@gmail.com",
    department: "IT",
  };

  const product = {
    productName: "Laptop",
    price: 65000,
    stock: true,
  };

  const movies = [
    "Vijay",
    "Ajith",
    "Suriya",
  ];

  const students = [
    {
      id: 1,
      name: "Sudhan",
      course: "React",
    },
    {
      id: 2,
      name: "Rahul",
      course: "MERN",
    },
    {
      id: 3,
      name: "Vijay",
      course: "Node JS",
    },
    {
      id: 4,
      name: "Kumar",
      course: "Angular",
    },
    {
      id: 5,
      name: "Priya",
      course: "Python",
    },
  ];

  return (
    <>
      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/student"
          element={<Student student={student} />}
        />

        <Route
          path="/employee"
          element={<Employee employee={employee} />}
        />

        <Route
          path="/products"
          element={<Products product={product} />}
        />

        <Route
          path="/movies"
          element={<Movies movies={movies} />}
        />

        <Route
          path="/studentlist"
          element={<StudentList students={students} />}
        />

      </Routes>
    </>
  );
};

export default App;