import React, { useState } from "react";

export const AddDepartment = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState(null);

  const [department, setDepartment] = useState({
    dep_name: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(`name is ${name} and description is ${value}`);
    setDepartment({ ...department, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(
      `department name is ${e.target.dep_name} and description is ${e.target.description}`
    );
    alert(
      `department name is ${e.target.dep_name} and description is ${e.target.description}`
    );
    try {
      const response = await axios.post("http://localhost:8080", {
        email,
        password,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 bg-white p-8 rounded-md shadow-md w-96">
      <h2 className="text-3xl font-bold mb-4">Add new Department</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="dep_name">
            Department Name
          </label>
          <input
            className="w-full px-3 py-2 border"
            id="dep_name"
            name="dep_name"
            type="text"
            placeholder="IT"
            onChange={handleChange}
          />
        </div>
        <div className="mt-3">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            name="description"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            rows="4"
            placeholder="Description.."
            onChange={handleChange}
          />
        </div>
        <button
          className="w-full mt-6 bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-md"
          type="submit"
        >
          Add Department
        </button>
      </form>
    </div>
  );
};
