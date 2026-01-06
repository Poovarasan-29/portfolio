import "../stylesheets/contact.css";
import { delay, motion } from "framer-motion";
import Stars from "./Stars";

export default function Contact() {
  const socials = [
    { name: "GitHub", icon: "bi-github", link: "https://github.com/Poovarasan-29/", color: "#6e5494" },
    { name: "LinkedIn", icon: "bi-linkedin", link: "https://www.linkedin.com/in/poovarasan-s-365541297/", color: "#0077b5" },
    { name: "Email", icon: "bi-envelope-fill", link: "mailto:poovarasan.say@gmail.com", color: "#ea4335" },
    { name: "LeetCode", icon: "bi-code-square", link: "https://leetcode.com/u/POOVARASAN_S_29/", color: "#ffa116" },
  ];

  return (
    <div className="contact py-5" id="contact">
      <Stars />

      <div className="container contact-container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-5"
            >
              <h1 className="display-3 fw-bold mb-3 text-white">Let's Connect</h1>
              <div className="bg-white mx-auto" style={{ width: '80px', height: '4px', borderRadius: '2px', opacity: 0.8 }}></div>
              <p className="lead text-white mt-4 fs-4">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
              </p>
            </motion.div>

            {/* Social Links Section */}
            <div className="d-flex flex-wrap justify-content-center gap-4 mt-5">
              {socials.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-card d-flex flex-column align-items-center justify-content-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{
                    scale: 1.1,
                    y: -10,
                    backgroundColor: "rgba(255, 255, 255, 0.15)",
                    borderBottom: `4px solid ${social.color}`,
                    transition: "0.2s"
                  }}
                >
                  <div className="icon-wrapper mb-3" style={{ color: social.color }}>
                    <i className={`bi ${social.icon} display-4`}></i>
                  </div>
                  <span className="text-white fw-bold">{social.name}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
