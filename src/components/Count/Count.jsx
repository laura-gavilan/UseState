import { useState } from "react"
import "./Count.css"

export const Count = () => {
    const [count, setCount] = useState(0);

    return (
        <div className="count">
            <h2>Counter: {count}</h2>

            <button onClick={() =>
                setCount(count + 1)}>
                    +1
            </button>
            
            <button onClick={() => 
                setCount(count - 1)}>
                    -1
            </button>
        </div>
    );
};