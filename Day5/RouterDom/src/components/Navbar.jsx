import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-[#0F4C81] text-white flex justify-between items-center px-10 py-4">
      <h1 className="text-3xl font-bold">Floating Waves</h1>

      <div className="flex gap-8">
        <Link to="/" className="hover:text-cyan-300">
          Home
        </Link>

        <Link to="/contact" className="hover:text-cyan-300">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;