import React from 'react'
import astro from "../assets/astrologer.png";
import Book from './Book';

function About() {
    return (
      <div id='about' className="container flex items-center justify-center h-[100vh] w-full  bg-white ">
        <div className="in-cont  w-3/4 shadow-2xl rounded-lg flex h-[70vh] px-0  bg-primary">
        {/* ASTROLOGER PIC */}

          <div className="astro-pic flex justify-start items-center pl-8 pr-0 rounded-md w-2/5">
          {/* <div className="img flex justify-center bg-white items-center w-full "> */}
            <img
            src={astro}
            alt='image'
            className='image  w-full h-[50vh] px-2  flex justify-start rounded-lg shadow-sm'
            />
          {/* </div> */}
          </div>
          {/* ASTROLOGER DETAILS */}

          <div className="astro-detail flex-1 justify-center  px-10 items-center rounded-md overflow-hidden">
            <div className="text w-full p-10">
                <div className="ex font-sans text-start p-1 flex-col flex mb-0  font-semibold justify-center text-black h-20">
                  <h4>15 Years Of Experience</h4>
                </div>
            <div className="name   text-wrap h-16">
              <h2 className=' text-black font-serif font-bold text-4xl '>Astrologer Rekha Bhatt</h2>
              </div>
            <div className="info w-full  h-52  from-neutral-950 font-sans font-normal">
              <p>Indias Best Astrologer Guiding Lives Through the Power of the StarsWith decades of trusted experience 
                and thousands of satisfied clients across the globe, India’s Best Astrologer offers accurate,
                personalized astrology readings rooted in ancient Vedic knowledge.
                Specializing in kundli analysis, career and marriage predictions, gemstone recommendations,
                and remedies for planetary doshas, our goal is to bring clarity and confidence into your life. 
              </p>
            </div>
            <button className='bg-quad text-white text-lg px-6 py-3 rounded-lg hover:bg-quad transition'>Book Consultation</button>
            
            </div>
          
          </div>
        </div>
      </div>
    );
  }
  

export default About;