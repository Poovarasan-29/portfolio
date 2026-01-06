import "../stylesheets/about.css";
import image from "../assets/aboutIMG.webp";
import { motion } from "framer-motion";

export default function About() {
  const text = "Hi, I'm Poovarasan, a passionate final-year B.Tech student specializing in Information Technology at Hindusthan College of Engineering and Technology, Coimbatore. I firmly believe that no challenge is insurmountable; if I take on a task, I dedicate myself wholeheartedly to solving it, no matter how complex it may seem. My coding journey began during my college days when I developed a keen interest in web technologies, and since then, I've been continuously expanding my skills. Currently, I'm focused on seamlessly creating projects that help me implement and refine what I've learned. Looking ahead, my dream is to collaborate with expert teams to gain deeper insights and grow as a professional.";

  return (
    <div className="py-3 position-relative" id="about" style={{ overflow: 'hidden' }}>
      {/* Mobile Background Image (Visible only on small screens) */}
      <div
        className="d-lg-none position-absolute top-0 start-0 w-100 h-100"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.15, // Faint background
          zIndex: 0
        }}
      />
      {/* Blue overlay for mobile readability */}
      <div className="d-lg-none position-absolute top-0 start-0 w-100 h-100" style={{ backgroundColor: 'rgba(0, 50, 100, 0.1)', zIndex: 0 }}></div>

      <div className="container py-3 position-relative" style={{ zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-3"
        >
          <h1 className="display-4 fw-bold" style={{ color: "#010b30" }}>
            About Me
          </h1>
          <div className="bg-secondary" style={{ width: '60px', height: '4px', borderRadius: '2px' }}></div>
        </motion.div>

        <div className="row align-items-center g-5">
          <div className="col-lg-7">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="lead text-secondary lh-lg fw-medium" style={{ textAlign: "justify" }}>
                {text.split(" ").map((word, index) => (
                  <motion.span
                    key={index}
                    className="d-inline-block me-2"
                    whileHover={{ scale: 1.1, color: "#9d4edd", transition: { duration: 0.2 } }}
                  >
                    {word}
                  </motion.span>
                ))}
              </p>
              <div className="mt-4">
                <a href="#contact" className="btn btn-primary px-4 py-2 rounded-pill">Get in Touch</a>
              </div>
            </motion.div>
          </div>

          <div className="col-lg-5 d-none d-lg-block">
            <motion.div
              className="position-relative"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={image}
                alt="Poovarasan"
                className="img-fluid"
                style={{
                  filter: "drop-shadow(10px 10px 20px rgba(0,0,0,0.15))",
                  transform: "perspective(1000px) rotateY(-10deg)"
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
