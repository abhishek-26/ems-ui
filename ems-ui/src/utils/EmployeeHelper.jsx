import { useNavigate } from "react-router-dom"

export const columns = [
    {
        name : "S No",
        selector : (row) => row.sno,
        sortable : true
    },
    {
        "name" : "Employee Name",
        selector : (row) => row.emp_name,
        sortable : true
    },
    {
        "name" : "Date Of Birth",
        selector : (row) => row.dob
    },
    {
        "name" : "Department",
        selector : (row) => row.dep_name
    },
    {
        "name" : "Action",
        selector : (row) => row.action
    }
]

export const EmployeeButtons = ({empId}) => {
    const navigate = useNavigate();
    return (
        <div className="flex space-x-3">
            <button className="px-3 py-1 bg-blue-600 text-white"
            onClick={() => {navigate(`/admin-dashboard/employee/${empId}`)}}>View</button>
            <button className="px-3 py-1 bg-green-600 text-white"
            onClick={() => {navigate(`/admin-dashboard/employee/${empId}/edit`)}}>Edit</button>
            <button className="px-3 py-1 bg-yellow-600 text-white"
            onClick={() => {navigate(`/admin-dashboard/employee/${empId}/salary`)}}>Salary</button>
            <button className="px-3 py-1 bg-red-600 text-white"
            onClick={() => {navigate(`/admin-dashboard/employee/${empId}/leave`)}}>Leave</button>
        </div>
    )
}

export const employeeData = [{
    "id" : 1,
    "sno": 1,
    "emp_name": "Abhishek",
    "dep_name" : "IT",
    "dob" : "26/07/1996"
},
{
    "id" : 2,
    "sno": 2,
    "emp_name": "Abhinav",
    "dep_name" : "HR",
    "dob" : "26/07/1996"
},
{
    "id" : 3,
    "sno": 3,
    "emp_name": "Sourabh",
    "dep_name" : "BizOps",
    "dob" : "26/07/1996"
},
{
    "id" : 4,
    "sno" : 4,
    "emp_name": "Amit",
    "dep_name" : "IT",
    "dob" : "26/07/1996"
}]