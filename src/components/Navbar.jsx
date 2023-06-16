import React, { useState } from 'react'
import { useNavigate} from "react-router-dom"

const Navbar = ({isSignin, handleLogOut,handleWishlist,wishlistNav,searchMovie}) => {
    const navigate = useNavigate()
    const [val, setVal] = useState("")
    // navigating the user to derired page for button click on sigin
    const navigateLogin = () => {
        if(!isSignin){
            navigate("/login")
        }else{
            handleLogOut()
        }
    }


  return (
    <>
        <header
                className="flex justify-evenly items-center h-24  bg-gradient-to-r from-[#0B0C10] to-blue-900 sticky top-0 z-10" id="header">
                <h1 className="text-white text-4xl font-bold font-mono" id="heading">{wishlistNav==="Previous"?"Wishlist Movies":"Latest Movies"}</h1>
                <div>
                    <div
                        className="w-[50vw] bg-gray-600 mr-24 p-2  rounded-3xl flex align-middle focus:border-5 border-5 border-red-800 ">
                        <div className="pl-3 pointer-events-none mr-4">
                            <svg aria-hidden="true" className="w-6 h-12 text-gray-500 dark:text-gray-400" fill="none"
                                stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg>
                        </div>
                        <div className="w-full">
                            <input type="text" className="bg-gray-600  w-11/12 text-white h-12 border-none focus:outline-none" placeholder="Search Your favourite movies" id="input" onChange={(e)=>setVal(e.target.value)} />
                        </div>
                        <div>
                            <button
                                className="text-white bg-blue-700 py-2 rounded-lg font-semibold px-5 text-base hover:bg-gradient-to-r from-blue-800 to-[#0B0C10] mt-1"
                                id="search" onClick={()=>searchMovie(val)}>Search</button>
                        </div>
                    </div>
                </div>{
                    isSignin ? <button
                    className="text-white bg-blue-700 rounded-lg font-semibold text-base hover:bg-gradient-to-r from-blue-800 to-[#0B0C10] px-4 py-4 text-center "
                    id="Watchlist" onClick={handleWishlist}>{wishlistNav}</button> : ""
                }
                
                <button className="text-white bg-blue-700  rounded-lg font-semibold  text-base hover:bg-gradient-to-r from-blue-800 to-[#0B0C10] px-4 py-4 text-center" id="signout" onClick={navigateLogin} >{isSignin ? "Sign Out" : "Sign In"}</button>
            </header>
    </>
  )
}

export default Navbar