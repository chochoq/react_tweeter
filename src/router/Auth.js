import React,{ useState }  from 'react';


const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onChange = (e) => {
        const { target: { name, value } } = e;
        if (name === "email") {
            setEmail(value);
            console.log(email);
        } else if (name === "password") {
            setPassword(value);
        }
    };

    const onSubmit = (e) => {
        e.preventDefault();
    };

    return (
    <div>
        <form onSubmit={onSubmit}>
            <h1>login</h1>
            <input name="email" type="text" placeholder="이메일을 적어주세요" required value={email} onChange={onChange}/>
            <input name="password" type="password" placeholder="비밀번호를 적어주세요" required value={password} onChange={onChange}/>
            <input type="submit" value="Login" />
        </form>
        <div>
            <button>구글로그인</button>
            <button>깃허브로그인</button>
        </div>
    </div>
    )
}


export default Auth;