import React from "react";
import Link from "next/link";
import Header from "./components/Header";
import Image from "next/image";
import { Cinzel_Decorative } from "next/font/google";

const tertiary = Cinzel_Decorative({
  weight:["400"],
  subsets:["latin"],
});


export default function home() {
  // project
  const projects = [
    {
      title: "Devsoll",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae nesciunt dicta distinctio id omnis?",
      bgColor: "bg-slate-500",
      imageSrc: "/image1.png", // Add the image source
      imageAlt: "Devsoll Image", // Add the image alt text
    },
    {
      title: "Project 2",
      description:
        "Another great project showcasing our skills in development and design.",
      bgColor: "bg-green-500",
      imageSrc: "/image2.png", // Add the image source
      imageAlt: "Project 2 Image", // Add the image alt text
    },
    {
      title: "Project 3",
      description:
        "A unique project designed to meet the specific needs of our client.",
      bgColor: "bg-blue-500",
      imageSrc: "/image3.png", // Add the image source
      imageAlt: "Project 3 Image", // Add the image alt text
    },
    {
      title: "Devsoll",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae nesciunt dicta distinctio id omnis?",
      bgColor: "bg-slate-500",
      imageSrc: "/image1.png", // Add the image source
      imageAlt: "Devsoll Image", // Add the image alt text
    },
    // Add more projects here
  ];
  // project end

  return (
    <div>
      {/* main interface */}
      <div className="relative text-white">
        <Image
          src="/image1.png"
          alt=""
          width={1000}
          height={1000}
          className="w-screen h-screen object-cover relative brightness-50"
        />
        <div className="absolute inset-0 z-20">
          <Header />
          <h1 className={`absolute -z-10 inset-0 h-screen flex items-center justify-center text-center text-5xl mb-4 ${tertiary.className}`}>
            &quot;Brings Your Vision to Life with Innovative Solutions.&quot;
          </h1>
        </div>
      </div>
      {/* services */}
      <div className="p-28 px-36">
        <div>
          <h1 className="text-5xl font-medium">Services</h1>
          <p className="border-b-2 w-40 text-lg">
            <Link href="/">View all services</Link>
          </p>
        </div>
        <div className=" grid grid-cols-2 gap-x-20">
          <div className="col-span-1 font-light">
            <div className="py-6 space-y-2 border-b-2">
              <h1 className="text-2xl font-medium">Branding</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint,
                in?
              </p>
            </div>
            <div className="py-6 space-y-2 border-b-2">
              <h1 className="text-2xl font-medium">UI/UX Design</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint,
                in?
              </p>
            </div>
            <div className="py-6 space-y-2 border-b-2">
              <h1 className="text-2xl font-medium">Web Development</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint,
                in?
              </p>
            </div>
            <div className="py-6 space-y-2 border-b-2">
              <h1 className="text-2xl font-medium">Mobile Application development</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint,
                in?
              </p>
            </div>
          </div>
          <div className="text-6xl flex items-center justify-center">
            <Image
              src="/image 1.svg"
              alt=""
              width={500}
              height={500} />
          </div>
        </div>

      </div>
      {/* projects */}
      <div className="pt-10 ">
        <div className="text-center pb-20">
           <div className="space-y-4">
                <h1 className="text-4xl">Projects</h1>
                <p>Projects our team loved working on</p>
           </div>
        </div>
        <div className="space-y-8 px-4 py-8 md:px-28">
        {projects.map((project, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-6"
          >
            {/* Image */}
            <div
              className={`${
                project.bgColor
              } w-[350px] md:w-[440px] aspect-[3/2] rounded-lg ${
                index % 2 === 1 ? "md:order-last" : ""
              }`}
            >
              <Image
                src={project.imageSrc} // Image path
                alt={project.imageAlt} // Image alt text
                width={440} // Set image width
                height={300} // Set image height
                className="object-cover w-full h-full rounded-lg" // Make the image fill the box
              />
            </div>

            {/* Text */}
            <div className="w-[350px] md:w-[440px] md:m-auto space-y-6 p-6">
              <h1 className="text-3xl">{project.title}</h1>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
      </div>
      {/* achievement */}
      <div className="p-10 px-28 h-screen grid grid-cols-2 justify-between ">
        <div className="space-y-10 w-[485] flex flex-col justify-center items-center">
            <h1 className="text-5xl font-semibold leading-relaxed">Driving Success Through Innovation</h1>
            <p>&quot;Our approach is built on leveraging technology to create positive change, delivering exceptional results that fuel growth and success. Join us in reaching new heights through the power of digital transformation.&quot;</p>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 text-center text-2xl font-light">
            <div className="flex flex-col items-center justify-center space-y-3">
                <h1 className="text-5xl font-semibold">100+</h1>
                <p>hours of work</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-3">
                <h1 className="text-5xl font-semibold">13+</h1>
                <p>happy clients</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-3">
                <h1 className="text-5xl font-semibold">100%</h1>
                <p>quality oriented</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-3">
                <h1 className="text-5xl font-semibold">14+</h1>
                <p>project delivered</p>
            </div>

        </div>
      </div>
      {/* CTA */}
      <div className="p-10 h-screen grid grid-cols-2 bg-black text-white">
        <div className="p-24 border-r-[1px] border-gray-400 flex flex-col items-center justify-center">
          <div className="space-y-8">
            <h1 className="text-5xl font-semibold">Ready....?</h1>
              <p className="font-light">&quot;Let&apos;s turn your ideas into reality. Our team is here to create designs that elevate your brand and drive success.&quot;</p>
              <Link href="/">
                  <button className="bg-slate-600 hover:bg-white hover:text-black duration-300 rounded-full h-14 w-60 mt-4 font-semibold">Get a free quote</button>
              </Link>
          </div>
        </div>
        <div className="flex justify-center items-center">
            <h1 className="p-24 text-5xl text-center font-extralight leading-relaxed">&quot;Let&apos;s Make Your Project the Next Big Thing!&quot;</h1>
        </div>
      </div>  

      
    </div>
  );
}
