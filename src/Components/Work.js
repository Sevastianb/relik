import React from "react";

export default function Work() {
  return (
    <div className="mt-20 flex justify-center w-full" id="work">
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5 w-10/12">
        <Card title="Product Name" img="/img/img1.webp" quantity="1/200000" />
        <Card title="Product Name" img="/img/img2.jpg" quantity="1/200000" />
        <Card title="Product Name" img="/img/img3.jpg" quantity="1/200000" />
        <Card title="Product Name" img="/img/img4.jpg" quantity="1/200000" />
        <VideoCard
          title="Product Name"
          video="/img/v1.mp4"
          quantity="1/200000"
        />
        <VideoCard
          title="Product Name"
          video="/img/v2.mp4"
          quantity="1/200000"
        />
        <VideoCard
          title="Product Name"
          video="/img/v3.mp4"
          quantity="1/200000"
        />
        <VideoCard
          title="Product Name"
          video="/img/v4.mp4"
          quantity="1/200000"
        />
      </div>
    </div>
  );
}

function Card({ title, img, quantity }) {
  return (
    <div className="shadow-2xl w-[296x] shadow-black/20 bg-secondary hover:bg-blue-700/10 transition-all p-3 rounded-3xl">
      <p className="mb-3">relik</p>
      <div
        className="w-full h-[275px] 3xl:h-[355px] 2xl:h-[275px] xl:h-[225px] md:h-[175px] rounded-xl bg-cover bg-center "
        style={{ backgroundImage: `url(${img})` }}
      ></div>
    </div>
  );
}

function VideoCard({ title, video, quantity }) {
  return (
    <div className="shadow-2xl w-[296x] shadow-black/20 bg-secondary hover:bg-blue-700/10 transition-all p-3 rounded-3xl">
      <p className="mb-3">relik</p>
      <div className="w-full overflow-hidden relative h-[275px] 3xl:h-[355px] 2xl:h-[275px] xl:h-[225px] md:h-[175px] rounded-xl bg-cover bg-center">
        <video
          className="w-full absolute top-0"
          autoPlay muted playsInline loop
        >
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
