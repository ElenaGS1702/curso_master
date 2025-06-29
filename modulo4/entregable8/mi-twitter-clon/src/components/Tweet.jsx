import { useState } from "react";

const Tweet = ({ tweet, onLike }) => {

    return (
        <div className="tweet">
            <p className="text-tweet">{tweet.text}</p>
            <button className="btn-likes" onClick={() => onLike(tweet.id)}>
                ❤ {tweet.likes}
            </button>
        </div>
    );
};

export default Tweet;