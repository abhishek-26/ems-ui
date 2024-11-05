import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import { AdminDashboard } from "./pages/AdminDashboard";
import AdminSummary from "./components/AdminSummary";
import DepartmentList from "./components/Department/DepartmentList"
import { AddDepartment } from "./components/Department/AddDepartment";
import EditDepartment from "./components/Department/EditDepartment";
import { List } from "./components/employee/List";
import { EditEmployee } from "./components/employee/EditEmployee";
import { EmployeeSalary } from "./components/employee/EmployeeSalary";
import { Add } from "./components/employee/Add";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/admin-dashboard" />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/admin-dashboard" element={<AdminDashboard />}>
          <Route index element={<AdminSummary />}></Route>
          <Route path="/admin-dashboard/departments" element={<DepartmentList />}></Route>
          <Route path="/admin-dashboard/add-department" element={<AddDepartment />}></Route>
          <Route path="/admin-dashboard/department/:id" element={<EditDepartment />}></Route>
          <Route path="/admin-dashboard/employees" element={<List />}></Route>
          <Route path="/admin-dashboard/employee/:id/edit" element={<EditEmployee />}></Route>
          <Route path="/admin-dashboard/employee/:id/salary" element={<EmployeeSalary />}></Route>
          <Route path="/admin-dashboard/employee/add" element={<Add />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
