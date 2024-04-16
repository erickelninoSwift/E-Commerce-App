import React from "react";

const BestSelling = () => {
  return (
    <section className="">
      <div className="mx-auto max-w-md sm:max-w-lg md:max-w-screen-xl">
        <div className="px-4 py-8 md:px-6 md:py-12 lg:px-20">
          <h1 className="text-center text-3xl font-semibold text-gray-800 lg:text-4xl">
            Our Best Selling Collection
          </h1>

          <div className="mt-8 grid grid-cols-1 gap-6 md:mt-10 md:grid-cols-3 lg:gap-8">
            <article className="bg-slate-50 p-8">
              <div className="">
                <h2 className="text-xl text-gray-600">Mens' Scotch</h2>
                <p className="mt-2 text-xl font-semibold text-gray-800"></p>
              </div>
              <div className="mt-8 flex items-center justify-center md:mt-24">
                <img
                  className=""
                  src="/images/B_ordz017ZkqddwiA4v6Z.png"
                  alt=""
                />
              </div>
            </article>

            <article className="bg-slate-50 p-8">
              <div className="">
                <h2 className="text-xl text-gray-600">Mens' Red</h2>
                <p className="mt-2 text-xl font-semibold text-gray-800"></p>
              </div>
              <div className="mt-8 flex items-center justify-center md:mt-24">
                <img
                  className=""
                  src="/images/duAi2oyYeb4gurVEFPxlS.png"
                  alt=""
                />
              </div>
            </article>

            <article className="bg-slate-50 p-8">
              <div className="">
                <h2 className="text-xl text-gray-600">Mens' Punk</h2>
                <p className="mt-2 text-xl font-semibold text-gray-800"></p>
              </div>
              <div className="mt-8 flex items-center justify-center md:mt-24">
                <img src="/images/tGViUohuKkaMReMZpEEuR.png" alt="" />
              </div>
            </article>
          </div>

          <div className="mt-4 grid grid-cols-1 gap-5 md:mt-6 md:grid-cols-2 md:gap-6 lg:mt-8 lg:gap-8">
            <article className="bg-slate-50 p-8">
              <div>
                <h2 className="text-xl text-gray-600">Mens' Black</h2>
                <p className="mt-2 text-xl font-semibold text-gray-800"></p>
              </div>
              <div className="mt-28 flex items-center justify-center md:mt-3">
                <img src="/images/sVmJ8ze9vYMOTpkgCk8Xb.png" alt="" />
              </div>
            </article>

            <article className="bg-slate-50 p-8">
              <div>
                <h2 className="text-xl text-gray-600">Womens' Brown</h2>
                <p className="mt-2 text-xl font-semibold text-gray-800"></p>
              </div>
              <div className="mt-28 flex items-center justify-center md:mt-1">
                <img src="/images/fhf5UnwUh3E7buI1Q6gJI.png" alt="" />
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSelling;
