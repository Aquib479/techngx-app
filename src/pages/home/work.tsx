import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

import { ChevronDown, ChevronUp } from "lucide-react";

const Work: React.FC = () => {
  return (
    <>
      <div className="min-h-screen font-extralight flex flex-col items-center gap-8 py-16 w-5/6 m-auto">
        <h2 className="text-3xl text-gray-800 font-medium">
          Smart Payments & Onboarding
        </h2>
        <div className="col-span-2 space-y-1">
          <p className="text-base text-center">
            Next-generation payment and onboarding methods aim to provide
            seamless, secure, and intuitive user experiences. By integrating
            advanced technologies like biometric authentication, tokenization,
            and AI-driven fraud detection, these systems enhance trust and
            efficiency. Coupled with instant onboarding processes using digital
            KYC and blockchain verification, they empower businesses to reduce
            friction and scale globally.
          </p>
        </div>

        <div className="flex gap-6 mt-8">
          <Card
            image="/assets/h1.jpg"
            title="Next Generation Payments Platform"
            heading="Next Generation Payments Platform"
            content="Next-generation payment methods leverage technologies like blockchain, biometric authentication, and tokenization to enable faster, more secure, and seamless transactions. These systems support diverse payment options, including digital wallets, cryptocurrencies, and contactless payments, catering to the evolving needs of modern consumers."
          />
          <Card
            image="/assets/h2.jpg"
            title="Next Generation Digital Onboarding"
            heading="Next Generation Digital Onboarding"
            content="Digital onboarding simplifies and accelerates the user enrollment process by using technologies like AI-powered identity verification, eKYC, and document automation. It offers a seamless experience through features like biometric authentication and real-time data validation, reducing manual effort while enhancing security and compliance."
          />
        </div>
      </div>
    </>
  );
};

interface CardProps {
  image: string;
  title: string;
  heading: string;
  content: string;
}

export default Work;

const Card = ({ image, title, heading, content }: CardProps) => {
  const gradientRef = useRef<HTMLDivElement>(null);
  const [isGradientUp, setIsGradientUp] = useState(false);

  const handleHoverStart = () => {
    if (gradientRef.current) {
      gradientRef.current.style.transform = "translateY(0%)";
      const timer = setTimeout(() => {
        setIsGradientUp(!isGradientUp);
      }, 500);

      return () => clearInterval(timer);
    }
  };

  const handleHoverEnd = () => {
    if (gradientRef.current) {
      gradientRef.current.style.transform = "translateY(100%)";
      const timer = setTimeout(() => {
        setIsGradientUp(!isGradientUp);
      }, 500);

      return () => clearInterval(timer);
    }
  };

  return (
    <motion.div className="relative group w-96 h-96 rounded-lg overflow-hidden shadow-md">
      <div className="">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      {/* Gradient Animation */}
      <div
        ref={gradientRef}
        className="absolute overflow-hidden inset-0 client-card-gradient text-white p-10 space-y-4"
      >
        <h1 className="text-2xl mt-6">{heading}</h1>
        <p className="text-sm leading-[1.4rem]">{content}</p>
        <div className="absolute right-0 -bottom-28">
          <img
            src="/assets/Group.png"
            alt="lines.."
            className="w-[600px] h-[400px] object-cover"
            style={{
              filter: "invert(1) brightness(2)",
            }}
          />
        </div>
      </div>

      {/* Content Overlay */}
      <div className="flex flex-col justify-between p-6 z-10 cursor-pointer">
        <div>
          <h3 className="text-2xl text-center font-medium">{title}</h3>
        </div>
        <motion.div
          onClick={isGradientUp ? handleHoverEnd : handleHoverStart}
          style={{
            transition: "bottom 0.5s ease-in-out",
          }}
        >
          <div
            className={`absolute left-[45%] z-20 self-center bg-indigo-600 w-10 h-10 rounded-full shadow-lg
                 flex items-center justify-center text-white ${
                   isGradientUp ? "-top-5" : "-bottom-5"
                 }`}
          >
            {isGradientUp ? (
              <ChevronDown className="mt-4" />
            ) : (
              <ChevronUp className="mb-4" />
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
