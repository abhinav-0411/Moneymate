import React from "react";

const Signup = () => (
  <div className="min-h-screen flex items-center justify-center bg-[#F7FAFC] pt-16">
    <div className="w-full max-w-md p-8 shadow-lg rounded-lg bg-white mx-6 my-12">
      <h2 className="text-2xl font-semibold text-[#21293A] text-center mb-6">Sign Up</h2>
      <form className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm text-[#4B5675] mb-2">Name</label>
          <input
            type="text"
            id="name"
            className="w-full px-4 py-3 rounded-md bg-[#F5F7FA] text-[#21293A] border border-[#E3F0FF] focus:ring-2 focus:ring-[#2176FF] transition-all"
            autoComplete="name"
          />
        </div>
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
            autoComplete="new-password"
          />
        </div>
        <div>
          <label htmlFor="gender" className="block text-sm text-[#4B5675] mb-2">Gender</label>
          <select
            id="gender"
            className="w-full px-4 py-3 rounded-md bg-[#F5F7FA] text-[#21293A] border border-[#E3F0FF] focus:ring-2 focus:ring-[#2176FF] transition-all"
            defaultValue=""
          >
            <option value="" disabled>Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="dob" className="block text-sm text-[#4B5675] mb-2">Date of Birth</label>
          <input
            type="date"
            id="dob"
            className="w-full px-4 py-3 rounded-md bg-[#F5F7FA] text-[#21293A] border border-[#E3F0FF] focus:ring-2 focus:ring-[#2176FF] transition-all"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-[#2176FF] hover:bg-[#E3F0FF] text-white font-semibold py-3 rounded-md transition-colors"
        >
          Sign Up
        </button>
      </form>
      <p className="mt-6 text-center text-xs text-[#4B5675]">
        Already have an account?
        <a href="/login" className="ml-2 text-[#2176FF] hover:underline">Sign In</a>
      </p>
    </div>
  </div>
);

export default Signup;
