import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import image1 from "../assets/homeImages/homeIMG1.webp";
import image2 from "../assets/homeImages/homeIMG2.webp";
import image3 from "../assets/homeImages/homeIMG3.webp";

export default function Hero({ scrollInfo }) {
    const images = [image1, image2, image3];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(timer);
    }, [images.length]);

    return (
        <div id="home" className="position-relative w-100 vh-100 overflow-hidden bg-black">
            {/* Changing Background with Fade */}
            <AnimatePresence mode="popLayout">
                <motion.div
                    key={currentImageIndex}
                    className="position-absolute top-0 start-0 w-100 h-100"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5 }}
                    style={{
                        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.7)), url(${images[currentImageIndex]})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        zIndex: 0,
                    }}
                />
            </AnimatePresence>

            <div style={{ position: "relative", zIndex: 1, height: "100%" }}>
                <div className="container h-100 d-flex flex-column justify-content-center text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h2 className="h3 mb-3 text-uppercase letter-spacing-2" style={{ letterSpacing: "3px", color: "#ccc" }}>
                            Hello, I'm
                        </h2>

                        {/* Improved Typography for Name */}
                        <h1 className="display-1 fw-bold mb-4 text-white" style={{ textShadow: "2px 2px 10px rgba(0,0,0,0.5)" }}>
                            POOVARASAN
                        </h1>

                        <h3 className="h2 mb-4 fw-light text-light">
                            Information Technology Student & <br />
                            <motion.span
                                className="fw-bold"
                                style={{
                                    backgroundImage: "linear-gradient(45deg, #9d4edd, #ff00cc, #3333ff, #9d4edd)",
                                    backgroundSize: "300% 300%",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    display: "inline-block"
                                }}
                                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                            >
                                Web Developer
                            </motion.span>
                        </h3>

                        <motion.div
                            className="d-flex flex-wrap gap-3 mt-5"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                        >
                            <motion.a
                                href="/Poovarasan_Resume.pdf"
                                download="Poovarasan_Resume.pdf"
                                className="btn btn-lg rounded-pill px-4 py-3 fw-bold shadow fw-bold border-0 text-white"
                                style={{
                                    background: "linear-gradient(45deg, #9d4edd, #7b2cbf)",
                                    backgroundSize: "200% auto",
                                }}
                                whileHover={{ scale: 1.05, backgroundPosition: "right center" }}
                                whileTap={{ scale: 0.95 }}
                                animate={{ boxShadow: ["0 0 0 rgba(157, 78, 221, 0.4)", "0 0 20px rgba(157, 78, 221, 0.7)", "0 0 0 rgba(157, 78, 221, 0.4)"] }}
                                transition={{ boxShadow: { duration: 2, repeat: Infinity } }}
                            >
                                <i className="bi bi-download me-2"></i>Download CV
                            </motion.a>
                            <motion.a
                                href="#projects"
                                className="btn btn-lg rounded-pill px-4 py-3 fw-bold bg-white text-dark shadow-sm border-0"
                                whileHover={{ scale: 1.05, backgroundColor: "#f8f9fa" }}
                                whileTap={{ scale: 0.95 }}
                            >
                                View Works
                            </motion.a>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.a
                    href="#about"
                    className="position-absolute bottom-0 start-50 translate-middle-x mb-5 text-white text-decoration-none"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    style={{ cursor: "pointer" }}
                >
                    <i className="bi bi-chevron-down fs-1"></i>
                </motion.a>
            </div>
        </div>
    );
}
