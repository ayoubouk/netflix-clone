import React,{useRef, useState,createContext,useEffect} from 'react'
import Video from './video'
import Info from './info'

export var x1;
export const Data1=createContext();
function Film(){
    const [data,setname]=useState({});
    const pntInfo=useRef();
   x1=pntInfo;
   useEffect(()=>{
    console.log("infofinal data",data);
    
   },[data])  
    return(
        <Data1.Provider value={setname}>
        <div style={{backgroundColor:'rgb(20,20,20)',color:'white'}} className=''>
              <h2 className='ml-4 pt-3 mb-3'>Trending Movies Of The Week</h2> 
              <Video Key="6" url="https://api.themoviedb.org/3/trending/serie/week?api_key=d6b49a6b9b4713d97accba2cdaf07abf"/>
              
              <h2 className='ml-4 pt-3 mb-3'>Trending Movies Of The Day</h2> 
              <Video Key="7" url="https://api.themoviedb.org/3/trending/serie/day?api_key=d6b49a6b9b4713d97accba2cdaf07abf"/>
              
              <div className='info-main hide' ref={pntInfo}>
             <div className='info-body'>
             <a style={{zIndex:"2"}}  className='mr-3 mt-2' onClick={()=>{pntInfo.current.className=(x1.current.className.split(" ")[0])+" hide";console.log(pntInfo.current.className); }}>X</a>
             
             <Info infoFinal={data}/>
         </div>
         </div>
        </div>
        </Data1.Provider>
    )
    
}
export default Film