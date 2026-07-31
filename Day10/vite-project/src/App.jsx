import Task1 from "./components/Task1";
import Task2 from "./components/Task2";
import Task3 from "./components/Task3";
import Task4 from "./components/Task4";
import Task5 from "./components/Task5";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-4xl font-bold text-center text-blue-700 mb-10">
        React useState Assignment
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        <Task1 />
        <Task2 />
        <Task3 />
        <Task4 />
        <Task5 />

      </div>

    </div>
  );
};

export default App;