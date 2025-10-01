import React from "react";

const Login = () => (
  <div className="min-h-screen flex items-center justify-center bg-[#F7FAFC]">
    <div className="w-full max-w-md p-8 shadow-lg rounded-lg bg-white">
      <h2 className="text-2xl font-semibold text-[#21293A] text-center mb-6">Login</h2>
      <form className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-sm text-[#4B5675] mb-2">Email</label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-3 rounded-md bg-[#F5F7FA] text-[#21293A] border border-[#E3F0FF] focus:ring-2 focus:ring-[#2176FF] transition-all"
            autoComplete="email"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm text-[#4B5675] mb-2">Password</label>
          <input
            type="password"
            id="password"
            className="w-full px-4 py-3 rounded-md bg-[#F5F7FA] text-[#21293A] border border-[#E3F0FF] focus:ring-2 focus:ring-[#2176FF] transition-all"
            autoComplete="current-password"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-[#2176FF] hover:bg-[#02367B] text-white font-semibold py-3 rounded-md transition-colors"
        >
          Login
        </button>
      </form>
    </div>
  </div>
);

export default Login;
