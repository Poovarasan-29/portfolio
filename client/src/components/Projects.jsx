import "../stylesheets/projects.css";
import JWTauthentication from "../assets/projectImages/JWTauthenticationIMG.webp";
import ToDoApplication from "../assets/projectImages/ToDoAppIMG.webp";
import TypingClassIMG from "../assets/projectImages/TypingClassIMG.webp";
import InfiniteFortune from "../assets/projectImages/InfiniteFortuneIMG.png";
import AttendanceSystemIMG from "../assets/projectImages/AttendanceSystem.png";
import { motion } from "framer-motion";

export default function Projects() {
  const contents = [
    {
      thumbnailImg: TypingClassIMG,
      title: "Typing Test",
      description:
        "Typing test web application assesses and improves typing skills using provided text. Tracks accuracy, speed, and displays performance statistics (correct/incorrect entries, time). Offers a user-friendly interface for practice and progress monitoring.",
      technologies: ["React", "Bootstrap"],
      links: {
        github: "https://github.com/Poovarasan-29/TypingClass",
        linkedin: "",
        site: "https://typing-class.vercel.app/",
        video: "",
      },
      ongoing: false,
    },
    {
      thumbnailImg: ToDoApplication,
      title: "Todo Application",
      description:
        "This Todo application is a full-stack MERN project featuring real-time CRUD operations with MongoDB Atlas integration. It offers a user-friendly interface for task management, including adding, editing, and deleting tasks.",
      technologies: ["HTML", "CSS", "Bootstrap", "MERN"],
      links: {
        github: "https://github.com/Poovarasan-29/my-todo",
        linkedin: "",
        site: "https://my-todo-one-fawn.vercel.app/",
        video: "",
      },
      ongoing: false,
    },

    {
      thumbnailImg: JWTauthentication,
      title: "Registration Form",
      description:
        "Developed a secure JWT-based authentication system with strong password validation, email verification, email duplication checks, and an OTP-based Forgot Password feature.",
      technologies: ["HTML", "CSS", "Bootstrap", "Javascript", "MERN", "JWT"],
      links: {
        github: "https://github.com/Poovarasan-29/registration-authentication",
        linkedin: "",
        site: "https://registration-authentication.vercel.app/",
        video: "",
      },
      ongoing: false,
    },
    {
      thumbnailImg: InfiniteFortune,
      title: "Infinite Fortune",
      description:
        "This is an investment-based web app where users buy profit plans, earn daily returns, claim profits, and withdraw once eligible. Users also earn a 30% referral bonus from invitee deposits.",
      technologies: ["CSS", "Bootstrap", "MERN", "JWT", "Node mailer", "bcrypt"],
      links: {
        github: "https://github.com/Poovarasan-29/Infinite-Fortune",
        linkedin: "",
        site: "https://infinite-fortune.vercel.app/?referral=960922",
        video: "",
      },
      ongoing: false,
    },
    {
      thumbnailImg: AttendanceSystemIMG,
      title: "Employee Attendance System",
      description:
        "The system replaces manual attendance (like spreadsheets) with a digital, automated solution that ensures accuracy for payroll and gives management actionable insights into workforce reliability.",
      technologies: [
        "Javascript",
        "Tailwind",
        "MERN",
        "Redux",
      ],
      links: {
        github: "https://github.com/Poovarasan-29/Attendance-System",
        site: "https://attendance-system-beta-nine.vercel.app/",

      },
    },
  ];

  return (
    <div className="projects p-sm-5 bg-light" id="projects" style={{ position: "relative" }}>
      {/* Background Accent */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        opacity: 0.05,
        background: 'repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 40%)',
        backgroundSize: '30px 30px',
        pointerEvents: 'none',
        maskImage: 'linear-gradient(to bottom, transparent, black 15%)', // Fade in lines from top
        WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 20%)'
      }}></div>

      <div className="container py-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-5 text-center" // Centered
        >
          <h1 className="display-4 fw-bold mb-3" style={{ color: "#010b30" }}>
            What I have done so far
          </h1>
          <div className="bg-secondary mx-auto" style={{ width: '60px', height: '4px', borderRadius: '2px' }}></div> {/* mx-auto for centering line */}
          <p className="lead text-muted mt-3">A showcase of my recent technical projects</p>
        </motion.div>

        <div className="row g-4">
          {contents.map((content, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              {/* Outer Motion Div for Entrance with Delay */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="h-100"
              >
                {/* Inner Motion Div for Hover with Instant Reaction */}
                <motion.div
                  className="card h-100 border-0 shadow-sm overflow-hidden"
                  whileHover={{
                    y: -10,
                    boxShadow: "0 1rem 3rem rgba(0,0,0,.175)",
                    transition: { duration: 0.2 } // Instant hover
                  }}
                >
                  <div className="position-relative overflow-hidden" style={{ height: "200px" }}>
                    <motion.img
                      src={content.thumbnailImg}
                      className="w-100 h-100 object-fit-cover"
                      alt={content.title}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                    {content.ongoing && (
                      <div className="position-absolute top-0 end-0 m-3 badge bg-warning text-dark shadow-sm">
                        Ongoing
                      </div>
                    )}
                  </div>

                  <div className="card-body d-flex flex-column p-4">
                    <h5 className="card-title fw-bold mb-3" style={{ color: "#2b2b2b" }}>{content.title}</h5>
                    <p className="card-text text-muted small flex-grow-1" style={{ lineHeight: "1.6" }}>{content.description}</p>

                    <div className="d-flex flex-wrap gap-2 mb-4">
                      {content.technologies.map((tech, i) => (
                        <span key={i} className="badge bg-light text-secondary border fw-normal px-2 py-1">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="d-flex gap-2 mt-auto">
                      <a
                        href={content.links.github}
                        className="btn btn-outline-dark btn-sm flex-fill d-flex align-items-center justify-content-center gap-2"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="bi bi-github"></i> Code
                      </a>

                      {(content.links.site || content.links.video) && (
                        <a
                          href={content.links.site || content.links.video}
                          className="btn btn-dark btn-sm flex-fill d-flex align-items-center justify-content-center gap-2"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className={`bi ${content.links.site ? "bi-globe2" : "bi-play-circle"}`}></i>
                          {content.links.site ? "Live Demo" : "Watch Video"}
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
