import React from "react"
import AdminSidebar from "../components/AdminSidebar"
import Navbar from "../components/Navbar"
import AdminSummary from "../components/AdminSummary"
import { Outlet } from "react-router-dom"

export const AdminDashboard = () => {
    return (
        <div className="flex">
            <AdminSidebar />    
            <div className="flex-1 ml-64 bg-gray-100 h-screen">
                <Navbar />
                <Outlet />
            </div>        
        </div>
    )
}