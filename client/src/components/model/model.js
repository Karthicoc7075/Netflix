import React, { useState,useRef,useEffect } from 'react'
import './model.css'
import { BsFillCaretRightFill } from 'react-icons/bs'
import { MdClose } from 'react-icons/md'
import { AiOutlinePlus } from 'react-icons/ai'
import { SlLike } from 'react-icons/sl'
import { BiVolumeFull } from 'react-icons/bi'

import { useSelector } from 'react-redux'
import axios from 'axios'
import Loading from '../Loading/Loading'
// import video from 'react-player'
function Model({movieId,setShowModel}) {
    const vidRef=useRef();
    const [movie,setMovie] = useState(null);
    const [trailer,setTrailer] = useState(null);
    const movies = useSelector((state=>state.movie.movies))
    const baseUrl ='https://vijay.pw/k/trailer'
    
   useEffect(()=>{
     setTimeout(()=>{
        setTrailer(true)
     },1200)
   },[])




    useEffect(()=>{
       setMovie( movies[movieId])
    },[movieId])

    
    return (
        <div className='model__wrapper' >
            <div className='model' >
            <div className='movie__trailer' >   
         {trailer ? <video ref={vidRef} src={`${baseUrl}/${movie?.trailer}`} autoPlay ></video>:<Loading/>}
                  <div className='color' ></div>
                    </div>
                <div className='movie__content' >
                  
                    <div className='movie__title' >{movie?.title}</div>
                    <div className='movie__button__wrapper' >
                        <button className='movie__button__playBtn' >
                            <BsFillCaretRightFill />
                            Play
                        </button>
                        <div className='movie__card__plusIcon' >
                            <AiOutlinePlus />
                        </div>
                        <div className='movie__card__likeIcon' >
                            <SlLike/>
                        </div>
                        <div className='movie__card__muteIcon' >
                            <BiVolumeFull/>
                        </div>
                    </div>
                    <div className='movie__meta__data' >
                        <h6 className='movie__match' >{Math.floor(Math.random()*100)}% Match</h6>
                        <div className='movie__age' >{movie?.age}+</div>
                        <h6 className='movie__duration' >{movie?.duration}</h6>
                        <div className='movie__quality' >{movie?.quality}</div>
                    </div>
                    <div className='movie__info' >
                        <div className='movie__desc' >
                           {movie?.desc}
                        </div>
                        <div className='movie__genres__languages' >
                            <div className='movie__genres__item' >
                                <div className='genres__item__label' >Genres :</div>
                                <div className='genres__item__list' >
                                {movie?.genres.map((genre,i)=>{
                                return <div key={i} >{genre},
                                    </div>
                               })}
                                </div>
                             
                            </div>
                            <div className='movie__languages__item' >
                                <div className='languages__item__lable' >Available in :</div>
                              <div className='languages__item__list'>{movie?.languages}</div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='close__button' onClick={()=>setShowModel(false
                            )}  >
                    <MdClose />
                </div>
            </div>
        </div>
    )
}

export default Model
