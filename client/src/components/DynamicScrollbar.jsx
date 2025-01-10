import { useEffect } from "react";

export default function DynamicScrollbar() {
    useEffect(() => {
        const handleScroll = () => {
          const scrollTop = document.documentElement.scrollTop;
          const scrollHeight =
            document.documentElement.scrollHeight - document.documentElement.clientHeight;
          const scrollPercentage = (scrollTop / scrollHeight) * 100;
    
          let color;
    
          if (scrollPercentage <= 35) {
            // Orange to Blue (0% to 30%)
            const progress = scrollPercentage / 40;
            const red = Math.round(255 - progress * (255 - 0)); // Decrease red
            const green = Math.round(165 - progress * (165 - 0)); // Decrease green
            const blue = Math.round(progress * 255); // Increase blue
            color = `rgb(${red}, ${green}, ${blue})`;
          } else if (scrollPercentage <= 70) {
            // Blue to Green (31% to 60%)
            const progress = (scrollPercentage - 40) / 40;
            const red = 0; // Stay 0
            const green = Math.round(progress * 255); // Increase green
            const blue = Math.round(255 - progress * (255 - 0)); // Decrease blue
            color = `rgb(${red}, ${green}, ${blue})`;
          } else {
            // Green (61% to 100%)
            color = `rgb(0, 255, 0)`;
          }
    
          // Debugging output for scroll percentage and color
    
          // Update the scrollbar thumb color
          document.documentElement.style.setProperty("--scrollbar-thumb-color", color);
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);
  return <></>;
}
