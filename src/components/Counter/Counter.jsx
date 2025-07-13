import { useState } from "react"
import "./Counter.css"

export const Counter = () => {
    const [account, setAccount] = useState(0);

    return (
        <>
            <div className="counter">
                <h1>Simple counter: {account}</h1>
                <button onClick={() =>
                    setAccount(account + 1)}>Add</button>

                <button onClick={() =>
                    setAccount(account - 1)}>Subtract</button>

                <button onClick={() =>
                    setAccount(0)}>Reset</button>
            </div>
        </>
    );
};