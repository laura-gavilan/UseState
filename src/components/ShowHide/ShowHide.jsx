import { useState } from "react"
import "./ShowHide.css"

export const ShowHide = () => {
    const [showText, setShowText] = useState(false);

    const handleToggle = () => {
        setShowText(!showText);
    };

    return (
        <>
            <button className="show-hide-button" onClick={handleToggle}>
                {showText ? "Hide text" : "Show text"}
            </button>

            {showText && (
                <div>¡This is the text!</div>)}
        </>
    );
};