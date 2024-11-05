import { useNavigate } from "react-router-dom"

export const columns = [
    {
        name : "S No",
        selector : (row) => row.sno,
        sortable : true
    },
    {
        "name" : "Department Name",
        selector : (row) => row.dep_name,
        sortable : true
    },
    {
        "name" : "Action",
        selector : (row) => row.action
    }
]

export const DepartmentButtons = ({depId}) => {
    const navigate = useNavigate();
    return (
        <div className="flex space-x-3">
            <button className="px-3 py-1 bg-teal-600 text-white"
            onClick={() => {navigate(`/admin-dashboard/department/${depId}`)}}>Edit</button>
            <button className="px-3 py-1 bg-red-600 text-white">Delete</button>
        </div>
    )
}

export const departmentData = [{
    "id" : 1,
    "sno": 1,
    "dep_name" : "IT",
    "description" : "IT Department"
},
{
    "id" : 2,
    "sno": 2,
    "dep_name" : "HR",
    "description" : "HR Department"
},
{
    "id" : 3,
    "sno": 3,
    "dep_name" : "BizOps",
    "description" : "BizOps department"
}]