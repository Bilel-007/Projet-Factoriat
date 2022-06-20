import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../actions/postsActions";
import "../styles/JournalT.css";

const JournalT = () => {
  const dispatch = useDispatch();

  // Affichage des posts : //
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  const { postList, loading } = useSelector((state) => state.post);

  return (

    <body className="news">
     <h1 style={{backgroundColor:"#ffc80a",marginTop:30,fontWeight:900,fontSize:'35px',paddingLeft:'28%',paddingRight:'28%'}} >ACTUALITES DES ACTIVITES TECHNORIATE</h1> 
    <div className="news">
    
      {postList.map((el) => (
        <>
          <figure className="snip1529">
        <img style={{width:'400px',height:'200px'}}src={el.image} alt="Article" />
        <div className="date"><i class="fa-solid fa-newspaper"></i></div>
        <figcaption>
          <h3>{el.title}</h3>
          <p>{el.shorttext}</p>
        </figcaption>
        <div className="hover"><i className="ion-android-open" /></div>
        <a href="/Technoriat/Journal/description" />
      </figure>
          {/* <h8>{el.content}</h8> */}
          {/* <h8>{el.image}</h8>  */}
          
        </>
      ))}
      <div>
      <h3 style={{marginTop:40,color:'black',fontSize:16,marginBottom:20,width:'80%',marginLeft:'10%'}} >A travers cette platforme,Technoriate souhaite soutenir les chercheurs entrepreneurs pour vulgariser leurs résultats de recherche, partager leurs succès et exprimer leurs opinions. Nous sommes convaincus que la Technoriatie peut prendre une meilleure place dans le développement de la Tunisie.</h3>
      
    <a style={{marginLeft:'45%'}}href="/Technoriat/contact" className=" btn btn-warning btn-sm  " role="button" ariaDisabled="true">Contactez-nous</a>
    </div>
    </div>
    
    </body>
  );
};

export default JournalT;
