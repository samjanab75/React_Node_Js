 import { useState } from "react";

function App() {
  // Task 1
  const [name, setName] = useState("");
  const [displayName, setDisplayName] = useState("");

  // Task 2
  const [studentName, setStudentName] = useState("");
  const [course, setCourse] = useState("");
  const [student, setStudent] = useState(null);

  // Task 3
  const [employeeName, setEmployeeName] = useState("");
  const [department, setDepartment] = useState("");
  const [salary, setSalary] = useState("");
  const [employee, setEmployee] = useState(null);

  // Task 4
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [product, setProduct] = useState(null);

  // Task 5
  const [profileName, setProfileName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [age, setAge] = useState("");
  const [profile, setProfile] = useState(null);

  // Common styles
  const inputStyle =
    "w-full border border-slate-300 rounded-lg px-4 py-3 mb-4 bg-white text-slate-800 outline-none focus:ring-2 focus:ring-purple-600 focus:border-purple-600 transition";

  const buttonStyle =
    "bg-blue-950 hover:bg-purple-700 text-white px-7 py-3 rounded-lg font-semibold transition duration-300 shadow-md";

  return (
    <div className="min-h-screen bg-slate-100 py-10 px-4">

      {/* Main Container */}
      <div className="max-w-4xl mx-auto">

        {/* ================= HEADER ================= */}

        <div className="bg-gradient-to-r from-blue-950 to-purple-800 rounded-2xl shadow-xl p-8 mb-10 text-center">

          <h1 className="text-4xl font-bold text-white">
            React Practice Tasks
          </h1>

          <p className="text-slate-200 mt-2">
            React JS + Tailwind CSS
          </p>

        </div>


        {/* ================= TASK 1 ================= */}

        <div className="bg-white border border-slate-200 rounded-2xl shadow-lg p-7 mb-8">

          <div className="border-l-4 border-purple-700 pl-4 mb-6">

            <h2 className="text-2xl font-bold text-blue-950">
              Task 1 - Name Display
            </h2>

            <p className="text-slate-500 mt-1">
              Enter your name and display it after clicking Submit.
            </p>

          </div>

          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputStyle}
          />

          <button
            onClick={() => setDisplayName(name)}
            className={buttonStyle}
          >
            Submit
          </button>

          {displayName && (
            <div className="mt-5 bg-slate-100 border border-purple-200 rounded-lg p-4">

              <p className="text-blue-950 font-semibold">
                Name:
                <span className="text-purple-700 ml-2">
                  {displayName}
                </span>
              </p>

            </div>
          )}

        </div>


        {/* ================= TASK 2 ================= */}

        <div className="bg-white border border-slate-200 rounded-2xl shadow-lg p-7 mb-8">

          <div className="border-l-4 border-purple-700 pl-4 mb-6">

            <h2 className="text-2xl font-bold text-blue-950">
              Task 2 - Student Details
            </h2>

            <p className="text-slate-500 mt-1">
              Enter student information.
            </p>

          </div>

          <input
            type="text"
            placeholder="Student Name"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            className={inputStyle}
          />

          <input
            type="text"
            placeholder="Course"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            className={inputStyle}
          />

          <button
            onClick={() =>
              setStudent({
                name: studentName,
                course: course,
              })
            }
            className={buttonStyle}
          >
            Submit
          </button>

          {student && (
            <div className="mt-6 bg-slate-50 border border-purple-200 rounded-xl p-6">

              <h3 className="text-xl font-bold text-blue-950 mb-4">
                Student Details
              </h3>

              <div className="space-y-3">

                <p className="text-slate-700">
                  <span className="font-semibold text-blue-950">
                    Student Name:
                  </span>{" "}
                  {student.name}
                </p>

                <p className="text-slate-700">
                  <span className="font-semibold text-blue-950">
                    Course:
                  </span>{" "}
                  {student.course}
                </p>

              </div>

            </div>
          )}

        </div>


        {/* ================= TASK 3 ================= */}

        <div className="bg-white border border-slate-200 rounded-2xl shadow-lg p-7 mb-8">

          <div className="border-l-4 border-purple-700 pl-4 mb-6">

            <h2 className="text-2xl font-bold text-blue-950">
              Task 3 - Employee Details
            </h2>

            <p className="text-slate-500 mt-1">
              Enter employee information.
            </p>

          </div>

          <input
            type="text"
            placeholder="Employee Name"
            value={employeeName}
            onChange={(e) => setEmployeeName(e.target.value)}
            className={inputStyle}
          />

          <input
            type="text"
            placeholder="Department"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            className={inputStyle}
          />

          <input
            type="number"
            placeholder="Salary"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            className={inputStyle}
          />

          <button
            onClick={() =>
              setEmployee({
                name: employeeName,
                department: department,
                salary: salary,
              })
            }
            className={buttonStyle}
          >
            Submit
          </button>

          {employee && (
            <div className="mt-6 bg-slate-50 border border-purple-200 rounded-xl p-6">

              <h3 className="text-xl font-bold text-blue-950 mb-4">
                Employee Details
              </h3>

              <div className="space-y-3">

                <p>
                  <span className="font-semibold text-blue-950">
                    Employee Name:
                  </span>{" "}
                  {employee.name}
                </p>

                <p>
                  <span className="font-semibold text-blue-950">
                    Department:
                  </span>{" "}
                  {employee.department}
                </p>

                <p>
                  <span className="font-semibold text-blue-950">
                    Salary:
                  </span>{" "}
                  ₹{employee.salary}
                </p>

              </div>

            </div>
          )}

        </div>


        {/* ================= TASK 4 ================= */}

        <div className="bg-white border border-slate-200 rounded-2xl shadow-lg p-7 mb-8">

          <div className="border-l-4 border-purple-700 pl-4 mb-6">

            <h2 className="text-2xl font-bold text-blue-950">
              Task 4 - Product Details
            </h2>

            <p className="text-slate-500 mt-1">
              Enter product information.
            </p>

          </div>

          <input
            type="text"
            placeholder="Product Name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className={inputStyle}
          />

          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className={inputStyle}
          />

          <input
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className={inputStyle}
          />

          <button
            onClick={() =>
              setProduct({
                name: productName,
                price: price,
                category: category,
              })
            }
            className={buttonStyle}
          >
            Submit
          </button>


          {/* Product Card */}

          {product && (
            <div className="mt-7 max-w-md mx-auto rounded-2xl overflow-hidden shadow-xl border border-slate-200">

              <div className="bg-gradient-to-r from-blue-950 to-purple-800 p-6">

                <h3 className="text-2xl font-bold text-white">
                  Product Details
                </h3>

                <p className="text-slate-300 mt-1">
                  Product Information
                </p>

              </div>

              <div className="bg-white p-6 space-y-4">

                <div>
                  <p className="text-sm text-slate-500">
                    Product Name
                  </p>

                  <p className="text-lg font-semibold text-blue-950">
                    {product.name}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-slate-500">
                    Price
                  </p>

                  <p className="text-lg font-semibold text-purple-700">
                    ₹{product.price}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-slate-500">
                    Category
                  </p>

                  <p className="text-lg font-semibold text-blue-950">
                    {product.category}
                  </p>
                </div>

              </div>

            </div>
          )}

        </div>


        {/* ================= TASK 5 ================= */}

        <div className="bg-white border border-slate-200 rounded-2xl shadow-lg p-7 mb-8">

          <div className="border-l-4 border-purple-700 pl-4 mb-6">

            <h2 className="text-2xl font-bold text-blue-950">
              Task 5 - User Profile
            </h2>

            <p className="text-slate-500 mt-1">
              Create a professional user profile card.
            </p>

          </div>

          <input
            type="text"
            placeholder="Name"
            value={profileName}
            onChange={(e) => setProfileName(e.target.value)}
            className={inputStyle}
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputStyle}
          />

          <input
            type="text"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className={inputStyle}
          />

          <input
            type="number"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className={inputStyle}
          />

          <button
            onClick={() =>
              setProfile({
                name: profileName,
                email: email,
                city: city,
                age: age,
              })
            }
            className={buttonStyle}
          >
            Submit
          </button>


          {/* Profile Card */}

          {profile && (
            <div className="mt-7 max-w-md mx-auto rounded-2xl overflow-hidden shadow-xl border border-slate-200">

              {/* Profile Header */}

              <div className="bg-gradient-to-r from-blue-950 to-purple-800 p-7 text-center">

                <div className="w-20 h-20 mx-auto rounded-full bg-white flex items-center justify-center text-3xl shadow-lg mb-4">
                  👤
                </div>

                <h3 className="text-2xl font-bold text-white">
                  {profile.name}
                </h3>

                <p className="text-slate-300 mt-1">
                  User Profile
                </p>

              </div>


              {/* Profile Information */}

              <div className="bg-white p-6 space-y-5">

                <div>
                  <p className="text-sm text-slate-500">
                    Email
                  </p>

                  <p className="font-semibold text-blue-950">
                    {profile.email}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-slate-500">
                    City
                  </p>

                  <p className="font-semibold text-blue-950">
                    {profile.city}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-slate-500">
                    Age
                  </p>

                  <p className="font-semibold text-blue-950">
                    {profile.age}
                  </p>
                </div>

              </div>

            </div>
          )}

        </div>


        {/* FOOTER */}

        <div className="text-center py-5">

          <p className="text-slate-500 text-sm">
            React JS • Tailwind CSS • Form Handling • useState
          </p>

        </div>

      </div>

    </div>
  );
}

export default App;