import React from 'react'
import { useNavigate } from "react-router-dom"
import { account } from '../appwrite/appwriteConfig'
import { useState } from 'react'

const Login = () => {
    const navigate = useNavigate()
    const [error, setError] = useState(false)
    const [user, setUser] = useState({
        Email: "",
        Password: "",
    })

    const loginUser = async (e) => {
        e.preventDefault()
        try {
            await account.createEmailSession(user.Email, user.Password)
            navigate("/")
        } catch (error) {
            console.log(error);
            setError(true)
            setTimeout(()=>{
                setError(false)
            },3000)
        }
    }

    return (
        <>
            <div id="alert">
                {
                    error && <div className="w-[550px] bg-indigo-800 m-auto py-0 rounded-2xl">
                    <div className="my-2 py-1">
                        <span
                            className="mx-2 text-md bg-indigo-500 rounded-2xl px-3 text-white my-2 hover:bg-indigo-300 shadow-lg shadow-slate-900">
                            Warning
                        </span>
                        <span className="mx-2 text-lg font-semi-bold rounded-2xl px-3 text-white my-2">
                            Enter the correct Credentials
                        </span>
                    </div>
                </div>
                }

            </div>
            <div className="w-4/12 mx-auto my-24">
                <h1 className="font-bold text-3xl text-center text-white">Sign in to your account</h1>
                <div className="my-12 mx-auto w-full bg-gradient-to-b from-blue-800 to-[#0B0C10] rounded-lg py-6 h-96 shadow-xl shadow-gray-400">
                    <div className="w-3/4 mx-auto my-2">
                        <p className="font-medium text-white">Email address</p>
                        <input type="email" name="email" id="email" className="border-2 w-full rounded-md border-gray-400 h-9 px-1" onChange={(e) => {
                            setUser({ ...user, Email: e.target.value })
                        }} />
                    </div>
                    <div className="w-3/4 mx-auto mt-4">
                        <p className="font-medium text-white">Password</p>
                        <input type="password" name="Password" id="password" className="border-2 w-full rounded-md border-gray-400 h-9 px-1" onChange={(e) => {
                            setUser({ ...user, Password: e.target.value })
                        }} />
                    </div>
                    <button className="bg-[#FF7518] hover:bg-[#FF4433] w-3/4 ml-16 mt-4 p-2 rounded-lg text-white" id="submit" onClick={loginUser} >Sign in</button>
                    <p className="w-3/4 ml-16 mt-4 text-center font-semibold text-lg text-white">OR</p>
                    <button className="bg-[#FF7518] hover:bg-[#FF4433] w-3/4 ml-16 mt-2 p-2 rounded-lg text-white" id="signup" onClick={(e) => {
                        e.preventDefault()
                        navigate("/signup")
                    }}>Sign Up</button>
                </div>
            </div>
        </>
    )
}

export default Login