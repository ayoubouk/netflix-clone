import React,{useState,useEffect} from 'react'
import './style/Responsive.css'
import Youtube from './trailerYoutube';

import {NavLink,BrowserRouter,Routes,Route,Outlet} from 'react-router-dom'
import HomeALL from './HomeaLL';


const  imgSeries=[
    {
        name:"the last kingdom",
        img:"https://c4.wallpaperflare.com/wallpaper/254/582/446/the-last-kingdom-tv-series-tv-alexander-dreymon-hd-wallpaper-preview.jpg"
    },
    {
        name:"game of throns",
        img:"https://wallpapers.justgeek.fr/web/wallpapers/le-trone-de-fer-game-of-thrones-155992551443/thumbnail/lg.jpg"
    },
    {
        name:'Spider-Man: No Way Home',
        img:"https://h3f6a6h4.rocketcdn.me/wp-content/uploads/2021/12/Spider-Man-No-Way-Home-Trailer-Turned-Into-Epic-Multiverse-Poster-Art.jpg"
    },
    {
       name:'Turning Red' ,
        img:"https://wallpaperaccess.com/full/7563782.jpg"
    },
    {
        name:'The Adam Project',
        img:"https://m.media-amazon.com/images/M/MV5BY2U1NjdmMDktNmU3OC00ZTE4LTlmYmYtMzAwYzY2ZTNhYzA0XkEyXkFqcGdeQXVyODExNTExMTM@._V1_.jpg"
    },{
        name:'The Batman',
        img:"https://wallpaperaccess.com/full/197280.jpg"
    },{
        name:'Deep Water',
        img:"https://m.media-amazon.com/images/M/MV5BOWU2MWIyMGUtMDhmNC00NWY0LTg1ZTYtMTRjM2VkNDcwODJhXkEyXkFqcGdeQXVyMDU5MDEyMA@@._V1_.jpg"
    },{
        name:'Svart krabba',
        img:"https://www.cinemaclock.com/images/580x326/72/black-crab-20225174.jpg"
    },{
        name:'Scream',
        img:"https://www.tomsguide.fr/content/uploads/sites/2/2021/11/scream-1-toms.jpg"
    },{
        name:'Nightmare Alley',
        img:"https://culturellementvotre.fr/wp-content/uploads/2022/01/nightmare-alley-slider.jpg"
    },{
        name:'Dog',
        img:"https://www.dailyherald.com/storyimage/DA/20220217/ENTLIFE/220219297/AR/0/AR-220219297.jpg&updated=202202171454&MaxW=900&maxH=900&noborder&Q=80"
    },{
        name:"The King's Man",
        img:"https://s1.dmcdn.net/v/Qa0Mw1TaPiXJm0cB7/x1080"
    },{
        name:'West Side Story',
        img:"https://cdn.radiofrance.fr/s3/cruiser-production/2021/11/d737310c-1363-4d9d-b91c-fda59ce6704a/1200x680_west_side_story_de_steven_spielberg_c_2021_20th_century_studios.jpg"
    },{
        name:'Blacklight',
        img:"https://i0.wp.com/ziadanworld.com/wp-content/uploads/2022/02/Blacklight.jpeg"
    },{
        name:'Encanto',
        img:"https://i.ytimg.com/vi/lIlh-7HReBQ/maxresdefault.jpg"
    },{
        name:'Euphoria',
        img:"https://universnews.tn/wp-content/uploads/2022/03/p16805962_b_h9_aa.jpg"
    },{
        name:'進撃の巨人',
        img:"https://contents.oricon.co.jp/cdn-cgi/image/width=750,quality=85,format=auto/upimg/news/20211216/2217529_202112160523489001639619023e.jpg"
    },{
        name:'Uncharted',
        img:"https://gmedia.playstation.com/is/image/SIEPDC/uncharted-hub-listing-thumb-en-16aug21?$facebook$"
    },{
        name:'Eternals',
        img:"https://www.mjtnews.com/wp-content/uploads/2021/11/eternals-film.jpeg"
    },{
        name:'The Walking Dead',
        img:"https://cdn2.daily-movies.ch/wp-content/uploads/2022/02/The-Walking-Dead-5.jpg"
    },{
        name:'Cheaper by the Dozen',
        img:"https://static.digit.in/OTT/v2/images/tr:w-1200/cheaper-by-the-dozen-78153jpg"
    }
];

// https://api.themoviedb.org/3/movie/550?api_key=d6b49a6b9b4713d97accba2cdaf07abf&sort_by=popularity.desc
// https://api.themoviedb.org/3/discover/movie?api_key=d6b49a6b9b4713d97accba2cdaf07abf&sort_by=popularity.desc/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg
// https://image.tmdb.org/t/p/w185/7cVU1viAbQqzIiVir5L8HTghOpL.jpg


