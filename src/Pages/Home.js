import React from "react";
import About from "../Components/About";
import Banner from "../Components/Banner";
import Clients from "../Components/Clients";
import Footer from "../Components/Footer";
import Nav from "../Components/Nav";
import PopularCurrencies from "../Components/PopularCurrencies";
import ReferalProgram from "../Components/ReferalProgram";
import Win from "../Components/Win";
import Work from "../Components/Work";
import "./style.css";

export default function Home() {
  return (
    <div id="home" className="flex flex-col items-center">
      <Nav />
      <Banner/>
      <Work />
      <About />
      <Win />
      <div className="my-16 lg:mb-0 cursor-pointer lg:shadow-2xl w-full lg:w-10/12 h-72 md:h-screen lg:bg-gray-900/50 transition-all lg:p-5 rounded-3xl">
        <div className="h-full lg:h-full overflow-hidden lg:bg-yellow-50 relative rounded-xl bg-cover bg-center">
          <video
            className="h-full absolute top-0"
            autoPlay
            muted
            playsInline
            loop
          >
            <source src="img/v5.mp4" type="video/mp4" />
          </video>
        </div>  
      </div>
      <PopularCurrencies/>
      <ReferalProgram />
      <Clients />
      <Footer />
      {/* <New/> */}
    </div>
  );
}
