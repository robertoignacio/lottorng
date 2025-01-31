// body font: noto_sans
// accent font: montserrat


import ContextHeader from "@/app/ui/components/ContextHeader";
import NumberRange from "@/app/ui/components/NumberRange";

export default function Home() {
  return (
    <>
      {/* to do: react component: Wrapper */}
      <div className="border-2 border-solid border-fuchsia-600 p-8 min-h-screen">

      {/* to do: react component: ContextHeader */}
      <ContextHeader />

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