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
    let [count, setCount] = useState(0)

    /**
     * Increments the count state by 1.
     */
    const addOne = () => {
        setCount(count + 1);
    }

  return (
    <>
        <h3>Count is : {count}</h3>
        <button onClick={addOne}>Add One</button>
    </>
  );
}

export default StatePlayground;