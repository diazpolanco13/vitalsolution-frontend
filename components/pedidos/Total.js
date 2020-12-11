import React from 'react'


const total = 200

const Total = ({total}) => {
    return (
      <>
        <div className="w-1/4 p-4 mt-6 ml-3 bg-green-100 border-l-4 border-green-400">
          <div className="flex">
            <div className="flex ml-3">
              <p className="flex-row font-bold text-gray-700 text-md">
                {`Total a pagar:    `}
              </p>
               <span className="ml-2">{` $ ${total}`}</span>
            </div>
          </div>
        </div>
      </>
    );
}

export default Total
