import React,{useRef,useState,useEffect,createContext} from 'react';
import Video from './video' 
import Info from './info';
import {infoFinal} from './video'

export var x;
export const Data=createContext()
function HomeALL(){
    
   const pntInfo=useRef();
   x=pntInfo;
   const [name,setname]=useState({});
     
   
  
    
    return(
        <Data.Provider value={setname}>
        <div style={{backgroundColor:'rgb(20,20,20)',color:'white',position:'relative'}} className=''>
        <h2 className='ml-4 pt-3 mb-3'> Most Popular Movies</h2>
        <Video   Key="1" url="https://api.themoviedb.org/3/discover/movie?api_key=d6b49a6b9b4713d97accba2cdaf07abf&sort_by=popularity.desc"/>
          
        <h2 className='ml-4 pt-3 mb-3'>Trending</h2>   
        <Video  Key="2" url="https://api.themoviedb.org/3/trending/all/day?api_key=d6b49a6b9b4713d97accba2cdaf07abf"/>
        
        <h2 className='ml-4 pt-3 mb-3'>Most Popular Kids Movie</h2>
        <Video    Key="3" url="http://api.themoviedb.org/3/discover/movie?api_key=d6b49a6b9b4713d97accba2cdaf07abf&certification_country=US&certification.lte=G&sort_by=popularity.desc"/>      

        <h2 className='ml-4 pt-3 mb-3'>The Highest Rated Movies </h2>
        <Video  Key="4" url=" http://api.themoviedb.org/3/discover/movie?api_key=d6b49a6b9b4713d97accba2cdaf07abf&certification_country=US&certification=R&sort_by=vote_average.desc"/>

        <h2 className='ml-4 pt-3 mb-3'>Trending Personne</h2>
        <Video  Key="5" url="https://api.themoviedb.org/3/trending/person/day?api_key=d6b49a6b9b4713d97accba2cdaf07abf"/>
        
         <div className='info-main hide' ref={pntInfo}>
         <div className='info-body'>
             <a  className='mr-3 mt-2' onClick={()=>{pntInfo.current.className=(x.current.className.split(" ")[0])+" hide";console.log(pntInfo.current.className); }}>X</a>
             
             <Info infoFinal={name}/>
         </div>
         </div>

    </div> 
    </Data.Provider>
    )
}

export default HomeALL;


