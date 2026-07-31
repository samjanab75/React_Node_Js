import { useState } from "react";

const Task4 = () => {
  const [company, setCompany] = useState({
    company: "Google",
    city: "Chennai",
  });

  const updateCompany = () => {
    setCompany({
      ...company,
      company: "Microsoft",
    });
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-4">Task 4 - Company</h2>

      <p>Company : {company.company}</p>
      <p>City : {company.city}</p>

      <button
        onClick={updateCompany}
        className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
      >
        Update Company
      </button>
    </div>
  );
};

export default Task4;