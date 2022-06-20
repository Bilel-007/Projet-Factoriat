import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../actions/personActions";
import { getPosts } from "../actions/postsActions";

const Dashbordposts = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const logout = (e) => {
    e.preventDefault();
    dispatch(logoutAction());
  };

  // Affichage des posts : //
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  const { postList, loading } = useSelector((state) => state.post);

  // // Supprimer des posts : //
  // const delpost = (postId) => {
  //   dispatch(deletePost(postId));
  // };

  // // identifcation d'admin (exclusivement admin task) //
  // const { isAuth } = useSelector((state) => state.user);
  // useEffect(() => {
  //   if (!isAuth) nav("/Technoriat/Login");
  // }, [isAuth, nav]);

  const handleupdate = (el) => {
    // dispatch({type:'transfertdata',payload:el})
    nav(`/Technoriat/Dashbord/Updatepost/${el._id}`);
    localStorage.setItem("postInfo", JSON.stringify(el));
  };

  const handledelete = (el) => {
    // dispatch({type:'transfertdata',payload:el})
    nav(`/Technoriat/Dashbord/Deletepost/${el._id}`);
    localStorage.setItem("postInfo", JSON.stringify(el));
  };

  return (
    <div style={{paddingTop:'50px'}}>
      <div className="nav-side-menu">
    <div className="brand"><img
            className="logo-Technoriat"
            src={require("../styles/img/Logo Technoriat.png")}
            alt="Technoriat"
          /></div>
    <i className="fa fa-bars fa-2x toggle-btn" data-toggle="collapse" data-target="#menu-content" />
    <div className="menu-list">
      <ul id="menu-content" className="menu-content collapse out">
        <li>
          <a href="/Technoriat/AdminProfil">
          <i className="fa-solid fa-gauge fa-lg"></i> Dashboard
          </a>
        </li>
        <li>
          <a href="/Technoriat/Dashbord">
            <i className="fas fa-user-tie fa-lg" />Posts
          </a>
        </li>
        <li>
          <a href="/Technoriat/UsersList">
            <i className="fa fa-users fa-lg" /> &nbsp;Users
          </a>
        </li>
        <li>
      <a><i className="fa-solid fa-arrow-right-from-bracket"></i>&nbsp;<button
        onClick={logout}>
          &nbsp;Logout
      </button>
      </a>
          
        </li>
      </ul>
    </div>
    </div>
    <div className="dboard" style={{width:'75%',marginLeft: '20%',marginTop:'40px'}}>
    <Link to="/Technoriat/AdminProfil">
  <button className="btn btn-dark" style={{ fontWeight: "bold",marginLeft:'24px'}}>
  &#8249; BACK
  </button>
</Link>
<Link to="/Technoriat/Dashbord/Addnewpost">
  <button className="btn btn-success" style={{ fontWeight: "bold",marginLeft:'30%'}}>
    + ADD NEW POST
  </button>
</Link>

</div>
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
         
               </div>
             </header>
             <div>
               <img className='article-img' src={el.image} alt="Article" ALIGN='left'/>
             <p className="article-text" style={{color:'black'}}>{el.content}</p>
               </div> 
               <button className="btn btn-primary"onClick={() => handleupdate(el)} style={{ fontWeight: "bold",marginRight:'10px',marginLeft:'77%' }}>
            UPDATE</button>
                 
         <button className="btn btn-danger "
            onClick={() => handledelete(el)} style={{ fontWeight: "bold", }}>
            DELETE</button>
    
          
        </article>
        </>  
      ))}
     
    </div>
  );
};

export default Dashbordposts;
