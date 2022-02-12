import React from "react";

import { Icon } from "@iconify/react";
import reactIcon from "@iconify/icons-logos/react";
import javaIcon from "@iconify/icons-logos/java";
import dotNetIcon from "@iconify/icons-logos/dotnet";
import htmlIcon from "@iconify/icons-logos/html-5";
import cssIcon from "@iconify/icons-logos/css-3";
import cSharp from "@iconify/icons-logos/c-sharp";
import javaScript from "@iconify/icons-logos/javascript";
import redux from "@iconify/icons-logos/redux";
import sqlite from "@iconify/icons-logos/sqlite";

function About(props) {
  const sectionName = props?.resumeBasicInfo?.section_name.about;
  const hello = props?.resumeBasicInfo?.description_header;
  const about = props?.resumeBasicInfo?.description;
  const technologies = [
    reactIcon,
    // redux,
    javaIcon,
    dotNetIcon,
    cSharp,
    // sqlite,
    // htmlIcon,
    // javaScript,
    // cssIcon,
  ];

  const icons = technologies.map((tech, i) => (
    <Icon
      key={i}
      icon={tech}
      style={{ fontSize: "300%", margin: "9% 5% 0 5%" }}
    />
  ));

  return (
    <section id="about">
      <div className="col-md-12">
        <h1 style={{ color: "black" }}>
          <span>{sectionName}</span>
        </h1>
        <div className="row center mx-auto mb-5">
          <div className="col-md-4 mb-5 center">
            <div className="polaroid">
              <span style={{ cursor: "auto" }}>
                <img
                  height="auto"
                  width="auto"
                  src={`${process.env.PUBLIC_URL}/images/myProfile.jpg`}
                  alt="selfie"
                />
                {icons}
              </span>
            </div>
          </div>

          <div className="col-md-8 center">
            <div className="col-md-10">
              <div className="card">
                <div className="card-header">
                  <span
                    className="iconify"
                    data-icon="emojione:red-circle"
                    data-inline="false"
                  ></span>{" "}
                  &nbsp;{" "}
                  <span
                    className="iconify"
                    data-icon="twemoji:yellow-circle"
                    data-inline="false"
                  ></span>{" "}
                  &nbsp;{" "}
                  <span
                    className="iconify"
                    data-icon="twemoji:green-circle"
                    data-inline="false"
                  ></span>
                </div>
                <div
                  className="card-body font-trebuchet text-justify ml-3 mr-3"
                  style={{
                    height: "auto",
                    fontSize: "132%",
                    lineHeight: "200%",
                  }}
                >
                  <br />
                  <span className="wave">{hello}</span>
                  <br />
                  <br />
                  {about.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
