import React, { useState ,useEffect} from "react"
import './App.css';
import Filter from "./Film/Filter";
import MovieList from "./Film/MovieList";
// import Filter from './Film/Filter'
// import MovieList from "./Film/MovieList";

function App(){

    const obj = [
      {id:1  ,title:"titanic",desc:"oeuaiofozefzo",posteUrl:"tab1",rate:"1"},
      {id:2  ,title:"batman",desc:"sdfsdfsfs",posteUrl:"tab2",rate:"2"  },
      { id:3  ,title:"superman",desc:"oqsdqdsq",posteUrl:"tab3",rate:"4" },
      { id:4  ,title:"dark",desc:"iopppmm",posteUrl:"tab3",rate:"5"}]
      const [movies, SetMovies] = useState(obj);
      const [input, setInput] = useState("");
     const [newMovie,setNewMovie]=useState({});
      
    
    useEffect(() => {
      console.log(movies);
    
          console.log("refresh")

          SetMovies (obj.filter(p =>  p.rate.includes(input)||p.title.includes(input)));

  
        



    }, [input])
    
// useEffect(() => {
//   return () => {
//   }
// }, [movies])
const submitHandler = (e) =>{e.preventDefault();
   let a = [...movies, newMovie];
   SetMovies(a);
   setNewMovie({id:"",title:"" ,desc:"",posterUrl:"",rate:""});
}
const deleteHandler= (id) => {
const deleteMovie=movies.filter(m=>m.id!==id) //function delete
console.log(deleteMovie)
console.log(id)

SetMovies(deleteMovie)
}

    return (
      <div className="container mt-5">

       {/* send send a function to filter compoments */}
       <Filter updateInput={setInput}/>
       <form onSubmit={ submitHandler} className="d-flex justify-content-between mt-2">
         <input type="Number"placeholder="id" value={newMovie.id} onChange={(e)=> {setNewMovie({...newMovie,id:e.target.value})}}/> 
         <input type="text" placeholder="title" value={newMovie.title} onChange={(e)=> {setNewMovie({...newMovie,title:e.target.value})}}/> 
         <input  type="text"placeholder="description" value={newMovie.desc}onChange={(e)=> {setNewMovie({...newMovie,desc:e.target.value})}}/>
         <input  type="text"placeholder="url"  value={newMovie.posteUrl} onChange={(e)=> {setNewMovie({...newMovie,posteUrl:e.target.value})}}/>
         <input  type="text"placeholder="rate"  value={newMovie.rate} onChange={(e)=> {setNewMovie({...newMovie,rate:e.target.value})}}/> 
        <button className="btn-outline-success" >add movie</button>
        
 


       </form>
        {/* send movielist to movie list components */}
        <MovieList movies={movies} deleteM={deleteHandler}/> 
        {/*  deleteM send function to movielist component*/}
         
      </div>
    );
    
    }
  

export default App
