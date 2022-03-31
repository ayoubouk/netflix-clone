import React from 'react';
import './style/Responsive.css'
function Form(){
    return(
        <div className="input-group ">
                <input type="text" class="form-control " placeholder="Email address" style={{height:'59px'}}/>
                <div className="input-group-append">
               <button className="btn btn-danger w-100" type="submit" style={{width:'200px',backgroundColor:'#e50914',fontSize:'x-large'}}>Get Started</button>
              </div>
              </div>
    )
}
export default Form