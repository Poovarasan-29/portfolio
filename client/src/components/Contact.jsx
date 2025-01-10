import "../stylesheets/contact.css";

export default function Contact() {
  return (
    <div className="contact p-5" id="contact">
      <div>
        <h1 className="display-2">Contact</h1>
        <div className="about-underline contact-underline"></div>
      </div>
      <div className="row mt-4">
        <div className="col-0 col-md"></div>
        <div className="col hello-text display-4 text-white opacity-75">
          Say <br />
          <span className="text-uppercase fw-bold">Hello!</span>
        </div>
        <div className="col display-4 text-white">
          <ul className="list-unstyled contact-list">
            <li>
              <a href="mailto:poovarasan.say@gmail.com?body=Hello Buddy!">
                Email
              </a>
              <p></p>
            </li>
            <li>
              <a href="https://github.com/Poovarasan-29/" target="_blank">
                GitHub
              </a>
              <p></p>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/poovarasan-s-365541297/"
                target="_blank"
              >
                LinkedIn
              </a>
              <p></p>
            </li>
            <li>
              <a
                href="https://leetcode.com/u/POOVARASAN_S_29/"
                target="_blank"
              >
                Leetcode
              </a>
              <p></p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
