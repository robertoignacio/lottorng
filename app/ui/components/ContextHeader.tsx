
// body font: noto_sans
// accent font: montserrat
import { montserrat } from "@/app/ui/fonts";

export default function ContextHeader() {
    return (
        <>
            <div className="border-2 border-solid border-blue-600">
            <p>component: ContextHeader</p>
            <p>accesa: null</p>
            <p>acción: display objetivo</p>
            <h1 className={`${montserrat.className} text-xl font-bold antialiased`}>title: Lotto RNG</h1>
            <p>descr: Generar combinación para jugarla en el lotto</p>
            </div>
        </>
    )
};