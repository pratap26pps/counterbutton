import React, { useState } from "react" 

export default function App() { 
  
const[count,setCount]=useState(0);

 function increamentfunction(){
    setCount(count+1);

 }
 function decreamentfunction(){
  setCount(count-1);
}
function reset(){
  setCount(0);
}

  return ( 
  <div className="w-screen h-screen p-9 flex items-center flex-col gap-6 justify-center  bg-slate-700 ">
    <div className="text-3xl font-bold underline text-[#0398d4]">
    INCREAMENT AND DECREAMENT
    </div>
    <div className=" flex bg-slate-50 p-3 h-23 w-76 justify-center gap-4  ">
    <button className="font-bold  p-2 border-r-2 text-3xl border-[#bfbfbf]" onClick={increamentfunction } >
      +
    </button>
    <div className="font-bold  p-4 text-5xl ">
       {count}
    </div>
    <button  className="font-bold p-2 border-l-2 text-4xl border-[#bfbfbf]  " onClick={decreamentfunction}>
      -
    </button>
</div>
    <button className="font-bold h-14 w-30 p-4 bg-red-600 rounded-sm text-lg" onClick={reset}>Reset</button>

</div>

  )}