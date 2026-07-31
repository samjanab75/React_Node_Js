import { useState } from "react";

const Task4 = () => {
  const [theme, setTheme] = useState("Light Mode");

  const changeTheme = () => {
    setTheme(theme === "Light Mode" ? "Dark Mode" : "Light Mode");
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">
        Task 4 - Theme Status
      </h2>

      <h1 className="text-3xl mb-4">{theme}</h1>

      <button
        onClick={changeTheme}
        className="bg-black text-white px-5 py-2 rounded-lg"
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default Task4;