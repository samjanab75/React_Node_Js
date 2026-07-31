import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Roadmap from "./pages/Roadmap";
import Progress from "./pages/Progress";

import Home from "./pages/Home";
import Day1 from "./pages/Day1";
import Day2 from "./pages/Day2";
import Day3 from "./pages/Day3";
import Day4 from "./pages/Day4";
import Day5 from "./pages/Day5";
import Day6 from "./pages/Day6";
import Day7 from "./pages/Day7";
import Day8 from "./pages/Day8";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/"element={
            <>
              <Hero />
              <Home />
            </>
          }
        />

       <Route path="/day1" element={<Day1 />} />
       <Route path="/day2" element={<Day2 />} />
       <Route path="/day3" element={<Day3 />} />
       <Route path="/day4" element={<Day4 />} />
       <Route path="/day5" element={<Day5 />} />
       <Route path="/day6" element={<Day6 />} />
       <Route path="/day7" element={<Day7 />} />
       <Route path="/day8" element={<Day8 />} />
       <Route path="/roadmap" element={<Roadmap />} />
       <Route path="/progress" element={<Progress />} />
      </Routes>
    </>
  );
}

export default App;