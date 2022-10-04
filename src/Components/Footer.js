import React from "react";

export default function Footer() {
  return (
    <div className="mt-16 flex flex-col items-center w-full p-16">
      <img src="img/logo.png" alt="" className="h-32" />
      <div className="text-center flex flex-col items-center">
        <p className="text-lg font-medium md:w-5/12">
          RELIK is a registered trademark of RELIK Inc. <br /> All Rights Reserved.
          RELIK
        </p>
        <p className="text-gray-400 my-10 text-sm md:w-7/12">
          All logos are registered trademarks of their respective owners. All
          contents of this document, unless otherwise credited, are copyright ©
          2022 RELIK Inc.
        </p>
      </div>
    </div>
  );
}
