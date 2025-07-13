import { useState } from "react"
import "./TextBox.css"

export const TextBox = () => {
    const [text, setText] = useState("");

    return (
        <div className="text-box">
            <input type="text" onChange={(event) => {
                setText(event.target.value)
            }} />
            <p>{text}</p>
        </div>
    );
};