import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TweetList from "../components/TweetList";
import TweetForm from "../components/TweetForm";

const Home = ({ user, logout }) => {
    const [tweets, setTweets] = useState([]);
    const navigate = useNavigate();;

    useEffect(() => {
        const storedTweets = localStorage.getItem("tweets");

        if(storedTweets){
            setTweets(JSON.parse(storedTweets) );
        }
    }, []);

    useEffect(() => {
        if(tweets.length > 0) {
            localStorage.setItem("tweets", JSON.stringify(tweets));
        }
    }, [tweets]);

    const addTweet = (text) => {
        const newTweet = {
            id: Date.now(),
            text,
            likes: 0,
        };

        setTweets([newTweet, ...tweets]);
    };

    const likeTweet = (id) => {
        setTweets(
            tweets.map((tweet) =>
                tweet.id === id ? { ...tweet, likes: tweet.likes + 1 } : tweet
            )
        );
    };

    return (
        <div className="home">
            <h1>Bienvenido a Twitter</h1>
            {user && (
                <div className="options">
                    <p className="welcome">Hola, {user}!</p>
                    <button className="btn-logout" onClick={() => {
                        navigate('/login');
                        logout()
                    }}>Cerrar sesión</button>
                </div>
            )}
            <TweetForm onAddTweet={addTweet} />
            <TweetList tweets={tweets} onLike={likeTweet} />
        </div>
    );
};

export default Home;