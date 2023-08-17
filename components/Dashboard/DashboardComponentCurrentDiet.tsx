import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { useState } from "react";

interface IMenu {
  dia: string;

  desayuno: {
    tipoComida: string;
    plato: string;
    calorias: number;
    proteinas: number;
    carbohidratos: number;
    ingredientes: string[];
  };
  almuerzo: {
    tipoComida: string;
    plato: string;
    calorias: number;
    proteinas: number;
    carbohidratos: number;
    ingredientes: string[];
  };
  comida: {
    tipoComida: string;
    plato: string;
    calorias: number;
    proteinas: number;
    carbohidratos: number;
    ingredientes: string[];
  };
  merienda: {
    tipoComida: string;
    plato: string;
    calorias: number;
    proteinas: number;
    carbohidratos: number;
    ingredientes: string[];
  };
  cena: {
    tipoComida: string;
    plato: string;
    calorias: number;
    proteinas: number;
    carbohidratos: number;
    ingredientes: string[];
  };
}

export const DashboardComponentCurrentDiet = () => {
  const menu: IMenu[] = [
    {
      dia: "Lunes",

      desayuno: {
        tipoComida: "Desayuno",
        plato: "Tostadas integrales con aguacate y huevo pochado",
        calorias: 350,
        proteinas: 18,
        carbohidratos: 30,
        ingredientes: [
          "Tostadas integrales (2 unidades)",
          "Aguacate (1/2 unidad)",
          "Huevo pochado (1 unidad)",
        ],
      },
      almuerzo: {
        tipoComida: "Almuerzo",
        plato: "Bowl de quinoa con garbanzos y espinacas",
        calorias: 380,
        proteinas: 15,
        carbohidratos: 55,
        ingredientes: [
          "Quinoa cocida (150g)",
          "Garbanzos cocidos (100g)",
          "Espinacas frescas (50g)",
          "Tomate (50g)",
          "Aceite de oliva y limón",
        ],
      },
      comida: {
        tipoComida: "Comida",
        plato: "Pechuga de pollo al horno con batatas",
        calorias: 420,
        proteinas: 28,
        carbohidratos: 35,
        ingredientes: [
          "Pechuga de pollo (150g)",
          "Batata al horno (150g)",
          "Brócoli al vapor (100g)",
          "Aceite de oliva, ajo, romero",
        ],
      },
      merienda: {
        tipoComida: "Merienda",
        plato: "Batido de proteínas con frutas",
        calorias: 250,
        proteinas: 20,
        carbohidratos: 30,
        ingredientes: [
          "Proteína en polvo (30g)",
          "Leche de almendras (250ml)",
          "Frutas variadas (100g)",
        ],
      },
      cena: {
        tipoComida: "Cena",
        plato: "Ensalada de atún con aguacate",
        calorias: 320,
        proteinas: 22,
        carbohidratos: 15,
        ingredientes: [
          "Atún enlatado al natural (100g)",
          "Aguacate (1/2 unidad)",
          "Lechuga (100g)",
          "Cebolla morada (30g)",
          "Aceite de oliva y limón",
        ],
      },
    },
    {
      dia: "Martes",
      desayuno: {
        tipoComida: "Desayuno",
        plato: "Yogur con frutas y granola",
        calorias: 300,
        proteinas: 15,
        carbohidratos: 45,
        ingredientes: [
          "Yogur natural (200g)",
          "Frutas variadas (100g)",
          "Granola (30g)",
        ],
      },
      almuerzo: {
        tipoComida: "Almuerzo",
        plato: "Ensalada de pollo con verduras mixtas",
        calorias: 400,
        proteinas: 25,
        carbohidratos: 30,
        ingredientes: [
          "Pechuga de pollo (150g)",
          "Lechuga (100g)",
          "Tomate (50g)",
          "Pepino (50g)",
          "Aceite de oliva y vinagre balsámico",
        ],
      },
      comida: {
        tipoComida: "Comida",
        plato: "Salmón a la parrilla con arroz integral",
        calorias: 450,
        proteinas: 30,
        carbohidratos: 40,
        ingredientes: [
          "Filete de salmón (150g)",
          "Arroz integral cocido (150g)",
          "Brócoli al vapor (100g)",
          "Aceite de oliva, limón, sal y pimienta",
        ],
      },
      merienda: {
        tipoComida: "Merienda",
        plato: "Zanahorias baby con hummus",
        calorias: 150,
        proteinas: 5,
        carbohidratos: 20,
        ingredientes: ["Zanahorias baby (100g)", "Hummus (50g)"],
      },
      cena: {
        tipoComida: "Cena",
        plato: "Wrap de pavo con tortilla integral",
        calorias: 350,
        proteinas: 20,
        carbohidratos: 30,
        ingredientes: [
          "Pavo a la plancha (100g)",
          "Tortilla integral",
          "Vegetales variados",
          "Yogur griego bajo en grasa (30g)",
        ],
      },
    },
    {
      dia: "Miercoles",
      desayuno: {
        tipoComida: "Desayuno",
        plato: "Yogur con frutas y granola",
        calorias: 300,
        proteinas: 15,
        carbohidratos: 45,
        ingredientes: [
          "Yogur natural (200g)",
          "Frutas variadas (100g)",
          "Granola (30g)",
        ],
      },
      almuerzo: {
        tipoComida: "Almuerzo",
        plato: "Ensalada de pollo con verduras mixtas",
        calorias: 400,
        proteinas: 25,
        carbohidratos: 30,
        ingredientes: [
          "Pechuga de pollo (150g)",
          "Lechuga (100g)",
          "Tomate (50g)",
          "Pepino (50g)",
          "Aceite de oliva y vinagre balsámico",
        ],
      },
      comida: {
        tipoComida: "Comida",
        plato: "Salmón a la parrilla con arroz integral",
        calorias: 450,
        proteinas: 30,
        carbohidratos: 40,
        ingredientes: [
          "Filete de salmón (150g)",
          "Arroz integral cocido (150g)",
          "Brócoli al vapor (100g)",
          "Aceite de oliva, limón, sal y pimienta",
        ],
      },
      merienda: {
        tipoComida: "Merienda",
        plato: "Zanahorias baby con hummus",
        calorias: 150,
        proteinas: 5,
        carbohidratos: 20,
        ingredientes: ["Zanahorias baby (100g)", "Hummus (50g)"],
      },
      cena: {
        tipoComida: "Cena",
        plato: "Wrap de pavo con tortilla integral",
        calorias: 350,
        proteinas: 20,
        carbohidratos: 30,
        ingredientes: [
          "Pavo a la plancha (100g)",
          "Tortilla integral",
          "Vegetales variados",
          "Yogur griego bajo en grasa (30g)",
        ],
      },
    },
    {
      dia: "Jueves",
      desayuno: {
        tipoComida: "Desayuno",
        plato: "Yogur con frutas y granola",
        calorias: 300,
        proteinas: 15,
        carbohidratos: 45,
        ingredientes: [
          "Yogur natural (200g)",
          "Frutas variadas (100g)",
          "Granola (30g)",
        ],
      },
      almuerzo: {
        tipoComida: "Almuerzo",
        plato: "Ensalada de pollo con verduras mixtas",
        calorias: 400,
        proteinas: 25,
        carbohidratos: 30,
        ingredientes: [
          "Pechuga de pollo (150g)",
          "Lechuga (100g)",
          "Tomate (50g)",
          "Pepino (50g)",
          "Aceite de oliva y vinagre balsámico",
        ],
      },
      comida: {
        tipoComida: "Comida",
        plato: "Salmón a la parrilla con arroz integral",
        calorias: 450,
        proteinas: 30,
        carbohidratos: 40,
        ingredientes: [
          "Filete de salmón (150g)",
          "Arroz integral cocido (150g)",
          "Brócoli al vapor (100g)",
          "Aceite de oliva, limón, sal y pimienta",
        ],
      },
      merienda: {
        tipoComida: "Merienda",
        plato: "Zanahorias baby con hummus",
        calorias: 150,
        proteinas: 5,
        carbohidratos: 20,
        ingredientes: ["Zanahorias baby (100g)", "Hummus (50g)"],
      },
      cena: {
        tipoComida: "Cena",
        plato: "Wrap de pavo con tortilla integral",
        calorias: 350,
        proteinas: 20,
        carbohidratos: 30,
        ingredientes: [
          "Pavo a la plancha (100g)",
          "Tortilla integral",
          "Vegetales variados",
          "Yogur griego bajo en grasa (30g)",
        ],
      },
    },
    {
      dia: "Viernes",
      desayuno: {
        tipoComida: "Desayuno",
        plato: "Yogur con frutas y granola",
        calorias: 300,
        proteinas: 15,
        carbohidratos: 45,
        ingredientes: [
          "Yogur natural (200g)",
          "Frutas variadas (100g)",
          "Granola (30g)",
        ],
      },
      almuerzo: {
        tipoComida: "Almuerzo",
        plato: "Ensalada de pollo con verduras mixtas",
        calorias: 400,
        proteinas: 25,
        carbohidratos: 30,
        ingredientes: [
          "Pechuga de pollo (150g)",
          "Lechuga (100g)",
          "Tomate (50g)",
          "Pepino (50g)",
          "Aceite de oliva y vinagre balsámico",
        ],
      },
      comida: {
        tipoComida: "Comida",
        plato: "Salmón a la parrilla con arroz integral",
        calorias: 450,
        proteinas: 30,
        carbohidratos: 40,
        ingredientes: [
          "Filete de salmón (150g)",
          "Arroz integral cocido (150g)",
          "Brócoli al vapor (100g)",
          "Aceite de oliva, limón, sal y pimienta",
        ],
      },
      merienda: {
        tipoComida: "Merienda",
        plato: "Zanahorias baby con hummus",
        calorias: 150,
        proteinas: 5,
        carbohidratos: 20,
        ingredientes: ["Zanahorias baby (100g)", "Hummus (50g)"],
      },
      cena: {
        tipoComida: "Cena",
        plato: "Wrap de pavo con tortilla integral",
        calorias: 350,
        proteinas: 20,
        carbohidratos: 30,
        ingredientes: [
          "Pavo a la plancha (100g)",
          "Tortilla integral",
          "Vegetales variados",
          "Yogur griego bajo en grasa (30g)",
        ],
      },
    },
    {
      dia: "Sabado",
      desayuno: {
        tipoComida: "Desayuno",
        plato: "Yogur con frutas y granola",
        calorias: 300,
        proteinas: 15,
        carbohidratos: 45,
        ingredientes: [
          "Yogur natural (200g)",
          "Frutas variadas (100g)",
          "Granola (30g)",
        ],
      },
      almuerzo: {
        tipoComida: "Almuerzo",
        plato: "Ensalada de pollo con verduras mixtas",
        calorias: 400,
        proteinas: 25,
        carbohidratos: 30,
        ingredientes: [
          "Pechuga de pollo (150g)",
          "Lechuga (100g)",
          "Tomate (50g)",
          "Pepino (50g)",
          "Aceite de oliva y vinagre balsámico",
        ],
      },
      comida: {
        tipoComida: "Comida",
        plato: "Salmón a la parrilla con arroz integral",
        calorias: 450,
        proteinas: 30,
        carbohidratos: 40,
        ingredientes: [
          "Filete de salmón (150g)",
          "Arroz integral cocido (150g)",
          "Brócoli al vapor (100g)",
          "Aceite de oliva, limón, sal y pimienta",
        ],
      },
      merienda: {
        tipoComida: "Merienda",
        plato: "Zanahorias baby con hummus",
        calorias: 150,
        proteinas: 5,
        carbohidratos: 20,
        ingredientes: ["Zanahorias baby (100g)", "Hummus (50g)"],
      },
      cena: {
        tipoComida: "Cena",
        plato: "Wrap de pavo con tortilla integral",
        calorias: 350,
        proteinas: 20,
        carbohidratos: 30,
        ingredientes: [
          "Pavo a la plancha (100g)",
          "Tortilla integral",
          "Vegetales variados",
          "Yogur griego bajo en grasa (30g)",
        ],
      },
    },
    {
      dia: "Domingo",
      desayuno: {
        tipoComida: "Desayuno",
        plato: "Yogur con frutas y granola",
        calorias: 300,
        proteinas: 15,
        carbohidratos: 45,
        ingredientes: [
          "Yogur natural (200g)",
          "Frutas variadas (100g)",
          "Granola (30g)",
        ],
      },
      almuerzo: {
        tipoComida: "Almuerzo",
        plato: "Ensalada de pollo con verduras mixtas",
        calorias: 400,
        proteinas: 25,
        carbohidratos: 30,
        ingredientes: [
          "Pechuga de pollo (150g)",
          "Lechuga (100g)",
          "Tomate (50g)",
          "Pepino (50g)",
          "Aceite de oliva y vinagre balsámico",
        ],
      },
      comida: {
        tipoComida: "Comida",
        plato: "Salmón a la parrilla con arroz integral",
        calorias: 450,
        proteinas: 30,
        carbohidratos: 40,
        ingredientes: [
          "Filete de salmón (150g)",
          "Arroz integral cocido (150g)",
          "Brócoli al vapor (100g)",
          "Aceite de oliva, limón, sal y pimienta",
        ],
      },
      merienda: {
        tipoComida: "Merienda",
        plato: "Zanahorias baby con hummus",
        calorias: 150,
        proteinas: 5,
        carbohidratos: 20,
        ingredientes: ["Zanahorias baby (100g)", "Hummus (50g)"],
      },
      cena: {
        tipoComida: "Cena",
        plato: "Wrap de pavo con tortilla integral",
        calorias: 350,
        proteinas: 20,
        carbohidratos: 30,
        ingredientes: [
          "Pavo a la plancha (100g)",
          "Tortilla integral",
          "Vegetales variados",
          "Yogur griego bajo en grasa (30g)",
        ],
      },
    },
  ];

  const DaysOfTheWeek = [
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
    "Domingo",
  ];

  const handleTabClick = (index: number) => {
    setCurrentDay(index);
  };

  const [currentDay, setCurrentDay] = useState(0);

  return (
    <div className="w-[90%] border rounded border-emerald-300 flex flex-col justify-start items-start p-4 mb-5">
      <Tabs className="w-auto lg:w-[100%] p-2 lg:p-4 flex lg:flex-col gap-10">
        <TabsList className="grid  w-auto grid-rows-7 lg:grid-cols-7 gap-4">
          {menu?.map((day, index) => (
            <TabsTrigger
              key={index}
              className={`${
                currentDay === index
                  ? "bg-emerald-300 p-2 rounded-lg text-white"
                  : "bg-white hover:bg-gray-100 p-2 rounded-lg"
              }`}
              onClick={() => handleTabClick(index)}
              value={day.dia}
            >
              <p>{day.dia}</p>
            </TabsTrigger>
          ))}
        </TabsList>
        {DaysOfTheWeek.map((day, index) => (
          <TabsContent
            key={index}
            // className={`${currentDay === index ? "block" : "hidden"}`}
            value={day}
          >
            <ul className="divide-y divide-gray-300 h-auto w-auto border p-2">
              <li className="w-[100%] max-sm:w-[100%]">
                <h3 className="text-lg font-bold">{menu[currentDay].dia}</h3>
                <div className="mb-2 ">
                  <p>{menu[currentDay].almuerzo.tipoComida}</p>
                  <p>{menu[currentDay].almuerzo.plato}</p>
                  <p>{menu[currentDay].almuerzo.calorias}</p>
                  <p>{menu[currentDay].almuerzo.proteinas}</p>
                  <p>{menu[currentDay].almuerzo.carbohidratos}</p>
                  <p>{menu[currentDay].almuerzo.ingredientes}</p>
                  <hr />
                  <p>{menu[currentDay].desayuno.tipoComida}</p>
                  <p>{menu[currentDay].desayuno.plato}</p>
                  <p>{menu[currentDay].desayuno.calorias}</p>
                  <p>{menu[currentDay].desayuno.proteinas}</p>
                  <p>{menu[currentDay].desayuno.carbohidratos}</p>
                  <p>{menu[currentDay].desayuno.ingredientes}</p>
                  <hr />
                  <p>{menu[currentDay].comida.tipoComida}</p>
                  <p>{menu[currentDay].comida.plato}</p>
                  <p>{menu[currentDay].comida.calorias}</p>
                  <p>{menu[currentDay].comida.proteinas}</p>
                  <p>{menu[currentDay].comida.carbohidratos}</p>
                  <p>{menu[currentDay].comida.ingredientes}</p>
                  <hr />
                  <p>{menu[currentDay].merienda.tipoComida}</p>
                  <p>{menu[currentDay].merienda.plato}</p>
                  <p>{menu[currentDay].merienda.calorias}</p>
                  <p>{menu[currentDay].merienda.proteinas}</p>
                  <p>{menu[currentDay].merienda.carbohidratos}</p>
                  <p>{menu[currentDay].merienda.ingredientes}</p>
                  <hr />
                  <p>{menu[currentDay].cena.tipoComida}</p>
                  <p>{menu[currentDay].cena.plato}</p>
                  <p>{menu[currentDay].cena.calorias}</p>
                  <p>{menu[currentDay].cena.proteinas}</p>
                  <p>{menu[currentDay].cena.carbohidratos}</p>
                  <p>{menu[currentDay].cena.ingredientes}</p>
                </div>
              </li>
            </ul>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};
