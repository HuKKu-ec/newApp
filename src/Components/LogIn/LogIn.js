import React, { useContext } from 'react'
import './LogIn.css'
import { FirebaseContext } from '../../store/Context'

function LogIn() {
    const { firebase } = useContext(FirebaseContext)
    const googleAuth=()=>{
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
  }).catch((error) => {
console.log(error);
  });

    }
    return (
        <div style= {{'text-align': 'center'}}>
        <button onClick={googleAuth}className="LoginBut"><p className="font-but">Login With Google Account</p></button>
        </div>
    )
}
export default LogIn
