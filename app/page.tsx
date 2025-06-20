
"use client"
import { redirect } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const authentication = () => {
    if (username == "admin" && password == "admin123") {
      redirect("/dashboard")
    } else {
      alert("Please Enter Valid Username and Password")
    }
  }
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div className="flex flex-col items-center gap-5 border border-gray-400 rounded-md py-5 px-10">
        <h1 className="text-xl text-black font-bold">Login</h1>
        <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Username" className="outline-0 text-md border-b" />
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" className="outline-0 text-md border-b" />
        <button onClick={authentication} className="bg-blue-500 text-white w-full p-2 rounded-md cursor-pointer">Login</button>
      </div>
    </div>);
}
