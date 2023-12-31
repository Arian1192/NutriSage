import imagenFrutas from "../public/primer-plano-mujer-atletica-agregando-fresas-mientras-hace-ensalada-frutas-cocina.jpg";
import imagenGim from "../public/fitness-gb93cde767_1280.jpg";
import LandingCardComposer from "@/components/LandingCard/LandingCardComposer";
import { AccordionComposer } from "@/components/Acordion/AccordionComposer";
import NavbarComponent from "@/components/Navbar/NavbarComponent";
import { FooterComponent } from "@/components/Footer/FooterComponent";

const textForCards = [
  {
    title: "Nutrición",
    description: "Diesta Semanal Personalizada",
    imgSrc: imagenFrutas,
    textContentDescription:
      "Nuestra red neuronal, nos indicará tu IMC, porcentaje de musculo y grasa, y porcentaje de agua, que usaremos junto a la inteligencia artificial para generarte una dieta en base a tus necesidades y objetivos",
  },
  {
    title: "Ejercicio",
    description: "Tabla de ejercicios relacionada a tu dieta",
    imgSrc: imagenGim,
    textContentDescription:
      "Un plus de NutriSage, es que además de tu dieta personalizada, te vamos a poder generar un plan de ejercicios semanal, que en consonancia con la dieta hará que recojas los frutos de tanto esfuerzo.",
  },
];

const QandA = [
  {
    header: "¿Cómo funciona NutriSage?",
    description:
      "NutriSage mide tu IMC en función de peso y estatura, junto con otros datos que te vamos a solicitar, podemos create dietas personalizadas y entramientos definidos para conseguir tus objetivos saludables.",
  },
  {
    header:
      "¿Qué beneficios ofrece el uso de NutriSage para la planificación de mi dieta y entrenamiento?",
    description:
      "El principal objetivo es el bienestar personal y la vida saludable, además de no tener que contar con un dietista y entrenador personal, con NutriSage tienes todo en uno.",
  },
  {
    header:
      "¿Cómo se asegura la aplicación de que las dietas y los entrenamientos sean seguros para mí?",
    description:
      "La seguridad es nuestra máxima prioridad. Antes de generar cualquier plan, la IA realiza un análisis exhaustivo de tus datos de salud. Siempre recomendamos que consultes con un profesional de la salud antes de realizar cambios importantes en tu dieta o rutina de ejercicios.",
  },
  {
    header:
      "¿Cómo se tienen en cuenta mis preferencias alimenticias y restricciones al generar un plan?",
    description:
      "Tu satisfacción es importante. Al recopilar tus datos, también tomamos nota de tus preferencias y restricciones alimenticias (alergias, gluten, lactosa). La IA adapta las recomendaciones para incluir alimentos que disfrutes y respetar cualquier restricción dietética",
  },
  {
    header: "¿Estoy obligado a pagar el plan completo?",
    description:
      "Afortunadamente no, quizas solo quieres marcarte una dieta y seguir los registros de tu bienestar, sin embargo te invitamos a que mires la opción mas completa que te permitirá disponer de ejercicios fisicos semanales, que potenciarán mas tu bienestar y salud.",
  },
];

export default function Home() {
  return (
    <div>
      <NavbarComponent />
      <div className="w-full h-screen flex flex-col justify-center items-center relative overflow-hidden">
        <div className="w-[1200px] border h-[800px] bg-dotted-spacing-6 bg-dotted-black bg-dotted-radius-0.5 blur-xs -z-50 " />
        <div className="absolute top-0 left-0 w-full h-screen bg-radial-gradient-polka ">
          <div className="w-full h-screen justify-center items-center text-4xl font-bold text-center mt-72 z-1">
            <h1 className="text-9xl font-bold mb-10 text-zinc-700 drop-shadow-xl shadow-black max-sm:text-7xl">
              Nutri<span className="font-extralight">Sage</span>
            </h1>
            <p className="font-light text-3xl text-zinc-700 drop-shadow-2xl shadow-black max-sm:text-2xl max-sm:m-5">
              Conéctate con tu Bienestar a través de la Nutrición y el
              Ejercicio.
            </p>
          </div>
        </div>
        <div className="absolute w-[800px] h-[400px] blur-2xl opacity-90 -z-10 rounded-xl bg-gradient-to-b from-green-500 to-white">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        N
      </div>
      <section className="w-full h-auto">
        <div className="-z-10 transform: skew-y-[6deg] origin-top-right bg-green-300  w-full flex-col h-4/5 flex justify-center items-center">
          <div className="transform: skew-y-[-6deg] container flex flex-col gap-10 justify-center items-center lg:w-1/2 lg:text-center">
            <h2 className="text-4xl font-bold text-zinc-700 lg:text-5xl mt-24 max-sm:mt-24 text-center">
              Integrando tu Bienestar Físico y Nutricional
            </h2>
            <p className="font-light text-zinc-600 lg:text-xl max-sm: text-center">
              Utilizamos nuestra tecnologia de red neuronal y la Inteligencia
              Artificial para brindarte la capacidad de generar un plan de
              alimentación y ejercicio personalizado.
            </p>
          </div>
          <div
            className="transform:
           skew-y-[-6deg] w-full h-auto flex max-sm:flex-col justify-center items-start max-sm:items-center p-10 gap-24 max-sm:mt-24"
          >
            <LandingCardComposer
              image={textForCards[0].imgSrc}
              altImage={textForCards[0].title}
              header={textForCards[0].title}
              description={textForCards[0].description}
              text={textForCards[0].textContentDescription}
              path="nutricion"
            />
            <LandingCardComposer
              image={textForCards[1].imgSrc}
              altImage={textForCards[1].title}
              header={textForCards[1].title}
              description={textForCards[1].description}
              text={textForCards[1].textContentDescription}
              path="entrenamiento"
            />
          </div>
        </div>
      </section>
      <section className="w-full h-auto p-5 flex flex-col flex-grow mb-24 justify-center items-center gap-5">
        <h2 className="text-4xl mt-24 font-bold text-zinc-700 lg:text-5xl mb-10 max-sm:mt-24 text-center">
          Algunas de las preguntas más frecuentes
        </h2>

        <div className="w-1/2 max-sm:w-full max-md:w-2/3 flex-grow justify-center items-center h-auto">
          {QandA.map((question, i) => {
            return (
              <AccordionComposer
                key={i}
                header={question.header}
                description={question.description}
              />
            );
          })}
        </div>
      </section>
      <FooterComponent />
    </div>
  );
}
