import './Header.css'
import {signOut} from 'firebase/auth'
import {auth} from "../firebase.ts";


export function Header() {
    function handleSignOut(){
        signOut(auth);
    }

    return (
        <>
            <header className="p-2 border-bottom d-flex justify-content-between align-items-center">

                <h1 className="m-0">To-do-App</h1>
                <button onClick={handleSignOut} className="btn btn-outline-primary btn-sm">Sign-Out</button>

            </header>
        </>
    );
}