import "./App.css";
import { FacebookLoginButton } from "react-social-login-buttons";
import firebase from "./firebase";

function App() {
  const facebookLogin = () => {
    // フェイスブックログイン処理
    const provider = new firebase.auth.FacebookAuthProvider();
    firebase
      .auth()
      .signInWithRedirect(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        // var credential = result.credential;

        // The signed-in user info.
        var user = result.user;
        console.log(user);
        console.log("facebook login ");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const facebookLogout = () => {
    firebase.auth().signOut();
  };

  const checkLoginUser = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        var uid = user.uid;
        console.log(uid);
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  };

  const checkLoginStatus = () => {
    firebase.auth.getRedirectResult().then(
      function (result) {
        // The firebase.User instance:
        var user = result.user;
        console.log(user);
      },
      function (error) {
        console.log(error);
      }
    );
  };
  return (
    <div className="App">
      <FacebookLoginButton
        onClick={facebookLogin}
        align="center"
        iconSize={"20"}
        size={"40"}
      >
        <span style={{ fontSize: 16 }}>Facebookでログイン</span>
      </FacebookLoginButton>
      <button onClick={facebookLogout}>log out</button>
      <button onClick={checkLoginStatus}>ログイン状態を確認</button>
      <button onClick={checkLoginUser}>ユーザを確認</button>
    </div>
  );
}

export default App;
