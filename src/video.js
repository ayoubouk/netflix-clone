import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Youtube from './trailerYoutube';

import {x} from './HomeaLL';
import {x1} from './films';
import { Data } from './HomeaLL';
import {Data1} from './films'
var scrollAmount=0;
var scrollPerClick=200;

export var infoFinal={
    id:"",
   image:"",
   name:"",
   original_name:"",
   date:"",
   original_date:"",
   rating:"",
   popularity:"",
   overview:""
};

function Video(props){
    console.log(props.name);
    var KEY=props.Key;
    const [data,setdata]=useState([]);
    const [numId,setnumId]=useState('');
    const [info,setinfo]=useState({
                     id:"",
                    image:"",
                    name:"",
                    original_name:"",
                    date:"",
                    original_date:"",
                    rating:"",
                    popularity:"",
                    overview:""
    });

    
    
    
    useEffect(
        ()=>{
            console.log("data fetched");
            axios.get(props.url).then((res)=>
              {console.table(numId);
              
            setdata(res.data.results)
            })
        },[numId]
    )
    const clickNext=()=>{  
        var x=document.querySelector(".imgStyleHome"+props.Key);
        if(scrollAmount<=x.scrollWidth - x.clientWidth){
            x.scrollTo({
                top:0,
                left:(scrollAmount+=scrollPerClick),
                 behavior:'smooth'
            })
        }
        
      }

      var clickAvant=()=>{      
        var x=document.querySelector(".imgStyleHome"+props.Key);
      x.scrollTo({
          top:0,
          left:(scrollAmount-=scrollPerClick),
          behavior:'smooth'
      })
      if(scrollAmount<0){
        scrollAmount=0
      }
    }
     const YoutubePlay=()=>{
          console.log("numId")
     }
    return(
        <Data1.Consumer>
            {(d)=>
        <Data.Consumer>
            {
                (dd)=>
                <section>
                <div className='d-flex' style={{position:'relative'}}>
                <div className='h-100' style={{position:'absolute',left:'0',zIndex:'3'}}>
                    <button  className='h-100 avant' onClick={clickAvant}><i className='fa fa-2x fa-solid fa-chevron-left'></i></button> 
                </div>
                {console.log(props.url,props.Key)}
                <div   className={"d-flex imgStyleHome imgStyleHome"+props.Key}>
                 
                {
                    data.map((e)=>
                         <div className='imgStyleBody' >
                        { props.Key!=="5" ?
                        ( (e.poster_path || e.name) &&
                        <img  key={e.index} className='imgStyle mr-1' src={"https://image.tmdb.org/t/p/w185"+(e.poster_path || e.name)} width='204px' height='243px'></img>
                        ):( e.profile_path &&
                       <img key={e.index} className='imgStyle mr-1' src={"https://image.tmdb.org/t/p/w185"+e.profile_path} width='204px' height='243px'></img>
                            )    
                    } 
                        <div className='imgStyleTitle'>
                       <div className='bebasStyle'  style={{fontSize:"20px"}}><i>{e.title || e.name}</i></div> 
                       <div>
                       <a onClick={()=>{setnumId(e.id)}}  className='text-white '><i className='play fa fa-play fa-2x mr-3'></i></a>
                       <a  className='text-white pointer' 
                       onClick={()=>{
                          
                        if(KEY!=="5"){ 
                        dd && (x.current.className=(x.current.className.split(" ")[0])+" show")  
                        d && (x1.current.className=(x1.current.className.split(" ")[0])+" show");           
                      
                        
                            
                        dd && dd({
                            id:e.id,
                            image:e.poster_path,
                            name:e.title,
                            original_name:e.original_name,
                            date:e.release_date,
                            original_date:e.first_air_date,
                            rating:e.vote_average,
                            popularity:e.popularity,
                            overview:e.overview,
                            
                        });

                        d && d({
                            id:e.id,
                            image:e.poster_path,
                            name:e.title,
                            original_name:e.original_name,
                            date:e.release_date,
                            original_date:e.first_air_date,
                            rating:e.vote_average,
                            popularity:e.popularity,
                            overview:e.overview,
                            
                        });
                    }
                       }} >
                        <i className='fa fa-info fa-2x'></i></a>
                       </div> 
                        </div>
                        </div>
                    )
                }   
                </div>
        
                     <div className='h-100' style={{position:'absolute',right:'0'}}>
                     <button  className='h-100 next' onClick={clickNext}> <i className='fa fa-2x fa-solid fa-chevron-right'></i></button> 
                     </div>             
                     </div>
                     
                    <Youtube  id={numId}/>
          
                    </section>
            }
        
            </Data.Consumer>
           }
            </Data1.Consumer>
    )
}
export default Video;

