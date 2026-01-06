import "../stylesheets/skills.css";
import html from "../assets/skillsImages/html.webp";
import css from "../assets/skillsImages/css.webp";
import javascript from "../assets/skillsImages/javascript.webp";
import reactjs from "../assets/skillsImages/reactjs.webp";
import bootstrap from "../assets/skillsImages/bootstrap.webp";
import redux from "../assets/skillsImages/redux.webp";
import nodejs from "../assets/skillsImages/nodejs.webp";
import expressjs from "../assets/skillsImages/expressjs.webp";
import mongodb from "../assets/skillsImages/mongodb.webp";
import mongoose from "../assets/skillsImages/mongoose.webp";
import git from "../assets/skillsImages/git.webp";
import github from "../assets/skillsImages/github.webp";
import vscode from "../assets/skillsImages/vscode.webp";
import postman from "../assets/skillsImages/postman.webp";
import mongodbCompass from "../assets/skillsImages/mongodbCompass.webp";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Skills() {
  const [activeSkillIndex, setActiveSkillIndex] = useState(0);
  const contents = [
    {
      heading: "Web Design",
      content:
        "I love designs and it's the first step before creating any website as I can give layout to my imagination.",
      icon: "bi-palette"
    },
    {
      heading: "React Developer",
      content:
        "I create dynamic, interactive interfaces with React, turning ideas into seamless user experiences.",
      icon: "bi-code-slash"
    },
    {
      heading: "Backend Developer",
      content:
        "Design scalable server-side systems, ensuring seamless data flow and application performance.",
      icon: "bi-hdd-network"
    },
  ];

  const skills = [
    { name: "HTML 5", img: html, color: "#E34F26" },
    { name: "CSS 3", img: css, color: "#1572B6" },
    { name: "Javascript", img: javascript, color: "#F7DF1E" },
    { name: "Bootstrap 5", img: bootstrap, color: "#7952B3" },
    { name: "React JS", img: reactjs, color: "#61DAFB" },
    { name: "Redux", img: redux, color: "#764ABC" },
    { name: "Node JS", img: nodejs, color: "#339933" },
    { name: "Express JS", img: expressjs, color: "#000000" },
    { name: "MongoDB", img: mongodb, color: "#47A248" },
    { name: "Mongoose", img: mongoose, color: "#880000" },
    { name: "Git", img: git, color: "#F05032" },
    { name: "GitHub", img: github, style: { filter: "brightness(0.1)" }, color: "#181717" },
  ];

  const tools = [
    { name: "VS Code", img: vscode, color: "#007ACC" },
    { name: "MongoDB Compass", img: mongodbCompass, color: "#47A248" },
    { name: "Postman", img: postman, color: "#FF6C37" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSkillIndex((prev) => (prev + 1) % skills.length);
    }, 2000); // 2 seconds per card
    return () => clearInterval(interval);
  }, [skills.length]);

  return (
    <div className="pt-2" id="skills">
      <div className="container py-5">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-5"
        >
          <h1 className="display-4 fw-bold mb-3" style={{ color: "#010b30" }}>
            Overview
          </h1>
          <div className="bg-secondary" style={{ width: '60px', height: '4px', borderRadius: '2px' }}></div>
          <p className="lead text-muted mt-3">My technical expertise and development journey</p>
        </motion.div>

        {/* Overview Cards */}
        <div className="row g-4 mb-5">
          {contents.map((value, index) => (
            <div className="col-md-4" key={index}>
              <motion.div
                className="p-4 bg-white rounded shadow-sm h-100 text-center position-relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                whileHover={{ y: -10, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
                style={{ borderBottom: `4px solid ${index === 0 ? '#ff00cc' : index === 1 ? '#3333ff' : '#9d4edd'}` }} // Unique bottom border color
              >
                <div
                  className="mb-3 d-inline-flex align-items-center justify-content-center rounded-circle text-white"
                  style={{
                    width: '60px',
                    height: '60px',
                    background: `linear-gradient(135deg, ${index === 0 ? '#ff00cc, #3333ff' : index === 1 ? '#3333ff, #00c6ff' : '#9d4edd, #ff00cc'})`
                  }}
                >
                  <i className={`bi ${value.icon} fs-3`}></i>
                </div>
                <h3 className="h4 fw-bold mb-3">{value.heading}</h3>
                <p className="text-secondary">{value.content}</p>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-center fw-bold mb-5 display-6">Technical Skills</h2>
          <div className="d-flex flex-wrap justify-content-center gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                style={{ width: "120px", height: "140px" }}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
              >
                <motion.div
                  className="d-flex flex-column align-items-center p-3 bg-white rounded shadow-sm position-relative w-100 h-100 overflow-hidden"
                  whileHover={{
                    scale: 1.1,
                    boxShadow: `0 10px 20px -5px ${skill.color}`,
                    borderBottom: `3px solid ${skill.color}`,
                    transition: { duration: 0.2 }
                  }}
                >
                  {/* Snake Animation: Active only for the current index */}
                  {activeSkillIndex === index && (
                    <>
                      {/* Leg 1: Bottom-Left to Top-Left */}
                      <motion.div
                        style={{ position: 'absolute', backgroundColor: skill.color, width: '3px', height: '10px', left: 0 }}
                        initial={{ bottom: 0 }}
                        animate={{ bottom: "100%" }}
                        transition={{ duration: 0.6, ease: "linear" }}
                      />
                      {/* Leg 2: Top-Left to Top-Right (Delays start until Leg 1 finishes) */}
                      <motion.div
                        style={{ position: 'absolute', backgroundColor: skill.color, width: '25px', height: '2px', top: 0 }}
                        initial={{ left: -18 }}
                        animate={{ left: "100%" }}
                        transition={{ duration: 0.6, ease: "linear", delay: 0.6 }}
                      />
                      {/* Leg 3: Top-Right to Bottom-Right */}
                      <motion.div
                        style={{ position: 'absolute', backgroundColor: skill.color, width: '3px', height: '35px', right: 0 }}
                        initial={{ top: -30 }}
                        animate={{ top: "100%" }}
                        transition={{ duration: 0.6, ease: "linear", delay: 1.2 }}
                      />
                    </>
                  )}

                  <img
                    src={skill.img}
                    alt={skill.name}
                    style={{ width: "60px", height: "60px", marginBottom: "15px", ...skill.style }}
                  />
                  <span className="fw-medium text-secondary small text-center">{skill.name}</span>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tools Section */}
        <motion.div
          className="pt-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-center fw-bold mb-5 display-6" style={{ color: "#7b2cbf" }}>Tools & Software</h2>
          <div className="d-flex flex-wrap justify-content-center gap-4">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                style={{ width: "120px", height: "140px" }}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
              >
                <motion.div
                  className="d-flex flex-column align-items-center p-3 bg-white shadow-sm position-relative w-100 h-100"
                  style={{
                    borderTopLeftRadius: '10px',
                    borderTopRightRadius: '10px',
                    borderBottomRightRadius: '10px',
                    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 30px 100%, 0 calc(100% - 30px))'
                  }}
                  whileHover={{
                    scale: 1.1,
                    boxShadow: `0 10px 20px -5px ${tool.color}`,
                    borderBottom: `3px solid ${tool.color}`,
                    transition: { duration: 0.2 }
                  }}
                >
                  {/* Paper Fold Effect */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      width: '25px',
                      height: '25px',
                      background: 'linear-gradient(135deg, transparent 50%, #e9ecef 50%)',
                      boxShadow: '2px -2px 5px rgba(0,0,0,0.1)',
                      borderTopRightRadius: '5px'
                    }}
                  ></div>

                  <img
                    src={tool.img}
                    alt={tool.name}
                    style={{ width: "60px", height: "60px", marginBottom: "15px" }}
                  />
                  <span className="fw-medium text-secondary small text-center">{tool.name}</span>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
}
