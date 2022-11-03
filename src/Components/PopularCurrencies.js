import React from "react";
import { useState } from "react";
import BarChart from "./BarChart";
import { UserData } from "./Data";

export default function PopularCurrencies() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "On ethereum network",
        data: UserData.map((data) => data.id),
        backgroundColor: ["#8758FF"],
      },
    ],
  });
  return (
    <div className="w-full pt-16 lg:py-24 flex justify-center flex-col items-center">
      <div className="grid lg:grid-cols-2 gap-10 w-11/12 md:w-10/12">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-bold w-full uppercase">
            THERE IS{" "}
            <span className="text-purple-500">NO BETTER TIME THAN NOW</span>
          </h1>
          <p className="my-5">
            We are in the era of NFT creation similar to the internet era of
            1993.. This is just the beginning.
          </p>
          <br />
          <BarChart chartData={userData} />
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
