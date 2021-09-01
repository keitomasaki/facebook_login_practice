import "./App.css";
import React, { useEffect } from "react";
import { FacebookLoginButton } from "react-social-login-buttons";
import firebase from "./firebase";

function App() {
  const facebookLogin = () => {
    // フェイスブックログイン処理
    const provider = new firebase.auth.FacebookAuthProvider();
    provider.addScope("email");
    provider.addScope("user_likes");
    provider.addScope("pages_show_list");
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
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
        var uid = user.uid;
        console.log(uid);
        console.log(user);
        // ...
      } else {
      }
    });
  };

  const initFirebaseAuth = () => {
    return new Promise((resolve) => {
      firebase.auth().onAuthStateChanged((user) => {
        // user オブジェクトを resolve
        resolve(user);
        console.log("unsubscribe");
        // 登録解除
        // unsubscribe();
      });
    });
  };

  useEffect(() => {
    async function getUserData() {
      const user = await initFirebaseAuth();
      // ログインしていれば中通る
      if (user) {
        console.log(user); // ユーザー情報が表示される
      }
      console.log("---------useEffect");
      await firebase.auth().onAuthStateChanged(async (user) => {
        if (user) {
          const { uid, displayName } = user;
          console.log(uid);
          console.log(displayName);
          return null;
        }
        console.log("---------useEffect after");
      });

      console.log("---------useEffect after22222");
    }
    getUserData();
  }, []);

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
      <button onClick={checkLoginUser}>ユーザを確認</button>
    </div>
  );
}

export default App;
