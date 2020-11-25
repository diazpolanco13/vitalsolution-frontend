import React, { useEffect } from "react";
import { useRouter } from 'next/router';

import Dashboard from "../../components/Dashboard";

const path = () => {

  const router = useRouter()
  const path = router.query.path

  return (
    <>
      <Dashboard>
        <main
          className="flex-1 relative overflow-y-auto focus:outline-none"
          tabIndex="0"
        >
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <h1 className="text-2xl font-semibold text-gray-900">{path}</h1>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              {/* Replace with your content */}
              <div className="py-4">
                <div className="border-4 border-dashed border-gray-200 rounded-lg h-96"></div>
              </div>
              {/* /End replace */}
            </div>
          </div>
        </main>
      </Dashboard>
    </>
  );
};

export default path;