export default function Home() {
  return (
    <div>
      <div className="w-full h-screen flex flex-col justify-center items-center relative ">
        <div className="w-[1200px] border h-[800px] bg-dotted-spacing-6 bg-dotted-black bg-dotted-radius-0.5 blur-xs -z-50" />
        <div className="absolute top-0 left-0 w-full h-screen bg-radial-gradient-polka ">
          <div className="w-full h-screen justify-center items-center text-4xl font-bold text-center mt-80 z-1">
            <h1 className="text-9xl font-bold mb-10 text-zinc-700 drop-shadow-xl shadow-black">
              Nutri<span className="font-extralight">Sage</span>
            </h1>
            <p className="font-medium text-[20px] text-zinc-700 drop-shadow-2xl shadow-black">
              Conéctate con tu Bienestar a través de la Nutrición y el
              Ejercicio.
            </p>
          </div>
        </div>
        <div className="absolute w-[800px] h-[400px] blur-2xl opacity-90 -z-10 rounded-xl bg-gradient-to-b from-green-500 to-white">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
      </div>
    </div>
  );
}