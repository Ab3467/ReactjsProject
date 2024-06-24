import './App.css';
import { useState, useEffect, useRef } from 'react';

function App() {
  const [count, setcount] = useState();
 const btnref = useRef();

  useEffect(() => {
    btnref.current.style.backgroundColor = "red"
  })
  

  return (
  <>
   <div className=" text-center flex justify-center">
     <button onClick={setcount(count+1)} ref={btnref}>count is {count}</button>
   </div>
  </>
  );
}

export default App;
