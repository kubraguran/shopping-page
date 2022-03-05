import {useState} from 'react'
import { FaPlus } from "react-icons/fa";
import { BsChatDots } from "react-icons/bs";
import { FiAtSign,FiMail,FiPhoneCall } from "react-icons/fi"; //FAQ YAP

const About = () => {
    const[readMore, setReadMore] = useState(false);

    return (
        <div className='about'> 
         <h3>
             Customer Service and Mores
             <br/>
               </h3>   
          <br/>
          <br/>
          <br/>
         <ul className='chat'>
             <li>
           <BsChatDots className='icon-size'/>
           <br/>
           <br/>
           <br/>
               {
                readMore ? <span className='info'>Contact Now: <a href = "#">Get Live Support</a></span> : `${'info'.substring(100,100)}` 
               } 
           </li>
           <li>
           <span className='info'>
              <button  onClick = {() => setReadMore(!readMore)}><FaPlus/></button>
              <br/>
              <br/>
            </span>
             </li>

         </ul>
         <ul className='socialMedia'>
         <li >
           <FiAtSign className='icon-size'/>
           <br/>
           <br/>
           <br/>
           {
                    readMore ? <span className='info'>Find Us: <a href = "#">Instagram Pg</a>
                    <br/>
                    Find Us: <a href = "#">Facebook Pg</a></span> : `${'info'.substring(100,100)}` 
               }
           </li>
           <li >
           <span className='info'>
              <button  onClick = {() => setReadMore(!readMore)}><FaPlus/></button>
              <br/>
              <br/>
            </span>
            </li>
         </ul>
         <ul className='mail'>
         <li >
           <FiMail className='icon-size'/>
           <br/>
           <br/>
           <br/>
           {
                    readMore ? <span className='info'>Send Mail: <a href ="#">sendmail@gmail.com</a> </span> : `${'info'.substring(100,100)}` 
               }
           </li>
           <li >
           <span className='info'>
              <button  onClick = {() => setReadMore(!readMore)}><FaPlus/></button>
              <br/>
              <br/>

            </span>
            </li>
         </ul>
         <ul className='number'>
         <li >
           <FiPhoneCall className='icon-size'/>
           <br/>
           <br/>
           <br/>
           {
                    readMore ? <span className='info'>Call Us: <a href = "#">+00 000 000</a></span> : `${'info'.substring(100,100)}` 
               }
           </li>
           <li >
           <span className='info'>
              <button  onClick = {() => setReadMore(!readMore)}><FaPlus/></button>
              <br/>
              <br/>
            
            </span>
            </li>
         </ul>
        </div>
    )
};

export default About;
