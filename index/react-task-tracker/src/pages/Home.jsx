 import "../style/Home.css";
import DayCard from "../components/DayCard";

function Home() {
  return (
    <div className="home">

      <DayCard
        day="Day 1"
        title="React Introduction"
        description="History of React"
        link="/day1"
      />

      <DayCard
        day="Day 2"
        title="JSX"
        description="JSX Rules"
        link="/day2"
      />

      <DayCard
        day="Day 3"
        title="Components"
        description="Functional Components"
        link="/day3"
      />

      <DayCard
        day="Day 4"
        title="Props"
        description="Passing Data"
        link="/day4"
      />

      <DayCard
        day="Day 5"
        title="useState"
        description="State Management"
        link="/day5"
      />

      <DayCard
        day="Day 6"
        title="Events"
        description="Event Handling"
        link="/day6"
      />

      <DayCard
        day="Day 7"
        title="Conditional Rendering"
        description="if, ternary"
        link="/day7"
      />

      <DayCard
        day="Day 8"
        title="Lists & map()"
        description="Rendering Lists"
        link="/day8"
      />

    </div>
  );
}

export default Home;