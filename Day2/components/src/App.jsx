import Header from "./components/Header";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <div className="flex justify-center items-center h-[80vh]">
        <h1 className="text-5xl font-bold text-red-600">
          Welcome To React JS
        </h1>
      </div>
    </div>
  );
}

export default App;