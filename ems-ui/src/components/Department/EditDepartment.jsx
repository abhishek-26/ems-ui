import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { departmentData } from "../../utils/DepartmentHelper";


const EditDepartment = () => {
    const {id} = useParams();
    const [department, setDepartment] = useState({});


    useEffect(() => {
        const dep = departmentData.find(ele => ele.id == id)
        console.log(dep);
        setDepartment(dep);
    }, [id])

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(`name is ${name} and description is ${value}`);
        setDepartment({ ...department, [name]: value });
      };

    return (
        <div className="max-w-3xl mx-auto mt-10 bg-white p-8 rounded-md shadow-md w-96">
      <h2 className="text-3xl font-bold mb-4">Edit Department</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="dep_name">
            Department Name
          </label>
          <input
            className="w-full px-3 py-2 border"
            id="dep_name"
            name="dep_name"
            type="text"
            // placeholder="IT"
            value={department.dep_name}
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
            value={department.description}
            placeholder="Description.."
            onChange={handleChange}
          />
        </div>
        <button
          className="w-full mt-6 bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-md"
          type="submit"
        >
          Edit Department
        </button>
      </form>
    </div>
    )
}

export default EditDepartment