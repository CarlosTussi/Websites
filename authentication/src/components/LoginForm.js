import { useState } from "react";

function LoginForm()
{
    const [email, setEmail] = useState();
    const [ password, setPassword] = useState();

    const handleSubmit = (e) =>{
        e.preventDefault();
        //TO-DO
    }


    return(
        <form onSubmit={handleSubmit}>
            <div className="mail-password-forgot">
                <input 
                    type="email"
                    id="email"
                    required
                    placeholder="youremail@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input 
                    type="password"
                    id="password"
                    placeholder="your password"
                    required
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}
                />
                <a>Forgot your password?</a>
            </div>
            <button type="submit">Login</button>     
            <div><p>No account?</p><a>Register</a></div>       
        </form>
    )
}

export default LoginForm;