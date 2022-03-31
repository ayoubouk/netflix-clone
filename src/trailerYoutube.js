import React,{useState} from 'react';
import axios from 'axios';


function Youtube(props){
    const [id,setid]=useState('');
    console.log("this is youtube",props.id);
    const url="https://api.themoviedb.org/3/movie/"+props.id+"?api_key=d6b49a6b9b4713d97accba2cdaf07abf&append_to_response=videos"
    axios.get(url).then((res)=>{console.log("result youtube",res.data.videos.results[0].key);setid(res.data.videos.results[0].key)}).catch(()=>{
        console.log("something wrong")
    })
    return(
         
       props.id ? (<iframe className="YoutebTrailer"  height="315" src={"https://www.youtube.com/embed/"+id} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>) :<div></div>
           
    )
}
export default Youtube 