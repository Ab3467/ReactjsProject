import "./App.css";
import { useState, useEffect, useRef } from "react";

function App() {
  const [count, setCount] = useState(0); // Initialize count with 0
  const btnRef = useRef();

  useEffect(() => {
    btnRef.current.style.backgroundColor = "blue";
  });

  return (
    <>
      <div className="text-center m-20">
        <h2 className=" text-black font-serif font-bold text-4xl m-4">Count Me</h2>
        <button onClick={() => setCount(count + 1)} ref={btnRef} className=" rounded-full w-28 h-10 text-white">
          Count is {count}
        </button>
        <button onClick={()=>setCount(0)} className="rounded-full w-28 h-10 border border-black m-4">Reset</button>
      </div>
    </>
  );
}

export default App;
