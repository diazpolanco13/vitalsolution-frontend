import React from 'react'

const Sping = () => {
    return (
        <>
            <div className="relative flex items-center justify-center h-screen">
                <div className="inline-block w-8 h-8 mx-2 duration-300 bg-gray-700 animate-spin ease"></div>
                <div className="inline-block w-8 h-8 mx-2 duration-300 bg-gray-700 animate-ping ease"></div>
                <div className="inline-block w-8 h-8 mx-2 duration-300 bg-gray-700 animate-pulse ease"></div>
                <div className="inline-block w-8 h-8 mx-2 duration-300 bg-gray-700 animate-bounce ease"></div>
            </div>
        </>
    )
}

export default Sping
