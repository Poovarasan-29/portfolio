import "../stylesheets/about.css";
import image from "/aboutIMG.png";
export default function About() {
  const text = `Hi, I'm Poovarasan, a passionate third-year B.Tech student specializing in Information Technology at Hindusthan College of Engineering and Technology, Coimbatore. I firmly believe that no challenge is insurmountable; if I take on a task, I dedicate myself wholeheartedly to solving it, no matter how complex it may seem. My coding journey began during my college days when I developed a keen interest in web technologies, and since then, I've been continuously expanding my skills. Currently, I'm focused on seamlessly creating projects that help me implement and refine what I've learned. Looking ahead, my dream is to collaborate with expert teams to gain deeper insights and grow as a professional.
`;

  // Function to wrap words in spans
  const wrapWordsWithSpan = (text) => {
    return text.split(" ").map((word, index) => (
      <span key={index}>
        <span
          style={{ transition: "0.5s ease" }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "yellow")}
          onMouseLeave={(e) => (
            (e.target.style.backgroundColor = "transparent"),
            (e.target.style.boxShadow = "none")
          )}
        >
          {/* {word} */}
          {index == 0 || index == 20 || index == 74 ? (
            <span
              style={{ transition: "0.5s ease" }}
              onMouseEnter={(e) => (
                (e.target.style.backgroundColor = "transparent"),
                (e.target.style.boxShadow = "none")
              )}
              onMouseLeave={(e) => (
                (e.target.style.backgroundColor = "transparent"),
                (e.target.style.boxShadow = "none")
              )}
            >
              <span style={{ fontSize: "25px" }}>{word[0]}</span>
              {word.slice(1)}
            </span>
          ) : (
            word
          )}
        </span>
        {word == "Coimbatore." || word == "skills." ? (
          <div>
            <br />
          </div>
        ) : (
          <span> </span>
        )}
      </span>
    ));
  };
  return (
    <div className="p-2 p-md-5" id="about" style={{overflow:'hidden'}}>
      <div>
        <h1 className="display-2" style={{ color: "#010b30" }}>
          About
        </h1>
        <div className="about-underline"></div>
        <div className="about-underline underline2"></div>
      </div>
      <div className="row about-content">
        <div
          className="col-12 col-md-9 col-lg-8"
          style={{ textAlign: "justify" }}
        >
          {wrapWordsWithSpan(text)}
        </div>
        <div className="col d-none d-md-flex justify-content-end justify-content-lg-center position-relative about-image-container">
          <img src={image} alt="SP" className="about-image" />
        </div>
      </div>
    </div>
  );
}
