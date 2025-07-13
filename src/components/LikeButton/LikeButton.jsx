import { useState } from "react"
import "./LikeButton.css"

export const LikeButton = () => {
    const [likes, setLikes] = useState(0);

    const handleClick = () => setLikes(likes + 1);

    return (
        <button className="likes-button"  onClick={(handleClick)}>
            Like {likes}
        </button>
    );
};