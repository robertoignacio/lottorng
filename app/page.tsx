
// body font: noto_sans
// accent font: montserrat
// import { montserrat } from "@/app/ui/fonts";

import ContextHeader from "@/app/ui/components/ContextHeader";

export default function Home() {
  return (
    <>
    {/* to do: react component: Wrapper */}
    <div className="border-2 border-solid border-fuchsia-600 p-8 min-h-screen">

      {/* to do: react component: ContextHeader */}
      <ContextHeader />

      {/* to do: react component: NumberRange */}
      <div className="border-2 border-solid border-orange-600">
        <p>component: NumberRange</p>
        <p>accesa: null</p>
        <p>acción: definir rango, dato inicio chain</p>
        <p className="text-s font-normal antialiased">descr: Definir el rango de números</p>
        <div className="flex justify-around">
          <div className="border-2 border-solid border-orange-600">
            <p className="text-s font-normal antialiased">rango inferior</p>
          </div>
          <div className="border-2 border-solid border-orange-600">
          <p className="text-s font-normal antialiased">rango superior</p>
          </div>          
        </div>
      </div>

      {/* to do: react component: GenerateCombination */}
      <div className="border-2 border-solid border-green-600">
        <p>component: GenerateCombination</p>
        <p>accesa: objeto anterior generado por NumberRange</p>
        <p>acción: continúa chain</p>
        <button className="border-2 border-solid border-orange-600">Botón: Generar</button>
        <p>Total de combinaciones: este número</p>
        <div className="border-2 border-solid border-orange-600">
        <p>Tabla de resultados: drop down (truncado|full), pagination?</p>
        </div>
      </div>

      {/* to do: react component: RandomCombination */}
      <div className="border-2 border-solid border-fuchsia-600">
        <p>component: RandomCombination</p>
        <p>accesa: objeto anterior generado por GenerateCombinations</p>
        <p>acción: cierra chain, elegir al azar alguna de las combinaciones</p>
        <button className="border-2 border-solid border-orange-600">Botón: Elegir</button>
        <p>Displays: Combinación a jugar</p>
      </div>

    </div>

    </>
  );
}