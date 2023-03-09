import React, { useEffect, useRef,useState } from 'react';
import './homePage.css';
import Navbar from '../../components/Navbar/Navbar';
import {  BsFillCaretRightFill } from 'react-icons/bs';
import {AiOutlinePlus} from 'react-icons/ai';
import { AiFillInfoCircle } from 'react-icons/ai';
import Footer from '../../components/footer/footer';
import StringerThings from '../../assets/images/StrengerThings.png';
import thrid from '../../assets/images/thrid.jpg';
import Slider from '../../components/slider/slider';
import Model from '../../components/model/model';
import { useSelector } from 'react-redux';

function InfoCardShow(data){
        
}

function HomePage() {
  const movies = useSelector(state=>state.movie.movies);
  const [homePageMovie,setHomePageMovie] = useState()

 useEffect(()=>{
  setTimeout(()=>{
    setHomePageMovie(movies[5])
  },100)
 })
  
  return (
    <div>
      {/* <Card onClick={()=>console.log('Clicked !!')}   onMouseEnter={()=>console.log('mouse is Entered!!')} >
        <h1>hello</h1>
      </Card> */}
      <Navbar />
      <section className='hero__wrapper' >
        <div className='hero' >
          <div className='info__container' >
            <div className='info__logo' >
              <img className='hero__img' src={homePageMovie?.logo} />
            </div>
            <div className='details__container' >
              <div className='title__info' >
                <h1 className='title__info title' >{homePageMovie?.title}</h1>
              
                <div className='title__info__synopsis'>
                {homePageMovie?.desc}
                </div>
                </div>
                <div className='button__container' >
                  <button className='button__playBtn' >
                    <BsFillCaretRightFill/>
                    Play
                  </button>
                  <button className='button__moreInfoBtn' onClick={()=>InfoCardShow()} >
                    <AiFillInfoCircle/>
                    More Info
                  </button>
                  <button className='button__listBtn' >
                    <AiOutlinePlus/>
                    My List
                  </button>
                </div>
            </div>
          </div>
          <div className='container__image' >
            <img src={homePageMovie?.img}/>
          </div>
        </div>
<Slider/>
<Slider/>
<Slider/>   
      </section>
      <Footer/>
    </div>
  )
}

export default HomePage
