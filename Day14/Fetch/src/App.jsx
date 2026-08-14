 import { useState } from "react";

function App() {

  // =====================================================
  // TASK 1 - NAME SUBMIT
  // =====================================================

  const [name, setName] = useState("");
  const [displayName, setDisplayName] = useState("");

  // =====================================================
  // TASK 2 - STUDENT DETAILS
  // =====================================================

  const [studentName, setStudentName] = useState("");
  const [course, setCourse] = useState("");
  const [student, setStudent] = useState(null);

  // =====================================================
  // TASK 3 - TECHNOLOGY ARRAY
  // =====================================================

  const [technology, setTechnology] = useState("");
  const [technologies, setTechnologies] = useState([]);

  // =====================================================
  // TASK 4 - STUDENT ARRAY
  // =====================================================

  const [studentInput, setStudentInput] = useState("");
  const [students, setStudents] = useState([]);

  // =====================================================
  // TASK 5 - PRODUCT ARRAY
  // =====================================================

  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState([]);


  // =====================================================
  // COMMON STYLES
  // =====================================================

  const inputStyle =
    "w-full border border-slate-300 rounded-lg px-4 py-3 bg-white text-slate-800 outline-none focus:ring-2 focus:ring-purple-600 focus:border-purple-600 transition";

  const buttonStyle =
    "bg-blue-950 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold shadow-md transition duration-300";


  return (

    <div className="min-h-screen bg-slate-100 py-10 px-4">

      <div className="max-w-4xl mx-auto">


        {/* ================================================= */}
        {/* HEADER */}
        {/* ================================================= */}

        <div className="bg-gradient-to-r from-blue-950 to-purple-800 rounded-2xl shadow-xl p-8 mb-10 text-center">

          <h1 className="text-4xl font-bold text-white">
            React Practice Tasks
          </h1>

          <p className="text-slate-300 mt-2">
            useState • Arrays • Objects • map()
          </p>

        </div>


        {/* ================================================= */}
        {/* TASK 1 */}
        {/* ================================================= */}

        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-7 mb-8">

          <div className="border-l-4 border-purple-700 pl-4 mb-6">

            <h2 className="text-2xl font-bold text-blue-950">
              Task 1 - Name Submit
            </h2>

            <p className="text-slate-500 mt-1">
              Store the name using useState and display it.
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
            className={`${buttonStyle} mt-4`}
          >
            Submit
          </button>


          {displayName && (

            <h3 className="mt-5 bg-slate-100 border border-purple-200 rounded-lg p-4 text-lg font-semibold text-blue-950">

              Name:
              <span className="text-purple-700 ml-2">
                {displayName}
              </span>

            </h3>

          )}

        </div>


        {/* ================================================= */}
        {/* TASK 2 */}
        {/* ================================================= */}

        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-7 mb-8">

          <div className="border-l-4 border-purple-700 pl-4 mb-6">

            <h2 className="text-2xl font-bold text-blue-950">
              Task 2 - Student Details
            </h2>

            <p className="text-slate-500 mt-1">
              Store student name and course using useState.
            </p>

          </div>


          <input
            type="text"
            placeholder="Student Name"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            className={`${inputStyle} mb-4`}
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
            className={`${buttonStyle} mt-4`}
          >
            Submit
          </button>


          {student && (

            <div className="mt-6 bg-slate-50 border border-purple-200 rounded-xl p-6">

              <h3 className="text-xl font-bold text-blue-950 mb-4">
                Student Details
              </h3>


              <p className="text-slate-700 mb-3">

                <span className="font-semibold text-blue-950">
                  Student Name:
                </span>

                <span className="ml-2">
                  {student.name}
                </span>

              </p>


              <p className="text-slate-700">

                <span className="font-semibold text-blue-950">
                  Course:
                </span>

                <span className="ml-2">
                  {student.course}
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
              Task 3 - Add Technology
            </h2>

            <p className="text-slate-500 mt-1">
              Add technologies into an array and display them using map().
            </p>

          </div>


          <input
            type="text"
            placeholder="Enter Technology"
            value={technology}
            onChange={(e) => setTechnology(e.target.value)}
            className={inputStyle}
          />


          <button
            onClick={() => {

              if (technology.trim() === "") {
                return;
              }

              setTechnologies([
                ...technologies,
                technology
              ]);

              setTechnology("");

            }}
            className={`${buttonStyle} mt-4`}
          >
            Add Technology
          </button>


          {/* Technology List */}

          {technologies.length > 0 && (

            <div className="mt-6">

              <h3 className="text-xl font-bold text-blue-950 mb-4">
                Technology List
              </h3>


              <div className="space-y-3">

                {technologies.map((tech, index) => (

                  <div
                    key={index}
                    className="bg-slate-50 border border-slate-200 rounded-lg p-4 flex items-center"
                  >

                    <span className="w-8 h-8 rounded-full bg-blue-950 text-white flex items-center justify-center mr-3 font-semibold">
                      {index + 1}
                    </span>

                    <span className="font-medium text-slate-700">
                      {tech}
                    </span>

                  </div>

                ))}

              </div>

            </div>

          )}

        </div>


        {/* ================================================= */}
        {/* TASK 4 */}
        {/* ================================================= */}

        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-7 mb-8">

          <div className="border-l-4 border-purple-700 pl-4 mb-6">

            <h2 className="text-2xl font-bold text-blue-950">
              Task 4 - Student List
            </h2>

            <p className="text-slate-500 mt-1">
              Add students into an array and display them using map().
            </p>

          </div>


          <input
            type="text"
            placeholder="Enter Student Name"
            value={studentInput}
            onChange={(e) => setStudentInput(e.target.value)}
            className={inputStyle}
          />


          <button
            onClick={() => {

              if (studentInput.trim() === "") {
                return;
              }

              setStudents([
                ...students,
                studentInput
              ]);

              setStudentInput("");

            }}
            className={`${buttonStyle} mt-4`}
          >
            Add Student
          </button>


          {/* Student List */}

          {students.length > 0 && (

            <div className="mt-6">

              <h3 className="text-xl font-bold text-blue-950 mb-4">
                Student List
              </h3>


              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                {students.map((student, index) => (

                  <div
                    key={index}
                    className="bg-slate-50 border border-slate-200 rounded-lg p-4 flex items-center"
                  >

                    <span className="w-9 h-9 rounded-full bg-purple-700 text-white flex items-center justify-center mr-3 font-semibold">
                      {index + 1}
                    </span>

                    <span className="font-medium text-slate-700">
                      {student}
                    </span>

                  </div>

                ))}

              </div>

            </div>

          )}

        </div>


        {/* ================================================= */}
        {/* TASK 5 */}
        {/* ================================================= */}

        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-7 mb-8">

          <div className="border-l-4 border-purple-700 pl-4 mb-6">

            <h2 className="text-2xl font-bold text-blue-950">
              Task 5 - Product List
            </h2>

            <p className="text-slate-500 mt-1">
              Store product objects inside an array and render them using map().
            </p>

          </div>


          <input
            type="text"
            placeholder="Product Name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className={`${inputStyle} mb-4`}
          />


          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className={inputStyle}
          />


          <button
            onClick={() => {

              if (
                productName.trim() === "" ||
                price.trim() === ""
              ) {
                return;
              }

              const newProduct = {
                name: productName,
                price: price
              };

              setProducts([
                ...products,
                newProduct
              ]);

              setProductName("");
              setPrice("");

            }}
            className={`${buttonStyle} mt-4`}
          >
            Add Product
          </button>


          {/* Product List */}

          {products.length > 0 && (

            <div className="mt-6">

              <h3 className="text-xl font-bold text-blue-950 mb-4">
                Product List
              </h3>


              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                {products.map((product, index) => (

                  <div
                    key={index}
                    className="rounded-xl overflow-hidden border border-slate-200 shadow-md"
                  >

                    {/* Card Header */}

                    <div className="bg-gradient-to-r from-blue-950 to-purple-800 p-4">

                      <h4 className="text-lg font-bold text-white">
                        {product.name}
                      </h4>

                    </div>


                    {/* Card Body */}

                    <div className="bg-white p-5">

                      <p className="text-sm text-slate-500">
                        Price
                      </p>

                      <p className="text-2xl font-bold text-purple-700 mt-1">
                        ₹{product.price}
                      </p>

                    </div>

                  </div>

                ))}

              </div>

            </div>

          )}

        </div>


        {/* ================================================= */}
        {/* FOOTER */}
        {/* ================================================= */}

        <div className="text-center py-5">

          <p className="text-slate-500 text-sm">
        
          </p>

        </div>

      </div>

    </div>

  );
}

export default App;