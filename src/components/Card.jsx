import React from 'react'
const Card = ({ id, backdrop_path, original_title, overview, release_date, popularity, addMovie }) => {

    return (
        <>
            <div className="w-[300px] my-8 border-2 bg-gradient-to-b from-blue-800 to-[#0B0C10] shadow-xl shadow-gray-400 rounded-lg mx-2 h-fit " id={`${id}`}>
                <img className="h-48 w-80" src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${backdrop_path}`} alt="image cannot be rendered" />
                <div className="mx-8 my-4 h-fit">
                    <h3 className="font-sans font-bold text-md my-2 text-white">{original_title}</h3>
                    <p className="text-sm text-white">{`${overview}`.substring(0, 251)}</p>
                </div>
                <div className="my-4">
                    <span
                        className="inline-block w-auto bg-gray-300 p-1 rounded-md mx-2 text-xs text-black font-semibold hover:bg-gray-400 hover:cursor-pointer">Year: {release_date}
                    </span>
                    <span
                        className="inline-block w-auto bg-gray-300 p-1 rounded-md mx-2 text-xs text-black font-semibold hover:bg-gray-400 hover:cursor-pointer">popularity: {popularity}
                    </span>
                    <button
                        className="add  text-white w-16 bg-blue-500 py-2 rounded-md font-semibold text-xs hover:bg-gradient-to-r to-blue-800 from-[#0B0C10] relative mx-2 my-2" onClick={addMovie}>Add movie</button>
                </div>
            </div>
        </>
    )
}

export default Card