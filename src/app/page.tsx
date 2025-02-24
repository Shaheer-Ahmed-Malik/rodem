
"use client";

import React, { useEffect, useRef } from "react"; // useRef import karein
import Link from "next/link";
import Header from "./components/Header";
import Image from "next/image";
import { Cinzel_Decorative } from "next/font/google";

const tertiary = Cinzel_Decorative({
  weight: ["400"],
  subsets: ["latin"],
});

export default function Home() {
  // Ref for Achievement Section
  const achievementSectionRef = useRef(null);

  // Counter Animation Script
  useEffect(() => {
    const achievementSection = achievementSectionRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Start counter animation
            const counters = document.querySelectorAll(".animate-count-up");

            counters.forEach((counter) => {
              if (counter instanceof HTMLElement) {
                const target = Number(counter.getAttribute("data-target")) || 0; // Ensure it's a number
                const duration = 2000; // Animation duration in milliseconds
                const increment = target / (duration / 16); // 16ms for 60fps

                let current = 0;
                const updateCounter = () => {
                  current += increment;
                  if (current < target) {
                    counter.textContent = Math.ceil(current) + "+"; // Add "+" sign
                    requestAnimationFrame(updateCounter);
                  } else {
                    counter.textContent = target + "+"; // Add "+" sign
                  }
                };
                updateCounter();
              }
            });

            // Stop observing after animation starts
            if (achievementSection) {
              observer.unobserve(achievementSection);
            }
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (achievementSection) {
      observer.observe(achievementSection);
    }

    // Cleanup observer on unmount
    return () => {
      if (achievementSection) {
        observer.unobserve(achievementSection);
      }
    };
  }, []);

  // project
  const projects = [
    {
      title: "Bandage",
      description:
        "Custom E-commerce Platform using Next.js Typescript and Tailwind Meets the needs of our client",
      bgColor: "bg-slate-500",
      imageSrc: "/custom -ecommerce-website.jpg", // Add the image source
      imageAlt: "Devsoll Image", // Add the image alt text
    },
    {
      title: "Edvora",
      description:
        "Another great project showcasing our skills in development and design.",
      bgColor: "bg-green-500",
      imageSrc: "/Edvora2.jpg", // Add the image source
      imageAlt: "Project 2 Image", // Add the image alt text
    },
    {
      title: "Manzzari",
      description:
        "Designed the complete UI, brand guidelines, and logo for a luxury jewelry website, ensuring a sophisticated and timeless brand identity that reflects elegance and exclusivity",
      bgColor: "bg-blue-500",
      imageSrc: "/Jewelry-website.jpg", // Add the image source
      imageAlt: "Jewelry-website.jpg", // Add the image alt text
    },
    {
      title: "Devsoll",
      description:
        "Designed the UI, brand guidelines, and logo for DevSoll, ensuring a modern and cohesive brand identity.",
      bgColor: "bg-slate-500",
      imageSrc: "/devsoll.png", // Add the image source
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
          <h1
            className={`absolute -z-10 inset-0 h-screen flex items-center justify-center text-center text-5xl mb-4 ${tertiary.className}`}
          >
            &quot;Brings Your Vision to Life with Innovative Solutions.&quot;
          </h1>
        </div>
      </div>
      {/* services */}
      <div className="p-10 md:p-28 space-y-6">
        <div className="text-center md:text-left space-y-4">
          <h1 className="text-4xl">Services</h1>
          <p>
            <Link href="/">View all services</Link>
          </p>
        </div>
        <div className="md:flex justify-between items-center gap-16">
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
              <h1 className="text-2xl font-medium">
                Mobile Application development
              </h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint,
                in?
              </p>
            </div>
          </div>
          <div className="text-6xl flex items-center justify-center">
            <Image src="/image 1.svg" alt="" width={500} height={500} />
          </div>
        </div>
      </div>
      {/* projects */}
      <div className="">
        <div className="text-center pt-20 md:pb-20">
          <div className="space-y-4">
            <h1 className="text-4xl">Projects</h1>
            <p>Projects our team loved working on</p>
          </div>
        </div>
        <div className="space-y-8 px-4 py-8 md:px-28">
          {projects.map((project, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-2 justify-items-center md:gap-6"
            >
              {/* Image */}
              <div
                className={`${project.bgColor} w-[350px] md:w-[440px] aspect-[3/2] rounded-lg ${
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
      <div
        ref={achievementSectionRef}
        className="md:h-screen flex flex-col md:flex-row p-10 pb-20 md:p-28 justify-center md:justify-between items-center space-y-20 md:space-y-0 "
      >
        <div className="space-y-10 md:w-[485] flex flex-col justify-center items-center">
          <h1 className="text-5xl font-semibold leading-relaxed">
            Driving Success Through Innovation
          </h1>
          <p>
            &quot;Our approach is built on leveraging technology to create
            positive change, delivering exceptional results that fuel growth and
            success. Join us in reaching new heights through the power of digital
            transformation.&quot;
          </p>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-10 md:gap-28 text-center text-xl font-light">
          <div className="flex flex-col items-center justify-center space-y-3">
            <h1 className="text-5xl font-semibold animate-count-up" data-target="100">
              0+
            </h1>
            <p>hours of work</p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-3">
            <h1 className="text-5xl font-semibold animate-count-up" data-target="13">
              0+
            </h1>
            <p>happy clients</p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-3">
            <h1 className="text-5xl font-semibold animate-count-up" data-target="9">
              0+
            </h1>
            <p>High-End Projects</p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-3">
            <h1 className="text-5xl font-semibold animate-count-up" data-target="14">
              0+
            </h1>
            <p>project delivered</p>
          </div>
        </div>
      </div>
      {/* CTA */}
      <div className="hidden md:block">
        <div className="p-10 h-screen grid grid-cols-2 bg-black text-white">
          <div className="p-24 border-r-[1px] border-gray-400 flex flex-col items-center justify-center">
            <div className="space-y-8">
              <h1 className="text-5xl font-semibold  hidden md:block">
                Ready....?
              </h1>
              <p className="font-light hidden md:block">
                &quot;Let&apos;s turn your ideas into reality. Our team is here
                to create designs that elevate your brand and drive success.&quot;
              </p>
              <Link href="/">
                <button className="bg-slate-600 hover:bg-white hover:text-black duration-300 rounded-full h-14 w-60 mt-4 font-semibold">
                  Get a free quote
                </button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center items-center ">
            <h1 className="md:p-24 text-5xl text-center font-extralight leading-relaxed">
              &quot;Let&apos;s Make Your Project the Next Big Thing!&quot;
            </h1>
          </div>
        </div>
      </div>

      <div className="block md:hidden">
        <div className="h-screen bg-black text-white flex flex-col justify-center items-center space-y-20">
          <h1 className="text-5xl text-center font-extralight leading-relaxed">
            &quot;Let&apos;s Make Your Project the Next Big Thing!&quot;
          </h1>
          <button className="bg-slate-600 hover:bg-white hover:text-black duration-300 rounded-full h-14 w-60 mt-4 font-semibold">
            Get a free quote
          </button>
        </div>
      </div>
    </div>
  );
}