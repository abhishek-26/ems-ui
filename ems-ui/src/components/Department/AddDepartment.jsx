import React, {useState} from "react";

export const AddDepartment = () => {
  const [email, setEmail] = useState("");  
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080", {
        email,
        password,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-center 
           h-screen space-y-6"
    >
      <h2 className="text-3xl font-bold mb-4">
        Add new Department
      </h2>
      <div className="bg-white p-6 w-80 border border-gray-300">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="email">
              Department Name
            </label>
            <input
              className="w-full px-3 py-2 border"
              id="departmentName"
              type="text"
              placeholder="IT"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="mb-4">
          <label>
      Description
      <textarea name="description" placeholder="Description.."/>
    </label>
          </div>
          <div className="mb-4">
            <button
              className="w-full bg-teal-600 text-white py-2"
              type="submit"
            >
              Add Department
            </button>
          </div>
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </form>
      </div>
    </div>
  );
};
