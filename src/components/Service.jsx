import React from 'react'
import astro from "../assets/astrologer.png";


function Service() {
  return (
    <div id="services" className="container flex justify-center items-center h- w-full overflow-hidden pb-0 bg-white ">
      <div className="main-cont w-8/12 bg-primary justify-center items-center mt-10 mb-0 shadow-md">
        <div className="service text-black flex justify-center items-center h-[10vh] w-full">
          <button className='bg-quad text-white text-md px-6 py-2 mt-3 rounded-lg shadow-md hover:bg-quad transition'>Services</button>
        </div>

        <div className='cards flex flex-wrap bg-black justify-center w-full h-[80vh] gap-4'>

          <div class="max-w-80 h-2/4 bg-white border rounded-lg shadow overflow-hidden">
            <img class="w-5/6 h-44 ml-6 rounded-md mt-4 object-cover" src={astro} alt="Card Image" />
            <div class="p-4">
              <h3 class="text-md font-bold mt-0 font-sans from-neutral-950 ">Beautiful Sunset</h3>
              <p class="text-gray-600 mt-0">Experience the magic of the golden hour from anywhere.</p>
              <button class="mt-4 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600">
                Explore
              </button>
            </div>
          </div>

          <div class="max-w-80 h-2/4 bg-white border rounded-lg shadow overflow-hidden">
            <img class="w-5/6 h-44 ml-6 rounded-md mt-4 object-cover" src={astro} alt="Card Image" />
            <div class="p-4">
              <h3 class="text-md font-bold mt-0 font-sans from-neutral-950 ">Beautiful Sunset</h3>
              <p class="text-gray-600 mt-0">Experience the magic of the golden hour from anywhere.</p>
              <button class="mt-4 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600">
                Explore
              </button>
            </div>
          </div>

          <div class="max-w-80 h-2/4 bg-white border rounded-lg shadow overflow-hidden">
            <img class="w-5/6 h-44 ml-6 rounded-md mt-4 object-cover" src={astro} alt="Card Image" />
            <div class="p-4">
              <h3 class="text-md font-bold mt-0 font-sans from-neutral-950 ">Beautiful Sunset</h3>
              <p class="text-gray-600 mt-0">Experience the magic of the golden hour from anywhere.</p>
              <button class="mt-4 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600">
                Explore
              </button>
            </div>
          </div>

          <div class="max-w-80 h-2/4 bg-white border rounded-lg shadow overflow-hidden">
            <img class="w-5/6 h-44 ml-6 rounded-md mt-4 object-cover" src={astro} alt="Card Image" />
            <div class="p-4">
              <h3 class="text-md font-bold mt-0 font-sans from-neutral-950 ">Beautiful Sunset</h3>
              <p class="text-gray-600 mt-0">Experience the magic of the golden hour from anywhere.</p>
              <button class="mt-4 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600">
                Explore
              </button>
            </div>
          </div>

          <div class="max-w-80 h-2/4 bg-white border rounded-lg shadow overflow-hidden">
            <img class="w-5/6 h-44 ml-6 rounded-md mt-4 object-cover" src={astro} alt="Card Image" />
            <div class="p-4">
              <h3 class="text-md font-bold mt-0 font-sans from-neutral-950 ">Beautiful Sunset</h3>
              <p class="text-gray-600 mt-0">Experience the magic of the golden hour from anywhere.</p>
              <button class="mt-4 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600">
                Explore
              </button>
            </div>
          </div>

          <div class="max-w-80 h-2/4 bg-white border rounded-lg shadow overflow-hidden">
            <img class="w-5/6 h-44 ml-6 rounded-md mt-4 object-cover" src={astro} alt="Card Image" />
            <div class="p-4">
              <h3 class="text-md font-bold mt-0 font-sans from-neutral-950 ">Beautiful Sunset</h3>
              <p class="text-gray-600 mt-0">Experience the magic of the golden hour from anywhere.</p>
              <button class="mt-4 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600">
                Explore
              </button>
            </div>
          </div>



        </div>

      </div>




    </div >
  );
}

export default Service;