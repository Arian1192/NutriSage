"use client";
import React from "react";
import { DashboardComponent } from "./DashboardComponentContext";
import { ListHealthyItems } from "../Navbar/NavbarItems";
import { LoginComponent } from "../Login/LoginComponent";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SimpleBarCharts } from "../Charts/SimpleBarCharts";
import { StackedAreaChart } from "../Charts/StackedAreaChart";

export const DashboardComponentContainer = () => {
  return (
    <div className="flex h-screen">
      <aside className="max-lg:hidden lg:w-1/12 bg-emerald-800 text-center text-white">
        MENU
      </aside>
      <main className="flex-grow overflow-y-auto p-4 w-full">
        <p className="text-center text-2xl font-bold">
          Nutri<span className="font-light">Sage</span>
        </p>
        <div className="bg-white p-3 rounded shadow-md">
          <h1 className="text-xl font-semibold mb-4">Resumen General</h1>
          <div className="h-auto overflow-y-auto w-[100%] p-4">
            <div className="w-[100%] border rounded border-emerald-300 flex flex-col justify-start items-center">
              <p className="text-2xl m-5">Arian Collaso</p>
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  className="h-32 w-32"
                />
                <AvatarFallback>AR</AvatarFallback>
              </Avatar>
              <DashboardComponent.CardWidget />
              <p className="text-left md:text-3xl font-bold mb-5">
                Resumen de tus objetivos
              </p>
              <div className="w-[90%] border rounded border-emerald-300 flex-col justify-start items-start p-4 mb-5">
                <div className="flex gap-2 mb-2">
                  <p>Objetivo:</p>
                  <p>Perdida de peso</p>
                </div>
                <div>
                  *Los valores graficos representan el valor final del domingo.
                </div>

                <div className="snap-x snap-mandatory overflow-y-hidden overflow-scroll mx-auto flex w-[100%]  h-auto">
                  <div className="snap-center flex-shrink-0">
                    <DashboardComponent.BarChart />
                  </div>
                  <div className="snap-center flex-shrink-0 w-full">
                    <DashboardComponent.StackerAreaChart />
                  </div>
                  <div className="snap-center flex-shrink-0 w-full">
                    <DashboardComponent.BarChart />
                  </div>
                  {/* Agrega más divs con tus gráficos de barras aquí */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
