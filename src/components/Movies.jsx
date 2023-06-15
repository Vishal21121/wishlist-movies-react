import React, { useEffect, useState } from 'react'
import Card from './Card'
import { useNavigate } from "react-router-dom"
import { account } from '../appwrite/appwriteConfig'
import Navbar from './Navbar'

const Movies = () => {
    const navigate = useNavigate()
    const [data, setData] = useState("")
    const [isSignin, setIsSignin] = useState(false)
    const [userDetails, setUserDetails] = useState()

    const fetchData = async () => {
        let response = await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=702a5d9a8a5513094a5fcf009d15249a&language=en-US&page=1')
        let val = await response.json();
        // console.log(val);
        setData(val["results"]);
    }

    // checking whether the user is logged in or not
    const isUserLoggedIn = () => {
        const getData = account.get()
        getData.then(
            // if logged in then perform below actions
            function (response) {
                // setting the user details
                setUserDetails(response)
                // setting the signin to true means that the user is logged in
                setIsSignin(true)
                console.log("userDetails: ",userDetails);
            },
            function (error) {
                console.log(error);
            }
        )
    }

    useEffect(isUserLoggedIn, [])

    useEffect(() => {
        fetchData()
        console.log("data: ",data);
    }, [])

    // handling the signout function
    const handleLogOut = async () => {
        try {
            await account.deleteSession("current")
            setIsSignin(false)
            navigate("/")
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>  
            <Navbar isSignin={isSignin} handleLogOut={handleLogOut}></Navbar>
            <div className="flex overflow-y-hidden flex-wrap justify-evenly mx-auto my-auto" id="cards-show">
                {
                    !data ? "Loading movies" : Array.from(data).map(({ id, backdrop_path, original_title, overview, release_date, popularity }) => {

                        return <Card key={id} backdrop_path={backdrop_path} original_title={original_title} overview={overview} release_date={release_date} popularity={popularity}></Card>
                    })

                }
            </div>
        </>
    )
}

export default Movies