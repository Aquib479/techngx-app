import { useRef } from "react";
import { motion } from "framer-motion";

interface CardProps {
  title: string;
  description: string;
  image: string;
}

const Card = ({ title, image, description }: CardProps) => {
  const gradientRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);

  const handleHoverStart = () => {
    if (gradientRef.current) {
      gradientRef.current.style.transform = "translateY(0%)";
    }
    if (titleRef.current) {
      titleRef.current.style.transform = "translateY(-20px)";
    }
    if (descriptionRef.current) {
      descriptionRef.current.style.maxHeight = "450px";
      descriptionRef.current.style.transition = "max-height 0.5s ease-in-out";
    }
  };

  const handleHoverEnd = () => {
    if (gradientRef.current) {
      gradientRef.current.style.transform = "translateY(100%)";
    }
    if (titleRef.current) {
      titleRef.current.style.transform = "translateY(0)";
    }
    if (descriptionRef.current) {
      descriptionRef.current.style.maxHeight = "60px";
      descriptionRef.current.style.transition = "max-height 0.5s ease-in-out";
    }
  };

  return (
    <motion.div
      className="relative group w-auto h-[450px] flex flex-col items-center justify-end p-6 font-extralight overflow-hidden cursor-pointer"
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
    >
      {/* Background Image */}
      <img
        src={image}
        alt={title}
        className="absolute top-0 left-0 w-full h-full object-cover rounded-xl"
        loading="lazy"
      />

      {/* Gradient Overlay */}
      <motion.div className="absolute top-0 left-0 w-full h-full z-10" />

      {/* Hover Gradient Overlay */}
      <motion.div
        ref={gradientRef}
        style={{
          transition: "transform 0.4s ease-in-out",
        }}
        className="absolute top-0 left-0 inset-0 card-gradient text-white p-4 rounded-xl"
      ></motion.div>

      {/* Card Content */}
      <div className="relative z-20 text-white">
        <h3
          ref={titleRef}
          className="text-4xl text-center font-medium transition-transform duration-500"
        >
          {title}
        </h3>
        <p
          ref={descriptionRef}
          className="text-sm mt-2 mb-4 overflow-hidden line-clamp-14 px-4 text-center"
          style={{
            maxHeight: "60px",
            transition: "max-height 0.5s ease-in-out",
          }}
        >
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default Card;
