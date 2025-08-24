import  { React, useState, useEffect } from 'react'
import './CreatePost.css';
import { addDoc, collection } from 'firebase/firestore';
import { db, auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

export default function CreatePost({ isAuth }) {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");

  const createPost = async () => {
    await addDoc(collection(db, "posts"), {
      title: title,
      postText: postText,
      author: {
        username: auth.currentUser.displayName,
        id: auth.currentUser.uid,
      },
    })
    navigate("/")
  }

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, []);

  return (
    <div className='createPostPage'>
      <div className="postContainer">
        <h1>記事を投稿する</h1>
        <div className="inputPost">
          <div>タイトル</div>
          <input type="text" placeholder='タイトルを入力してください' onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="inputPost textarea">
          <div>投稿</div>
          <textarea placeholder='投稿内容を入力してください' onChange={(e) => setPostText(e.target.value)} />
        </div>
        <button className='postButton' onClick={createPost}>投稿する</button>
      </div>
    </div>
  )
}
