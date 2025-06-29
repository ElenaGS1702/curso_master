import { useState } from "react";

const TweetForm = ({ onAddTweet }) => {
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!text.trim()) return;

        onAddTweet(text);
        setText("");

    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                className="input-tweet"
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="¿Qué estás pensando?"
            />

            <button className="btn-send-tweet" type="submit">Tweet</button>
        </form>
    );
};

export default TweetForm;