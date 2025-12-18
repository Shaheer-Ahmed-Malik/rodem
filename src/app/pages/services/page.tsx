"use client";
// pages/services.tsx
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { HiArrowNarrowRight } from "react-icons/hi";

type AnimateProps = { children: React.ReactNode; className?: string };

const AnimateOnScroll: React.FC<AnimateProps> = ({ children, className }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      {children}
    </div>
  );
};

const services = [
  {
    title: "Web Development",
    description:
      "Modern, responsive websites with Next.js and TailwindCSS. Performance, UX, and scalability are our priorities.",
    features: [
      "Responsive design",
      "SEO optimized",
      "Custom CMS integration",
      "Fast-loading pages",
    ],
    icon: "/icons/web.svg",
  },
  {
    title: "Mobile App Development",
    description:
      "iOS & Android apps with smooth UX, native performance, and scalable architecture.",
    features: [
      "iOS & Android",
      "Offline support",
      "Push notifications",
      "Performance optimized",
    ],
    icon: "/icons/mobile.svg",
  },
  {
    title: "Branding",
    description:
      "Complete brand identity: logos, color palettes, typography, and brand guidelines.",
    features: [
      "Logo design",
      "Color & typography",
      "Brand guidelines",
      "Visual consistency",
    ],
    icon: "/icons/branding.svg",
  },
  {
    title: "Custom AI Chatbot Integration",
    description:
      "AI chatbots for business automation, enhancing user engagement and efficiency.",
    features: [
      "AI-powered responses",
      "24/7 availability",
      "Customizable flows",
      "API integration",
    ],
    icon: "/icons/ai.svg",
  },
  {
    title: "UI/UX Design",
    description:
      "Intuitive UI/UX design improving user engagement and product satisfaction.",
    features: [
      "Wireframing & prototyping",
      "User research",
      "Responsive design",
      "Visual consistency",
    ],
    icon: "/icons/uiux.svg",
  },
];

const processSteps = [
  { step: "Research", icon: "/icons/research.svg" },
  { step: "Design", icon: "/icons/design.svg" },
  { step: "Development", icon: "/icons/development.svg" },
  { step: "Delivery", icon: "/icons/delivery.svg" },
];

