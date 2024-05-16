import React,{useState} from 'react'
import { destn } from '../data/destination';
import "../App.css"
const Location = () => {

  const [locs, setLocs] = useState(destn);
  return (
    <>
     <div>
       <div className=" hidden sm:flex justify-evenly sm:bg-gradient-to-b from-[#092579] to-[#25D765] box-border h-[250vh] w-[40%] md:w-[33%]
         md:ml-[150px]  top-0 -z-10">
          <div className=" bg-gray-500 bg-opacity-50 w-0.5 h-[100%] "></div>
          <div className=" bg-gray-500 bg-opacity-50 w-0.5 h-[100%] "></div>
       </div>
       <div className="locBox ml-[2vw] md:ml-[19vw] flex-col mt-[7vh] sm:mt-[-1350px]">
         <div className="grid grid-cols-1 sm:grid-cols-2 ">
           <h1 className="text-black sm:text-white h-[150px] w-[280px] p-4 md:w-[25vw] 2xl:w-[19vw] text-2xl md:text-4xl font-['Barlow'] font-black">
            MOST POPULAR LOCATION WE WORK ON</h1>
           <p className=" des text-[#454242] text-[20px] md:text-[25px] 2xl:text-[28px] font-normal  lg:mr-[100px] lg:ml-[50px] 2xl:ml-[-15vw] md:w-[35vw] font-['Josefin Sans', sans-serif]">
           With our network of creators, you can choose any location for your
              videos, from major cities to the most remote areas on the planet
           </p>
         </div> 
          {/* location images */}
          <div className="all_loc mt-[40px] lg:mr-[80px] p-[15px] grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 pt-4">
            {locs.map((item) => (
              <div className="location relative flex font-bold overflow-x-hidden overflow-y-hidden ">
                <div className=" bg-gradient-to-b from-transparent via-transparent to-black absolute left-0 bottom-0 h-[35%] w-[100%] lg:w-[25vw] z-1 "></div>
                <img
                  className=" h-auto w-[100%] hover:rotate-[2deg] hover:scale-110"
                  src={item.image}
                  alt={item.name}
                />
                <h6 className="h6 text-sm md:text:md lg:text-lg absolute left-[16px] bottom-[4px] font-['Barlow'] text-white">
                  {item.name}
                </h6>
              </div>
            ))}
          </div>
          {/* trusted brands */}
          <div className="loc_3 flex flex-col sm:flex-row justify-between mt-[40px] mb-[20px]">
            <h1 className="text-md sm:text-xl md:text-2xl lg:text-3xl font-black text-black font-['Barlow'] pr-4">
              TRUSTED BY MANY BRANDS
            </h1>
            <div className=" grid grid-cols-3 lg:grid-cols-5 gap-y-4 md:ml-[7vw] lg:ml-[3vw] lg:p-[25px] p-[20px]">
              <img
                className="w-[150px] lg:w-[180px] md:w-[180px] sm:w-[120px] "
                src="https://storyvord.com/img/brand-logo11.svg"
                alt="Logo"
              />
              <img
                className="w-[150px] lg:w-[180px] md:w-[180px] sm:w-[120px]"
                src="https://storyvord.com/img/brand-logo12.svg"
                alt="Logo"
              />
              <img
                className="w-[150px] lg:w-[180px] md:w-[180px] sm:w-[120px] "
                src="https://storyvord.com/img/brand-logo13.svg"
                alt="Logo"
              />
              <img
                className="w-[150px] lg:w-[180px] md:w-[180px] sm:w-[120px] "
                src="https://storyvord.com/img/brand-logo14.svg"
                alt="Logo"
              />
              <img
                className="w-[150px] lg:w-[180px] md:w-[180px] sm:w-[120px]"
                src="https://storyvord.com/img/brand-logo15.svg"
                alt="Logo"
              />
            </div>
          </div>
       </div>
     </div>
    </>
  );
}

export default Location