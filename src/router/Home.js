import React, { useState } from 'react';


const Home = () => {
    const [tweet, setTweet] = useState("");


    const onSubmit = (e) => {
        e.preventDefault();
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