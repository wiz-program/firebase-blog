import React from 'react'
import { auth, provider } from '../firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import './Logout.css';

export default function Logout({ setIsAuth }) {
  const navigate = useNavigate();
  const logout = () => {
    // ログアウト
    signOut(auth)
      .then(() => {
        localStorage.clear();
        setIsAuth(false);
        navigate("/login");
      })
  };
  return (
    <div className="logoutPage">
      <div className="logoutContainer">
        <h1>ログアウト</h1>
        <p>ログアウトしますか？</p>
        <button className="logoutButton" onClick={logout}>
          <FontAwesomeIcon icon={faSignOutAlt} />
          ログアウト
        </button>
      </div>
    </div>
  )
}
