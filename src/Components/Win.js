import React from "react";

export default function Win() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-11/12 md:w-10/12 bg-secondary shadow-2xl shadow-black/20 gap-10 grid md:grid-cols-3 mt-16 rounded-3xl px-7 py-10 lg:p-10">
        <div>
          <h1 className="text-4xl">
            Treat yourself to our RELIK virtual beverage served by our R-Bot and
            follow us on our socials.
          </h1>
          <button
            data-aos="fade-right"
            data-aos-delay="300"
            className="mt-5 bg-pink-100 text-purple-900 font-semibold transition-all px-8 py-4 text-lg rounded-full hover:bg-gray-200 hover:shadow-xl hover:shadow-gray-800"
          >
            Join us on discord
          </button>
        </div>
        <div className="my-10 md:my-0 flex justify-center items-center">
          <img src="/img/creator1.webp" className="h-80 lg:-mt-16" alt="" />
        </div>
        <div>
          CATCH US THERE
          <div className="p-2 bg-yellow-700/80 mt-3 rounded-2xl flex items-center">
            <div className="h-16 w-16 flex items-center justify-center rounded-xl bg-orange-300">
              <img src="/img/InstagramLogo.png" alt="" className="h-5" />
            </div>
            <h1 className="text-lg ml-3">@instagram</h1>
          </div>
          <div className="p-2 bg-gray-700 mt-3 rounded-2xl flex items-center">
            <div className="h-16 w-16 flex items-center justify-center rounded-xl bg-gray-400">
              <img src="/img/twitter.png" alt="" className="h-5" />
            </div>
            <h1 className="text-lg ml-3">@twitter</h1>
          </div>
          <div className="p-2 bg-amber-900/80 mt-3 rounded-2xl flex items-center">
            <div className="h-16 w-16 flex items-center justify-center rounded-xl bg-amber-700/70">
              <img src="/img/opensea.png" alt="" className="h-5" />
            </div>
            <h1 className="text-lg ml-3">@opensea</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
