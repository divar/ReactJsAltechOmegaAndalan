'use client'
import * as React from 'react';
import Image from "next/image";


function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className={"flex flex-col items-center justify-center w-full h-full content-center"}>
        <div className="flex flex-row items-center justify-center w-full mt-8">
          <div className={"lg:basis-1/5 md:basis"}></div>
          <div className={"lg:basis-1/3 md:basis"}>
            <p className="font-sans text-lg text-gray-600">
              <p className={"font-bold text-4xl"}>About Us</p>
              THE PEOPLE , OUR COMMUNITY

              We are an IT Company based in Jakarta, with 4 branch offices in Indonesia, Singapore, Hong Kong, and San Francisco.
              We have a strong determination, commitment and persistence to bring a top-notch IT solutions to help your business operations reach its optimum
              state and to bring the best out of your business.
            </p>
          </div>
        </div>
        <div className="flex flex-row items-center justify-start w-full mt-52">
          <div className={"lg:basis-1/3"}>
            <p className="font-sans text-lg font-bold text-gray-600">
              Get in Touch<br/>
              +6281296556868<br/>
              a.sieto@altechomega.com<br/>
              Jl. Tomang Raya no. 8 E-F, Jakarta Barat, DKI Jakarta 11430
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default About;
