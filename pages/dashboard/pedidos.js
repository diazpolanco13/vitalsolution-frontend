import React from "react";
import Dashboard from "../../components/Dashboard";
import HeaderTable from "../../components/HeaderTable";

const Pedidos = () => {

 
  return (
    <>
      <Dashboard path="pedidos">
        <main
          className="relative flex-1 overflow-y-auto focus:outline-none"
          tabIndex="0"
        >
          <div className="py-6">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
            <HeaderTable titulo={"Pedidos"} />
            
            </div>
          </div>
        </main>
      </Dashboard>
    </>
  );
};

export default Pedidos;
