import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faHouse,
  faFilePen,
  faRightToBracket,
  faRightFromBracket,
 } from '@fortawesome/free-solid-svg-icons'

export default function Navbar({ isAuth }) {
  return (
    <nav>
      <Link to="/">
        <FontAwesomeIcon icon={faHouse} />
        ホーム
      </Link>
      {!isAuth ? (
        <Link to="/login">
          <FontAwesomeIcon icon={faRightFromBracket} />
          ログイン
        </Link>
      ) : (
        <>
        <Link to="/createpost">
        <FontAwesomeIcon icon={faFilePen} />
        記事投稿
      </Link>
        <Link to="/logout">
          <FontAwesomeIcon icon={faRightToBracket} />
          ログアウト
        </Link>
        </>
      )}
    </nav>
  )
}
