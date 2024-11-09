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
import ProtectedRoute from "./utils/ProtectedRoute";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/admin-dashboard" />} />
        <Route path="/login" element={<Login />} />
        
        {/* Admin Routes */}
        <Route path="/admin-dashboard" element={
          <ProtectedRoute role="ADMIN">
            <AdminDashboard />
          </ProtectedRoute>
        }>
          <Route index element={<AdminSummary />} />
          <Route path="departments" element={<DepartmentList />} />
          <Route path="add-department" element={<AddDepartment />} />
          <Route path="department/:id" element={<EditDepartment />} />
          <Route path="employees" element={<List />} />
          <Route path="employee/:id/edit" element={<EditEmployee />} />
          <Route path="employee/:id/salary" element={<EmployeeSalary />} />
          <Route path="employee/add" element={<Add />} />
        </Route>
        
        {/* Additional routes for USER or other roles can be defined similarly */}
      </Routes>
    </BrowserRouter>
  );
}
