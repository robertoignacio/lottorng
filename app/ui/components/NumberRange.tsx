
// style vars visual reference
// const styleBorder_Temp = "";
const styleBorder_Temp1 = "border-2 border-solid border-orange-600 my-4 py-2";
const styleBorder_Temp2 = "border-2 border-solid border-orange-600";
const styleText01 = "text-xs font-normal antialiased";
const styleButtonAddSub = "border-2 border-solid border-white bg-black box-content text-2xl font-bold text-white antialiased";

export default function NumberRange() {
    return (
        <div className={styleBorder_Temp1}>
        <div className="flex justify-around">
          <div className={styleBorder_Temp2}>
            <p className={styleText01}>rango inferior</p>
            <div className="flex flex-col">
            <button className={styleButtonAddSub}>+</button>
            <button className={styleButtonAddSub}>-</button>
            </div>
          </div>
          <div className="border-2 border-solid border-orange-600">
          <p className={styleText01}>rango superior</p>
          </div>          
        </div>
      </div>
    )
};