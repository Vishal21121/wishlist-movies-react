import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { account } from "../appwrite/appwriteConfig"
import { v4 as uuidv4 } from "uuid"
const Signup = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState({
        Name: "",
        Email: "",
        Password: "",
    })
    const signupUser = async () => {
        const promise = account.create(uuidv4(), user.Email, user.Password, user.Name)
        promise.then(function (response) {
            console.log(response);
            navigate("/")
        }, function (error) {
            console.log(error);
        });
    }

    return (
        <>
            <div id="alert">
            </div>
            <div className="w-4/12 mx-auto my-24">
                <h1 className="font-bold text-3xl text-center text-white">Sign up to your account</h1>
                <div className="my-12 mx-auto w-full bg-white rounded-lg py-6 h-96 bg-gradient-to-b from-blue-800 to-[#0B0C10] shadow-xl shadow-gray-400">
                    <div className="w-3/4 mx-auto my-2">
                        <p className="font-medium text-white">Name</p>
                        <input type="text" name="email" id="name" className="border-2 w-full rounded-md border-gray-400 h-9 px-1" onChange={(e)=>{
                            setUser({...user,Name: e.target.value})
                        }} />
                    </div>
                    <div className="w-3/4 mx-auto my-2">
                        <p className="font-medium text-white">Email address</p>
                        <input type="email" name="email" id="email" className="border-2 w-full rounded-md border-gray-400 h-9 px-1" onChange={(e)=>{
                            setUser({...user,Email: e.target.value})
                        }} />
                    </div>
                    <div className="w-3/4 mx-auto mt-4">
                        <p className="font-medium text-white">Password</p>
                        <input type="password" name="Password" id="password" className="border-2 w-full rounded-md border-gray-400 h-9 px-1" onChange={(e)=>{
                            setUser({...user,Password: e.target.value})
                        }} />
                    </div>

                    <button className="bg-[#FF7518] hover:bg-[#FF4433] w-3/4 ml-16 mt-8 p-2 rounded-lg text-white" onClick={(e)=>{
                        e.preventDefault()
                        console.log(user);
                        signupUser()
                    }}>Sign Up</button>
                </div>
            </div>
            <script src="Signup.js"></script>
        </>
    )
}

export default Signup