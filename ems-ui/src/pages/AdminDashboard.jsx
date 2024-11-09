import React from "react"
import AdminSidebar from "../components/AdminSidebar"
import Navbar from "../components/Navbar"
import AdminSummary from "../components/AdminSummary"
import { Outlet } from "react-router-dom"

export const AdminDashboard = () => {
    return (
        <div className="flex h-screen overflow-hidden">
            <AdminSidebar />
            <div className="flex flex-col flex-1 ml-64 bg-gray-100">
                <Navbar />
                <div className="flex-1 overflow-auto p-4">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}