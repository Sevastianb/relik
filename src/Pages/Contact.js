import React from "react";
import Footer from "../Components/Footer";
import Nav from "../Components/Nav";

export default function Contact() {
  return (
    <>
      <Nav />
      <div className="w-full border-b border-white/20 header-content flex flex-col py-14 md:py-20 text-smy-20 items-center text-gray-300 ">
        <div className="grid md:gap-10 md:grid-cols-2 w-10/12 lg:w-9/12">
          <div>
            <p className="text-sm w-32 border-b pb-2 font-medium border-gray-100 mt-4 uppercase">
              contact
            </p>
            <h1 className="text-4xl font-bold mt-5">
              Let's <span className="text-purple-500">get started</span>
            </h1>
            <p className="mt-5">
              Leave a message here and we shall connect with you to discuss your
              digital needs.
            </p>
          </div>
          <div className="md:p-2 mt-5 md:mt-0">
            <div className="grid lg:grid-cols-2 gap-8 w-full">
              <input
                placeholder="First Name"
                type="text"
                className="bg-transparent outline-none w-full border-b pb-3 border-gray-700"
              />
              <input
                placeholder="Last Name"
                type="text"
                className="bg-transparent outline-none w-full border-b pb-3 border-gray-700"
              />
              <input
                placeholder="Email"
                type="Email"
                className="bg-transparent outline-none w-full border-b pb-3 border-gray-700"
              />
              <input
                placeholder="Contact Number"
                type="text"
                className="bg-transparent outline-none w-full border-b pb-3 border-gray-700"
              />
              <input
                placeholder="Organization"
                type="text"
                className="bg-transparent outline-none w-full border-b pb-3 border-gray-700"
              />
              <input
                placeholder="Job title"
                type="text"
                className="bg-transparent outline-none w-full border-b pb-3 border-gray-700"
              />
            </div>
            <input
              placeholder="How can we help you"
              type="text"
              className="bg-transparent outline-none w-full border-b mt-8 pb-3 border-gray-700"
            />
            <input type="checkbox" className="my-8" id="agree" name="agree" />
            <label for="agree"> I agree to the privacy policy</label>
            <br />
            <div className="w-full">
              <button className="bg-purple-500 hover:bg-purple-700 dark:bg-purple-500 text-white transition-all px-6 py-3 text-sm rounded-full dark:hover:bg-purple-600 hover:shadow-lg hover:shadow-purple-500/25">
                Send Message
              </button>{" "}
            </div>
            <br />
            <p className="text-sm">
              You can also email us directly at{" "}
              <a href="mailto" className="text-purple-500">
                info@relik.com
              </a>
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
