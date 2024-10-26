import './Body1.css'
import YAA from './photos/yaa.png'
import YAB from './photos/yab.png'
import YAC from './photos/yac.png'
import MBG from './photos/mbg.mp4'
import DOT from  './photos/Dot.png'
import LOG1 from  './photos/log1.png'
import LOG2 from  './photos/log2.png'
import LOG3 from  './photos/log3.png'
import apple from  './photos/apple.png'
import android from  './photos/android.png'
import kotlin from  './photos/kotlin.png'
import ionic from  './photos/ionic.png'
import LOG4 from  './photos/log4.png'
import LOG5 from  './photos/log5.png'
import LOG11 from  './photos/log11.svg'
import LOG12 from  './photos/log12.svg'
import LOG13 from  './photos/log13.svg'
import LOG14 from  './photos/log14.svg'
import LOG15 from  './photos/log15.svg'
import robo from './photos/robo.png'
import sirisia from './photos/sirisia.png'
import wp from './photos/whatsapp.png'
import gm from './photos/gmail.png'
import call from './photos/call.svg'
import whtsp from './photos/whtsp.png'
import loc from './photos/location.png'
import phn from './photos/phone-call.png'
import eml from './photos/email.png'
import cpr from './photos/copyright.png'
import dmca from './photos/dmca.jpg'

import React from 'react'

