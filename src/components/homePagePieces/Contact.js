import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div className="homepage-contact">
      <div className="homepage-contact-title">
        <div className="homepage-contact-title-desc">Contact</div>
        <hr />
        <div className="homepage-contact-title-subdesc">
          Let's get in touch! <br />
        </div>
      </div>

      <div className="homepage-contact-content">
        <div className="homepage-contact-content-li">
          <a
            href="https://www.linkedin.com/in/simon-chow-developer"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={["fab", "linkedin"]}
              size="5x"
              color="#0e76a8"
            />
          </a>
        </div>
        <div className="homepage-contact-content-li">
          <a href="https://github.com/SimonChow9527" target="_blank">
            <FontAwesomeIcon
              icon={["fab", "github"]}
              size="5x"
              color="#211F1F"
            />
          </a>
        </div>
        <div className="homepage-contact-content-li">
          <a href="mailto:zhouxinmingzxm@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} size="5x" color="#0e76a8" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;