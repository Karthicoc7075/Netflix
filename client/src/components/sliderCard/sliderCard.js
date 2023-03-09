import React, { useEffect, useState } from 'react'
import Player from 'react-player'
import {BiVolumeFull} from 'react-icons/bi'
import {BsFillPlayFill,BsChevronDown} from 'react-icons/bs'
import {AiOutlinePlus} from 'react-icons/ai'
import {SlLike} from 'react-icons/sl'
import Model from '../model/model'
import { likeMovie } from '../../api'
import { useDispatch, useSelector } from 'react-redux'


function SliderCard({movie,id,setShowModel,showModel,setMovieId}) {
    const [showCard,setShowCard] = useState(false);
    const dispatch = useDispatch();

    useEffect(()=>{
          if(showModel){
            
            setShowCard(false)
          }
    },[showModel])
    function InfoHandler(id){
      setShowModel(true)
      setMovieId(id)
      console.log("clicked:",id);
    }
 function likeMovies(){
  dispatch(likeMovie({movieId:movie._id}))
   console.log("clicked:",id);
 }
  return (
    <div className='slider__card ' onMouseOver={()=> setShowCard(true)} onMouseLeave={()=>setShowCard(false)} >
     
      <div className='slider__card__show' >
         <div className='slider__card__video' >
        { showCard ?  <video className='slider__video'  src="https://scontent.cdninstagram.com/o1/v/t16/f1/m82/1C4690C68EABF9D2F3FA58DEB326A4B1_video_dashinit.mp4?efg=eyJxZV9ncm91cHMiOiJbXCJpZ193ZWJfZGVsaXZlcnlfdnRzX290ZlwiXSIsInZlbmNvZGVfdGFnIjoidnRzX3ZvZF91cmxnZW4uNzIwLmNsaXBzLmJhc2VsaW5lIn0&_nc_ht=instagram.fblr17-1.fna.fbcdn.net&_nc_cat=110&vs=864294301326013_4197515938&_nc_vs=HBksFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC8xQzQ2OTBDNjhFQUJGOUQyRjNGQTU4REVCMzI2QTRCMV92aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVABgkR0xHbWhoS3Jfd0N0UDZzQUFGNXhLa1lXUGwxTWJwUjFBQUFGFQICyAEAKAAYABsAFQAAJqipseTvt74%2FFQIoAkMzLBdAUvu2RaHKwRgSZGFzaF9iYXNlbGluZV8xX3YxEQB1%2FgcA&_nc_rid=aacf2d3a48&ccb=9-4&oh=00_AfDs_odKuJeRGNXsZ-r1_S7JFpK5aJ-EGEW8qvbbbGPhnA&oe=64075C7F&_nc_sid=ca5ca4" ></video>:null}
          <div className='slider__card__title' >{movie.title}</div>
          <div className='slider__card__muteIcon' >
            <BiVolumeFull/>
          </div>
          </div>
          <div className='slider__card__details' >
            <div className='slider__card__details__icons' >
                <div className='slider__card__playIcon' >
                  <BsFillPlayFill/>
                </div>
                <div className='slider__card__plusIcon' onClick={()=>likeMovies()} >
                  <AiOutlinePlus/>
                </div>
                <div className='slider__card__likeIcon'  >
                  <SlLike/>
                </div>
              <div className='slider__card__moreIcon'  onClick={()=>InfoHandler(id)} >
                <BsChevronDown/>
            </div>
        </div>
        <div className='movie__meta__data' >
        <h6 className='movie__match' >{Math.floor(Math.random()*100)}% Match</h6>
        <div className='movie__age' >{movie.age}+</div>
        <h6 className='movie__duration' >{movie.duration}</h6>
        <div className='movie__quality' >{movie.quality}</div>
        </div>
        <div className='movie__categories' >
             <ul className='movie__categories__items'>
              <li>{movie.genres[0]}</li>
              <li>{movie.genres[1]}</li>
            </ul>
        </div>
        </div>
        </div>
      
      <div className='slider__img__wrapper' >
      <img className='slider__img' src={movie.posterImg} />
    </div>
    </div>
  )
}

export default SliderCard
