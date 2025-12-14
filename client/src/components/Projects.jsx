import "../stylesheets/projects.css";
import CurveArrow from "./CurveArrow";
import JWTauthentication from "../assets/projectImages/JWTauthenticationIMG.webp";
import ToDoApplication from "../assets/projectImages/ToDoAppIMG.webp";
import TypingClassIMG from "../assets/projectImages/TypingClassIMG.webp";
import InfiniteFortune from "../assets/projectImages/InfiniteFortuneIMG.png";
import AttendanceSystemIMG from "../assets/projectImages/AttendanceSystem.png";

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
      technologies: ["CSS", "Bootstrap", "MERN", "JWT", "Node mailer","bcrypt"],
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
    <div className="projects p-sm-5" id="projects">
      <h1 className="m-0 project-text">What I have done so far</h1>
      <CurveArrow />
      <div
        className="row row-cols-1 row-cols-md-2 row-cols-lg-3 justify-content-center w-100 mx-auto"
        style={{ overflow: "hidden" }}
      >
        {contents.map((content, index) => (
          <div key={index} className="p-2">
            <div className="card p-0 h-100">
              <img
                src={content.thumbnailImg}
                className="card-img-top p-"
                alt="..."
                style={{
                  border: "1px solid",
                  borderColor: "transparent",
                  borderBottomColor: "rgba(0,0,0,.2)",
                }}
              />
              <div className="card-body">
                <h5 className="card-title color-purple">{content.title}</h5>
                <p className="card-text">{content.description}</p>
                <ul className="list-unstyled d-flex flex-wrap gap-2">
                  {content.technologies.map((technology, i) => (
                    <li className="technology-design" key={i}>
                      {technology}
                    </li>
                  ))}
                </ul>
                <div className="w-100 d-flex align-items-center justify-content-between">
                  <div>
                    <a
                      href={content.links.github}
                      className="btn external-links"
                      target="_blank"
                      title="Source Code"
                    >
                      <i className="bi bi-github fs-1"></i>
                    </a>
                    {/* <a
                      href={content.links.linkedin}
                      className="btn external-links"
                      target="_blank"
                    >
                      <i className="bi bi-linkedin fs-1"></i>
                    </a> */}

                    <a
                      href={
                        content.links.site
                          ? content.links.site
                          : content.links.video
                      }
                      className="btn external-links"
                      target="_blank"
                      title={content.links.site ? "Visit" : "Video"}
                    >
                      <i
                        className={`bi ${
                          content.links.site ? "bi-globe2" : "bi-camera-reels"
                        } fs-1`}
                      ></i>
                    </a>
                  </div>
                  {content.ongoing && (
                    <div className="star-container">
                      <div className="star">Ongoing</div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            {/* </div> */}
          </div>
        ))}
      </div>
    </div>
  );
}
