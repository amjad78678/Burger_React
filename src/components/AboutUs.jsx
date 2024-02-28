import React from 'react';

const AboutUs = () => {
  return (
    <section className="bg-red-100 rounded-2xl p-5 mb-10">
      <div className="container mx-auto">
        <div className="py-5 lg:py-28">
          <h2 className="text-center text-4xl font-bold mb-5">Our Services</h2>

          <p className="lg:w-1/2 text-center lg:text-center lg:mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet odit,
            nemo facilis iure natus quaerat dolorum, vel, vero autem explicabo
            itaque ratione placeat! Ratione deserunt corrupti, rem doloremque
            optio ut.
          </p>
        </div>

        <div className="flex flex-wrap lg:pb-28 justify-center">
          <div className="w-full  xl:w-1/3 lg:w-1/2  p-5">
            <div className="bg-white p-10 rounded-2xl shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="mx-auto w-16 h-16 text-blue-600 mb-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
                />
              </svg>

              <h3 className="font-bold text-center text-gray-700 text-2xl mb-2">
                Design
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Doloremque corporis quam omnis nam nemo asperiores quod. Unde
                corporis laboriosam rem quae, odio fuga animi debitis iste
                aliquam, mollitia atque dignissimos!
              </p>
            </div>
          </div>
          <div className="w-full  xl:w-1/3 lg:w-1/2 p-5">
            <div className="bg-white p-10 rounded-2xl shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="mx-auto w-16 h-16 text-blue-600 mb-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
                />
              </svg>

              <h3 className="font-bold text-center text-gray-700 text-2xl mb-2">
                Development
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Doloremque corporis quam omnis nam nemo asperiores quod. Unde
                corporis laboriosam rem quae, odio fuga animi debitis iste
                aliquam, mollitia atque dignissimos!
              </p>
            </div>
          </div>
          <div className="w-full  xl:w-1/3 lg:w-1/2 p-5">
            <div className="bg-white p-10 rounded-2xl shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="mx-auto w-16 h-16 text-blue-600 mb-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z"
                />
                <path
                  strokeLinecap="round"   
                  strokeLinejoin="round"
                  d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z"
                />
              </svg>

              <h3 className="font-bold text-center text-gray-700 text-2xl mb-2">
                Digital Marketing
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Doloremque corporis quam omnis nam nemo asperiores quod. Unde
                corporis laboriosam rem quae, odio fuga animi debitis iste
                aliquam, mollitia atque dignissimos!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
