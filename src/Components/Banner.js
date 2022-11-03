import React from "react";
import AOS from "aos";
import { Link } from "react-scroll";
import "aos/dist/aos.css";

export default function Banner() {
  AOS.init({
    duration: 1000,
  });
  return (
    <div className="header-content w-full flex items-center justify-center">
      <div className="flex items-center justify-center w-10/12">
        <div className="grid md:grid-cols-2 w-full">
          <div className="mt-16 md:m-0 flex flex-col justify-center">
            <h1
              data-aos="fade-right"
              className="text-3xl md:text-6xl font-bold capitalize"
            >
              Worlds leading{" "}
              <span className="text-purple-500"> NFT & metaverse studio</span>
            </h1>
            <p data-aos="fade-right" data-aos-delay="200" className="mt-5">
              The RELIK brand is the embodiment of excellence in Web3 along with
              the virtual realm.
            </p>
            <Link
              to="work"
              spy={true}
              smooth={true}
              offset={50}
              duration={700}
              className="mt-5 cursor-pointer w-36 bg-purple-500 text-white transition-all px-6 py-3 rounded-full hover:bg-purple-400 hover:shadow-xl hover:shadow-gray-800"
            >
              Learn More
            </Link>
          </div>
          <div
            className="relative h-96 mt-10 mb-5 md:m-0"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <div className="header-scene" id="header-scene">
              <div className="header-scene__item" data-depth="0.1">
                <img src="img/header-scene-1.webp" alt="header-scene-1" />
              </div>
              <div className="header-scene__item">
                <img src="img/header-scene-2.webp" alt="header-scene-2" />
              </div>
              <div className="header-scene__item">
                <img src="img/header-scene-3.webp" alt="header-scene-3" />
              </div>
              <div class="header-scene__item">
                <canvas id="smoke"></canvas>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
