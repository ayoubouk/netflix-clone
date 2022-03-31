import React from 'react';
function Question(props){
    var id="#"+props.id;
    return(
        <div>
        <button data-toggle='collapse' data-target={id} className='w-100 text-left mb-2' style={{height:'60px'}}>
        {props.title}
         </button><br></br>  
        <div id={props.id} className='collapse text-white text-left' style={{border:"2px solid #ddd"}}>
         {props.body}
        </div>
        </div>
    )
}
export default Question



