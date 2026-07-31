const EmployeeCard = ({ employee }) => {

  const { name, email, city, experience } = employee;

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">

      <h2 className="text-2xl font-bold text-blue-600 mb-4">
        Task 2 - Object Props
      </h2>

      <p>
        <b>Name :</b> {name}
      </p>

      <p>
        <b>Email :</b> {email}
      </p>

      <p>
        <b>City :</b> {city}
      </p>

      <p>
        <b>Experience :</b> {experience}
      </p>

    </div>
  );
};

export default EmployeeCard;