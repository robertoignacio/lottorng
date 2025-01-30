
// body font: noto_sans
// accent font: montserrat
import { montserrat } from "@/app/ui/fonts";

// style vars
const styleBorder_Temp = "border-2 border-solid border-blue-600";
const styleTitle = `${montserrat.className} text-xl font-bold antialiased`;

export default function ContextHeader() {
    return (
        <div className={styleBorder_Temp}>
        <h1 className={styleTitle}>Generador de Números para jugar al Lotto</h1>
        <p>Instrucciones:</p>
        </div>
    )
};