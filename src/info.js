import Reaxt, { useEffect } from 'react';
import { infoFinal } from './video';
function Info(props){
    var infoFinal=props.infoFinal;
    return(
        infoFinal ?
        <div className='info row ' >
             <div className='col-md-6 col-5  text-center IteminfoImg' >
            <img className='infoImg' src={"https://image.tmdb.org/t/p/w185"+infoFinal.image} />
            </div>
            <div className='col-md-6 col-7 infoChild IteminfoImg'>
             <h1 className='bebasStyle colorRed title' style={{color:'#e50914'}} >{infoFinal.name || infoFinal.original_name}</h1>
             <h5 className='inline mr-3 bebasStyle fs25'>Movie</h5><span  >{infoFinal.date || infoFinal.original_date}</span><br></br>
             <h2 className='mt-3 inline fs25'>IMDb RATING :</h2>
             <i className='fa fa-2x fa-star text-warning ml-3 mr-2'></i>
             <span style={{fontSize:"25px"}}>{infoFinal.rating}</span><span>/10</span> <br></br>
             <h2 className='mt-3 inline fs25'>POPULARITY :</h2>
             <i className='fa fa-2x fa-arrow-right text-success rotation ml-3 mr-2'></i>
             <span style={{fontSize:"25px"}}>{infoFinal.popularity}</span>
             <h2 className='fs25'>Overview :</h2> 
             <p className='fs20' style={{color:'rgba(0,0,0,0.7',color:'#ddd'}}><i>{infoFinal.overview}</i></p>
            </div>
            </div> : <></>
            
    )
}
export default Info