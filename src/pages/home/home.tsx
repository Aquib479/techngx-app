import { Button } from "@/components/ui/button";
import { Fade } from "react-awesome-reveal";
import Work from "./work";
import Services from "./services";
import AboutUs from "./about-us";

const Home: React.FC = () => {
  return (
    <>
      <div className="main vector-image-container">
        <div className="home-component">
          <div
            className="main h-screen text-center relative flex justify-center items-center opacity-70 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('/assets/home.webp')` }}
          >
            <div
              className="absolute inset-0 bg-black/20 bg-opacity-40"
              style={{ zIndex: -1 }}
            ></div>
            <div
              className="absolute text-white space-y-4 px-4 md:px-0"
              style={{
                bottom: "25%",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              <Fade delay={300} direction="up" cascade triggerOnce>
                <p
                  className="font-semibold text-2xl md:text-4xl"
                  style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)" }}
                >
                  NextGen Technologies Revolutionizing Digital Solutions
                </p>
                <p className="text-sm md:text-base">
                  Revolutionize your business with our comprehensive digital
                  solutions.
                </p>
                <div className="flex justify-center items-center">
                  <Button
                    className="custom-button relative bg-indigo-600 hover:bg-white hover:text-black text-white flex items-center justify-center
                gap-x-2 border border-transparent overflow-hidden group w-36 h-10 transition-all duration-300 rounded-md hover:rounded-full font-light"
                  >
                    <span className="relative z-40 flex items-center justify-center gap-x-2 w-full h-full">
                      Learn More
                      <img
                        src="/assets/logo.png"
                        alt="ellipse.."
                        className="w-6 h-6 hidden transition-opacity duration-300 group-hover:block"
                      />
                    </span>
                    <div className="absolute inset-0 bg-indigo-600 transition-transform duration-500 transform translate-x-0 group-hover:translate-x-full"></div>
                  </Button>
                </div>
              </Fade>
            </div>
          </div>
        </div>
        <Work />
        <Services />
        <AboutUs />
      </div>
    </>
  );
};

export default Home;
