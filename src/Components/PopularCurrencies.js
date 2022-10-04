import React from "react";
import { Link } from "react-router-dom";

export default function PopularCurrencies() {
  return (
    <div className="w-full pt-16 lg:py-24 flex justify-center flex-col items-center">
      <div className="grid lg:grid-cols-2 gap-16 w-11/12 md:w-10/12">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-bold w-full uppercase">
            Popular <span className="text-purple-500">cryptocurrencies</span>
          </h1>
          <div className="flex items-center flex-col w-full text-sm lg:text-base">
            <div className="grid grid-cols-3 lg:grid-cols-4 w-full mt-12">
              <div className="text-purple-300">Name</div>
              <div className="text-purple-300 lg:pl-7 pl-5">Last Price</div>
              <div className="text-purple-300 lg:pl-7 text-right lg:text-left">
                24h Change
              </div>
              <div className="text-purple-300 text-right hidden lg:block">
                Market Cap
              </div>
            </div>
            <Currency
              img="/img/bnbLogo.png"
              name="BNB"
              shortName="BNB"
              lastprice="$267"
              change="-4.32%"
              market="$43,255M"
            />
            <Currency
              img="/img/btclogo.png"
              name="Bitcoin"
              shortName="BTC"
              lastprice="$267"
              change="-4.32%"
              market="$43,255M"
            />
            <Currency
              img="/img/ethlogo.svg"
              name="Ethereum"
              shortName="ETH"
              lastprice="$267"
              change="-4.32%"
              market="$43,255M"
            />
            <Currency
              img="/img/galxelogo.png"
              name="Galxe"
              shortName="GAl"
              lastprice="$267"
              change="-4.32%"
              market="$43,255M"
            />
            <Currency
              img="/img/greenMetaverselogo.png"
              name="Green Metaverse Token"
              shortName="GMT"
              lastprice="$267"
              change="-4.32%"
              market="$43,255M"
            />
            <Currency
              img="/img/bnbLogo.png"
              name="BNB"
              shortName="BNB"
              lastprice="$267"
              change="-4.32%"
              market="$43,255M"
            />
            <Currency
              img="/img/btclogo.png"
              name="Bitcoin"
              shortName="BTC"
              lastprice="$267"
              change="-4.32%"
              market="$43,255M"
            />
            <Currency
              img="/img/ethlogo.svg"
              name="Ethereum"
              shortName="ETH"
              lastprice="$267"
              change="-4.32%"
              market="$43,255M"
            />
          </div>
        </div>
        <div className="overflow-hidden relative rounded-xl bg-cover bg-center h-[500px]">
          <video
            className="w-full absolute top-0 left-0 right-0"
            autoPlay
            muted
            playsInline
            loop
          >
            <source src="img/polkamarkets.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
     
    </div>
  );
}

function Currency({ img, name, shortName, lastprice, change, market }) {
  return (
    <div className="grid grid-cols-3 lg:grid-cols-4 w-full mt-5 text-gray-300">
      <div className="flex items-center">
        <img src={img} className="h-7 mr-2" alt="" />
        <span className="hidden lg:block">{shortName}</span>
      </div>
      <div className="lg:pl-7 pl-5">{lastprice}</div>
      <div className="lg:pl-7 text-right lg:text-left">{change}</div>
      <div className="text-right hidden lg:block">{market}</div>
    </div>
  );
}