// api 1   What are the most popular movies?
//https://api.themoviedb.org/3/discover/movie?api_key=d6b49a6b9b4713d97accba2cdaf07abf&sort_by=popularity.desc
// api 2   What are the highest rated movies rated R?
//  http://api.themoviedb.org/3/discover/movie?api_key=d6b49a6b9b4713d97accba2cdaf07abf&certification_country=US&certification=R&sort_by=vote_average.desc
// api 3   What are the most popular kids movies?
//http://api.themoviedb.org/3/discover/movie?api_key=d6b49a6b9b4713d97accba2cdaf07abf&certification_country=US&certification=R&sort_by=vote_average.desc
// api 4 What are the most popular kids movies?
// http://api.themoviedb.org/3/discover/movie?api_key=d6b49a6b9b4713d97accba2cdaf07abf&certification_country=US&certification.lte=G&sort_by=popularity.desc
// api 5  trending all
//https://api.themoviedb.org/3/trending/all/day?api_key=d6b49a6b9b4713d97accba2cdaf07abf

//api 6 trending peronne
//https://api.themoviedb.org/3/trending/person/day?api_key=d6b49a6b9b4713d97accba2cdaf07abf
// api 7 trending film week
//https://api.themoviedb.org/3/trending/movie/week?api_key=d6b49a6b9b4713d97accba2cdaf07abf
 //for trailer  video
// https://api.themoviedb.org/3/movie/157336?api_key=d6b49a6b9b4713d97accba2cdaf07abf&append_to_response=videos
function Home(){
    
    const [imgSerie,setimgSerie]=useState([]);
    useEffect(()=>{
        setimgSerie(imgSeries);
    })
  
    return(
        <div className="carousel slide" data-ride="carousel" style={{position:'relative'}}>
       {/* navbar */}
        <nav  style={{position:'absolute',top:'0',zIndex:"2",width:"100%",backgroundColor:'rgba(0,0,0,0.2)'}}>
            <ul className="nav container-sm " style={{alignItems:'center'}}>
                <li className="nav-item "><NavLink to='../' className='nav-link LOGO1'>NETFLIX</NavLink></li>
                <li className="nav-item"><NavLink to='/home' className='nav-link text-white fs13'>Home</NavLink></li>
                <li className="nav-item"><NavLink to='/home/films' className='nav-link text-white fs13'> Movies</NavLink></li>
                <li className="nav-item"><NavLink to='/home/serie' className='nav-link text-white fs13'>Series</NavLink></li>     
                <li className="nav-item"><NavLink to='/home/mylist' className='nav-link text-white fs13'>My List</NavLink></li>
            </ul>

        </nav>
        

         <div  className="carousel-inner">  
          {/* slide initialisation */}
         <div className="carousel-item active">
        <div className='bebasStyle' style={{height:'500px',backgroundPosition:'inherit',backgroundAttachment:'fixed',backgroundSize:'cover',backgroundImage:"url('https://wallpapers.justgeek.fr/web/wallpapers/le-trone-de-fer-game-of-thrones-155992551443/thumbnail/lg.jpg')"}}> 
        <div className="w-100 h-100 pt-5" style={{backgroundColor:'rgba(0,0,0,0.5)'}}>
            <section className="text-white  h-50 mt-5 pl-3 " > 
           
                <img src='https://cdn.icon-icons.com/icons2/2699/PNG/128/netflix_logo_icon_170919.png' style={{height:'50px'}} />
                <span>Séries</span>
                <h1 className="w-100 TITLE ml-2" style={{lineHeight:'2'}}>GAME OF THRONS</h1>
                <button className="pr-3 ml-3 Mybtn"><i className='btn fa fa-play fa-2x '> </i> Play</button>
                <button className="ml-3 pr-3 Mybtn"> <i className='btn fa fa-info fa-2x '></i>More Info</button>
            
            </section>
        </div> 
        </div>
        </div>
          {/* slider */}
        

         {
         imgSeries.map((e)=>       
        ( <div className="carousel-item ">
         <div className='bebasStyle'  style={{height:'500px',backgroundPosition:'inherit',backgroundAttachment:'fixed',backgroundSize:'cover',
         backgroundImage:`url(${e.img})`}}> 
         <div className="w-100 h-100 pt-5" style={{backgroundColor:'rgba(0,0,0,0.5)'}}>
             <section className="text-white w-100 h-50 mt-5 pl-3" > 
                 <img src="https://cdn.icon-icons.com/icons2/2699/PNG/128/netflix_logo_icon_170919.png" style={{height:'50px'}} />
                 
                 <span>Séries</span>
                 <h1 className="w-100 TITLE ml-2" style={{lineHeight:'2'}}>{e.name}</h1>
                 <button className="pr-3 ml-3 Mybtn"><i className='btn fa fa-play fa-2x '  > </i> Play</button>
                 <button className="ml-3 pr-3 Mybtn"> <i className='btn fa fa-info fa-2x '></i>More Info</button>         
             </section>
         </div> 
         </div>
         </div> )
         )
         
         }
        </div>
         
       
         <Outlet/>
         
    
        </div>
    )
}
export default Home