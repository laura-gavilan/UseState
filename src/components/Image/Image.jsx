import { useState } from "react"

export const Image = () => {
    const [toggleImage, setToggleImage] = useState(true);

    const handleToggle = () => {
        setToggleImage(!toggleImage);
    };

    return (
        <div>
            <img src={toggleImage
                ? 'https://source.unsplash.com/random/200x150?sig=1'
                : 'https://source.unsplash.com/random/200x150?sig=2'}
                alt="Show images" />

            <button onClick={handleToggle}>
                Change image
            </button>
        </div>
    );
};