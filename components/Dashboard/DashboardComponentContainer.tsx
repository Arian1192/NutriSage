"use client";
import React from "react";
import { DashboardComponent } from "./DashboardComponentContext";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { DashboardComponentCurrentDiet } from "./DashboardComponentCurrentDiet";
import { useUser } from "@/context/userContext";
import { Radar } from "lucide-react";

export const DashboardComponentContainer = () => {
  
  const user = useUser();

  const userData = user?.userData?.data.user?.user_metadata;
  console.log(userData);
  return (
    <div className="flex h-screen">
      <aside className="max-lg:hidden lg:w-1/12 bg-emerald-300 text-center text-white">
        MENU
      </aside>
      <main className="flex-grow overflow-y-auto p-4 w-full">
        <p className="text-center text-2xl font-bold">
          Nutri<span className="font-light">Sage</span>
        </p>
        <div className="bg-white md:p-3 md:rounded md:shadow-md">
          <h1 className="text-xl font-semibold mb-4">Resumen General</h1>
          <div className="h-auto overflow-y-auto w-[100%] p-2 md:p-4">
            <div className="w-[100%] border rounded border-emerald-300 flex flex-col justify-start items-center">
              <p className="text-2xl m-5">
                {`${userData?.full_name}`.toLocaleUpperCase()}
              </p>
              <Avatar>
                <AvatarImage src={userData?.picture} className="h-32 w-32" />
                <AvatarFallback>AR</AvatarFallback>
              </Avatar>
              <DashboardComponent.CardWidget />
              <p className="text-left md:text-3xl font-bold mb-5">
                Resumen de tus objetivos
              </p>
              {/* Pasar todo lo de dentro a un componente o varios !!!!!!!!! */}
              <div className="w-[90%] border rounded border-emerald-300 flex flex-col justify-start items-start p-4 mb-5">
                <div className="flex gap-2 mb-2">
                  <p className="flex gap-2">
                    <span>
                      <Radar />
                    </span>
                    Objetivo:
                  </p>
                  <p>Perdida de peso</p>
                </div>
                <div>
                  <p className="text-sm text-zinc-500">
                    Los valores de la grafica representan el valor final del
                    Domingo
                  </p>
                </div>
                <div className="w-full h-auto flex  flex-col justify-start items-start lg:flex-row">
                  <div className="snap-x snap-mandatory overflow-y-hidden overflow-scroll flex w-[100%] lg:w-[50%]  h-auto">
                    <div className="snap-center flex-shrink-0 w-full ">
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
                  <div className="p-5 w-[100%] lg:w-[50%] h-auto flex flex-col ">
                    <h3 className="text-lg font-bold">
                      Estos son los valores de la primera semana:
                    </h3>
                    <p>
                      Peso: <span>69kg</span>
                    </p>
                    <p>
                      Altura: <span>1.66m</span>
                    </p>
                    <p>
                      IMC: <span>26.4</span>
                    </p>
                    <p>
                      %Grasa : <span>24.6</span>
                    </p>
                  </div>
                </div>
              </div>
              <h3 className="text-3xl font-bold mb-5">
                Dieta para esta semana
              </h3>
              <DashboardComponentCurrentDiet />
              <div></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
