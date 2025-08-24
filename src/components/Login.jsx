import React from 'react'
import { auth, provider } from '../firebase';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import './Login.css';

export default function Login({ setIsAuth }) {
  const navigate = useNavigate();
  const loginWithGoogle = () => {
    // Googleでログイン
    signInWithPopup(auth, provider)
      .then((result) => {
        localStorage.setItem("isAuth", true);
        setIsAuth(true);
        navigate("/");
      })
  };
  return (
    <div className="loginPage">
      <div className="loginContainer">
        <h1>ログイン</h1>
        <p>ログインして記事を投稿しよう！</p>
        <button className="loginButton" onClick={loginWithGoogle}>
          <FontAwesomeIcon icon={faGoogle} />
          Googleでログイン
        </button>
      </div>
    </div>
  )
}
