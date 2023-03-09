import React from 'react'
import './account.css'
import Navbar from '../Navbar/Navbar'
import profileImage from '../../assets/images/profile.webp'
import Footer from '../footer/footer'

const profiles =[
    {
        img:profileImage,
        name:'user 1'
    },
    {
        img:profileImage,
        name:'user 2'
    },
    {
        img:profileImage,
        name:'user 3'
    },
    {
        img:profileImage,
        name:'user 4'
    },
]

function Account() {
  return (
    <div>
      <Navbar/>
      <div className='account__wrapper' >
         <div className='account' >
           <div className='account__title' >Account</div>
           <div className='account__email__address' >
                <div className='account__email__title' >
              Email Address
                </div>
                <div className='account__email__name' >
                    Karthicoc7075@gmail.com
                </div>
           </div>
           <div className='account__profile__cards' >
              <div className='account__profile__title' >User Lists</div>
              <div className='account__profile__card__wrapper' >
               { 
                  profiles.map((profile)=>{
                    return <div className='account__profile__card' >
                  <img className='account__profile__card__image' src={profile.img} />
                  <div className='account__profile__card__name' >{profile.name}</div>
               </div>
                  })
               }
           </div>
           </div>
           <div className='account__details' >
            <div className='account__details__title' >The date this account was created.</div>
            <div className='account__details__create__date' >2/23/2023</div>
            <div className='account__details__title' >Plan Details</div>
            <div className='account__details__plan' >PROFESSIONAL</div>
           </div>
           <div className='account__button' >
            <button>Sign out of NETFLIX</button>
           </div>
         </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Account
