import { Button } from "@mui/material";
import { useState } from "react";

export default function Home({ classname }) {
  const [changeIconHover, setChangeIconHover] = useState(
    "ps-2 pt-1 bi bi-cloud-arrow-down"
  );
  return (
    <div className={`home ms-4 ${classname}`}>
      <h1 className="gradient-text display-3" style={{fontStyle:'italic'}}>Hello</h1>
      <h1 className="gradient-text display-3" style={{fontStyle:'italic'}}>I'm Poovarasan</h1>
      {/* <h3 className="gradient-text mern-stack-text display-6">
        MERN Stack Developer
      </h3> */}
      <a href="/Poovarasan_Resume.pdf" className="btn" download="Poovarasan_Resume.pdf">
        <div className="animate-btn">
          <span className="bubble"></span>
          <span className="bubble"></span>
          <span className="bubble"></span>
          <span className="bubble"></span>
          <span className="bubble"></span>
        </div>
        {/* <span className="download-text">
          Resume <i className="bi bi-cloud-arrow-down"></i>
        </span> */}
        <Button
          variant="contained"
          color="primary"
          style={{
            textTransform: "capitalize",
            padding: "4px 14px",
            fontSize: "18px",
          }}
          onMouseEnter={() =>
            setChangeIconHover("ps-2 pt-1 bi bi-cloud-arrow-down-fill")
          }
          onMouseLeave={() =>
            setChangeIconHover("ps-2 pt-1 bi bi-cloud-arrow-down")
          }
        >
          Resume{" "}
          <i
            className={changeIconHover}
            style={{ transform: "scale(1.4)" }}
          ></i>
        </Button>
        {/* <span className="download-text">Download CV</span> */}
      </a>
    </div>
  );
}
