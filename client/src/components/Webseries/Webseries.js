import React from 'react'

function Webseries() {
  return (
    <div>
       <section className='hero__wrapper' >
        <div className='hero' >
          <div className='info__container' >
            <div className='info__logo' >
              <img className='hero__img' src={StringerThings} />
            </div>
            <div className='details__container' >
              <div className='title__info' >
                <h1 className='title__info title' >Stringer Things</h1>
                <div className='title__info__metaverse' >
                 <span className='title__info__metaverse year' > 2016</span>
                 <span className='spacer' >|</span>
                 <span className='title__info__metaverse maturity__rating' >
                    U/A 16+
                 </span>
                 <span className='spacer' >|</span>
                 <span className='title__info__metaverse duration__stream' >
                  4 Seasons 
                 </span>
                 <span className='spacer' >|</span>
                <span className='title__info__metaverse genre' >
                  Teen Tv Shows
                </span>
                </div>
                
              </div>
              <div className='title__info__synopsis__talent' >
                <div className='title__info__synopsis'>
                When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.
                </div>
                <div className='title__info__talent' >
                  <div className='starring__item' >
                   <div className='starring__item__label' >Starring:</div>
                   <div className='starring__item__list' >Winona Ryder,David Harbour,Millie Bobby Brown</div>
                  </div>
                  <div className='creators__item' >
                   <div className='creators__item__label' >Creators:</div>
                   <div className='creators__item__list' >Creators:The Duffer Brothers</div>
                  </div>
    
                </div>
              </div>
            </div>
          </div>
          <div className='container__image' >
            <img src={fourth}/>
          </div>
        </div>

        <div className='section__additional__videos' >
          <div className='section__header' >
            <h1 className='section__header__text' >Videos</h1>
            <div className='section__subheader__text' >| Stranger Things</div>
          </div>

          <div className='row__wrapper' >
              <ul className='row__item__container' >
                {
                  datas.map((data,i)=>{
                   return <li className='row__item' key={i} >
                      {/* <button className='addition__video' > */}
                      <div className='video__player__image__wrapper'>
                       <img src={data.img} />

                       <span className='video__player__icon' >
                         <BsFillCaretRightFill/>
                       </span>
                       </div>
                     
                        <div className='video__player__title' >                       
                        {data.title}
                        </div>
                      {/* </button> */}
                     
                    </li>
                  })
                }
              </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Webseries
