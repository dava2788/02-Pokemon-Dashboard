import { CartCounter } from "@/Shooping-cart";

export const metadata ={
    title: 'Counter Page',
    description : 'Simple Contador'
}

export default function CounterPage() {

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos en el Carrito</span>
      <CartCounter value={20}/>
    </div>
  );
}