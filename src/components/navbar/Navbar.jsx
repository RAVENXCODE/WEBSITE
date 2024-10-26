import React from 'react'
import "./Navbar.css"
import {useNavigate} from 'react-router-dom';


import d11 from './photos/d11.svg'
import d12 from './photos/d12.svg'

import { Link } from 'react-router-dom';

import D from './photos/d.png'
import A from './photos/a.png'
import B from './photos/b.png'
import C from './photos/c.png'
import H from './photos/h.png'
import I from './photos/i.png'
import J from './photos/j.png'
import K from './photos/k.png'
import L from './photos/l.png'
import ZA from './photos/za.jpg'
import ZB from './photos/Zb.jpg'


const Navbar = () => {

 

  return (
    <>
     
      <nav id='n1'>
      <a id='logo'>LOGO</a>

      <div id="n2">
        <div id='co'>
        <a>Company </a> <div id='pan'>
  <a id='pan1'>Company</a>
  <hr id='pan2'></hr>

  <div id='pan3'>
    <div id='pan31'>
      <div className='pan311'><div className='pan312'><img src={d11}/></div>About Us</div>
      <div className='pan311'><div className='pan312'><img src={d12}/></div>Meet The Team</div>
      <Link to="/engagement">
      <div className='pan311'><div className='pan312'><img src={d12}/></div>Engagement Models</div>
    </Link>
</div>
    <div id='pan32'>
      <div className='pan311'><div className='pan312'><img src={d12}/></div>Global Delivery</div>
      <div className='pan311'><div className='pan312'><img src={d12}/></div>Infastructure</div>
      <div className='pan311'><div className='pan312'><img src={d12}/></div>Life At Abonics</div>
    </div>
    <div id='pan33'>
      <div className='pan311'><div className='pan312'><img src={d12}/></div>Testimonials</div>
      <div className='pan311'><div className='pan312'><img src={d12}/></div>Career</div>
      <div className='pan311'><div className='pan312'><img src={d12}/></div>Leverage Abonics</div>
    </div>
    <div id='pan34'>
      <div className='pan311'><div className='pan312'><img src={L}/></div>Certificates</div>
      <div className='pan311'><div className='pan312'><img src={J}/></div>Confidentiallity</div>
      <div className='pan311'><div className='pan312'><img src={K}/></div>FAQs</div>
    </div>
  </div>
    
    <a id='pan4'>Get In Touch</a>

    <div id='pan5'>
      <div className='pan52'><div className='pan51'></div></div>
      <div className='pan52'><div className='pan51'></div></div>
      <div className='pan52'><div className='pan51'></div></div>
      <div className='pan52'><div className='pan51'></div></div>
    </div>

  <hr id='pan6'></hr>
</div>                                  
        
        </div>
        <div id='so'>
        <a>Solutions </a> <div id='qan'>

<div id='qan1'>
  <a id='qan11'>Development & Design</a>
  <a id='qan12'>On-Demand App Development</a>
  <a id='qan13'>QA Testing & Support</a>
</div>

<div id='qan2'>
  <hr id='qan21'></hr>
  <hr id='qan22'></hr>
  <hr id='qan23'></hr>
</div>

<div id='qan3'>
  <div id='qan31'>
    <div id='301'>
  <   div className='qan311'><div className='qan312'><img src={D}/></div>Enterprise Software</div>
      <div className='qan311'><div className='qan312'><img src={D}/></div>Mobile App Development</div>
      <div className='qan311'><div className='qan312'><img src={D}/></div>Web Development</div>
      <div className='qan311'><div className='qan312'><img src={D}/></div>eCommerce Development</div>
      <div className='qan311'><div className='qan312'><img src={D}/></div>Business Intelligence Company</div>
      
  </div>

  <div id='qan32'>
      <div className='qan311'><div className='qan312'><img src={D}/></div>Front-End Development</div>
      <div className='qan311'><div className='qan312'><img src={D}/></div>Back-End Development</div>
      <div className='qan311'><div className='qan312'><img src={D}/></div>MVP Development</div>
      <div className='qan311'><div className='qan312'><img src={D}/></div>UI/UX Design Services</div>
      <div className='qan311'><div className='qan312'><img src={D}/></div>Machine Learning Company</div>
      </div>

      <div id='qan4'>
      <div className='qan311'><div className='qan312'><img src={B}/></div>OTT Platform Development</div>
      <div className='qan311'><div className='qan312'><img src={C}/></div>Food Delivery App</div>
      <div className='qan311'><div className='qan312'><img src={A}/></div>Travel App Development</div>
      <div className='qan311'><div className='qan312'><img src={B}/></div>Taxi App Development</div>
      
  </div>

    <div id='qan5'>
      <div className='qan311'><div className='qan312'><img src={B}/></div>Software Testing</div>
      <div className='qan311'><div className='qan312'><img src={C}/></div>Support & Maintenance</div>
      <div className='qan311'><div className='qan312'><img src={A}/></div>Mobile Testing</div>
      
  </div>
  </div>
</div>
    
    

   <div id='qan6'>
    <a id='qan62'>Digital Marketing Services</a>
    <a id='qan61'>API Integration</a>
    <a id='qan63'>Consultancy & Strategy</a>
   </div>
   
   <div id='qan7'>
    <hr className='qan74' id='qan71'></hr>
    <hr className='qan74' id='qan72'></hr>
    <hr className='qan74' id='qan73'></hr>
   </div>

   <div id='qan8'>
    <div id='qan81'>
    <div className='qan311'><div className='qan312'><img src={B}/></div>SEO Services</div>
      <div className='qan311'><div className='qan312'><img src={C}/></div>SMO Services</div>
      <div className='qan311'><div className='qan312'><img src={A}/></div>Content Marketing</div>
    </div>

    <div id='qan82'>
    <div className='qan311'><div className='qan312'><img src={B}/></div>Shipping Integration</div>
      <div className='qan311'><div className='qan312'><img src={C}/></div>Payment Integration</div>
      <div className='qan311'><div className='qan312'><img src={A}/></div>Social Networking</div>
    </div>
    
    
    <div id='qan83'>
    <div className='qan311'><div className='qan312'><img src={B}/></div>IT Consulting</div>
      <div className='qan311'><div className='qan312'><img src={C}/></div>Outsource To India</div>
      <div className='qan311'><div className='qan312'><img src={A}/></div>Software Product Development</div>
    </div>
    <div id='qan84'>
      <div className='qan311'><div className='qan312'><img src={B}/></div>ODC India</div>
      <div className='qan311'><div className='qan312'><img src={C}/></div>Product Auditing</div>
      <div className='qan311'><div className='qan312'><img src={A}/></div>Startup Consulting</div>
    </div>
   </div>

</div>
        </div>
        <div id='se'>
        <a>Services </a>
        <div id='ran'>
    
    <div id='ran1'>
     <a className='ran12'>Mobile App Devlopment</a>
     <a id='ran13' className='ran12'>Cross Platform Apps</a>
     <a id='ran14' className='ran12'> Front End Development</a>
     <a id='ran15' className='ran12'>PHP Development</a>
    </div>

    <div id='ran2'>
    <hr className='ran21'></hr>
    <hr className='ran21' id='ran23'></hr>
    <hr className='ran21'></hr>
    <hr className='ran21'></hr>
    </div>
    
    <div id='ran9'>
    <div id='ran3'>
     <div className='ran311'><div className='ran312'><img src={B}/></div>iPhone App Development</div>
      <div className='ran311'><div className='ran312'><img src={C}/></div>Android App Development</div>
      <div className='ran311'><div className='ran312'><img src={A}/></div>iPad App Developmentt</div>
      <div className='ran311'><div className='ran312'><img src={B}/></div>Native App Development</div>
      <div className='ran311'><div className='ran312'><img src={C}/></div>SaaS App Development</div>
      <div className='ran311'><div className='ran312'><img src={A}/></div>No Code App Development</div>
    </div>
     
    <div id='ran4'>
     <div className='ran311'><div className='ran312'><img src={B}/></div>Flutter App Development</div>
      <div className='ran311'><div className='ran312'><img src={C}/></div>Ionic App Development</div>
      <div className='ran311'><div className='ran312'><img src={A}/></div>React Native Development</div>
      <div className='ran311'><div className='ran312'><img src={B}/></div>Xamarin App Development</div>
      <div className='ran311'><div className='ran312'><img src={C}/></div>Kotlin App Development</div>
      
    </div>

    <div id='ran5'>
     <div className='ran311'><div className='ran312'><img src={B}/></div>Angular Development</div>
      <div className='ran311'><div className='ran312'><img src={C}/></div>NodeJS Development</div>
      <div className='ran311'><div className='ran312'><img src={A}/></div>VueJS Development</div>
      <div className='ran311'><div className='ran312'><img src={B}/></div>ReactJS Development</div>
      <div className='ran311'><div className='ran312'><img src={C}/></div>ExpressJS Development</div>
      <div className='ran311'><div className='ran312'><img src={A}/></div>Python Development</div>
    </div>

    <div id='ran6'>
     <div className='ran311'><div className='ran312'><img src={B}/></div>Laravel Development</div>
      <div className='ran311'><div className='ran312'><img src={C}/></div>Yii Development</div>
      <div className='ran311'><div className='ran312'><img src={A}/></div>Symfony Development</div>
      <div className='ran311'><div className='ran312'><img src={B}/></div>Zend Development</div>
      <div className='ran311'><div className='ran312'><img src={C}/></div>CodeIgniter Development</div>
    
    </div>
    </div>

    <div id='ran7'>
    <a id='ran71'>eCommerce & CMS Development</a>
    <a id='ran72'>UI/UX Design Service</a>
    <a id='ran73'>Microsoft Technologies</a>
    <a id='ran74'>Trending Technologies</a>
    </div>

    <div id='ran8'>
      <hr className='ran81'></hr>
      <hr className='ran81'></hr>
      <hr className='ran81'></hr>
      <hr className='ran81'></hr>
    </div>

    <div id='san9'>
    <div id='san3'>
     <div className='ran311'><div className='ran312'><img src={B}/></div>Magneto Development</div>
      <div className='ran311'><div className='ran312'><img src={C}/></div>Shopify Development</div>
      <div className='ran311'><div className='ran312'><img src={A}/></div>WooCommerce Developmentt</div>
      <div className='ran311'><div className='ran312'><img src={B}/></div>WordPress Development</div>
      <div className='ran311'><div className='ran312'><img src={C}/></div>Drupal Development</div>
      
    </div>
     
    <div id='san4'>
     <div className='ran311'><div className='ran312'><img src={B}/></div>Mobile App Design</div>
      <div className='ran311'><div className='ran312'><img src={C}/></div>Responsive App Design</div>
      <div className='ran311'><div className='ran312'><img src={A}/></div>Design Prototyping</div>
      <div className='ran311'><div className='ran312'><img src={B}/></div>PSD To HTML Development</div>
      
      
    </div>

    <div id='san5'>
     <div className='ran311'><div className='ran312'><img src={B}/></div>Angular Development</div>
      <div className='ran311'><div className='ran312'><img src={C}/></div>NodeJS Development</div>
      <div className='ran311'><div className='ran312'><img src={A}/></div>VueJS Development</div>
    </div>

    <div id='san6'>
     <div className='ran311'><div className='ran312'><img src={B}/></div>Laravel Development</div>
      <div className='ran311'><div className='ran312'><img src={C}/></div>Yii Development</div>
      <div className='ran311'><div className='ran312'><img src={A}/></div>Symfony Development</div>
      <div className='ran311'><div className='ran312'><img src={B}/></div>Zend Development</div>
    </div>
    </div>

    
</div>
        </div>
       <div id='hi'>
        <a>Hire Developers </a> 
        <div id='tan'>

<div id='tan1'>
     <a className='tan12' id='tan190'> Hire Mobile App Devlopers</a>
     <a id='tan13' className='tan12'>Hire JavaScript Developers</a>
     <a id='tan14' className='tan12'>Hire Web Developers</a>
     <a id='tan15' className='tan12'>eCommerce & CMS</a>
    </div>

    <div id='tan2'>
    <hr className='tan21' id='tan22'></hr>
    <hr className='tan21' id='tan23'></hr>
    <hr className='tan21' id='tan24'></hr>
    <hr className='tan21' id='tan25'></hr>
    </div>

<div id='tan9'>
    <div id='ran3'>
     <div className='ran311'><div className='ran312'><img src={B}/></div>Hire IOS Developers</div>
      <div className='ran311'><div className='ran312'><img src={C}/></div>Hire Android Developers</div>
      <div className='ran311'><div className='ran312'><img src={A}/></div>Hire Flutter Developers</div>
      <div className='ran311'><div className='ran312'><img src={B}/></div>Hire PWA Developers</div>
      <div className='ran311'><div className='ran312'><img src={C}/></div>Hire React Native Developers</div>
      <div className='ran311'><div className='ran312'><img src={A}/></div>Hire Ionic Developers </div>
    </div>
     
    <div id='ran4'>
     <div className='ran311'><div className='ran312'><img src={B}/></div>Hire MEAN Stack Developers</div>
      <div className='ran311'><div className='ran312'><img src={C}/></div>Hire Full Stack Developers</div>
      <div className='ran311'><div className='ran312'><img src={A}/></div>Hire MERN Stack Developers</div>
      <div className='ran311'><div className='ran312'><img src={B}/></div>Hire VueJS Developers</div>
      <div className='ran311'><div className='ran312'><img src={C}/></div>Hire NEXT.JS Developers</div>
      <div className='ran311'><div className='ran312'><img src={A}/></div>Hire NodeJS Developers</div>
    </div>

    <div id='ran5'>
     <div className='ran311'><div className='ran312'><img src={B}/></div> Hire Angular Developers</div>
      <div className='ran311'><div className='ran312'><img src={C}/></div>Hire React Developers</div>
      <div className='ran311'><div className='ran312'><img src={A}/></div>Hire Yii Developers</div>
      <div className='ran311'><div className='ran312'><img src={B}/></div>Hire PHP Developers</div>
      <div className='ran311'><div className='ran312'><img src={C}/></div>Hire Front End Developers</div>
      <div className='ran311'><div className='ran312'><img src={A}/></div>Hire Python Developers</div>
    </div>

    <div id='tan6'>
     <div className='ran311'><div className='ran312'><img src={B}/></div>Hire Magneto Developers</div>
      <div className='ran311'><div className='ran312'><img src={C}/></div>Hire Wordpress Developers</div>
      <div className='ran311'><div className='ran312'><img src={A}/></div>Hire Shopify Developers</div>
      <div className='ran311'><div className='ran312'><img src={B}/></div>Hire WooCommerce Developers</div>
      <div className='ran311'><div className='ran312'><img src={C}/></div>Hire Shopware</div>
    
    </div>
    </div>
    
    <div id='uan7'>
    <a id='uan71'>Hire Quality Analyst</a>
    <a id='uan72'>Cloud Technologies</a>
    <a id='uan73'>Microsoft Developers</a>
    <a id='uan74'>Hire Designers</a>
    </div>

    <div id='uan8'>
      <hr className='ran81' id='uan82'></hr>
      <hr className='ran81' id='uan83'></hr>
      <hr className='ran81' id='uan84'></hr>
      <hr className='ran81' id='uan85'></hr>
    </div>

    <div id='san9'>
    <div id='uan3'>
     <div className='ran311'><div className='ran312'><img src={B}/></div>Hire Manual QA</div>
      <div className='ran311'><div className='ran312'><img src={C}/></div>Hire Automated QA</div>
      
      
    </div>
     
    <div id='uan4'>
     <div className='ran311'><div className='ran312'><img src={B}/></div>Hire AWS Developers</div>
      <div className='ran311'><div className='ran312'><img src={C}/></div>Hire AWS Lambda Developers</div>
     
      
      
    </div>

    <div id='uan5'>
     <div className='ran311'><div className='ran312'><img src={B}/></div>Hire ASP.NET Developers</div>
      <div className='ran311'><div className='ran312'><img src={C}/></div>Hire .Net Core Developers</div>
      <div className='ran311'><div className='ran312'><img src={A}/></div>Hire WPF Developers</div>
    </div>

    <div id='uan6'>
     <div className='ran311'><div className='ran312'><img src={B}/></div>Hire Graphics Designer</div>
      <div className='ran311'><div className='ran312'><img src={C}/></div>Hire Webflow Desginers</div>
     
    </div>
    </div>

</div>
            </div>
          <div id='in'>
            <a>Industries </a>
            <div id='van'>

  <a id='van1'>Industries We Serve</a>
  <hr id='van2'></hr>

  <div id='van3'>
    <div id='van31' className='van35'>
      <div className='van311'></div>
      <div className='van311'></div>
      <div className='van311'></div>
      <div className='van311'></div>
    </div>
    <div id='van32'  className='van35'>
      <div className='van311'></div>
      <div className='van311'></div>
      <div className='van311'></div>
      <div className='van311'></div>
    </div>
    <div id='van33'  className='van35'>
      <div className='van311'></div>
      <div className='van311'></div>
      <div className='van311'></div>
      <div className='van311'></div>
    </div>
    <div id='van34'  className='van35'>
      <div className='van311'></div>
      <div className='van311'></div>
      <div className='van311'></div>
      <div className='van311'></div>
    </div>
   
  </div>
</div>
            </div>
          <div id='re'>
            <a>Resources </a><div id='wan'>
  <div id='wan1'>
    <a id='wan11'>Resources</a>
    <a id='wan12'>Latest Blogs</a>
  </div>

  <div id='wan2'>
  <hr id='wan21'></hr>
  <hr id='wan22'></hr>
  </div>

  <div id='wan3'>
  <div className='wan311'><div className='wan312'><img src={C}/></div>Portfolio</div>
  <div className='wan311'><div className='wan312'><img src={A}/></div>Blog</div>
  <div className='wan311'><div className='wan312'><img src={A}/></div>WhitePaper</div>
  </div>

  <div id='wan4'>
    <img src={ZA} id='wan41'/>
    <img src={ZB} id='wan42'/>
  </div>

  <div id='wan5'>
     <div id='wan51'><a>UI/UX Design</a></div>
     <div id='wan52'><a>3D WEB Design</a></div>
  </div>
</div>
            </div>
           </div>
           

         <div> <Link to="/engagement">
      <button id='btn'>Get A Quote</button>
    </Link></div> 

      </nav>
  

                  
           










  
</> )
}

export default Navbar