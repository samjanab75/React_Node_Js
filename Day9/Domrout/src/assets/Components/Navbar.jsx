 import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-700 text-white p-5 flex justify-center gap-8">

      <NavLink to="/">Home</NavLink>

      <NavLink to="/student">Student</NavLink>

      <NavLink to="/employee">Employee</NavLink>

      <NavLink to="/products">Products</NavLink>

      <NavLink to="/movies">Movies</NavLink>

      <NavLink to="/studentlist">Student List</NavLink>

    </nav>
  );
};

export default Navbar;