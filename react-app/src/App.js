import React, { useState, useMemo } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [otherCount, setOtherCount] = useState(0);

  // Expensive computation function
  const expensiveComputation = (num) => {
    console.log('Computing...');
    for (let i = 0; i < 1000000000; i++) {} // Simulate expensive computation
    return num * 2;
  };

  // Memoize the result of the expensive computation
  const memoizedValue = useMemo(() => expensiveComputation(count), [count]);

  return (
    <div className=" text-center m-5">
      <h1 className=' text-black font-semibold'>useMemo Example</h1>
      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)} className=' border border-black w-36 h-10 rounded-sm bg-gray-300 m-5 p-2' >Increment Count</button>
      </div>
      <div>
        <p>Other Count: {otherCount}</p>
        <button onClick={() => setOtherCount(otherCount + 1)}>Increment Other Count</button>
      </div>
      <div>
        <p>Memoized Value: {memoizedValue}</p>
      </div>
    </div>
  );
}

export default App;
