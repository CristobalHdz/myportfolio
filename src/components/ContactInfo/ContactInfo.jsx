import "./ContactInfo.css";

import CVResume from "../../assets/Logos/CVLogo.png";
import Email from "../../assets/Logos/EmailLogo.png";
import Linkedin from "../../assets/Logos/LinkedinLogo.png";
import Github from "../../assets/Logos/GithubLogo.png";
import CVReal from "../../assets/CV_Cristobal_Hernandez.pdf";

const contactInfo = [
  {
    id: 1,
    name: "Email",
    info: "cristobalhdzch@gmail.com",
    infoText: "cristobalhdzch@gmail.com",
    logo: Email,
  },
  {
    id: 2,
    name: "LinkedIn",
    info: "https://www.linkedin.com/in/cristobalhernandezch/",
    infoText: "linkedin.com/in/CrisHdzCh",
    logo: Linkedin,
  },
  {
    id: 3,
    name: "GitHub",
    info: "https://github.com/CristobalHdz",
    infoText: "github.com/CristobalHdz",
    logo: Github,
  },
  {
    id: 4,
    name: "Resume",
    info: CVReal,
    infoText: "",
    logo: CVResume,
  },
];

const ContactInfo = () => {
  return (
    <div className="contact_wrapper p-5" id="contact_wrapper">
      <div className="contact_info text-white">
        <h3 className="contact_me">Reach me out!</h3>
        <p className="contact_content">
          I'm currently open to new employment opportunities <br />
        </p>
        <div className="contact_areas">
          {contactInfo.map((data) => {
            return (
              <p key={data.id}>
                <img src={data.logo} alt={data.name} /> {data.name}:{" "}
                {data.id < 4 && (
                  <a
                    className="contact_link"
                    href={data.info}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {data.infoText}
                  </a>
                )}
                {data.name == "Resume" && (
                  <a
                    className="contact_link"
                    href={data.info}
                    download
                    rel="noopener noreferrer"
                  >
                    Click to download my CV
                  </a>
                )}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
