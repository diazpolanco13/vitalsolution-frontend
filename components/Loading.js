import React from 'react'

const Loading = () => {
  return (
    <>
      <section className="text-gray-700 body-font">
        <div className="container px-5 py-6 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="w-full p-4 2xl:max-w-7xl 2xl:mx-auto">
              <div className="h-full overflow-hidden border-2 border-gray-200 rounded-lg">
                <div className="object-cover object-center w-full bg-gray-300 lg:h-28 md:h-24"></div>
                <div className="p-6">
                  <h2 className="w-1/4 h-4 mb-2 bg-gray-400 animate-pulse"></h2>
                  <h1 className="w-1/2 h-6 mb-4 bg-gray-300 animate-pulse"></h1>
                  <p className="w-full h-3 mb-3 leading-relaxed bg-gray-400 animate-pulse"></p>
                  <p className="w-2/3 h-3 mb-3 leading-relaxed bg-gray-400 animate-pulse"></p>
                  <p className="w-1/2 h-3 mb-3 leading-relaxed bg-gray-400 animate-pulse"></p>
                  <div className="flex flex-wrap items-center ">
                    <a className="inline-flex items-center w-32 h-4 mt-2 bg-indigo-300 animate-pulse md:mb-2 lg:mb-0">
                    </a>
                    <span className="inline-flex items-center w-16 h-4 px-2 py-1 pr-5 mt-2 ml-auto mr-3 text-sm leading-none bg-indigo-300 animate-pulse">
                    </span>
                  </div>
                </div>
              </div>
            </div>
              </div>
            </div>
      </section>
    </>
  )
}

export default Loading
