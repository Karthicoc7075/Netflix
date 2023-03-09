import React from 'react';
import './footer.css';
import {MdLanguage} from 'react-icons/md';


function footer() {
  return (
    <div className='footer__wrapper' >
      <div className='footer' >
        <div className='fooetr__top_tilte'>
            <div> Question? Call 000-800-919-1694</div>
        </div>
        <ul className='footer__links' >
           <li className='footer__links__item' >
              <a className='footer__link' href='/'>FAQ</a>
           </li>
           <li className='footer__links__item' >
              <a className='footer__link' href='/'>Help Centre</a>
           </li>
           <li className='footer__links__item' >
              <a className='footer__link' href='/'>Account</a>
           </li>
           <li className='footer__links__item' >
              <a className='footer__link' href='/'>Media Centre</a>
           </li>
           <li className='footer__links__item' >
              <a className='footer__link' href='/'>Investor Relations</a>
           </li>
           <li className='footer__links__item' >
              <a className='footer__link' href='/'>Jobs</a>
           </li>
           <li className='footer__links__item' >
              <a className='footer__link' href='/'>Ways to Watch</a>
           </li>
           <li className='footer__links__item' >
              <a className='footer__link' href='/'>Terms of Use</a>
           </li>
           <li className='footer__links__item' >
              <a className='footer__link' href='/'>Privacy</a>
           </li>
           <li className='footer__links__item' >
              <a className='footer__link' href='/'>Cookie Preferences</a>
           </li>
           <li className='footer__links__item' >
              <a className='footer__link' href='/'>Corporate Information</a>
           </li>
           <li className='footer__links__item' >
              <a className='footer__link' href='/'>Contact Us</a>
           </li>
           <li className='footer__links__item' >
              <a className='footer__link' href='/'>Speed Test</a>
           </li>
           <li className='footer__links__item' >
              <a className='footer__link' href='/'>Legal Notices</a>
           </li>
           <li className='footer__links__item' >
              <a className='footer__link' href='/'>Only on Netflix</a>
           </li>
        </ul>
         {/* <div className='footer__langauage__container' >
         <MdLanguage/> */}
         <select className='footer__language__picker'>
         <option className='footer__language' >
            English
         </option>
         <option className='footer__language' >
         हिन्दी
         </option>
        </select>
         {/* </div> */}
         <div className='footer__country'>
            Netflix India
         </div>
      </div>
    </div>
  )
}

export default footer
