import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { EmployeeButtons, employeeData, columns } from "../../utils/EmployeeHelper";
import DataTable from 'react-data-table-component';

export const List = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Format employee data and add serial number and actions
        const formattedData = employeeData.map((employee, index) => ({
            ...employee,
            sno: index + 1,
            action: <EmployeeButtons empId={employee.id} />
        }));
        
        setData(formattedData);
    }, []);

    const customStyles = {
        rows: {
            style: {
                minHeight: '100px', // Optional: Increase row height if needed
            },
        },
        table: {
            style: {
                width: '100%', // Ensures table takes full width for scrollability
            },
        },
    };

    return (
        <div className="p-5">
            <div className="text-center mb-4">
                <h3 className="text-2xl font-bold">Manage Employees</h3>
            </div>
            <div className="flex justify-between items-center mb-4">
                <input
                    type="text"
                    placeholder="Search By Emp Name"
                    className="px-4 py-2 border rounded"
                />
                <Link
                    to="/admin-dashboard/employee/add"
                    className="px-4 py-2 bg-teal-600 rounded text-white"
                >
                    Add New Employee
                </Link>
            </div>

            {/* Ensure full table is scrollable */}
            <div style={{ overflowX: 'auto', width: '200%' }}>
                <DataTable 
                    columns={columns}
                    data={data}
                    //customStyles={customStyles}
                    noHeader={false}
                    pagination
                    scrollX
                    highlightOnHover
                    scroll
                />
            </div>
        </div>
    );
};
