
// body font: noto_sans
// accent font: montserrat
import { montserrat } from "@/app/ui/fonts";

export default function Home() {
  return (
    <div className="border-2 border-solid border-fuchsia-600 p-8 min-h-screen">

      <div className="border-2 border-solid border-blue-600">
        <h1 className={`${montserrat.className} text-xl font-bold antialiased`}>Lotto RNG</h1>
        <p>Generar combinación para jugarla en el lotto</p>
      </div>

      <div className="border-2 border-solid border-orange-600">
        <p className="text-s font-normal antialiased">Rango de números</p>
        <div className="flex justify-around">
          <div className="border-2 border-solid border-orange-600">
            <p className="text-s font-normal antialiased">rango inferior</p>
          </div>
          <div className="border-2 border-solid border-orange-600">
          <p className="text-s font-normal antialiased">rango superior</p>
          </div>          
        </div>
      </div>

      <div className="border-2 border-solid border-green-600">
        <button className="border-2 border-solid border-orange-600">Botón: Generar</button>
      </div>

      <div className="border-2 border-solid border-slate-600">
        <p>Total de combinaciones: este número</p>
        <div className="border-2 border-solid border-orange-600">
        <p>Tabla de resultados: drop down truncado</p>
        </div>        
      </div>

      <div className="border-2 border-solid border-fuchsia-600">
        <p>Elegir al azar alguna de las combinaciones</p>
        <button className="border-2 border-solid border-orange-600">Botón: Elegir</button>
        <p>Displays: Combinación a jugar</p>
      </div>

    </div>
  );
}