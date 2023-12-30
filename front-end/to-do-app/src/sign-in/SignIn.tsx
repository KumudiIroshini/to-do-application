import './SignIn.css'
import {auth} from "../firebase.ts";
import {signInWithPopup, GoogleAuthProvider} from "firebase/auth";


export function SignIn() {

    function handleSignIn(){
        signInWithPopup(auth, new GoogleAuthProvider());
    }

    return (
        <>
            <div className="d-flex vh-100 flex-column align-items-center justify-content-center gap-2">
                <h1>Welcome to To-do App</h1>
                <button className="btn btn-primary " onClick={handleSignIn}>
                    <i className="bi bi-google pe-2"></i>
                    Sign In With Google</button>

            </div>

        </>
    );
}