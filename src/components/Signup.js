import React, { useState } from 'react'
import { auth } from '../firebaseConfig';
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function Signup() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function handleSignup(event) {
        event.preventDefault()
        console.log(auth)
        console.log(email, password)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log(user)
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage)
                // ..
            });
    }

    return (
        <div>
            <h1>React Forms</h1>
            <form onSubmit={handleSignup}>
                <label>Enter your Email:
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <label>Enter your Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <input type="submit" />
            </form>
        </div>
    )
}
