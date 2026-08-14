 import { useEffect, useState } from "react";

function App() {
  // =====================================================
  // TASK 1 - COUNTER WITH useEffect
  // =====================================================

  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Latest Count:", count);
  }, [count]);


  // =====================================================
  // TASK 2 - PAGE TITLE UPDATER
  // =====================================================

  const [userName, setUserName] = useState("");

  useEffect(() => {
    if (userName.trim() === "") {
      document.title = "React Practice";
    } else {
      document.title = `Welcome ${userName}`;
    }
  }, [userName]);


  // =====================================================
  // TASK 3 - DIGITAL TIMER
  // =====================================================

  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((previousTimer) => previousTimer + 1);
    }, 1000);

    // Cleanup Function
    return () => {
      clearInterval(interval);
    };
  }, []);


  // =====================================================
  // TASK 4 - FETCH API
  // =====================================================

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        const data = await response.json();

        setUsers(data);
      } catch (error) {
        console.log("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);


  // =====================================================
  // TASK 5 - DARK / LIGHT MODE
  // =====================================================

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.style.backgroundColor = "#0f172a";
    } else {
      document.body.style.backgroundColor = "#f1f5f9";
    }

    // Cleanup
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [darkMode]);


  // =====================================================
  // COMMON STYLES
  // =====================================================

  const inputStyle =
    "w-full border border-slate-300 rounded-lg px-4 py-3 bg-white text-slate-800 outline-none focus:ring-2 focus:ring-purple-600 focus:border-purple-600 transition";

  const buttonStyle =
    "bg-blue-950 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold shadow-md transition duration-300";


  return (
    <div
      className={`min-h-screen py-10 px-4 transition-colors duration-500 ${
        darkMode ? "bg-slate-900" : "bg-slate-100"
      }`}
    >

      <div className="max-w-4xl mx-auto">


        {/* ================================================= */}
        {/* HEADER */}
        {/* ================================================= */}

        <div className="bg-gradient-to-r from-blue-950 to-purple-800 rounded-2xl shadow-xl p-8 mb-10 text-center">

          <h1 className="text-4xl font-bold text-white">
            React useEffect Practice
          </h1>

          <p className="text-slate-300 mt-2">
            useState • useEffect • API • Timer • DOM
          </p>

        </div>


        {/* ================================================= */}
        {/* TASK 1 */}
        {/* ================================================= */}

        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-7 mb-8">

          <div className="border-l-4 border-purple-700 pl-4 mb-6">

            <h2 className="text-2xl font-bold text-blue-950">
              Task 1 - Counter with useEffect
            </h2>

            <p className="text-slate-500 mt-1">
              Open the browser console to see the latest count.
            </p>

          </div>


          <div className="text-center">

            <p className="text-sm text-slate-500 mb-2">
              Current Count
            </p>

            <h3 className="text-5xl font-bold text-purple-700 mb-6">
              {count}
            </h3>

            <button
              onClick={() => setCount(count + 1)}
              className={buttonStyle}
            >
              Increment
            </button>

          </div>

        </div>


        {/* ================================================= */}
        {/* TASK 2 */}
        {/* ================================================= */}

        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-7 mb-8">

          <div className="border-l-4 border-purple-700 pl-4 mb-6">

            <h2 className="text-2xl font-bold text-blue-950">
              Task 2 - Page Title Updater
            </h2>

            <p className="text-slate-500 mt-1">
              Type your name and check the browser tab.
            </p>

          </div>


          <input
            type="text"
            placeholder="Enter Your Name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className={inputStyle}
          />


          {userName && (

            <div className="mt-5 bg-slate-50 border border-purple-200 rounded-lg p-4">

              <p className="text-blue-950 font-semibold">

                Browser Title:

                <span className="text-purple-700 ml-2">
                  Welcome {userName}
                </span>

              </p>

            </div>

          )}

        </div>


        {/* ================================================= */}
        {/* TASK 3 */}
        {/* ================================================= */}

        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-7 mb-8">

          <div className="border-l-4 border-purple-700 pl-4 mb-6">

            <h2 className="text-2xl font-bold text-blue-950">
              Task 3 - Digital Timer
            </h2>

            <p className="text-slate-500 mt-1">
              Timer automatically increases every second.
            </p>

          </div>


          <div className="text-center">

            <div className="inline-flex items-center justify-center w-48 h-48 rounded-full bg-gradient-to-br from-blue-950 to-purple-800 shadow-xl">

              <div className="text-center">

                <p className="text-slate-300 text-sm">
                  TIMER
                </p>

                <h3 className="text-5xl font-bold text-white">
                  {timer}
                </h3>

                <p className="text-slate-300 text-sm">
                  seconds
                </p>

              </div>

            </div>

          </div>

        </div>


        {/* ================================================= */}
        {/* TASK 4 */}
        {/* ================================================= */}

        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-7 mb-8">

          <div className="border-l-4 border-purple-700 pl-4 mb-6">

            <h2 className="text-2xl font-bold text-blue-950">
              Task 4 - Fetch API
            </h2>

            <p className="text-slate-500 mt-1">
              Users fetched using useEffect and Fetch API.
            </p>

          </div>


          {loading ? (

            <div className="text-center py-8">

              <p className="text-purple-700 font-semibold">
                Loading users...
              </p>

            </div>

          ) : (

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              {users.map((user) => (

                <div
                  key={user.id}
                  className="border border-slate-200 rounded-xl p-5 bg-slate-50 hover:shadow-md transition"
                >

                  <div className="flex items-center mb-4">

                    <div className="w-10 h-10 rounded-full bg-blue-950 text-white flex items-center justify-center font-bold mr-3">
                      {user.id}
                    </div>

                    <h3 className="font-bold text-blue-950 text-lg">
                      {user.name}
                    </h3>

                  </div>


                  <p className="text-slate-600">

                    <span className="font-semibold">
                      Email:
                    </span>

                    <br />

                    {user.email}

                  </p>

                </div>

              ))}

            </div>

          )}

        </div>


        {/* ================================================= */}
        {/* TASK 5 */}
        {/* ================================================= */}

        <div
          className={`rounded-2xl shadow-lg border p-7 mb-8 transition-colors duration-500 ${
            darkMode
              ? "bg-slate-800 border-slate-700"
              : "bg-white border-slate-200"
          }`}
        >

          <div className="border-l-4 border-purple-700 pl-4 mb-6">

            <h2
              className={`text-2xl font-bold ${
                darkMode ? "text-white" : "text-blue-950"
              }`}
            >
              Task 5 - Dark / Light Mode
            </h2>

            <p
              className={`mt-1 ${
                darkMode ? "text-slate-400" : "text-slate-500"
              }`}
            >
              Theme changes using useEffect and DOM manipulation.
            </p>

          </div>


          <div className="text-center">

            <div className="mb-6">

              <span
                className={`text-5xl ${
                  darkMode ? "text-white" : "text-yellow-500"
                }`}
              >
                {darkMode ? "🌙" : "☀️"}
              </span>

            </div>


            <h3
              className={`text-2xl font-bold mb-5 ${
                darkMode ? "text-white" : "text-blue-950"
              }`}
            >
              {darkMode ? "Dark Mode" : "Light Mode"}
            </h3>


            <button
              onClick={() => setDarkMode(!darkMode)}
              className="bg-blue-950 hover:bg-purple-700 text-white px-7 py-3 rounded-lg font-semibold shadow-md transition duration-300"
            >
              {darkMode
                ? "Switch to Light Mode"
                : "Switch to Dark Mode"}
            </button>

          </div>

        </div>


        {/* ================================================= */}
        {/* FOOTER */}
        {/* ================================================= */}

        <div className="text-center py-5">

          <p
            className={`text-sm ${
              darkMode ? "text-slate-400" : "text-slate-500"
            }`}
          >
 
          </p>

        </div>

      </div>

    </div>
  );
}

export default App;