"use client";
import React from "react";
import { DashboardComponent } from "./DashboardComponentContext";
import { ListHealthyItems } from "../Navbar/NavbarItems";

export const DashboardComponentContainer = () => {
  return (
    <div className="grid h-screen grid-cols-12 max-md:grid-cols-1 bg-zinc">
      <div className="col-span-1 border max-md:hidden">Hola</div>
      <div className="col-span-11 grid grid-cols-1 lg:grid-cols-3 p-3 md:mx-20 py-10 gap-x-5 gap-y-8 grid-flow-row-dense">
        {/* Layout Dashboard */}
        <div className="rounded-lg shadow-xl min-h-[50px] sm:col-span-2 row-span-6">
          <DashboardComponent.Calendar />
        </div>
        <div className="rounded-lg shadow-xl border bg-orange-500 min-h-[50px] sm:row-span-5">
          {/* Va a ir un widget Scrolleable  */}
          widget Scroalleable
        </div>
        <div className="rounded-lg shadow-xl border bg-yellow-500 min-h-[50px] sm:row-span-5">
          Información de suscripcion o widget de estadistica.
        </div>
        <div className="rounded-lg shadow-xl border min-h-[50px] sm:row-span-4">
          {/* Datos Actuales */}
          <DashboardComponent.CardWidget />
        </div>
        <div className="rounded-lg shadow-xl border min-h-[50px] sm:row-span-4">
          <p className="text-center mt-5 -mb-5">Diagramas de Mejora</p>
          <div className="snap-x snap-mandatory overflow-y-hidden overflow-scroll mx-auto flex w-[100%]  h-auto">
            <div className="snap-center flex-shrink-0 w-full">
              <DashboardComponent.BarChart  />
            </div>
            <div className="snap-center flex-shrink-0 w-full">
              <DashboardComponent.StackerAreaChart  />
            </div>
            <div className="snap-center flex-shrink-0 w-full">
              <DashboardComponent.BarChart  />
            </div>
            {/* Agrega más divs con tus gráficos de barras aquí */}
          </div>
        </div>
      </div>
    </div>
  );
};
