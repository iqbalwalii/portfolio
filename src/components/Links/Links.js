import React from "react";
import "../Links/Links.css";
import { Twitter, Github, Linkedin } from "react-bootstrap-icons";

const Links = () => {
  return (
    <div>
      <div className="socials ">
        <div className="git">
          <a
            href="https://github.com/iqbalwalii"
            target="_blank"
            rel="noreferrer"
          >
            <Github size={40} />
          </a>
        </div>
        <div className="linkedin">
          <a
            href="https://linkedin.com/in/iqbalwali"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin size={40} />
          </a>
        </div>
        <div className="twitter">
          <a
            href="https://twitter.com/iqbalwalii"
            target="_blank"
            rel="noreferrer"
          >
            <Twitter size={40} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Links;