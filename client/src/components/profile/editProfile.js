import React, { useState } from 'react';
import './editProfile.css';
import {IoMdArrowBack} from 'react-icons/io';
import profileImagess from '../../assets/images/profile.webp'
import user1 from '../../assets/images/profile/user1.png'
import user2 from '../../assets/images/profile/user2.png'
import user3 from '../../assets/images/profile/user3.png'
import user4 from '../../assets/images/profile/user4.png'
import user5 from '../../assets/images/profile/user5.png'
import user6 from '../../assets/images/profile/user6.png'
import user7 from '../../assets/images/profile/user7.png'
import user8 from '../../assets/images/profile/user8.png'
import user9 from '../../assets/images/profile/user9.png'
import user10 from '../../assets/images/profile/user10.png'
import user11 from '../../assets/images/profile/user11.png'
import user12 from '../../assets/images/profile/user12.png'
import user13 from '../../assets/images/profile/user13.png'
import user14 from '../../assets/images/profile/user14.png'
import user15 from '../../assets/images/profile/user15.png'
import user16 from '../../assets/images/profile/user16.png'
import user17 from '../../assets/images/profile/user17.png'
import user18 from '../../assets/images/profile/user18.png'
import user19 from '../../assets/images/profile/user19.png'
import user20 from '../../assets/images/profile/user20.png'
import user21 from '../../assets/images/profile/user21.png'
import user22 from '../../assets/images/profile/user22.png'
import user23 from '../../assets/images/profile/user23.png'
import user24 from '../../assets/images/profile/user24.png'
import user25 from '../../assets/images/profile/user25.png'
import user26 from '../../assets/images/profile/user26.png'
import user27 from '../../assets/images/profile/user27.png'
import user28 from '../../assets/images/profile/user28.png'
import user29 from '../../assets/images/profile/user29.png'
import user30 from '../../assets/images/profile/user30.png'

const profileImages =[
  user1,
 user2,
 user3,
 user4,
 user5,
 user6,
 user7,
 user8,
 user9,
 user10,
 user11,
 user12,
 user13,
 user14,
 user15,
 user16,
 user17,
 user18,
 user19,
 user20,
 user21,
 user22,
 user23,
 user24,
 user25,
 user26,
 user27,
 user28,
 user29,
 user30,
]


function EditProfile() {
  const [imageSlection,setImageSelection] = useState(null);
  const [inputValue,setInputValue] = useState("test 3");
  function selectImage(id){

       setImageSelection(profileImages[id]) 
  }
  return (
    <div className='editProfile__wrapper' >
        <div className='header' >
          <a href='/' className="svg-icon header__logo" > <svg fill='#e50914' viewBox="0 0 111 30" data-uia="netflix-logo" aria-hidden="true" focusable="false"><g id="netflix-logo"><path d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z" id="Fill-14"></path></g></svg></a>
          </div>

        <div className='header__back' >
            <IoMdArrowBack/>back                
        </div>

        <div className='editProfile' >
           <div className='editProfile__title' >Edit Profile</div>
           <div className='profileImage__wrapper' >
            <div className='profileImage__mainImage' >
                <img src={imageSlection ? imageSlection: profileImagess}/>
            </div>
            <div className='profileImage__list' >
               {
                profileImages.map((profileImage,i)=>{
                    return <div className='profileImage' onClick={()=>selectImage(i)} >
                        <img src={profileImage} />
                        </div>
                })
               }
            </div>
           </div>
           <div className='editProfile__form' >
            <label className='editProfile__form__label' >Name</label>
            <input className='editProfile__form__input' value={inputValue}  />
           </div>
          <div className='editProfile__buttons' >
            <button className='editProfile__button save' >
              Save
            </button>
            <button className='editProfile__button done'>
              Done
            </button>
          </div>
        </div>
    </div>
  )
}

export default EditProfile
