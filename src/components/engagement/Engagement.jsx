import React from 'react'
import Navbar from '../navbar/Navbar'
import "./engagement.css"
const Engagement = () => {
  return ( 
    <>
    <Navbar/>

    <main id='m1'>
      <section id='m2'>
        <h1>Our Engagement Models</h1>
       </section>
    </main>

    <main id='m3'>
      <img src=''/>
      <aside>
        <div id='m4'>
        <h1>Direct Approach</h1>
        </div>
        <section id='m5'>
          <h1>Hybrid Model</h1>
          <p>Hybrid model fulfills diverse need and is<br/>
          mostly prefereed by enterprise software.<br/> 
          It combines various traditional and modern<br/>
          approach that fosters deeper connections<br/>
          and encourage collaboration.
          </p>
          <ul id='m6'>
          <li id='m7'>Zero Communication Gap</li>
          <li>Increased Quality Control</li>
          <li>Cost Effective Development</li>
          <li>Greater Operational Benefits</li>
          <li>Communication in your time zone</li>
          <li> Flexibillity To Scale Team</li>
          </ul>
        </section>
      </aside>
    </main>
    </>
  )
}

export default Engagement