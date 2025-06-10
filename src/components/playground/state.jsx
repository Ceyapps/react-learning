import { useState } from 'react';

/**
 * StatePlayground is a simple React functional component that demonstrates
 * the use of the useState hook for managing local component state.
 *
 * Features:
 * - Displays a count value.
 * - Provides a button to increment the count by one each time it is clicked.
 *
 * @component
 * @example
 * return (
 *   <StatePlayground />
 * )
 */
const StatePlayground = ()=> {
    const initialCount = 0;
    let [count, setCount] = useState(initialCount);

    /**
     * Increments the count state by 1.
     */
    const addOne = () => {
        setCount(count + 1);
    }

    const subtOne = () => {
        setCount(prevCount => prevCount - 1);
    }

    const resetCount = () => {
        setCount(initialCount);
    }

  return (
    <>
        <h3>Count is : {count}</h3>
        <button onClick={addOne}>Add One</button>
        <button onClick={subtOne}>Subtract One</button>
        <button onClick={resetCount}>Reset</button>
    </>
  );
}

export default StatePlayground;