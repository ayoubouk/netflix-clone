import React from 'react'
import Question from './question'
import Form from './formbtn'
import Signin from './sign-in'

function Main(){

    const data=[{id:"demo0",title:" What is Netflix ?",body:"Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!"},
    {id:"demo1",title:"How much does Netflix cost ?",body:"Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from MAD65 to MAD125 a month. No extra costs, no contracts."},
    {id:"demo2",title:"Where can I watch ?",body:"Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."},
    {id:"demo3",title:"How do I cancel ?",body:"Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."},
    {id:"demo4",title:"What's can I watch on netflix ?",body:"Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."},
    {id:"demo5",title:"Is Netflix goof for kids ?",body:"The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."}]
return(
    <div className='' style={{fontFamily:''}} > 
        <div className="bg-netflex " >
            {/* nav */}
            <div className='bg-netflex-dark  h-100 pt-0'>
            <div className='  container w-70 container-netflex mx-auto '>
            <span className="LOGO pt-4">NETFLIX</span>
            <div className='sign-in pt-4'>
            <div class="dropdown">
            <button type="button" class="btn  dropdown-toggle dropdown-btn" data-toggle="dropdown">
             English
            </button>
            <div class="dropdown-menu">
            <a class="dropdown-item" href="#">Francais</a>
            </div>
             </div>
                <a href="/home" className="btn btn-danger sign-in-btn ml-3">Home</a>
            </div>
            </div>
            {/*   */}
            <div className='bg-netflex-body text-center text-white'>
                <h1 ><b>Unlimited movies, TV shows, and more.</b></h1>
                <h3>Watch anywhere. Cancel anytime.</h3>
                <h5 style={{lineHeight:"2"}}>Ready to watch? Enter your email to create or restart your membership.</h5>
            <Form/>
            </div>
            </div>
            
           
        </div>
        {/*  */}
        <div className='row mt-1 rowItem'  >
            <section className='col-md-6 text-white my-auto pl-5'>
                <h1 className='w-54' style={{lineHeight:"2"}}><b>Enjoy on your TV.</b></h1>
                <p className='w-75 rowItem-p'><b>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</b></p>
            </section>
            <section className='col-md-6 my-auto'>   
               <video  autoPlay playsInline muted loop className='video'>
                   <source src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v' type='video/mp4'></source>
               </video>  
            </section>
         </div>
          {/*  */}
        <div className='row mt-1 rowItem'  >
            <section className='col-md-6 my-auto pl-5'>   
               <img src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg' height="400px" className='img'/> 
            </section>
            <section className='col-md-6 text-white my-auto'>
                <h1 className='w-95 w-53' ><b>Download your shows to watch offline.</b></h1>
                <p className='w-75 rowItem-p'><b>Save your favorites easily and always have something to watch.</b></p>
            </section>
         </div>
          {/*  */}
        <div className='row mt-1 rowItem' >
            <section className='col-md-6  text-white my-auto pl-5'>
                <h1 className='w-54' style={{lineHeight:"2"}}><b>Watch everywhere.</b></h1>
                <p className='w-75 rowItem-p'><b>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.</b></p>
            </section>
            <section className='col-md-6 my-auto'>   
               <video  autoPlay playsInline muted loop className='video'>
                   <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v" type='video/mp4'></source>
               </video>  
            </section>
         </div>
          {/*  */}
        <div className='row mt-1 rowItem ' style={{height:"110vh"}} >
            <section className='col-md-6 my-auto'>   
               <img src="https://occ-0-56-55.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABdFTpLmANuJpYneLq8L5m7CunMCi8e8Nl4y7xaPVWzG3IeoDoq17egTQAthApKg_4sdRWdwuR8KadWu1frjL3JQImpwq.png?r=fcd" className='img'/>
            </section>
            <section className='col-md-6  text-white my-auto pl-5'>
                <h1 className='rowItem-h1' ><b>Create profiles for kids.</b></h1>
                <p className=' w-100 rowItem-p'><b>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</b></p>
            </section>
         </div>
            {/*  */}
            
            <div className='mt-1 w-100'  style={{backgroundColor:"black" }}>
             {console.table(data)}
            <section className='col-8  text-white mx-auto text-center pb-3'>
                <h1 className='rowItem-h1' ><b>Frequently Asked Questions</b></h1> 
                {   
                  data.map((res)=><Question  id={res.id} title={res.title} body={res.body}/>)        
                    }
                <h5 style={{lineHeight:"2"}} >Ready to watch? Enter your email to create or restart your membership.</h5>
              <Form/>
            </section>
         </div>
         
    </div>
)
}
export default Main