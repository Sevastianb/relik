import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
  AOS.init({
    duration: 1000,
  });
  return (
    <div className="mt-24 pb-16 mb-5 about border-y bg-cover bg-center border-white/10 w-full flex justify-center">
      <div className="w-10/12 grid lg:grid-cols-about">
        <div>
          <div className="md:pr-10 mt-16 w-full h-80 lg:border-r border-white/10">
            <div className="flex mt-5" data-aos="fade-down">
              <img src="/img/btn-arrow.png" className="h-2 mt-2" alt="" />
              <div className="ml-10">
                <h1 className="font-bold">METAVERSE SOLUTION</h1>
                <p className="text-sm text-gray-400">
                  Creation of immersive multiplayer metaverse experience.
                </p>
              </div>
            </div>
            <div
              className="flex mt-5"
              data-aos="fade-down"
              data-aos-delay="300"
            >
              <img src="/img/btn-arrow.png" className="h-2 mt-2" alt="" />
              <div className="ml-10">
                <h1 className="font-bold">3D ARTWORK</h1>
                <p className="text-sm text-gray-400">
                  Ultra realistic 4K models with cinematic animations.
                </p>
              </div>
            </div>
            <div
              className="flex mt-5"
              data-aos="fade-down"
              data-aos-delay="500"
            >
              <img src="/img/btn-arrow.png" className="h-2 mt-2" alt="" />
              <div className="ml-10">
                <h1 className="font-bold">TURNKEY PROJECTS</h1>
                <p className="text-sm text-gray-400">
                  Development of complete NFT projects from start to finish.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse lg:flex-row justify-between md:pl-10">
          <div data-aos="fade-up" data-aos-delay="1000">
            <h1 className="mt-16 text-3xl font-bold">
              OUR <span className="text-purple-500">CAPABILITIES</span>
            </h1>
            <p className="mt-5">
              We take pride in being the leaders in NFT and Metaverse creation
              and innovation, delivering solutions of the highest quality to our
              clients and partners. From 2D/3D artwork to complete turn key NFT
              projects with highly complex multiplayer metaverse systems and 4K
              cinema quality animations. Brining the next generation custom
              assets for our and our partners projects. 
            </p>
          </div>
          <img src="/img/about-img-1.png" alt="" className="h-80" />
        </div>
      </div>
    </div>
  );
}
