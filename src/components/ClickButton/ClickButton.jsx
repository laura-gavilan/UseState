import { useState } from "react"
import "./ClickButton.css"

export const ClickButton = () => {
    const [click, setClick] = useState("");

    return (
        <>
            <div className="click-button">
                <div>
                    <button onClick={() =>
                        setClick("Home")}>Home</button>

                    <button onClick={() =>
                        setClick("Profile")}>Profile</button>

                    <button onClick={() =>
                        setClick("Settings")}>Settings</button>
                </div>

                <div>
                    {click === "Home" && "Welcome home"}
                    {click === "Profile" && "This is your profile"}
                    {click === "Settings" && "This is your settings"}
                </div>
            </div>
        </>
    );
};