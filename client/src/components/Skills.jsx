import "../stylesheets/skills.css";
import html from "../assets/skillsImages/html.png";
import css from "../assets/skillsImages/css.png";
import javascript from "../assets/skillsImages/javascript.png";
import reactjs from "../assets/skillsImages/reactjs.png";
import bootstrap from "../assets/skillsImages/bootstrap.png";
import redux from "../assets/skillsImages/redux.png";
import nodejs from "../assets/skillsImages/nodejs.png";
import expressjs from "../assets/skillsImages/expressjs.png";
import mongodb from "../assets/skillsImages/mongodb.png";
import mongoose from "../assets/skillsImages/mongoose.png";
import git from "../assets/skillsImages/git.png";
import github from "../assets/skillsImages/github.png";
import vscode from "../assets/skillsImages/vscode.png";
import postman from "../assets/skillsImages/postman.png";
import mongodbCompass from "../assets/skillsImages/mongodbCompass.png";

export default function Skills() {
  const contents = [
    {
      heading: "Web Design",
      content:
        "I love designs and it's the first step before creating any website as I can give layout to my imagination.",
    },
    {
      heading: "React Developer",
      content:
        "I create dynamic, interactive interfaces with React, turning ideas into seamless user experiences.",
    },
    {
      heading: "Backend Developer",
      content:
        "Design scalable server-side systems, ensuring seamless data flow and application performance.",
    },
  ];
  return (
    <div className="skills p-2 p-md-5" id="skills">
      <div>
        <h1 className="display-2">Overview</h1>
        <div className="about-underline"></div>
        <div className="about-underline underline2"></div>
      </div>

      <div className="d-flex flex-wrap justify-content-center skill-overview-container">
        {contents.map((value, index) => (
          <div className="skill-overview-box p-5 m-3" key={index}>
            <span className="animate-border"></span>
            <h3>{value.heading}</h3>
            <p style={{ textAlign: "center" }}>{value.content}</p>
          </div>
        ))}
      </div>
      <div className="skills-images py-5">
        <div className="d-flex flex-wrap justify-content-center position-relative">
          <div className="d-flex flex-column align-items-center skills-img-box">
            <img
              src={html}
              alt="html"
              style={{ width: "70px", height: "70px" }}
            />
            HTML 5
          </div>
          <div className="d-flex flex-column align-items-center skills-img-box">
            <img
              src={css}
              alt="css"
              style={{ width: "70px", height: "70px" }}
            />
            CSS 3
          </div>
          <div className="d-flex flex-column align-items-center skills-img-box">
            <img
              src={javascript}
              alt="javascript"
              style={{ width: "70px", height: "70px" }}
            />
            Javascript
          </div>
          <div className="d-flex flex-column align-items-center skills-img-box">
            <img
              src={bootstrap}
              alt="bootstrap"
              style={{ width: "70px", height: "70px" }}
            />
            Bootstrap 5
          </div>
          <div className="d-flex flex-column align-items-center skills-img-box">
            <img
              src={reactjs}
              alt="reactjs"
              style={{ width: "70px", height: "70px" }}
            />
            React JS
          </div>
          <div className="d-flex flex-column align-items-center skills-img-box">
            <img
              src={redux}
              alt="redux"
              style={{ width: "70px", height: "70px" }}
            />
            Redux
          </div>
          <div className="d-flex flex-column align-items-center skills-img-box">
            <img
              src={nodejs}
              alt="nodejs"
              style={{ width: "70px", height: "70px" }}
            />
            Node JS
          </div>
          <div className="d-flex flex-column align-items-center skills-img-box">
            <img
              src={expressjs}
              alt="expressjs"
              style={{ width: "70px", height: "70px" }}
            />
            Express JS
          </div>
          <div className="d-flex flex-column align-items-center skills-img-box">
            <img
              src={mongodb}
              alt="mongodb"
              style={{ width: "70px", height: "70px" }}
            />
            MongoDB
          </div>
          <div className="d-flex flex-column align-items-center skills-img-box">
            <img
              src={mongoose}
              alt="mongoose"
              style={{ width: "70px", height: "70px" }}
            />
            Mongoose
          </div>
          <div className="d-flex flex-column align-items-center skills-img-box">
            <img
              src={git}
              alt="git"
              style={{ width: "70px", height: "70px" }}
            />
            Git
          </div>
          <div className="d-flex flex-column align-items-center skills-img-box">
            <img
              src={github}
              alt="github"
              style={{
                width: "70px",
                height: "70px",
                filter: "brightness(0.1)",
              }}
            />
            GitHub
          </div>
          <p className="skill-text display-1 fw-bold ">Skills</p>
        </div>
        <h4
          className="text-center text-uppercase fw-bold mt-5 mb-3"
          style={{ color: "blueviolet" }}
        >
          Tools and Software
        </h4>
        <div className="tools d-flex flex-wrap justify-content-center">
          <div className="d-flex flex-column align-items-center skills-img-box">
            <img
              src={vscode}
              alt="vscode"
              style={{
                width: "70px",
                height: "70px",
              }}
            />
            VS Code
          </div>
          <div className="d-flex flex-column align-items-center skills-img-box">
            <img
              src={mongodbCompass}
              alt="mongodbCompass"
              style={{
                width: "70px",
                height: "70px",
              }}
            />
            MongoDB Compass
          </div>
          <div className="d-flex flex-column align-items-center skills-img-box">
            <img
              src={postman}
              alt="postman"
              style={{
                width: "70px",
                height: "70px",
              }}
            />
            Postman
          </div>
        </div>
      </div>
    </div>
  );
}
