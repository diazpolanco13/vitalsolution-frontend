import React from "react";
import { useRouter } from 'next/router';

import Dashboard from "../../components/Dashboard";

const index = () => {

  const router = useRouter()
  const { panel } = router.query

  return (
    <>
      <Dashboard>
        <main
          className="flex-1 relative overflow-y-auto focus:outline-none"
          tabIndex="0"
        >
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <h1 className="text-2xl font-semibold text-gray-900">{panel ? panel : "panel"}</h1>
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

export default index;