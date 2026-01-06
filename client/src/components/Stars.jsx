import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Star = ({ index }) => {
    const randomTop = Math.floor(Math.random() * 100);
    const randomLeft = Math.floor(Math.random() * 100);
    const randomSize = Math.random() * 2 + 1; // 1 to 3px
    const randomDuration = Math.random() * 3 + 2; // 2 to 5s
    const randomDelay = Math.random() * 2;

    return (
        <motion.div
            style={{
                position: "absolute",
                top: `${randomTop}%`,
                left: `${randomLeft}%`,
                width: `${randomSize}px`,
                height: `${randomSize}px`,
                backgroundColor: "#fff",
                borderRadius: "50%",
                boxShadow: `0 0 ${randomSize * 2}px #fff`,
            }}
            initial={{ opacity: 0.2, scale: 0.8 }}
            animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.2, 0.8] }}
            transition={{
                duration: randomDuration,
                repeat: Infinity,
                repeatType: "reverse",
                delay: randomDelay,
                ease: "easeInOut",
            }}
        />
    );
};

export default function Stars() {
    const [stars, setStars] = useState([]);

    useEffect(() => {
        // Determine number of stars based on screen size (rough estimate)
        const count = window.innerWidth < 768 ? 30 : 70;
        setStars(Array.from({ length: count }));
    }, []);

    return (
        <div
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                overflow: "hidden",
                zIndex: 0,
                pointerEvents: "none",
                background: "transparent", // Let the parent background show through
            }}
        >
            {stars.map((_, i) => (
                <Star key={i} index={i} />
            ))}
        </div>
    );
}
