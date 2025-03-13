'use client'
import { useState, useRef } from 'react'
import { GradientCircle } from '@/app/components/GradientCircle'
import Slider from 'react-slick';
import Image from 'next/image';
import { ProgressBarAuto } from './components/ProgressBarAuto';
import { cn } from '@/app/utils';
const Testimonials = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const sliderRef = useRef<Slider | null>(null);
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 1200,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        beforeChange: (current: number, next: number) => {
            setCurrentSlide(next);  // Update the current slide before change
        },
    };

    const testimonials = [
        {
            quote: "“Aureus AI transformed the way I trade microcaps — the agent found a gem I would’ve missed!”",
            user: "— Early Beta User",
        },
        {
            quote: "“The insights I’ve gained from Aureus AI are unparalleled — it’s a game changer for trading!”",
            user: "— Professional Trader",
        },
        {
            quote: "“Aureus AI has drastically improved my trading strategies. Highly recommended!”",
            user: "— Retail Investor",
        },
        {
            quote: "“The predictions are scarily accurate. Aureus AI is now my secret weapon!”",
            user: "— Financial Analyst",
        },
        {
            quote: "“I never thought AI could make trading so intuitive. Aureus AI is the future!”",
            user: "— Tech Enthusiast",
        },
    ];


    const handleProgressComplete = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        } else {
            console.error('Slider instance is null. Ensure ref is attached.');
        }
    };

    const BoxStyle = 'min-h-[212px] max-h-[212px] max-w-[334px] min-w-[334px] md:min-h-[300px] md:max-h-[300px] w-full md:max-w-[470px] md:min-w-[470px] rounded-3xl'

    return (
        <div className='flex flex-col items-center justify-center w-full min-h-full md:min-h-[95vh] pt-[120px] pb-[220px] md:pt-48 md:pb-72 h-full relative '>
            <GradientCircle classname='w-[75vh] md:h-[65vh]  2xl:h-[75vh] translate-x-[135%] translate-y-[-15%] hidden md:block' />
            <GradientCircle classname='w-[30vw] h-[65vh] translate-x-[-170%] translate-y-[40%] hidden md:block' />
            <h1 className='text-24 leading-8 md:text-64 md:leading-[77px] text-center mb-36 text-white z-10'>
                What The People Say About Aureus AI
            </h1>
            <div className='slider-styled-component-testimonial flex items-center justify-center'>
                <Slider {...settings} className="w-full " ref={sliderRef}>
                    {testimonials.map((testimonial, index) => (
                        <div key={index}>
                            <div className='flex items-center justify-center min-w-full min-h-[340px] md:min-w-[560px] md:min-h-[300px] w-full h-full'>
                                <div className="flex justify-center w-full max-w-[370px] min-w-full max-h-[340px] min-h-[340px] md:max-w-[560px] md:min-w-[560px] md:min-h-[300px] md:max-h-[300px] relative overflow-visible">
                                <div className={" bg-opacity-50 md:min-h-[380px] min-h-[330px] md:max-h-[380px] w-full max-w-[500px] md:min-w-[500px] rounded-full bg-primary backdrop-filter-[100px] absolute z-10 blur-[30px] translate-y-[-10%]"} />
                                <div className={cn(BoxStyle, " bg-black_one absolute z-20 rotate-[10deg] border-dark_gray border-[1px]")} />
                                    <div className={cn(BoxStyle, " bg-darkest_white backdrop-blur-[80px] bg-[url(/testimonials-bg.png)] bg-no-repeat bg-contain absolute z-30 rotate-[-5deg] right-[5%] xxsm:right-[10%]")} />
                                    <div className={cn(BoxStyle, " bg-black_one absolute z-40 p-6 flex flex-col border-dark_gray border-[1px]")}>
                                        <Image
                                            src="/ninety-nine-icon.png"
                                            alt="ninetynine"
                                            width={40}
                                            height={40}
                                            className='mb-5 w-6 h-6 md:w-10 md:h-10'
                                        />
                                        <p className="text-16 leading-5 md:text-20 md:leading-[30px] font-normal mb-5 md:mb-10 text-white">
                                            {testimonial.quote}
                                        </p>
                                        <p className="text-14 leading-[14px] md:text-16 md:leading-5 font-normal text-gray_one m-5 md:mb-10">
                                            {testimonial.user}
                                        </p>
                                        {currentSlide === index && <ProgressBarAuto onComplete={handleProgressComplete} />}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default Testimonials