import "./stylesheets/App.css";
import About from "./components/About";
import BackgroundCarousel from "./components/BackgroundCarousel";
import DynamicScrollbar from "./components/DynamicScrollbar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { useEffect, useState } from "react";

function App() {
  // const requestFullScreen = () => {
  //   if (document.documentElement.requestFullscreen) {
  //     document.documentElement.requestFullscreen(); // Standard method
  //   } else if (document.documentElement.mozRequestFullScreen) {
  //     document.documentElement.mozRequestFullScreen(); // Firefox
  //   } else if (document.documentElement.webkitRequestFullscreen) {
  //     document.documentElement.webkitRequestFullscreen(); // Chrome, Safari, Opera
  //   } else if (document.documentElement.msRequestFullscreen) {
  //     document.documentElement.msRequestFullscreen(); // IE/Edge
  //   }
  // };

  // useEffect(() => {
  //   document.addEventListener("click", requestFullScreen);

  //   return () => {
  //     document.removeEventListener("click", requestFullScreen);
  //   };
  // }, []);

  // 626
  const [scrollInfo, setScrollInfo] = useState({
    scrollTop: 0, // How much the user has scrolled (in pixels)
    scrollHeight: 0, // Total height of the document
    scrollPercentage: 0, // Scroll progress as a percentage
  });

  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;

    setScrollInfo({
      scrollTop: scrollTop.toFixed(0), // Pixels scrolled from the top
      scrollHeight: scrollHeight.toFixed(0), // Total document height
      scrollPercentage: scrollPercentage.toFixed(2), // Percentage scrolled
    });
  };

  useEffect(() => {
    // Initial setup
    handleScroll();

    // Listen to the scroll event
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll); // Handle changes in viewport size

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <>
      <DynamicScrollbar />
      <BackgroundCarousel scrollInfo={scrollInfo} />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
