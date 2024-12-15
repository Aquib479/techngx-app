import { Fade } from "react-awesome-reveal";
import Card from "./card";
import { cards } from "@/constants/customData";

const About: React.FC = () => {
  return (
    <>
      <div className="main">
        <div className="main vector-image-container">
          <div className="pt-16 px-2 w-[90%] m-auto">
            <div className="md:flex space-y-4 md:space-y-0 justify-center mt-10 gap-x-8">
              {cards.map((card, index) => (
                <Fade delay={index * 400} key={index} triggerOnce>
                  <Card {...card} />
                </Fade>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
