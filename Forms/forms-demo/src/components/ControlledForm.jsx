import { useState } from "react";

export default function ControlledForm() {
    const [usernameValue, setUsernameValue] = useState('');
    // const [passwordValue, setPasswordValue] = useState('');

    function onChangeHandler(event) {
        if (event.target.value.length >= 8) event.target.style.color = 'red';
        else event.target.style.color = 'white';
        setUsernameValue(event.target.value)
    } 

    
    return (
        <>  
            <h1>LMAO</h1>

            <form>
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" placeholder="Write username.."/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input 
                        type="text" 
                        name="password" 
                        id="password" 
                        placeholder="Write password.."
                        value={usernameValue}
                        onChange={onChangeHandler}
                    />
                </div>
                <div>
                    <button>Register</button>
                </div>
            </form>
            
        </>
    );
}