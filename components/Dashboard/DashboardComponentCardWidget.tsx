import { GlassWater } from "lucide-react";

export const DashboardComponentCardWidget = () => {
  return (
    <div className="px-[1.7rem] py-[1.5rem] mt-0 mb-0 text-zinc-700">
      <p className="mb-2">Datos Actuales Semana xx/xx/2023</p>
      <div className="grid grid-cols-4">
        <div>
          <p className="text-xl font-bold xl:text-4xl">
            68.5
          </p>
          <p>Peso Kg</p>
        </div>
        <div>
          <p className="text-xl  font-bold xl:text-4xl">24.9</p>
          <p>IMC</p>
        </div>
        <div>
          <p className="text-xl font-bold xl:text-4xl">59.8</p>
          <p>%Agua</p>
        </div>
        <div>
          <p className="text-xl font-bold xl:text-4xl">20.6</p>
          <p>%Grasa</p>
        </div>
      </div>
    </div>
  );
};
