import { LoginComponent } from "@/components/Login/LoginComponent";

export default function Page() {
  return (
    <section className="w-full h-screen flex flex-col justify-center items-center">
      <h2 className="text-3xl font-bold text-green-400  md:text-7xl">
        Aqui empieza tu evolucion
      </h2>
      <h3 className="text-2xl font-bold md:text-5xl text-zinc-700">
        Nutri<span className="font-light">Sage</span>
      </h3>
      <div className="mt-10">
        <LoginComponent />
      </div>
    </section>
  );
}
