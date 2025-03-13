"use client"
import { useState } from 'react'
import Slider from "react-slick"
import ProgressBar from './components/PrgressBar';
const FuturePlans = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const MYSliderSetting = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    afterChange: (current: number) => setActiveSlide(Math.round(current)),
    responsive: [
      {
        breakpoint: 3000,
        settings: {
          slidesToShow: 1.12,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 1550,
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 970,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
          arrows: false,
        },
      },
    ],
  };
  const FutureData = [
    {
      quarter: "Q1",
      date: "2025 - 2026",
      phase: "Phase 1",
      description: "Core Development & AI Trading Execution ",
    },
    {
      quarter: "Q2",
      date: "2026 - 2027",
      phase: "Phase 2",
      description: "AI Agent Marketplace & No-Code AI Bot Deployment",
    },
    {
      quarter: "Q3",
      date: "2026 - 2027",
      phase: "Phase 3",
      description: "AI-Driven Portfolio Optimization & Yield Farming",
    },
    {
      quarter: "Q4",
      date: "2026 - 2027",
      phase: "Phase 4",
      description: "Advanced AI Strategy Customization",
    },
    {
      quarter: "Q5",
      date: "2026 - 2027",
      phase: "Phase 5",
      description: "AI-Powered Security & Risk Mitigation",
    },
    ]
  return (
        <div id={"parent-future-plans"} >
            <div className='flex flex-col bg-primary justify-center md:justify-start rounded-3xl md:rounded-[40px] px-4 py-10 md:px-0 md:py-20 mb-10 mt-28 h-full' id={'future-plans'}>
                <h1 className='text-24 md:text-64 md:leading-[77px] text-white mb-20 md:mb-16 relative md:translate-x-[10%]'>Our Plans For The Future</h1>
                <div className='flex relative items-center justify-center gap-y-16 md:gap-y-0'>
                    <div className='flex gap-10 flex-col md:hidden'>
                        {
                            FutureData.map((item, index) => (
                                <div key={`${item.phase} ${index + 1}`} className='flex flex-col '>
                                    <div className='flex flex-col justify-between px-6 py-4 bg-white backdrop-blur-[80px] rounded-3xl h-full min-h-32'>
                                        <h5 className='text-16 text-primary'>
                                            {item?.phase}
                                        </h5>
                                        <h2 className='text-20 leading-5 text-primary font-normal'>
                    {item?.description}
                  </h2>
                </div>
                                    <div className='flex flex-row items-end justify-end w-full'>
                                        <h1 className='text-[90px] leading-[65px] text-dark_white max-w-fit font-light'>{item?.quarter}</h1>
                                        <p className='text-24 leading-[30px] text-dark_white'>{item?.date}</p>
                </div>
              </div>
                            ))
                        }
                    </div>
                    <div className='slider-styled-component hidden md:block'>
                        <Slider {...MYSliderSetting}>
                            {
                                FutureData.map((item, index) => (
                                    <div key={`${item.description}${index}`}>
                                        <div className=' min-h-[450px] relative translate-x-[-10%]'>
                                            <div className='flex flex-row items-center absolute w-full'>
                                                <h1 className='text-[512px] leading-[450px] text-dark_white max-w-fit font-light'>{item?.quarter}</h1>
                                                <p className='mt-[3rem] text-[100px] md:text-[60px] translate-y-[90%] text-dark_white'>{item?.date}</p>
                                            </div>
                                            <div className='absolute flex flex-col p-10 gap-10 bg-white backdrop-blur-[80px] rounded-3xl translate-x-[35%] translate-y-[65%]'>
                                                <h5 className='text-20 text-primary'>
                                                    {item?.phase}
                                                </h5>
                                                <h2 className='text-40 leading-10 text-primary font-normal'>
                        {item?.description}
                      </h2>
                    </div>
                  </div>
                </div>
                                ))
                            }
            </Slider>
          </div>
        </div>
                <div className='mt-20 hidden md:flex justify-center w-full items-center'>
          <ProgressBar progress={activeSlide} />
        </div>
      </div>
    </div>
    )
}

export default FuturePlans