 import React from "react";

const topics = [
  "RDBMS",
  "SQL",
  "MySQL",
  "MySQLi",
  "PostgreSQL",
  "Oracle",
  "Server",
  "XAMPP",
  "WAMP",
  "GUI",
  "MySQL Workbench 8",
  "React + MySQL",
  "CRUD",
];

const CodeBox = ({ children }) => (
  <pre className="bg-slate-950 text-green-400 p-5 rounded-xl overflow-x-auto text-sm leading-7 shadow-inner">
    <code>{children}</code>
  </pre>
);

const Section = ({ id, number, title, children }) => (
  <section
    id={id}
    className="bg-white rounded-2xl shadow-md border border-slate-200 p-6 md:p-8 mb-8 scroll-mt-24"
  >
    <div className="flex items-center gap-3 mb-5">
      <span className="bg-blue-600 text-white w-10 h-10 rounded-xl flex items-center justify-center font-bold">
        {number}
      </span>

      <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
        {title}
      </h2>
    </div>

    {children}
  </section>
);

function App() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-800">

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 bg-slate-950 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">

          <div>
            <h1 className="text-xl md:text-2xl font-bold">
              💻 Full Stack Database Study Material
            </h1>

            <p className="text-slate-400 text-sm">
              React + Tailwind CSS + SQL + MySQL
            </p>
          </div>

          <a
            href="#roadmap"
            className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg font-semibold text-center"
          >
            Start Learning
          </a>

        </div>
      </header>

      {/* HERO */}
      <div className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 py-14">

          <span className="bg-white/20 px-4 py-2 rounded-full text-sm">
            FULL STACK DEVELOPER STUDY MATERIAL
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold mt-5">
            Database & SQL
            <br />
            Complete Notes
          </h1>

          <p className="mt-5 text-blue-100 max-w-3xl text-lg">
            Learn RDBMS, SQL, MySQL, MySQLi, PostgreSQL, Oracle,
            Server, XAMPP, WAMP, GUI, MySQL Workbench 8 and
            connect databases with React applications.
          </p>

        </div>
      </div>

      {/* MAIN */}
      <main className="max-w-7xl mx-auto px-4 py-10">

        {/* ROADMAP */}
        <section id="roadmap" className="mb-10 scroll-mt-24">

          <h2 className="text-3xl font-bold mb-6">
            📚 Study Roadmap
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

            {topics.map((topic, index) => (
              <a
                key={topic}
                href={`#${topic.toLowerCase().replaceAll(" ", "-").replace("+", "")}`}
                className="bg-white border border-slate-200 rounded-xl p-4 shadow hover:shadow-lg hover:-translate-y-1 transition"
              >
                <span className="text-blue-600 font-bold">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="font-semibold mt-2">
                  {topic}
                </h3>
              </a>
            ))}

          </div>
        </section>


        {/* RDBMS */}
        <Section id="rdbms" number="01" title="RDBMS">

          <p className="text-lg leading-8">
            <b>RDBMS</b> stands for
            <b> Relational Database Management System</b>.
            It stores data in tables containing rows and columns.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-6">

            <div className="bg-blue-50 p-5 rounded-xl">
              <h3 className="text-xl font-bold mb-3">
                Important Terms
              </h3>

              <ul className="space-y-2">
                <li>📌 Database → Collection of data</li>
                <li>📌 Table → Stores related data</li>
                <li>📌 Row → One record</li>
                <li>📌 Column → One attribute</li>
                <li>📌 Primary Key → Unique identification</li>
                <li>📌 Foreign Key → Connects tables</li>
              </ul>
            </div>

            <div className="bg-green-50 p-5 rounded-xl">
              <h3 className="text-xl font-bold mb-3">
                Example Table
              </h3>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-green-200">
                      <th className="p-2">id</th>
                      <th className="p-2">name</th>
                      <th className="p-2">department</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td className="p-2">1</td>
                      <td className="p-2">Arun</td>
                      <td className="p-2">IT</td>
                    </tr>

                    <tr>
                      <td className="p-2">2</td>
                      <td className="p-2">Priya</td>
                      <td className="p-2">HR</td>
                    </tr>
                  </tbody>
                </table>
              </div>

            </div>

          </div>

          <h3 className="text-xl font-bold mt-6 mb-3">
            RDBMS Example
          </h3>

          <CodeBox>
{`CREATE TABLE Employees (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    department VARCHAR(100),
    salary DECIMAL(10,2),
    city VARCHAR(100)
);`}
          </CodeBox>

        </Section>


        {/* SQL */}
        <Section id="sql" number="02" title="SQL">

          <p className="text-lg leading-8">
            <b>SQL</b> stands for
            <b> Structured Query Language</b>.
            SQL is used to create, read, update and delete data
            from relational databases.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">

            <div className="p-5 bg-blue-50 rounded-xl">
              <h3 className="text-xl font-bold text-blue-700">
                DDL
              </h3>

              <p className="my-3">
                Data Definition Language
              </p>

              <CodeBox>
{`CREATE
ALTER
DROP
TRUNCATE`}
              </CodeBox>
            </div>

            <div className="p-5 bg-green-50 rounded-xl">
              <h3 className="text-xl font-bold text-green-700">
                DML
              </h3>

              <p className="my-3">
                Data Manipulation Language
              </p>

              <CodeBox>
{`INSERT
UPDATE
DELETE`}
              </CodeBox>
            </div>

            <div className="p-5 bg-purple-50 rounded-xl">
              <h3 className="text-xl font-bold text-purple-700">
                DQL
              </h3>

              <p className="my-3">
                Data Query Language
              </p>

              <CodeBox>
{`SELECT`}
              </CodeBox>
            </div>

            <div className="p-5 bg-yellow-50 rounded-xl">
              <h3 className="text-xl font-bold text-yellow-700">
                DCL
              </h3>

              <p className="my-3">
                Data Control Language
              </p>

              <CodeBox>
{`GRANT
REVOKE`}
              </CodeBox>
            </div>

            <div className="p-5 bg-red-50 rounded-xl">
              <h3 className="text-xl font-bold text-red-700">
                TCL
              </h3>

              <p className="my-3">
                Transaction Control Language
              </p>

              <CodeBox>
{`COMMIT
ROLLBACK
SAVEPOINT`}
              </CodeBox>
            </div>

          </div>

          <h3 className="text-xl font-bold mt-8 mb-3">
            Basic SQL Commands
          </h3>

          <CodeBox>
{`CREATE DATABASE college;

USE college;

CREATE TABLE Students (
    student_id INT PRIMARY KEY,
    student_name VARCHAR(100),
    course VARCHAR(100),
    age INT,
    city VARCHAR(100)
);

INSERT INTO Students
(student_id, student_name, course, age, city)
VALUES
(1, 'Arun', 'React', 22, 'Chennai');

SELECT * FROM Students;

SELECT student_name, course
FROM Students;

SELECT *
FROM Students
WHERE city = 'Chennai';

UPDATE Students
SET city = 'Bangalore'
WHERE student_id = 1;

DELETE FROM Students
WHERE student_id = 1;`}
          </CodeBox>

        </Section>


        {/* MYSQL */}
        <Section id="mysql" number="03" title="MySQL">

          <p className="text-lg leading-8">
            MySQL is a popular relational database management system
            used extensively in web applications.
          </p>

          <div className="bg-blue-50 rounded-xl p-5 mt-5">

            <h3 className="font-bold text-xl mb-3">
              MySQL Workflow
            </h3>

            <p className="text-lg">
              React → Server/API → MySQL
            </p>

          </div>

          <h3 className="text-xl font-bold mt-6 mb-3">
            MySQL Example
          </h3>

          <CodeBox>
{`CREATE DATABASE employee_app;

USE employee_app;

CREATE TABLE employees (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    department VARCHAR(100) NOT NULL,
    salary DECIMAL(10,2),
    city VARCHAR(100)
);

INSERT INTO employees
(name, department, salary, city)
VALUES
('Arun', 'IT', 45000, 'Chennai'),
('Priya', 'HR', 40000, 'Madurai'),
('Ravi', 'IT', 55000, 'Bangalore');

SELECT * FROM employees;`}
          </CodeBox>

        </Section>


        {/* MYSQLI */}
        <Section id="mysqli" number="04" title="MySQLi">

          <p className="text-lg leading-8">
            <b>MySQLi</b> means MySQL Improved.
            It is a PHP extension used to communicate with MySQL.
          </p>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5 rounded mt-5">
            <b>Remember:</b> MySQL is the database.
            MySQLi is a PHP interface for working with MySQL.
          </div>

          <h3 className="text-xl font-bold mt-6 mb-3">
            PHP MySQLi Connection
          </h3>

          <CodeBox>
{`<?php

$conn = mysqli_connect(
    "localhost",
    "root",
    "",
    "employee_app"
);

if (!$conn) {
    die("Connection failed");
}

echo "Database Connected Successfully";

?>`}
          </CodeBox>

          <h3 className="text-xl font-bold mt-6 mb-3">
            SELECT Using MySQLi
          </h3>

          <CodeBox>
{`$sql = "SELECT * FROM employees";

$result = mysqli_query($conn, $sql);

while ($row = mysqli_fetch_assoc($result)) {

    echo $row["name"];
    echo $row["department"];
    echo $row["salary"];

}`}
          </CodeBox>

        </Section>


        {/* POSTGRESQL */}
        <Section id="postgresql" number="05" title="PostgreSQL">

          <p className="text-lg leading-8">
            PostgreSQL is an open-source relational database system
            known for powerful SQL features and reliability.
          </p>

          <CodeBox>
{`CREATE DATABASE college;

CREATE TABLE students (
    student_id SERIAL PRIMARY KEY,
    student_name VARCHAR(100),
    course VARCHAR(100),
    age INT
);

INSERT INTO students
(student_name, course, age)
VALUES
('Arun', 'React', 22);

SELECT * FROM students;`}
          </CodeBox>

        </Section>


        {/* ORACLE */}
        <Section id="oracle" number="06" title="Oracle">

          <p className="text-lg leading-8">
            Oracle Database is an enterprise-level relational
            database management system.
          </p>

          <CodeBox>
{`CREATE TABLE Employees (
    id NUMBER PRIMARY KEY,
    name VARCHAR2(100),
    salary NUMBER(10,2)
);

INSERT INTO Employees
VALUES (1, 'Arun', 45000);

SELECT * FROM Employees;`}
          </CodeBox>

          <div className="overflow-x-auto mt-6">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="p-3 text-left">Database</th>
                  <th className="p-3 text-left">Type</th>
                  <th className="p-3 text-left">Common Usage</th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-b">
                  <td className="p-3 font-semibold">MySQL</td>
                  <td className="p-3">RDBMS</td>
                  <td className="p-3">Web Applications</td>
                </tr>

                <tr className="border-b">
                  <td className="p-3 font-semibold">PostgreSQL</td>
                  <td className="p-3">RDBMS</td>
                  <td className="p-3">Web & Enterprise</td>
                </tr>

                <tr>
                  <td className="p-3 font-semibold">Oracle</td>
                  <td className="p-3">RDBMS</td>
                  <td className="p-3">Enterprise Applications</td>
                </tr>
              </tbody>
            </table>
          </div>

        </Section>


        {/* SERVER */}
        <Section id="server" number="07" title="Server">

          <p className="text-lg leading-8">
            A server receives requests from clients, processes them,
            communicates with databases and sends responses.
          </p>

          <div className="bg-slate-950 text-white rounded-xl p-6 mt-6 text-center">

            <div className="text-blue-400 font-bold text-xl">
              React Frontend
            </div>

            <div className="text-3xl my-3">↓</div>

            <div className="text-green-400 font-bold text-xl">
              HTTP Request
            </div>

            <div className="text-3xl my-3">↓</div>

            <div className="text-yellow-400 font-bold text-xl">
              Server / API
            </div>

            <div className="text-3xl my-3">↓</div>

            <div className="text-red-400 font-bold text-xl">
              MySQL Database
            </div>

          </div>

        </Section>


        {/* XAMPP */}
        <Section id="xampp" number="08" title="XAMPP">

          <p className="text-lg leading-8">
            XAMPP provides a local development environment for
            running web applications on your computer.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">

            {["Apache", "MySQL", "PHP", "phpMyAdmin"].map(item => (
              <div
                key={item}
                className="bg-blue-50 p-5 rounded-xl text-center"
              >
                <div className="text-2xl">⚙️</div>
                <h3 className="font-bold mt-2">{item}</h3>
              </div>
            ))}

          </div>

          <h3 className="text-xl font-bold mt-6">
            Common Local Address
          </h3>

          <CodeBox>
{`http://localhost/`}
          </CodeBox>

        </Section>


        {/* WAMP */}
        <Section id="wamp" number="09" title="WAMP">

          <p className="text-lg leading-8">
            WAMP stands for Windows, Apache, MySQL and PHP.
            It is commonly used for local PHP/MySQL development
            on Windows.
          </p>

          <div className="grid md:grid-cols-4 gap-4 mt-6">

            {[
              ["W", "Windows"],
              ["A", "Apache"],
              ["M", "MySQL"],
              ["P", "PHP"],
            ].map(([letter, value]) => (
              <div
                key={letter}
                className="bg-white border rounded-xl p-5 text-center shadow"
              >
                <div className="text-4xl font-bold text-blue-600">
                  {letter}
                </div>

                <p className="font-semibold mt-2">
                  {value}
                </p>
              </div>
            ))}

          </div>

        </Section>


        {/* GUI */}
        <Section id="gui" number="10" title="GUI">

          <p className="text-lg leading-8">
            GUI means <b>Graphical User Interface</b>.
            It allows developers to work with databases using
            graphical tools instead of typing every command manually.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">

            {[
              "MySQL Workbench",
              "phpMyAdmin",
              "pgAdmin",
              "Oracle SQL Developer",
            ].map(tool => (
              <div
                key={tool}
                className="bg-slate-50 border rounded-xl p-5"
              >
                🖥️ <b>{tool}</b>
              </div>
            ))}

          </div>

        </Section>


        {/* WORKBENCH */}
        <Section id="mysql-workbench-8" number="11" title="MySQL Workbench 8">

          <p className="text-lg leading-8">
            MySQL Workbench is a graphical tool for designing,
            developing and managing MySQL databases.
          </p>

          <div className="bg-blue-50 rounded-xl p-6 mt-5">

            <h3 className="text-xl font-bold mb-4">
              Workbench Workflow
            </h3>

            <div className="flex flex-wrap items-center gap-3">

              {[
                "Open Workbench",
                "Create Connection",
                "Create Database",
                "Create Table",
                "Insert Data",
                "Run Query",
                "View Result",
              ].map((step, index) => (
                <React.Fragment key={step}>

                  <span className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                    {index + 1}. {step}
                  </span>

                  {index < 6 && (
                    <span className="text-2xl hidden md:block">
                      →
                    </span>
                  )}

                </React.Fragment>
              ))}

            </div>

          </div>

          <h3 className="text-xl font-bold mt-6">
            Useful Commands
          </h3>

          <CodeBox>
{`SHOW DATABASES;

USE employee_app;

SHOW TABLES;

DESCRIBE employees;

SELECT * FROM employees;`}
          </CodeBox>

        </Section>


        {/* REACT + MYSQL */}
        <Section id="react--mysql" number="12" title="React + MySQL">

          <h3 className="text-2xl font-bold mb-5">
            Full Stack Architecture
          </h3>

          <div className="space-y-3 text-center">

            <div className="bg-blue-600 text-white p-5 rounded-xl font-bold">
              ⚛️ React + Tailwind CSS
            </div>

            <div className="text-3xl">↓</div>

            <div className="bg-purple-600 text-white p-5 rounded-xl font-bold">
              🔗 Fetch / Axios
            </div>

            <div className="text-3xl">↓</div>

            <div className="bg-green-600 text-white p-5 rounded-xl font-bold">
              🖥️ Node.js + Express Server
            </div>

            <div className="text-3xl">↓</div>

            <div className="bg-orange-600 text-white p-5 rounded-xl font-bold">
              🗄️ MySQL
            </div>

          </div>

          <h3 className="text-xl font-bold mt-8 mb-3">
            React Fetch Example
          </h3>

          <CodeBox>
{`import { useEffect, useState } from "react";

function Employees() {

    const [employees, setEmployees] = useState([]);

    useEffect(() => {

        fetch("http://localhost:5000/api/employees")
            .then(response => response.json())
            .then(data => {
                setEmployees(data);
            })
            .catch(error => {
                console.log(error);
            });

    }, []);

    return (
        <div className="p-8">

            <h1 className="text-3xl font-bold">
                Employee List
            </h1>

            {employees.map(employee => (

                <div
                    key={employee.id}
                    className="bg-white shadow-lg p-5 rounded-xl mt-4"
                >

                    <h2 className="text-xl font-bold">
                        {employee.name}
                    </h2>

                    <p>
                        Department: {employee.department}
                    </p>

                    <p>
                        Salary: ₹{employee.salary}
                    </p>

                    <p>
                        City: {employee.city}
                    </p>

                </div>

            ))}

        </div>
    );
}

export default Employees;`}
          </CodeBox>

        </Section>


        {/* CRUD */}
        <Section id="crud" number="13" title="CRUD">

          <p className="text-lg leading-8">
            CRUD represents the four basic database operations:
          </p>

          <div className="grid md:grid-cols-4 gap-5 mt-6">

            <div className="bg-green-50 border border-green-200 p-6 rounded-xl">
              <h3 className="text-2xl font-bold text-green-700">
                C
              </h3>
              <p className="font-bold">Create</p>
              <p className="text-sm mt-2">
                INSERT
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl">
              <h3 className="text-2xl font-bold text-blue-700">
                R
              </h3>
              <p className="font-bold">Read</p>
              <p className="text-sm mt-2">
                SELECT
              </p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-xl">
              <h3 className="text-2xl font-bold text-yellow-700">
                U
              </h3>
              <p className="font-bold">Update</p>
              <p className="text-sm mt-2">
                UPDATE
              </p>
            </div>

            <div className="bg-red-50 border border-red-200 p-6 rounded-xl">
              <h3 className="text-2xl font-bold text-red-700">
                D
              </h3>
              <p className="font-bold">Delete</p>
              <p className="text-sm mt-2">
                DELETE
              </p>
            </div>

          </div>

          <h3 className="text-xl font-bold mt-8 mb-3">
            Complete CRUD SQL
          </h3>

          <CodeBox>
{`-- CREATE
INSERT INTO employees
(name, department, salary, city)
VALUES
('Samjana', 'IT', 50000, 'Chennai');

-- READ
SELECT * FROM employees;

-- UPDATE
UPDATE employees
SET salary = 55000
WHERE id = 1;

-- DELETE
DELETE FROM employees
WHERE id = 1;`}
          </CodeBox>

        </Section>


        {/* IMPORTANT SQL */}
        <Section id="important-sql" number="14" title="Important SQL Concepts">

          <div className="grid md:grid-cols-2 gap-6">

            <div>
              <h3 className="text-xl font-bold mb-3">
                WHERE
              </h3>

              <CodeBox>
{`SELECT *
FROM employees
WHERE salary > 40000;`}
              </CodeBox>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3">
                ORDER BY
              </h3>

              <CodeBox>
{`SELECT *
FROM employees
ORDER BY salary DESC;`}
              </CodeBox>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3">
                GROUP BY
              </h3>

              <CodeBox>
{`SELECT department, COUNT(*)
FROM employees
GROUP BY department;`}
              </CodeBox>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3">
                Aggregate Functions
              </h3>

              <CodeBox>
{`COUNT()
SUM()
AVG()
MIN()
MAX()`}
              </CodeBox>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3">
                JOIN
              </h3>

              <CodeBox>
{`SELECT employees.name,
       departments.department_name

FROM employees

INNER JOIN departments
ON employees.department_id =
   departments.id;`}
              </CodeBox>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3">
                LIKE
              </h3>

              <CodeBox>
{`SELECT *
FROM employees
WHERE name LIKE 'A%';`}
              </CodeBox>
            </div>

          </div>

        </Section>


        {/* KEYS */}
        <Section id="keys" number="15" title="Database Keys">

          <div className="overflow-x-auto">

            <table className="w-full border-collapse">

              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="p-4 text-left">Key</th>
                  <th className="p-4 text-left">Purpose</th>
                  <th className="p-4 text-left">Example</th>
                </tr>
              </thead>

              <tbody>

                <tr className="border-b">
                  <td className="p-4 font-bold">Primary Key</td>
                  <td className="p-4">Uniquely identifies record</td>
                  <td className="p-4">student_id</td>
                </tr>

                <tr className="border-b">
                  <td className="p-4 font-bold">Foreign Key</td>
                  <td className="p-4">Connects tables</td>
                  <td className="p-4">department_id</td>
                </tr>

                <tr className="border-b">
                  <td className="p-4 font-bold">Candidate Key</td>
                  <td className="p-4">Possible primary key</td>
                  <td className="p-4">email</td>
                </tr>

                <tr>
                  <td className="p-4 font-bold">Composite Key</td>
                  <td className="p-4">Multiple columns as key</td>
                  <td className="p-4">student_id + course_id</td>
                </tr>

              </tbody>

            </table>

          </div>

        </Section>


        {/* INTERVIEW */}
        <Section id="interview" number="16" title="Interview Quick Revision">

          <div className="space-y-4">

            {[
              [
                "What is RDBMS?",
                "RDBMS is a database management system that stores data in related tables."
              ],
              [
                "What is SQL?",
                "SQL is Structured Query Language used to communicate with relational databases."
              ],
              [
                "What is MySQL?",
                "MySQL is a relational database management system."
              ],
              [
                "What is MySQLi?",
                "MySQLi is a PHP extension used to interact with MySQL."
              ],
              [
                "What is a Primary Key?",
                "A primary key uniquely identifies each record in a table."
              ],
              [
                "What is a Foreign Key?",
                "A foreign key creates a relationship between tables."
              ],
              [
                "What is CRUD?",
                "CRUD means Create, Read, Update and Delete."
              ],
              [
                "What is XAMPP?",
                "XAMPP is a local development environment containing tools such as Apache, PHP and MySQL/MariaDB."
              ],
              [
                "What is GUI?",
                "GUI means Graphical User Interface."
              ],
              [
                "What is MySQL Workbench?",
                "It is a graphical development and administration tool for MySQL."
              ],
            ].map(([question, answer]) => (

              <div
                key={question}
                className="bg-slate-50 border rounded-xl p-5"
              >
                <h3 className="font-bold text-lg text-blue-700">
                  Q. {question}
                </h3>

                <p className="mt-2">
                  <b>Answer:</b> {answer}
                </p>

              </div>

            ))}

          </div>

        </Section>


        {/* FINAL ROADMAP */}
        <section className="bg-gradient-to-r from-slate-900 to-blue-900 text-white rounded-2xl p-8 mb-10">

          <h2 className="text-3xl font-bold mb-6">
            🚀 Full Stack Connection
          </h2>

          <div className="space-y-4 text-center">

            <div className="bg-blue-600 p-4 rounded-xl font-bold">
              React
            </div>

            <div className="text-3xl">↓</div>

            <div className="bg-cyan-600 p-4 rounded-xl font-bold">
              Tailwind CSS
            </div>

            <div className="text-3xl">↓</div>

            <div className="bg-purple-600 p-4 rounded-xl font-bold">
              Fetch / Axios
            </div>

            <div className="text-3xl">↓</div>

            <div className="bg-green-600 p-4 rounded-xl font-bold">
              Server / API
            </div>

            <div className="text-3xl">↓</div>

            <div className="bg-orange-600 p-4 rounded-xl font-bold">
              MySQL
            </div>

            <div className="text-3xl">↓</div>

            <div className="bg-red-600 p-4 rounded-xl font-bold">
              Database
            </div>

          </div>

        </section>

      </main>


      {/* FOOTER */}
      <footer className="bg-slate-950 text-white py-8 text-center">

        <h2 className="text-xl font-bold">
          💻 Full Stack Developer Study Material
        </h2>

        <p className="text-slate-400 mt-2">
          RDBMS • SQL • MySQL • MySQLi • PostgreSQL • Oracle
          • Server • XAMPP • WAMP • GUI • Workbench 8
        </p>

        <p className="text-slate-500 mt-4 text-sm">
          React + Tailwind CSS
        </p>

      </footer>

    </div>
  );
}

export default App;