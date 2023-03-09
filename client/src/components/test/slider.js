import React ,{useEffect, useRef,useState} from 'react'
import './test.css'
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
import tests from 'react-slick'
import  Carousel  from 'react-elastic-carousel'
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
function Test() {
  const [card,setCard] = useState(true)
 const listRef = useRef();
 const [isMoved, setIsMoved] = useState(false);
 const [slideWidth, setSlideWidth] = useState(240);
 const [slideNumber, setSlideNumber] = useState(0);
 const [clickLimit, setClickLimit] = useState();

 const testRef = useRef(null);
 const [activeSlideIndex, setActiveSlideIndex] = useState(0);
 const [showExplore, setShowExplore] = useState(false);
 const [isEnd, setIsEnd] = useState(false);

const beforeChange = async (currentIndex, nextIndex) => {
  if (currentIndex < nextIndex) {
    setActiveSlideIndex(nextIndex);
  } else if (currentIndex > nextIndex) {
    setIsEnd(false);
  }
  setActiveSlideIndex(nextIndex);
};

const  Settings = {
  speed: 500,
  arrows: false,
  infinite: false,
  lazyLoad: "ondemand",
  slidesToShow: 6,
  slidesToScroll: 6,
  // afterChange: (current) => {
  //   console.log("After Change", current);
  // },
  beforeChange,
  // onEdge: (direction) => {
  //   console.log("Edge: ", direction);
  // },
  responsive: [
    {
      breakpoint: 1536,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 6,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ],
};

const handlePrevious = () => {
  testRef.current?.slickPrev();
};

const handleNext = () => {
  testRef.current?.slickNext();
};
const params = {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
 
  loopFillGroupWithBlank: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
}
const breakPoints = [
  {width:1, itemsToShow:1},
  { width: 400, itemsToShow: 2 },
  { width: 600, itemsToShow: 3 },
  { width: 900, itemsToShow: 4 },
  { width: 1200, itemsToShow: 6 },
  { width: 1536, itemsToShow: 6 },
];


  return (
//     <div className='movies__test__wrapper' >
//         <div className='movies__test' >
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
<div className='test__wrapper'>
  <h2 className='test__header__title'>Original <a>Explore  All</a></h2>
 <div className='test' >
 <button className='slider__left__button'  onClick={()=>handlePrevious()} >
    <BsChevronLeft/>
  </button>
          <Carousel breakPoints={breakPoints} >
            {datas.map((data, i) => {
              return <SliderCard data={data} key={i} />
            })}
          </Carousel>
            <button  className='slider__right__button' onClick={()=>handleNext()} >
    <BsChevronRight/>
  </button>

 </div>

</div>
</>

)
}


// const tests = styled(tests)`
// display: flex,
// justifyContent: "center",
// `
export default Test
