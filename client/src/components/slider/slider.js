import React ,{useEffect, useMemo, useRef,useState} from 'react'
import './slider.css'
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';
import {AiOutlineLeft, AiOutlinePlus, AiOutlineRight} from 'react-icons/ai';
import { AiFillInfoCircle } from 'react-icons/ai';
import {BiLeftArrow,BiRightArrow} from 'react-icons/bi';
import Footer from '../../components/footer/footer';
import StringerThings from '../../assets/images/StrengerThings.png';
import thrid from '../../assets/images/thrid.jpg';
import fourth from '../../assets/images/fourth.jpg';
import tralierOne from '../../assets/images/trailer-1.jpg'
import tralierTwo from '../../assets/images/trailer-2.jpg'
import tralierThird from '../../assets/images/trailer-3.jpg'
import tralierFourth from '../../assets/images/trailer-4.jpg'
import Card from '../../components/card/card';
import SliderCard from '../sliderCard/sliderCard';
import Sliders from 'react-slick'
import styled from 'styled-components'
import  Carousel  from 'react-elastic-carousel'
import Model from '../model/model';
import axios from 'axios';
import { GetAllMovies } from '../../api';
import { useDispatch, useSelector } from 'react-redux';
import {AllMovies} from '../../action/movie'
import Loading from '../Loading/Loading';
const datas =[
  {
    title:'Stranger Things 3 (Trailer)',
    img:tralierOne,
    url:'https://youtu.be/PH3kBCSfL-4'
  },
  {
    title:'Stranger Things 3 (Trailer 2)',
    img:tralierTwo,
    url:'https://youtu.be/PH3kBCSfL-4'
  },
  {
    title:'Stranger Things 4',
    img:tralierThird,
    url:'https://youtu.be/PH3kBCSfL-4'
  },
  {
    title:'Stranger Things 2 (Trailer)',
    img:tralierFourth,
    url:'https://youtu.be/PH3kBCSfL-4'
  },
  {
    title:'Stranger Things 3 (Trailer)',
    img:tralierOne,
    url:'https://youtu.be/PH3kBCSfL-4'
  },
  {
    title:'Stranger Things 3 (Trailer)',
    img:tralierOne,
    url:'https://youtu.be/PH3kBCSfL-4'
  },
  {
    title:'Stranger Things 3 (Trailer 2)',
    img:tralierTwo,
    url:'https://youtu.be/PH3kBCSfL-4'
  },
  {
    title:'Stranger Things 4',
    img:tralierThird,
    url:'https://youtu.be/PH3kBCSfL-4'
  },
  {
    title:'Stranger Things 2 (Trailer)',
    img:tralierFourth,
    url:'https://youtu.be/PH3kBCSfL-4'
  },
  {
    title:'Stranger Things 3 (Trailer)',
    img:tralierOne,
    url:'https://youtu.be/PH3kBCSfL-4'
  },
  {
    title:'Stranger Things 3 (Trailer)',
    img:tralierOne,
    url:'https://youtu.be/PH3kBCSfL-4'
  },
]
function Slider() {
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [distance, setDistance] = useState(0);
  const [totalInViewport, setTotalInViewport] = useState(0)
  const [viewed, setViewed] = useState(0);
  const [showModel,setShowModel] = useState(false);
  const [movieId,setMovieId] = useState(null);
  const dispatch = useDispatch()
  const movies = useSelector(state=> state.movie.movies)
useEffect(()=>{
 dispatch(AllMovies())
},[])
 const handlePrev = () => {
  setViewed(viewed - totalInViewport);
  setDistance(distance + containerWidth);
}
const PADDINGS = 110;
const countElements =  datas.length
const handleNext = () => {
  setViewed(viewed + totalInViewport);
  setDistance(distance - containerWidth)
}



  // useEffect(() => {
  //   const containerWidth = containerRef.current.clientWidth - PADDINGS;

  //   setContainerWidth(containerWidth);
  //   setTotalInViewport(Math.floor(containerWidth ));
  // }, [containerRef.current]);

const slideProps = {
  style: { transform: `translate3d(${distance}px, 0, 0)` }
};

const hasPrev = distance < 0;
  const hasNext = (viewed + totalInViewport) < countElements;


  return (
//     <div className='movies__slider__wrapper' >
//         <div className='movies__slider' >
//         <div  className='movies__header' >
//         <h2 className='movies__header__title' >Original Movies</h2>
//         </div>
// <div className='movies__row__wrapper' >
// <BiLeftArrow className='movies__left__btn' onClick={()=>handleDirection('left')}  style={{ display: !isMoved && "none" }}/>
//          <Scrollbars  noDefaultStyles className='movies__row' ref={listRef} >  
//           {
//             datas.map((data)=>{
//               return  <div className='movies__row__item' >
//               <div className='movies__image' >
//                  <img src={data.img} />
//                  <span>
//                    <BsFillCaretRightFill/>
//                    <AiFillInfoCircle/>
//                    <AiOutlinePlus/>
//                  </span>
//               </div>
//             </div>
//             })
//           }
          
//          </Scrollbars>
//          <BiRightArrow className='movies__right__btn' onClick={()=>handleDirection('right')} />

// </div>
//         </div>

    
//     </div>
<>
<div className='slider__wrapper'>
  <h2 className='slider__header__title'>Original <a>Explore  All</a></h2>
  {showModel ?  <Model setShowModel={setShowModel} movieId={movieId} />:null}

 <div className='slider' >
 {movies ? 
 <div>
 {hasPrev ? <button className='slider__left__button'  onClick={()=>handlePrev()} >
     <BsChevronLeft/>
   </button>:null
   }
  <div className='slider__row'  ref={containerRef} {...slideProps} >
             {movies?.map((movie, i) => {
               return <SliderCard movie={movie} setMovieId={setMovieId} id={i} key={i} showModel={showModel} setShowModel={setShowModel} />
             })}
   </div>
  {hasNext ?  <button  className='slider__right__button' onClick={()=>handleNext()} >
     <BsChevronRight/>
   </button>:null}
  </div> :<Loading/> 
}
  </div>
 


</div>
</>

)
}


// const Sliders = styled(Sliders)`
// display: flex,
// justifyContent: "center",
// `
export default Slider
