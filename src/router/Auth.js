import React, { useState } from 'react';
import { authService } from 'fbase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';


const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [newAccount, setNewAccount] = useState(true);

    const [error, setError] = useState("");

    const onChange = (e) => {
        const { target: { name, value } } = e;
        if (name === "email") {
            setEmail(value);
        } else if (name === "password") {
            setPassword(value);
        }
    };

    const onSubmit = async(e) => {
        e.preventDefault();
        try {
            let data;
            if (newAccount) {
                // Create Account
                data = await createUserWithEmailAndPassword(
                    email,
                    password
                );
            } else {
                // Login
                data = await signInWithEmailAndPassword(
                    email,
                    password
                );
            }
            console.log(data);
        } catch (err) {
            setError(err.message);
        }
    };

    const toggleAccount = (e) => {
        setNewAccount((prev) => !prev);
    };

    return (
    <div>
        <form onSubmit={onSubmit}>
            <h1>login</h1>
            <input name="email" type="email" placeholder="이메일을 적어주세요" required value={email} onChange={onChange}/>
            <input name="password" type="password" placeholder="비밀번호를 적어주세요" required value={password} onChange={onChange}/>
            <input type="submit" value={newAccount ? "Create Account" : "Login"} />
            {error}
        </form>
            <span onClick={toggleAccount}>{newAccount? "log in": "ceate A"}</span>
        <div>
            
            <button>구글로그인</button>
            <button>깃허브로그인</button>
        </div>
    </div>
    )
}


export default Auth;