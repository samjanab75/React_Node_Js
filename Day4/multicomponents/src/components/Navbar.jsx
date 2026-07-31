import logo from "../assets/logo.png";

const Navbar = () => {
  return (
   <nav className="flex justify-between items-center px-10 py-5 bg-[#0F4C81] text-white shadow-lg"> 
      <div className="flex items-center gap-3">
        <img
          src={logo}
          alt="Floating Waves"
          className="w-12 h-12 rounded-full"
        />
        <h1 className="text-3xl font-bold">
          Floating Waves
        </h1>
      </div>

      <ul className="flex gap-8 font-semibold">
        <li className="cursor-pointer hover:text-yellow-300">Home</li>
        <li className="cursor-pointer hover:text-yellow-300">Collection</li>
        <li className="cursor-pointer hover:text-yellow-300">About</li>
        <li className="cursor-pointer hover:text-yellow-300">Contact</li>
      </ul>

      <button className="bg-white text-sky-600 px-5 py-2 rounded-lg font-bold">
        Login
      </button>
    </nav>
  );
};

export default Navbar;