const Body1 = () => {


  return (
    <>
   
   
      <div id='bo1'>
        <a>Building Digital Products</a>
        <div id='bo11'><a>GLOBALLY</a></div>
      </div>
      
      <div id='bo2'>
         <div className='bo21'><img src={YAA}/></div>
         <div className='bo21'><img src={YAC} id='bo22'/></div>
         <div className='bo21'><img src={YAB} /></div>
         </div>

         <div id='bo3'>
             <a id='bo31'>MOBILE APP DEVELOPERS</a>
             <a id='bo33'>REACT JS DEVELOPERS</a>
             <a id='bo32'>WEBSITE DEVELOPERS</a>
         </div>
          
         
    <video autoPlay muted loop className="video-element">
      <source src={MBG}type="video/mp4" />
     
    </video>
     
     <section id='bo4'>
      <h3 className='bo41'>ABOUT US</h3>
      <h5 className='bo41'>PRIORITIZING THE PERFECTION</h5>
      <p  id='bo42' className='bo41'>We create innovative, user-friendly digital solutions that<br></br>
         drive growth and deliver exceptional results to our clients.<br></br>
         With our team of skilled professionals, we tailor our digital<br></br>
         servies to meet the unique needs of each project. </p>
        
       
          <div id='bo5'>
          <div id='bo51'>
            <a> <img src={DOT}/> UI/UX DESIGN</a>
            <a> <img src={DOT}/> APP DEVELOPMENT</a>
            <a> <img src={DOT}/> WEB DEVELOPMENT</a>
            
          </div>
          <div id='bo52'>
         
          
          <a> <img src={DOT}/> SOFTWARE DESIGN</a>
          <a> <img src={DOT}/> DESIGN PROTOTYPING</a>
          <a> <img src={DOT}/> SOFTWARE DEVELOPMENT</a>
          </div>
          </div>
         
         <button id='bo6'>GET STARTED</button>

         <img src={LOG1} id='bo7'/>
         <div id='bo8'>
          <div id='bo81'><h1>100+</h1><h4>CLIENTS</h4></div>
          <div id='bo82'><h1>100+</h1><h4>PROJECTS</h4></div>
         </div>
     </section>

     <section id='bp1'>
           <h1>OUR SERVICES</h1>
           <h3>DIGITAL SOLUTIONS BY OUR TEAM</h3>
           
           <div id='bp2'></div>
           <img src={LOG2} id='bp21'/>
           <img src={LOG3} id='bp22'/>

           <div id='bp3'>
           <h2 id='bp31'>MOBILE APP DEVELOPMENT</h2>
          
           <p id='bp32'>We provide user-friendly applicaion that align with client needs.<br/>
               With expertise in application development our team creates high<br/>
               performing applications. Our Apps are fully optimized and are art of <br/>
               perfection. By combining Technical skills with digital solutions we <br/>
               enhance user experience & drive business engagement to our clients.<br/>
               Our dedication to client satisfaction and attention to detail makes us<br/>
               a trusted partner for businesses looking to elevate their presence.
            </p>
             
            <div id='bp4'>
              <div id='bp41'>
              <div className='bp43'><img src={apple}/><a>iPhone App Develoment</a></div>
              <hr className='bp44'/>
              <div  className='bp43'><img id='and' src={android}/><a>Andorid App Development</a></div>
              <hr className='bp44'></hr>
              </div>
              <div id='bp42'>
              <div  className='bp43'><img src={kotlin}/><a>Flutter App Development</a></div>
              <hr className='bp44'></hr>
              <div  className='bp43'><img src={ionic}/><a>Ionic App Development</a></div>
              <hr className='bp44'></hr>
              </div>
            </div>
               <button id='bp5'>Talk To Our Experts</button>
           </div>

           <div id='ap2'></div>
           <img src={LOG4} id='ap21'/>

           <div id='ap3'>
           <h2 id='ap31'>WEBSITE DEVELOPMENT</h2>
          
           <p id='ap32'>Websites are core of a business, they reflect your whole organization.<br/>
             They convey your complete value, core offerings and an entire story.<br/> 
              We help you create custom websites, our websites are fully optimized <br/>
               and are crafted to be a perfection which helps you make your brand<br/>
               value and help you reach larger number of audience . Lets make your<br/>
               website and boost your business on whole other level .
             <br/>
              
            </p>
             
            <div id='ap4'>
              <div id='ap41'>
              <div className='ap43'><img src={apple}/><a>React JS Develoment</a></div>
              <hr className='ap44'/>
              <div  className='ap43'><img id='and' src={android}/><a>Angular Development</a></div>
              <hr className='ap44'></hr>
              </div>
              <div id='ap42'>
              <div  className='ap43'><img src={kotlin}/><a>PHP Development</a></div>
              <hr className='ap44'></hr>
              <div  className='ap43'><img src={ionic}/><a>Python Development</a></div>
              <hr className='ap44'></hr>
              </div>
            </div>
               <button id='ap5'>Talk To Our Experts</button>
           </div>



           <div id='cp2'></div>
           <img src={LOG5} id='cp21'/>


           <div id='cp3'>
           <h2 id='cp31'>ECOMMERCE DEVELOPMENT</h2>
          
           <p id='cp32'>We design and develop eCommerce platforms that are uniquely yours.<br/>
           Leverage the latest advancements in technology and trends. We use   <br/> 
           powerful tools and features that optimize your store’s performance  <br/>
           and enhance customer experience. Our services include development,<br/>
           design and ongoing maintenance. We prioritize user-experience and <br/>
           client satisfaction which boosts up the businesses.
           
              
            </p>
             
            <div id='cp4'>
              <div id='cp41'>
              <div className='cp43'><img src={apple}/><a>Magneto Develoment</a></div>
              <hr className='cp44'/>
              <div  className='cp43'><img id='and' src={android}/><a>Wordpress Development</a></div>
              <hr className='cp44'></hr>
              </div>
              <div id='ap42'>
              <div  className='cp43'><img src={kotlin}/><a>Shopify Development</a></div>
              <hr className='cp44'></hr>
              <div  className='cp43'><img src={ionic}/><a>WooCommerce Development</a></div>
              <hr className='cp44'></hr>
              </div>
            </div>
               <button id='cp5'>Talk To Our Experts</button>
           </div>

           <div id='lev'>
            <h2>Our Hire Services</h2>
            <p id='lev1'>Looking For Dedicated Resources?</p>
            <div id='lev2'>
             
               <div className='lev31' id='lev32'> <img src={LOG15}/></div>
               <div className='lev31'> <img src={LOG12}/></div>
               <div className='lev31'> <img src={LOG14}/></div>
               <div className='lev31'> <img src={LOG11}/></div>
               <div className='lev31' id='lev33'> <img src={LOG13}/></div>
              </div>

              
              </div>
        
       <div id='lev4'>
        <a>FULLSTACK DEVELOPERS</a>
        <a>ANGULAR DEVELOPERS</a>
        <a>WORDPRESS DEVELOPERS</a>
        <a>LARAVEL DEVELOPERS</a>
        <a>FLUTTER DEVELOPERS</a>
       </div>
      
      
           
     </section>

     <footer id='ft1'>
      <section id='ft2'>
        <div id='ft3'><img src={sirisia}/></div>
        <h3>PRIORITIZING THE PERFECTON</h3>
        <p id='ft31'>We deliver tailored digital experinces that enhances business<br/>
        performance with innovative technology and user-friendly designs.</p>
        <section id='ft4'>
          <div className='ft5' id='ft6'><img src={wp}/></div>
          <div className='ft5'><img src={gm}/></div>
          <div className='ft5' id='ft7'><img src={call}/></div>
        </section>
      </section>

       <section id='ft8'>
        <h3 id='ft9'>BRANCHES</h3>
        <div id='ft10'>
          <h4 id='ft11'>BRANCH 1:</h4>
          <p id='ft12'>B1 DLF Mypad, Vibhuti Khand,<br/>
          Gomati Nagar, Lucknow UP 226010</p>

          <h4 id='ft13'> BRANCH 2:</h4>
          <p id='ft14'>Virndavan Colony, Lucknow 
            UP 226029
          </p>
        </div>
       </section>

       <section id='ft15'>
        <h3 id='ft16'>GET IN TOUCH</h3>
        <div className='ft17' id='ft172'><img src={phn}/>9580051547</div>
        <div className='ft17'><img src={whtsp}/>6386137314</div>
        <div className='ft17' id='ft171'><img src={loc}/>Branch Visit</div>
        
        
        <div className='ft17'><img src={eml}/>Sirisianinfo@gmail.com</div>
       </section>
           
         <section id='ft18'> 
          <div id='ft19'>
            <img src={cpr}/><p>Copyright 2024 @ Sirisia</p>
          </div>
          <div id='ft20'>
             <img src={dmca}/>
          </div>
          <div id='ft21'>
             <p>Terms of use</p>
             <hr className='ft22'/>
             <p>Privacy Policy</p>
             <hr className='ft22'/>
             <p>Sitemap</p>
          </div>
          </section>  
     </footer>

     <section>
      <h3></h3>
      <section>
        <div><img src=''/><p></p></div>
        <div><img src=''/><p></p></div>
        <div><img src=''/><p></p></div>
        <div><img src=''/><p></p></div>
      </section>
     </section>
   <img src='' id='robo'></img>
      
       
    </>
  )
}

export default Body1