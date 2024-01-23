import { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    const increase = () => setCount(count + 1);
    const decrease = () => setCount(count - 1);
    const reset = () => setCount(0);

    return (
        <div>
            <h2> {count} </h2>
            <div className="buttons-container">
                <button className="counter-button" onClick={increase}>Increase</button>
                <button className="counter-button" onClick={decrease}>Decrease</button>
                <button className="counter-button" onClick={reset}>Reset</button>
            </div>
        </div>
    );
}

export default Counter;

