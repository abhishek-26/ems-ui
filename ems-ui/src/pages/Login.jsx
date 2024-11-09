import React, { useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode"; // Importing decode function

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/auth/login", {
        email,
        password,
      });
      const token = response.data.token; // Assuming token is returned as part of the response
      const decodedToken = jwtDecode(token); // Decode the token
      const userRole = decodedToken.role; // Assuming 'role' is part of the token payload

      // Store the token and role in localStorage for role-based access
      localStorage.setItem("token", token);
      localStorage.setItem("role", userRole);

      // Redirect user based on role
      if (userRole === "ADMIN") {
        window.location.href = "/admin-dashboard";
      } else if (userRole === "EMPLOYEE") {
        window.location.href = "/employee-dashboard";
      }
    } catch (error) {
      setError("Invalid login credentials");
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center 
       h-screen bg-gradient-to-b from-teal-600 from-50% to-gray-100 to-50% space-y-6">
      <h2 className="text-3xl font-bold text-white mb-4">
        Employee Management System
      </h2>
      <div className= "bg-white p-6 w-80 border border-gray-300">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700"
              htmlFor="email"
            >
              Email:
            </label>
            <input
              className="w-full px-3 py-2 border"
              id="email"
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700"
              htmlFor="password"
            >
              Password:
            </label>
            <input
              className="w-full px-3 py-2 border"
              id="password"
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div className="mb-4 flex items-center justify-between">  
            <label className="inline-flex items-center">  
              <input  
                className="form-checkbox"  
                type="checkbox"  
                id="rememberMe"  
                //checked={rememberMe}  
                onChange={(event) => setRememberMe(event.target.checked)}  
              />  
              <span className="ml-2 text-gray-700">Remember me</span>  
            </label>  
            <a  
              className="text-teal-600"  
              href="#"  
              onClick={(event) => event.preventDefault()}  
            >  
              Forgot password?  
            </a>  
          </div>  
          <div className="mb-4">  
            <button  
              className="w-full bg-teal-600 text-white py-2"  
              type="submit"  
            >  
              Login  
            </button>  
          </div>  
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}  
        </form>  
      </div>  
    </div>  
  );  
};

export default Login;
