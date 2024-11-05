import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DepartmentButtons, columns, departmentData } from "../../utils/DepartmentHelper";
import DataTable from 'react-data-table-component';

const DepartmentList = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        // Assuming departmentData is an array of department objects
        const formattedData = departmentData.map((department, index) => ({
            ...department,
            sno: index + 1,
            action: <DepartmentButtons depId={department.id} />
        }));
        
        setData(formattedData);
    }, []); 

    //useEffect can be used here to make an API call to populate DataTable

    return (
        <div className="p-5">
            <div className="text-center">
                <h3 className="text-2xl font-bold">Manage Departments</h3>
            </div>
            <div className="flex justify-between items-center">
                <input
                    type="text"
                    placeholder="Search By Dep Name"
                    className="px-4 py-0.5 border"
                />
                <Link
                    to="/admin-dashboard/add-department"
                    className="px-4 py-1 bg-teal-600 rounded text-white"
                >
                    Add New Department
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

export default DepartmentList