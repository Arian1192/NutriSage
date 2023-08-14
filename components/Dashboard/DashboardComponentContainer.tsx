import React from "react";

export const DashboardComponentContainer = () => {
  return (
    <div className="grid h-screen grid-cols-12 max-md:grid-cols-1">
      <div className="col-span-1 border max-md:hidden">Hola</div>
      <div className="col-span-11 border max-md:col-span-1">
        <div className="grid h-[100%] w-full grid-cols-8 gap-2 border p-2">
          <div className="max-sm:row-span-8 col-span-6 row-span-4 h-[100%] border max-md:col-span-8 max-md:row-span-6">
            Calendario
          </div>
          <div className="col-span-2 row-span-3 h-[100%] bg-blue-400 max-md:col-span-8 max-md:row-span-4">
            healthy 1
          </div>
          <div className="col-span-2 row-span-3 h-[100%] bg-red-400 max-md:col-span-8 max-md:row-span-4">
            healthy 2
          </div>
          <div className="col-span-3 row-span-2 border bg-green-300 max-md:col-span-8 max-md:row-span-2">
            healthy 3
          </div>
          <div className="col-span-3 row-span-2 bg-purple-400 max-md:col-span-8 max-md:row-span-2">
            healthy 4
          </div>
        </div>
      </div>
    </div>
  );
};
