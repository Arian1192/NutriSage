import { Tabs, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { useState } from "react";

export const DashboardComponentCurrentDiet = () => {
  const DaysOfTheWeek = [
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
    "Domingo",
  ];

  const [currentDay, setCurrentDay] = useState<any>(null);

  return (
    <div className="w-[90%] border rounded border-emerald-300 flex flex-col justify-start items-start p-4 mb-5">
      <Tabs
        defaultValue="account"
        className="w-[30%] lg:w-[100%] p-2 lg:p-4 border border-emerald-300 rounded-md"
      >
        <TabsList className="grid w-full grid-rows-7 md:grid-cols-7 gap-4">
          {DaysOfTheWeek.map((day, index) => (
            <TabsTrigger
              key={index}
              className={`${
                currentDay === index ? "bg-emerald-300 p-2 rounded-lg text-white" : ""
              }`}
              onClick={() => setCurrentDay(index)}
              value={""}
            >
              {day}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
};
