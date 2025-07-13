import { useState } from "react"
import "./ChangeColor.css"


export const ChangeColor = () => {
    const [color, setColor] = useState(true);

    const handleToggle = () => {
        setColor(!color);
    };

    return (
        <div className={`change-color ${color ? 'blue' : 'yellow'}`}>
            <button onClick={handleToggle}>
                Change color
            </button>

            <p>The color is: {color ? "Blue" : "Yellow"}</p>
        </div>
    );
};