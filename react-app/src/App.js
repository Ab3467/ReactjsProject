import "./App.css";
import { useState, useEffect, useRef } from "react";

function App() {
  const [count, setCount] = useState(0); // Initialize count with 0
  const btnRef = useRef();

  useEffect(() => {
    btnRef.current.style.backgroundColor = "red";
  });

  return (
    <>
      <div className="text-center m-20">
        <button onClick={() => setCount(count + 1)} ref={btnRef} className=" rounded-full w-28 h-20 text-white">
          Count is {count}
        </button>
        <button onClick={()=>setCount(0)}>Reset</button>
      </div>
    </>
  );
}

export default App;
