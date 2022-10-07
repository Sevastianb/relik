import React from "react";

export default function Clients() {
  return (
    <div className="flex w-full justify-center mt-20">
      <div className="grid md:grid-cols-2 gap-5 w-11/12 md:w-10/12">
        <div
          className="bg-cover h-96 md:h-auto bg-center shadow-xl rounded-3xl"
          style={{ backgroundImage: "url(img/img1.webp)" }}
        ></div>
        <div className=" bg-secondary shadow-xl p-7 gap-3 rounded-3xl">
          <h1 className="text-center mb-10 font-bold">
            AWESOME PEOPLE WE WORKED WITH
          </h1>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
            <Card link="https://frankynft.com/" img="/img/frankylogo.webp" />
            <Card link="https://alienbees.club/" img="/img/alienbeeslogo.webp" />
            <Card link="https://sl2.capital/" img="/img/logo.svg" />
            <Card link="https://www.caduceus.foundation/" img="/img/logocad.png" />
            <Card link="https://adventuresofb11.com/#/" img="/img/logob11.png" />
            <Card link="https://www.pollinate.co.uk/es/" img="/img/logopolinate.png" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Card({ img, link }) {
  return (
    <a href={link} className="bg-secondary border-2 p-3 border-white/10 h-28 shadow-xl shadow-gray-900 hover:shadow-black/40 transition-all flex items-center justify-center rounded-2xl">
      <img src={img} className="h-8" alt="" />
    </a>
  );
}
