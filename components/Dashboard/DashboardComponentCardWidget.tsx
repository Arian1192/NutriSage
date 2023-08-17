import { GlassWater } from "lucide-react";

export const DashboardComponentCardWidget = () => {
  return (
    <div className="w-[90%] px-[1.7rem] py-[1.5rem] text-zinc-700 border border-emerald-300  rounded-md m-5">
      <p className="mb-2">Datos Actuales xx/xx/2023</p>
      <div className="w-[100%] h-auto flex justify-evenly">
        <div className="flex flex-col">
          <p className="md:text-xl font-bold">68.5kg</p>
          <p>Peso</p>
        </div>
        <div>
          <p className="md:text-xl font-bold">1.66m</p>
          <p>Altura</p>
        </div>
        <div>
          <p className="md:text-xl font-bold">24.9</p>
          <p>IMC</p>
        </div>
        <div>
          <p className="md:text-xl font-bold">20.6%</p>
          <p>% Grasa</p>
        </div>
      </div>
    </div>
  );
};
