import React, { useEffect, useState } from "react";
import "./style.css";

const Thanks = () => {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 4000);
  }, []);
  return (
    <Container>
      {" "}
      <div class="bg"></div>
      <div class="bg bg2"></div>
      <div class="bg bg3"></div>
      <div className="content">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1200">
          <path
            className="circle1"
            d="M400 850c-138.071 0-250-111.929-250-250s111.929-250 250-250 250 111.929 250 250-111.929 250-250 250z"
            fill="#FF7B80"
          />
          <path
            className="circle2"
            d="M400 850c-138.071 0-250-111.929-250-250s111.929-250 250-250 250 111.929 250 250-111.929 250-250 250z"
            fill="#007B80"
          />
          <path
            className="check"
            d="M269.5 592.875l92.5 89.5 169.5-163.75"
            stroke="#FFF"
            strokeWidth={40}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
        {loader == false ? (
          <div className="thanks">
            <h2 style={{ color: "red" }}>Thank You </h2>
            <h5>I got your message </h5>
            <p>&amp; i will get back to you</p>
          </div>
        ) : (
          ""
        )}
      </div>
    </Container>
  );
};

export default Thanks;
