import React from 'react'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../actions/postsActions";
import "../styles/JournalC.css"

const JournalC = () => {
const dispatch = useDispatch();

// Affichage des posts : //
useEffect(() => {
  dispatch(getPosts());
}, [dispatch]);
const { postList, loading } = useSelector((state) => state.post);



  return (
      <div>
          <h1 style={{backgroundColor:"#ffc80a",marginTop:40}}>
            ACTUALITES DES ACTIVITES TECHNORIATE
          </h1>

      {postList.map((el) => (
          <>
<article className="article">
        <header className="header">
          <div className="category">ARTICLE</div>
          <h1>
          {el.title}
          </h1>
      <div className="meta">
        <span className="author"><span className="author-name">Publié {el.date}</span></span>

        {/*<span className="pub-date">Publié 28, Avril 2021</span>*/}
      </div>
    </header>
    <div>
      <img className='article-img' src={el.image} alt="Article" ALIGN='left'/>
    <p className="article-text" style={{color:'black'}}>{el.content}</p>
      </div> 
      </article>
      </>    
))}
</div>
  );
  }

export default JournalC