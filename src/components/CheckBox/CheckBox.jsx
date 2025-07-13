import { useState } from "react"
import "./CheckBox.css"


export const CheckBox = () => {
    const [accept, setAccept] = useState(true);

    const handleChange = (event) =>
        setAccept(event.target.checked);

    return (
        <div className="checkbox">
            <input type="checkbox" onChange={(handleChange)}/>
            {accept ? "Accept": "No accept"}
        </div>
    );
};