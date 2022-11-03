import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ReferalProgram() {
  AOS.init({
    duration: 1000,
  });
  return (
    <div className="pb-16 mb-5 about border-y bg-cover bg-center border-white/10 lg:mt-20 w-full flex justify-center">
      <div className="w-10/12 grid gap-10 md:grid-cols-referal">
        <div>
          <div>
            <h1 className="mt-16 text-3xl font-bold uppercase" data-aos="fade-in">
              Metaverse <span className="text-purple-500">Worlds</span>
            </h1>
            <p className="mt-5" data-aos="fade-in">
              Immersive metaverse worlds created by the human mind and forever
              transfered into the realm of virtual reality immortalized and set
              in the new age "electronical stone" on the blockchain. Ultra
              realistic, stylized or even cartoon, it is all a possiblity. Let
              your imagination flow.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-5 text-center mt-10">
            <div class="container flex items-center relative overflow-hidden rounded-md">
              <img
                src="/img/referal-image1.webp"
                className="w-full rounded-lg mr-5"
                alt=""
              />
              <img
                src="/img/referal-image2.webp"
                className="w-full rounded-lg mr-5"
                alt=""
              />
              <img
                src="/img/referal-image3.webp"
                className="w-full rounded-lg mr-5"
                alt=""
              />
              <img
                src="/img/referal-image4.webp"
                className="w-full rounded-lg mr-5"
                alt=""
              />
              <img
                src="/img/referal-image5.webp"
                className="w-full rounded-lg mr-5"
                alt=""
              />
              <img
                src="/img/referal-image6.webp"
                className="w-full rounded-lg mr-5"
                alt=""
              />
              <img
                src="/img/referal-image7.webp"
                className="w-full rounded-lg mr-5"
                alt=""
              />
              <img
                src="/img/referal-image8.webp"
                className="w-full rounded-lg mr-5"
                alt=""
              />
              <img
                src="/img/referal-image9.webp"
                className="w-full rounded-lg mr-5"
                alt=""
              />
              <img
                src="/img/referal-image10.webp"
                className="w-full rounded-lg mr-5"
                alt=""
              />
              <img
                src="/img/referal-image11.webp"
                className="w-full rounded-lg mr-5"
                alt=""
              />
              <img
                src="/img/referal-image12.webp"
                className="w-full rounded-lg mr-5"
                alt=""
              />
              <img
                src="/img/referal-image13.webp"
                className="w-full rounded-lg mr-5"
                alt=""
              />
              <img
                src="/img/referal-image14.webp"
                className="w-full rounded-lg mr-5"
                alt=""
              />
              <img
                src="/img/referal-image15.webp"
                className="w-full rounded-lg mr-5"
                alt=""
              />
            </div>
            <div class="container flex items-center relative overflow-hidden rounded-md">
              <img
                src="/img/referal-img1.webp"
                className="w-full rounded-lg mr-5"
                alt=""
              />
              <img
                src="/img/referal-img2.webp"
                className="w-full rounded-lg mr-5"
                alt=""
              />
              <img
                src="/img/referal-img3.webp"
                className="w-full rounded-lg mr-5"
                alt=""
              />
              <img
                src="/img/referal-img4.webp"
                className="w-full rounded-lg mr-5"
                alt=""
              />
              <img
                src="/img/referal-img5.webp"
                className="w-full rounded-lg mr-5"
                alt=""
              />
              <img
                src="/img/referal-img6.webp"
                className="w-full rounded-lg mr-5"
                alt=""
              />
              <img
                src="/img/referal-img7.webp"
                className="w-full rounded-lg mr-5"
                alt=""
              />
              <img
                src="/img/referal-img8.webp"
                className="w-full rounded-lg mr-5"
                alt=""
              />
              <img
                src="/img/referal-img9.webp"
                className="w-full rounded-lg mr-5"
                alt=""
              />
              <img
                src="/img/referal-img10.webp"
                className="w-full rounded-lg mr-5"
                alt=""
              />
              <img
                src="/img/referal-img11.webp"
                className="w-full rounded-lg mr-5"
                alt=""
              />
              <img
                src="/img/referal-img12.webp"
                className="w-full rounded-lg mr-5"
                alt=""
              />
              <img
                src="/img/referal-img13.webp"
                className="w-full rounded-lg mr-5"
                alt=""
              />
              <img
                src="/img/referal-img14.webp"
                className="w-full rounded-lg mr-5"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="hidden lg:flex justify-center lg:flex-row relative md:ml-20">
          <img
            src="/img/refs-scene.webp"
            alt=""
            className="h-full mt-16"
            data-aos="fade-up"
            data-aos-delay="1000"
          />
          <img
            src="/img/refs-scene-3.webp"
            alt=""
            className="absolute h-full mt-16"
            data-aos-delay="2000"
            data-aos="fade-left"
          />
          <img
            src="/img/refs-scene-4.webp"
            alt=""
            className="absolute h-full mt-16 -ml-5"
            data-aos-delay="2000"
            data-aos="fade-right"
          />
        </div>
      </div>
    </div>
  );
}
