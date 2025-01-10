export default function Home({ classname }) {
  return (
    <div className={`home ms-4 ${classname}`}>
      <h1 className="gradient-text display-3">Hello</h1>
      <h1 className="gradient-text display-3">I'm Poovarasan</h1>
      <h3 className="gradient-text mern-stack-text display-6">MERN Stack Developer</h3>
      <a
        href="/Resume.pdf"
        className="btn btn-primary"
        download="PoovarasanCV.pdf"
      >
        <div className="animate-btn">
          <span className="bubble"></span>
          <span className="bubble"></span>
          <span className="bubble"></span>
          <span className="bubble"></span>
          <span className="bubble"></span>
        </div>
        <span className="download-text">Download CV</span>
      </a>
    </div>
  );
}
