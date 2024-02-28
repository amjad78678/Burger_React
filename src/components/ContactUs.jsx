import React from 'react';

const ContactUs = () => {
  return (
    <section className="bg-red-100 rounded-2xl p-5 mb-10">
      <div className="container mx-auto">
        <div className="py-16 lg:py-28">
          <h2 className="text-center text-3xl lg:text-5xl font-bold">
            Contact Us
          </h2>
          <p className="lg:w-1/2 text-center mx-auto mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            ipsa, molestiae ea illum sint, nemo dicta culpa aliquid esse,
            aspernatur voluptatem distinctio? Laboriosam, expedita est sequi
            eaque repellendus magni quia?
          </p>
        </div>
        <div className="mb-28 lg:w-1/2 mx-auto">
          <form action="">
            <div className="flex border bg-white p-2 rounded focus-within:border-purple-500">
              <div className="w-auto flex px-2 text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="my-auto h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <div className="w-full">
                <span className="block text-gray-300">Enter your Name</span>
                <input
                  className="w-full p-1 focus:outline-none border-b"
                  type="text"
                />
              </div>
            </div>
            <div className="flex mt-3 border bg-white p-2 rounded focus-within:border-purple-500">
              <div className="w-auto flex px-2 text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="my-auto h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </div>
              <div className="w-full">
                <span className="block text-gray-300">Enter your Email</span>
                <input
                  className="w-full p-1 focus:outline-none border-b"
                  type="text"
                />
              </div>
            </div>
            <div className="flex mt-3 border bg-white p-2 rounded focus-within:border-purple-500">
              <div className="w-auto flex px-2 text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="my-auto h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="w-full">
                <span className="block text-gray-300">Choose One</span>
                <select
                  className="w-full p-1 focus:outline-none border-b"
                  name=""
                  id=""
                >
                  <option value="Design">Design</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="SEO">SEO</option>
                </select>
              </div>
            </div>
            <div className="flex mt-3 border bg-white p-2 rounded focus-within:border-purple-500">
              <div className="w-auto flex px-2 text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="my-auto h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="w-full">
                <span className="block text-gray-300">Enter your Message</span>
                <textarea
                  className="w-full p-1 focus:outline-none border-b"
                  rows=""
                  cols=""
                ></textarea>
              </div>
            </div>
            <div className="mt-5">
              <button className="w-full md:w-auto block mt-3 font-semibold text-white bg-purple-500 rounded px-3 py-2">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
