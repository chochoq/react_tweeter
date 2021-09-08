import React, { useState } from 'react';
import { dbService } from "fbase";


const Home = () => {
    const [tweet, setTweet] = useState("");


    const onSubmit = async(e) => {
        e.preventDefault();
        dbService.collection("tweets").add({
            tweet: tweet,
            createdAt: new Date(),
        });
        setTweet("");
    };
    const onChange = (e) => {
        const { target: { value } } = e;
        setTweet(value);
    };

    return (
    <div onSubmit={onSubmit}>
        <form>
            <input value={tweet} onChange={onChange} type="text" placeholder="당신의 생각을 알려주세요" maxLength={120} />
            <input type="submit" value="Tweet" />
        </form>
    </div>
    );
};

export default Home;