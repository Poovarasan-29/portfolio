import "../stylesheets/projects.css";
import CurveArrow from "./CurveArrow";
import rentEasee from "../assets/projectImages/renteaseeIMG.webp";
import JWTauthentication from "../assets/projectImages/JWTauthenticationIMG.webp";
import ToDoApplication from "../assets/projectImages/ToDoAppIMG.webp";
import TypingClassIMG from "../assets/projectImages/TypingClassIMG.webp";

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
      title: "ToDo Application",
      description:
        "This ToDo application is a full-stack MERN project featuring real-time CRUD operations with MongoDB Atlas integration. It offers a user-friendly interface for task management, including adding, editing, and deleting tasks.",
      technologies: ["HTML", "CSS", "Bootstrap", "MERN"],
      links: {
        github: "https://github.com/Poovarasan-29/Todo-MERN",
        linkedin: "",
        site: "https://typing-class.vercel.app/",
        video: "",
      },
      ongoing: false,
    },

    {
      thumbnailImg: JWTauthentication,
      title: "Registration Form with JWT Authentication",
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
      thumbnailImg: rentEasee,
      title: "RentEasee",
      description:
        "A platform for renting yellow-board vehicles and hiring freelance drivers, featuring vehicle listings, driver profiles, real-time search, and membership-based access control.",
      technologies: [
        "HTML",
        "CSS",
        "Bootstrap",
        "Javascript",
        "MERN",
        "Redux",
        "Firebase",
      ],
      links: {
        github: "https://github.com/Poovarasan-29/RentEaseeRepo",
        linkedin:
          "https://www.linkedin.com/feed/update/urn:li:activity:7241847329706668032/",
        site: "",
        video:
          "https://drive.google.com/file/d/1TVLKRmDm8N3ZdXjxw2rXtJw_ns3LE1Wy/view?usp=sharing",
      },
      ongoing: true,
    },
  ];

  return (
    <div className="projects p-sm-5" id="projects">
      <h1 className="m-0 project-text">What I have done so far</h1>
      <CurveArrow />
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 justify-content-center w-100 mx-auto" style={{overflow:'hidden'}}>
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
