import './Header.css'
import {signOut} from 'firebase/auth'
import {auth} from "../firebase.ts";
import logo from "../assets/main.png"


export function Header() {
    function handleSignOut(){
        signOut(auth);
    }

    return (
        <>
            <header className="p-2 border-bottom d-flex justify-content-between align-items-center">

                <h1 className="align-items-center ">
                    <img src={logo} />To Do App</h1>
                <button onClick={handleSignOut} className="btn btn-sm">Sign-Out</button>

            </header>
        </>
    );
}