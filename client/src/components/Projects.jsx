import "../stylesheets/projects.css";
import CurveArrow from "./CurveArrow";
import rentEasee from "../assets/projectImages/renteaseeIMG.png";
import JWTauthentication from "../assets/projectImages/JWTauthenticationIMG.png";
import ToDoApplication from "../assets/projectImages/ToDoAppIMG.png";

export default function Projects() {
  const contents = [
    {
      thumbnailImg: ToDoApplication,
      title: "ToDo Application",
      description:
        "This ToDo application is a full-stack MERN project featuring real-time CRUD operations with MongoDB Atlas integration. It offers a user-friendly interface for task management, including adding, editing, and deleting tasks.",
      technologies: ["HTML", "CSS", "Bootstrap", "MERN"],
      links: {
        github: "https://github.com/Poovarasan-29/Todo-MERN",
        linkedin: "",
        site: "https://todo-mern-black.vercel.app/",
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
    <div className="projects m-0" id="projects">
      <h1 className="m-0 project-text">What I have done so far</h1>
      <CurveArrow />
      <div className="row row-cols-1 row-cols-md-2 justify-content-center g-4 p-5 mt-5">
        {contents.map((content, index) => (
          <div
            // className={`${
            //   contents.length % 2 == 1 && contents.length - 1 == index
            //     ? "col-12 "
            //     : "col-12 col-md-6"
            // }`}
            key={index}
          >
            <div className="card">
              <img
                src={content.thumbnailImg}
                className="card-img-top p-3"
                alt="..."
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
                      title={
                        content.links.site
                          ? "Visit"
                          : "Video"
                      }
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
          </div>
        ))}
      </div>
    </div>
  );
}
