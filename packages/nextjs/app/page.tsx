"use client";

import type { NextPage } from "next";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5 w-[90%] md:w-[75%]">
          <h1 className="text-center mb-6">
            <span className="block text-2xl mb-2">StarkCoffee</span>
            <span className="block text-4xl font-bold">
              Coffee NFT
            </span>
          </h1>
          <div className="flex flex-col items-center justify-center">
          <Image
              src="/coffee-shop.jpg"
              width="727"
              height="231"
              alt="challenge banner"
              className="rounded-xl border-4 border-primary"
            />
            <div className="max-w-3xl">
              <p className="text-center text-lg mt-8">
                The small coffee shops can join our community to provide better user experience to
                coffee lovers
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
