import React from "react";

interface CardProps {
  heading: string;
  strongHeading: string;
  description: string;
}

const Services: React.FC = () => {
  return (
    <div className="services w-full sm:w-5/6 mx-auto">
      <div className="main font-extralight my-12">
        <div className="pb-14 space-y-2">
          <h1 className="text-center text-2xl md:text-3xl font-medium">
            Services
          </h1>
          <p className="text-center text-sm md:text-base">
            Explore our comprehensive services in consulting, IT services, and
            digital transformation tailored for your needs.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* First Box */}
          <div className="px-10 py-8 sm:px-20 sm:py-10 first-gradient relative overflow-hidden cursor-pointer rounded-xl">
            <CardWithLines
              heading="IT"
              strongHeading="Services"
              description="Utilizing technical expertise to optimize your organization's information and business processes effectively.
              We understand the significance of streamlining processes for optimal efficiency. Our team of seasoned professionals is dedicated to facilitating the ease of doing business, leveraging cutting-edge technologies and innovative strategies."
            />
            <div className="absolute -top-14 -left-10 w-32 h-32 sm:w-44 sm:h-44 rounded-full border-2 border-black/10"></div>
          </div>

          {/* Second Box */}
          <div className="px-10 py-8 sm:px-20 sm:py-10 second-gradient text-white relative overflow-hidden cursor-pointer rounded-xl">
            <CardWithLines
              heading="Consulting"
              strongHeading="Services"
              description="Our consulting services provide insightful, data-driven strategies, while our custom solutions offer a complete overhaul of your systems. Additionally, our commitment to providing holistic, end-to-end custom solutions guarantees that every aspect of your company's requirements is met with precision and innovation."
            />
            <div className="absolute -top-14 -left-10 w-32 h-32 sm:w-44 sm:h-44 rounded-full border-2 border-white/20"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

const CardWithLines: React.FC<CardProps> = ({
  heading,
  strongHeading,
  description,
}) => {
  return (
    <>
      <h1 className="text-2xl sm:text-3xl">
        {heading} <strong className="italic">{strongHeading}</strong>
      </h1>
      <p className="text-xs sm:text-sm py-3">{description}</p>
    </>
  );
};
