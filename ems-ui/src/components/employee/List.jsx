import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { EmployeeButtons, employeeData, columns } from "../../utils/EmployeeHelper";
import DataTable from 'react-data-table-component';


export const List = () => {
  
    const [data, setData] = useState();

    useEffect(() => {
         // Assuming departmentData is an array of department objects
         const formattedData = employeeData.map((employee, index) => ({
            ...employee,
            sno: index + 1,
            action: <EmployeeButtons empId={employee.id} />
        }));
        
        setData(formattedData);
    }, []) 

  return (
    <div className="p-5">
      <div className="text-center">
        <h3 className="text-2xl font-bold">Manage Employees</h3>
      </div>
      <div className="flex justify-between items-center">
        <input
          type="text"
          placeholder="Search By Emp Name"
          className="px-4 py-0.5 border"
        />
        <Link
          to="/admin-dashboard/employee/add"
          className="px-4 py-1 bg-teal-600 rounded text-white"
        >
          Add new Employees
        </Link>
      </div>
      <div className="mt-5">
                <DataTable 
                  columns={columns}
                  data={data}
                />
            </div>
    </div>
  );
};