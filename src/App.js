import "./App.css";
import { FacebookLoginButton } from "react-social-login-buttons";
import firebase from "./firebase";

function App() {
  const facebookLogin = () => {
    // フェイスブックログイン処理
    const provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithRedirect(provider);
  };
  const facebookLogout = () => {
    firebase.auth().signOut();
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
    </div>
  );
}

export default App;
