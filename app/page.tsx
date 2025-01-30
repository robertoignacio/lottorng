// body font: noto_sans
// accent font: montserrat
import { montserrat } from "@/app/ui/fonts";


import NumberRange from "@/app/ui/components/NumberRange";

export default function Home() {
  return (
    <>
      {/* to do: react component: Wrapper */}
      <div className="border-2 border-solid border-fuchsia-600 p-8 min-h-screen">

      {/* to do: react component: ContextHeader */}
      <div className="border-2 border-solid border-blue-600">
        <p>component: ContextHeader</p>
        <p>accesa: null</p>
        <p>acción: display objetivo</p>
        <h1 className={`${montserrat.className} text-xl font-bold antialiased`}>title: Lotto RNG</h1>
        <p>descr: Generar combinación para jugarla en el lotto</p>
      </div>

      {/* to do: react component: NumberRange */}
      <NumberRange />

      {/* to do: react component: GenerateCombinations */}
      <div className="border-2 border-solid border-green-600">
        <p>component: GenerateCombinations</p>
        <p>accesa: objeto anterior generado por NumberRange</p>
        <p>acción: continúa chain</p>
        <button className="border-2 border-solid border-orange-600">Botón: Generar</button>
        <p>Total de combinaciones: este número</p>
        <div className="border-2 border-solid border-orange-600">
        <p>Tabla de resultados: drop down (truncado|full), pagination?</p>
        </div>
      </div>

      {/* to do: react component: GetRandomCombination */}
      <div className="border-2 border-solid border-fuchsia-600">
        <p>component: GetRandomCombination</p>
        <p>accesa: objeto anterior generado por GenerateCombinations</p>
        <p>acción: cierra chain, elegir al azar alguna de las combinaciones</p>
        <button className="border-2 border-solid border-orange-600">Botón: Elegir</button>
        <p>Displays: Combinación a jugar</p>
      </div>

    </div>

    </>
  );
}