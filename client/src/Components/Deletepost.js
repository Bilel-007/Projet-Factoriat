import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  deletePost as DeletepostAction,
  getPostById,
} from "../actions/postsActions";

const Deletepost = () => {
  const { postId } = useParams();
  const dispatch = useDispatch();
  const postInfo = useSelector((state) => state.post.postInfo);
  useEffect(() => {
    dispatch(getPostById(postId));
  }, [dispatch]);
  const postInfoLS = JSON.parse(localStorage.getItem("postInfo"));
  const nav = useNavigate();

  const delpost = (data) => {
    dispatch(DeletepostAction({ ...data, _id: postId }, nav));
  };

  return (
    <div>
      <article className="article">
        <header className="header">
          <div className="category">ARTICLE</div>
          <h1>
          {postInfoLS.title}
          </h1>
      <div className="meta">
        <span className="author"><span className="author-name">Publié {postInfoLS.date}</span></span>

        {/*<span className="pub-date">Publié 28, Avril 2021</span>*/}
      </div>
    </header>
    <div>
      <img className='article-img' src={postInfoLS.image} alt="Article" ALIGN='left'/>
    <p className="article-text" style={{color:'black'}}>{postInfoLS.content}</p>
      </div> 
      </article>
      <br/>
      <button
        onClick={() => delpost(postInfoLS._id)}
        className="btn btn-danger "style={{fontWeight:'bold',marginLeft:'70%',marginRight:'20px'}}
      >
        DELETE
      </button>
      <Link to="/Technoriat/Dashbord">
        <button className="btn btn-primary "style={{fontWeight:'bold'}}>
          CANCEL
        </button>
      </Link>
    </div>
  );
};

export default Deletepost;
