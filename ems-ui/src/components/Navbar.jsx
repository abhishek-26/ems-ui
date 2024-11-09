import React from "react";

const Navbar = () => {

    const handleLogout = () => {
        // Remove the JWT token and user role from localStorage
        localStorage.removeItem("token");
        localStorage.removeItem("role");
      
        // Redirect the user to the login page
        window.location.href = "/login"; // Or use React Router for more controlled navigation
      };

    return (
        <div className="flex items-center text-white justify-between h-12 bg-teal-600 px-5">
            <p>Welcome Abhishek</p>
            <button onClick={handleLogout} className="px-4 py-1 bg-teal-700 hover:bg-teal-800">Logout</button>
        </div>
    )
}

export default Navbar;