const ServicesPage: React.FC = () => {
  return (
    <main className="bg-black text-white">
      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 md:px-20 bg-black">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-red-600 animate-pulse">
          Our Services
        </h1>
        <p className="text-lg md:text-2xl text-gray-300 max-w-3xl">
          Premium solutions to elevate your business. Explore our full range of services.
        </p>
      </section>

      {/* Introduction */}
      <AnimateOnScroll className="px-6 md:px-20 py-16 max-w-4xl mx-auto text-center">
        <p className="text-gray-300 text-lg md:text-xl">
          At Rodem Limited, we blend creativity and technology to deliver scalable, user-friendly, visually stunning products. Each project is crafted to meet client goals with precision and style.
        </p>
      </AnimateOnScroll>

      {/* Services Showcase */}
      {services.map((service, idx) => (
        <AnimateOnScroll key={service.title} className="py-20 px-6 md:px-20">
          <div className={`flex flex-col md:flex-row items-center gap-10 md:gap-20 ${
            idx % 2 === 1 ? "md:flex-row-reverse" : ""
          }`}>
            <div className="md:w-1/2">
              <div className="bg-white/10 backdrop-blur-2xl rounded-xl p-8 flex flex-col justify-between h-full shadow-lg">
                <Image src={service.icon} alt={service.title} width={120} height={120} />
                <h2 className="text-3xl font-bold text-red-600 my-4">{service.title}</h2>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="list-disc list-inside text-gray-300">
                  {service.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <div className="flex justify-end text-red-600 text-2xl mt-4">
                  <HiArrowNarrowRight />
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      ))}

      {/* Metrics / Stats */}
      <section className="py-20 px-6 md:px-20 max-w-6xl mx-auto grid gap-10 md:grid-cols-3">
        {[
          { title: "Websites Delivered", value: "50+" },
          { title: "Apps Launched", value: "20+" },
          { title: "Clients Served", value: "15+" },
        ].map((stat) => (
          <AnimateOnScroll key={stat.title}>
            <div className="bg-white/10 backdrop-blur-2xl rounded-xl p-8 text-center shadow-lg hover:scale-105 transition-transform duration-300">
              <h3 className="text-3xl font-bold text-red-600 mb-2">{stat.value}</h3>
              <p className="text-gray-300">{stat.title}</p>
            </div>
          </AnimateOnScroll>
        ))}
      </section>

      {/* Process */}
      <section className="py-20 px-6 md:px-20 max-w-6xl mx-auto space-y-16">
        {processSteps.map((p) => (
          <AnimateOnScroll key={p.step}>
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
              <div className="md:w-1/6">
                <Image src={p.icon} alt={p.step} width={80} height={80} />
              </div>
              <div className="md:w-5/6 text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-red-600 mb-2">{p.step}</h3>
                <p className="text-gray-300">
                  Each project is carefully {p.step.toLowerCase()} to ensure excellence, quality, and client satisfaction.
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        ))}
      </section>

      {/* CTA */}
      <section className="bg-red-600 text-white py-20 flex justify-center items-center">
        <button className="bg-black text-red-600 px-10 py-4 rounded-full text-xl font-semibold hover:bg-white hover:text-black transition-colors duration-300">
          Get a Free Quote
        </button>
      </section>
    </main>
  );
};

export default ServicesPage;






























// "use client";
// import React, { useState, useEffect, useRef } from "react";
// import Image from "next/image";
// import { HiArrowNarrowRight } from "react-icons/hi";

// interface AnimateProps {
//   children: React.ReactNode;
//   className?: string;
// }

// // Intersection Observer for scroll reveal
// const AnimateOnScroll: React.FC<AnimateProps> = ({ children, className }) => {
//   const ref = useRef<HTMLDivElement>(null);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//           observer.unobserve(entry.target);
//         }
//       },
//       { threshold: 0.15 }
//     );

//     if (ref.current) observer.observe(ref.current);

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div
//       ref={ref}
//       className={`${className} transition-all duration-700 ease-out ${
//         isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
//       }`}
//     >
//       {children}
//     </div>
//   );
// };

// const services = [
//   {
//     title: "Web Development",
//     description:
//       "Custom, responsive, high-performance websites using modern tech stack tailored to your business needs.",
//     icon: "/icons/web.svg",
//   },
//   {
//     title: "Mobile App Development",
//     description:
//       "iOS & Android applications with smooth UX, optimized performance, and latest technologies.",
//     icon: "/icons/mobile.svg",
//   },
//   {
//     title: "Branding",
//     description:
//       "Full brand identity development including logos, color schemes, typography, and brand guidelines.",
//     icon: "/icons/branding.svg",
//   },
//   {
//     title: "Custom AI Chatbot Integration",
//     description:
//       "Smart AI chatbots for your business to automate customer interaction and improve engagement.",
//     icon: "/icons/ai.svg",
//   },
//   {
//     title: "UI/UX Design",
//     description:
//       "High-quality, intuitive user interface and user experience design for web and mobile products.",
//     icon: "/icons/uiux.svg",
//   },
// ];

// const ServicesPage: React.FC = () => {
//   return (
//     <main className="bg-black text-white">
//       {/* Hero Section */}
//       <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 md:px-20 bg-black">
//         <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-pulse text-red-600">
//           Our Services
//         </h1>
//         <p className="text-lg md:text-2xl text-gray-300 max-w-3xl">
//           We offer professional solutions to elevate your business and bring your ideas to life.
//           Explore our full range of services.
//         </p>
//       </section>

//       {/* Introduction */}
//       <AnimateOnScroll className="px-6 md:px-20 py-16 max-w-5xl mx-auto text-center">
//         <p className="text-gray-300 text-lg md:text-xl">
//           At Rodem Limited, we combine creativity and technology to deliver high-quality solutions.
//           Our team focuses on building scalable, user-friendly, and visually stunning products.
//         </p>
//       </AnimateOnScroll>

//       {/* Services Cards */}
//       <section className="py-20 px-6 md:px-20 max-w-6xl mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-3">
//         {services.map((service, index) => (
//           <AnimateOnScroll key={service.title} className="">
//             <div className="bg-white/10 backdrop-blur-2xl rounded-xl p-6 flex flex-col justify-between hover:scale-105 transition-transform duration-300 cursor-pointer h-full">
//               {/* Optional Icon */}
//               {service.icon && (
//                 <div className="mb-4">
//                   <Image src={service.icon} alt={service.title} width={50} height={50} />
//                 </div>
//               )}
//               <h3 className="text-xl md:text-2xl font-semibold mb-2 text-red-600">
//                 {service.title}
//               </h3>
//               <p className="text-gray-300 flex-1 mb-4">{service.description}</p>
//               <div className="flex justify-end text-red-600 text-2xl">
//                 <HiArrowNarrowRight />
//               </div>
//             </div>
//           </AnimateOnScroll>
//         ))}
//       </section>

//       {/* Deep Dive Section */}
//       <section className="px-6 md:px-20 py-20 max-w-6xl mx-auto space-y-16">
//         <AnimateOnScroll>
//           <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
//             <div className="md:w-1/2">
//               <Image src="/icons/web.svg" alt="Web Dev" width={150} height={150} />
//             </div>
//             <div className="md:w-1/2 text-left">
//               <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-4">
//                 Web Development
//               </h2>
//               <p className="text-gray-300 text-lg">
//                 We build modern, responsive websites using Next.js, TailwindCSS, and modern
//                 frameworks. Focus on scalability, speed, and UX.
//               </p>
//             </div>
//           </div>
//         </AnimateOnScroll>

//         <AnimateOnScroll>
//           <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-16">
//             <div className="md:w-1/2">
//               <Image src="/icons/mobile.svg" alt="Mobile Dev" width={150} height={150} />
//             </div>
//             <div className="md:w-1/2 text-left">
//               <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-4">
//                 Mobile App Development
//               </h2>
//               <p className="text-gray-300 text-lg">
//                 We create mobile apps with smooth UX, native performance, and scalable
//                 architecture for both iOS and Android.
//               </p>
//             </div>
//           </div>
//         </AnimateOnScroll>
//       </section>

//       {/* CTA Section */}
//       <section className="bg-red-600 text-white py-20 flex justify-center items-center">
//         <button className="bg-black text-red-600 px-10 py-4 rounded-full text-xl font-semibold hover:bg-white hover:text-black transition-colors duration-300">
//           Get a Free Quote
//         </button>
//       </section>
//     </main>
//   );
// };

// export default ServicesPage;
