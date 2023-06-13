import React from 'react'

const Card = () => {
    return (
        <>
            <div className="w-[300px] my-8 border-2 bg-gradient-to-r from-blue-800 to-[#0B0C10] shadow-xl shadow-gray-400 rounded-lg mx-2 h-[500px]">
                {/* <img className="h-48 w-80" src="https://www.themoviedb.org/t/p/w220_and_h330_face/${element["img"]}" alt=""/> */}

                <div className="mx-8 mt-4 h-48">
                    <h3 className="font-sans font-bold text-md my-2 text-white">title</h3>

                    <p className="text-sm text-white">${element["desc"].substring(0, 251)}</p>
                </div>
                <div className="relative top-[37px]">
                    <span
                        className="inline-block w-auto bg-gray-300 p-1 rounded-md mx-2 text-xs text-black font-semibold hover:bg-gray-400 hover:cursor-pointer">Year:
                        ${element['year']}
                    </span>
                    <span
                        className="inline-block w-auto bg-gray-300 p-1 rounded-md mx-2 text-xs text-black font-semibold hover:bg-gray-400 hover:cursor-pointer">Rank:
                        ${element['rank']}
                    </span>

                </div>
            </div>
        </>
    )
}

export default Card