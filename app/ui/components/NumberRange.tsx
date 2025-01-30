
export default function NumberRange() {
    return (
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
    )
};