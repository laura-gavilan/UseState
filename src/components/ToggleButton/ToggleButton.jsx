import { useState } from "react"
import "./ToggleButton.css"

export const ToggleButton = () => {
    const [showToggle, setShowToggle] = useState(true);

    const handleButton = () => {
        setShowToggle(!showToggle);
    };

    return (
        <>
        <button className="toggle-button" onClick={handleButton}>
            {showToggle ? "🌙" : "🌞"}
        </button>
        </>
    );
};