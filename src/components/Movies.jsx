// importing the useEffect and useState hooks
import React, { useEffect, useState } from 'react'
// importing card component
import Card from './Card'
// importing useNavigate from "react-router-dom"
import { useNavigate } from "react-router-dom"
// importing the account and database from "../appwrite/appwriteConfig"
import { account, databases } from '../appwrite/appwriteConfig'
// importing the Navbar component
import Navbar from './Navbar'
// importing the Query clas from "appwrite"
import { Query } from 'appwrite'

const Movies = () => {
    // initializing the useNavigate
    const navigate = useNavigate()
    // setting the initial state of the data
    const [data, setData] = useState("")
    // setting the initial state of the isSignin
    const [isSignin, setIsSignin] = useState(false)
    // setting the initial state of the userDetails
    const [userDetails, setUserDetails] = useState()
    // setting the initial state of the wishlist value
    const [wishlistNav, setWishListNav] = useState("Wishlist")

    // using the fetchData method to fetch the value from the api of tmdb
    const fetchData = async () => {
         // using the fetch api to make the get request to fetch the movies from the tmdb using the api key whihc we are accessing from the .env file.
        let response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&page=1`)
        let val = await response.json();
        // setting the value of the movie using the setData method
        setData(val["results"]);
    }

    // checking whether the user is logged in or not
    const isUserLoggedIn = () => {
        // getting the user details
        const getData = account.get()
        getData.then(
            // if logged in then perform below actions
            function (response) {
                // setting the user details
                setUserDetails(response)
                // setting the signin to true means that the user is logged in
                setIsSignin(true)
            },
            function (error) {
                console.log(error);
            }
        )
    }
// calling the isUserLoggedIn method when the web page loads
    useEffect(isUserLoggedIn, [])

    // calling the fetchData method when the web page loads
    useEffect(() => {
        fetchData()
        console.log("data: ", data)
    }, [])

    // handling the signout function
    const handleLogOut = async () => {
        try {
            // deleting the session of the user inoder to log him out
            await account.deleteSession("current")
            // setting the isSignIn to false
            setIsSignin(false)
            // navigating to the home page
            navigate("/")
            fetchData()
        } catch (error) {
            console.log(error);
        }
    }

    // handling the add movie option
    const addMovie = (e) => {
        // if the user is not siggned in then navigate the user to the login page
        if (!isSignin) {
            navigate("/login")
        } else {
            // else gathering the data to store in the appwrite database
            const addButton = e.target
            let id = addButton.parentElement.parentElement.getAttribute("id")
            let popularity = addButton.previousElementSibling.innerText.split(':')[1];
            let release_date = addButton.previousElementSibling.previousElementSibling.innerText.split(':')[1]
            let original_title = addButton.parentNode.previousElementSibling.children[0].innerText
            let overview = addButton.parentNode.previousElementSibling.children[1].innerText
            let backdrop_path = addButton.parentNode.parentNode.children[0].src
            // console.log("userId: ", userDetails["$id"]);
            const data = {
                id: userDetails["$id"],
                backdrop_path: backdrop_path,
                original_title: original_title,
                overview: overview,
                release_date: release_date,
                popularity: popularity
            }
            // creating the document inside the desired collection using the database id, collection id, id of the document and data. It will return a promise.
            const promise = databases.createDocument(import.meta.env.VITE_DATABASE_ID, import.meta.env.VITE_COLLECTION_ID, id, data)
            promise.then(
                function (response) {
                    console.log(response);
                },
                function (err) {
                    console.log(err);
                }
            )
        }

    }

    // handling the wislist button click
    const handleWishlist = () => {
        // if wishlistNav state has Previous value then making it to Wishlist
        if (wishlistNav === "Previous") {
            setWishListNav("Wishlist");
            // calling the fetch method to fetch the movies from the tmdb database using the api
            fetchData()
        } else {
            // fetching the movies from the appwrite database using the database id, collection id and using the Query class of available in appwrite
            const promise = databases.listDocuments(import.meta.env.VITE_DATABASE_ID, import.meta.env.VITE_COLLECTION_ID, [Query.equal("id", userDetails["$id"])])
            promise.then(
                function (response) {
                    console.log(response);
                    // if everything goes welll swicth the wishlistNav value to Previos 
                    setWishListNav("Previous")
                    // set the data using the setData method
                    setData(response.documents)

                },
                function (err) {
                    console.log(err);
                }
            )
        }

    }

    // handle the search bar functionality
    const searchMovie = async (name) => {
        // using the fetch api to get the desired movie using get method and movie name.
        let res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&page=1&include_adult=false&query=${name}`, {
            method: "GET",
        })
        let val = await res.json()
        console.log("value: ",val['results'][0]);
        // setting the value using the setData method
        setData(val['results'][0])
    }

    return (
        <>
            <Navbar isSignin={isSignin} handleLogOut={handleLogOut} handleWishlist={handleWishlist} wishlistNav={wishlistNav} searchMovie={searchMovie}></Navbar>
            <div className="flex overflow-y-hidden flex-wrap justify-evenly mx-auto my-auto" id="cards-show">
                {   
                    !data ? "Loading movies" : data.length > 1 ? data.map(({ id, backdrop_path, original_title, overview, release_date, popularity }) => {
                        return <Card key={id} id={id}  backdrop_path={backdrop_path} original_title={original_title} overview={overview} release_date={release_date} popularity={popularity} addMovie={addMovie} ></Card>
                    }) : <Card key={data.id} id={data.id}  backdrop_path={data.backdrop_path} original_title={data.original_title} overview={data.overview} release_date={data.release_date} popularity={data.popularity} addMovie={addMovie} ></Card>

                }
            </div>
        </>
    )
}

export default Movies