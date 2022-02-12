import React, { useEffect, useState } from "react";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import res_primaryLanguage from "./profile_data/resumes/res_primaryLanguage.json";
import res_secondaryLanguage from "./profile_data/resumes/res_secondaryLanguage.json";
import sharedData from "./profile_data/portfolio_shared_data.json";

export default function App({ availableLanguages }) {
  const [resumeData, setResumeData] = useState(res_primaryLanguage);
  const [selectedLanguage, setSelectedLanguage] = useState(
    availableLanguages[0]
  );
  document.documentElement.lang = selectedLanguage.language;

  useEffect(() => {
    if (selectedLanguage === availableLanguages[0]) {
      setResumeData(res_primaryLanguage);
    } else {
      setResumeData(res_secondaryLanguage);
    }
  }, [selectedLanguage, availableLanguages]);

  const languageSelector = availableLanguages.map((lang) => (
    <div
      key={lang.flag}
      onClick={() => setSelectedLanguage(lang)}
      style={
        selectedLanguage === lang
          ? { display: "inline", filter: "brightness(40%)" }
          : { display: "inline" }
      }
    >
      <span
        className="iconify language-icon mr-5"
        data-icon={`twemoji-flag-for-flag-${lang.flag}`}
        data-inline="false"
      ></span>
    </div>
  ));

  return (
    <div>
      <Header sharedData={sharedData.basic_info} />
      <div className="col-md-12 mx-auto text-center language">
        {languageSelector}
      </div>
      <About
        resumeBasicInfo={resumeData.basic_info}
        sharedBasicInfo={sharedData.basic_info}
      />
      <Projects
        resumeProjects={resumeData.projects}
        resumeBasicInfo={resumeData.basic_info}
      />
      <Skills
        sharedSkills={sharedData.skills}
        resumeBasicInfo={resumeData.basic_info}
      />
      <Experience
        resumeExperience={resumeData.experience}
        resumeBasicInfo={resumeData.basic_info}
      />
      <Footer sharedBasicInfo={sharedData.basic_info} />
    </div>
  );
}
