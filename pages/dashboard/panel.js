import React from "react";

import Dashboard from "../../components/Dashboard";

const Panel = () => {

 
  return (
    <>
      <Dashboard path="panel">
        <main
          className="relative flex-1 overflow-y-auto focus:outline-none"
          tabIndex="0"
        >
          <div className="py-6">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
              <h1 className="text-2xl font-semibold text-gray-900">Panel</h1>
            </div>
            <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
              {/* Replace with your content */}
              <div className="py-4">
                <div className="border-4 border-gray-200 border-dashed rounded-lg h-96"></div>
              </div>
              {/* /End replace */}
            </div>
          </div>
        </main>
      </Dashboard>
    </>
  );
};

export default Panel;
