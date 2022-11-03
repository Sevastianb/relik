import React from "react";

export default function ScrollToTopButton() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="flex  justify-end items-center bg-transparent z-10 h-32 bottom-0 fixed w-full">
      <div
        onClick={scrollToTop}
        className="rounded-full mr-10 bg-purple-500 shadow-xl shadow-black/10 text-white flex items-center justify-center  hover:bg-purple-500 dark:hover:bg-purple-400 cursor-pointer h-12 w-12 p-2 z-20"
      >
        ^
      </div>
    </div>
  );
}
