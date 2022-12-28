import CardContainer from "../Shared/CardContainer";
import ImageCard from "./Card/ImageCard";

import Nutricipy from "../../assets/ProjectImg/Nutricipy.png";
import Password from "../../assets/ProjectImg/Password.png";
import Scheduler from "../../assets/ProjectImg/Scheduler.png";

import Nexum from "../../assets/ProjectImg/Nexum.png";
import NexumLanding from "../../assets/ProjectImg/NexumLanding.png";
import Zaturna from "../../assets/ProjectImg/Zaturna.png";
import Ilumps from "../../assets/ProjectImg/Ilumps.png";

import "./MyProjects.css";

const earlyProjects = [
  {
    id: 1,
    name: "Nutricipy",
    image: Nutricipy,
    webpage: "https://cristobalhdz.github.io/Nutricipy/",
    repository: "https://github.com/CristobalHdz/Nutricipy",
  },
  {
    id: 2,
    name: "Password generator",
    image: Password,
    webpage: "https://cristobalhdz.github.io/PasswordGenerator_ThirdHW/",
    repository: "https://github.com/CristobalHdz/PasswordGenerator_ThirdHW",
  },
  {
    id: 3,
    name: "Scheduler",
    image: Scheduler,
    webpage: "https://cristobalhdz.github.io/Nutricipy/",
    repository: "https://github.com/CristobalHdz/Nutricipy",
  },
];

const profesionalProjects = [
  {
    id: 4,
    name: "Zaturna Eventos",
    image: Zaturna,
    webpage: "https://www.zaturna.com/",
  },
  {
    id: 5,
    name: "Nexum Legal",
    image: Nexum,
    webpage: "https://app.nexumlegal.com.mx/login",
  },
  {
    id: 6,
    name: "Nexum Legal Landing Page",
    image: NexumLanding,
    webpage: "https://nexumlegal.com.mx/",
  },
  {
    id: 7,
    name: "Ilumps Landing Page",
    image: Ilumps,
    webpage: "https://ilumps.com/",
  },
];

const MyProjects = () => {
  return (
    <div>
      <CardContainer title="Projects" />
      <div className="project-style">
        {profesionalProjects.map((data) => {
          return (
            <ImageCard
              key={data.id}
              name={data.name}
              image={data.image}
              webpage={data.webpage}
              repository={data.repository}
            />
          );
        })}
      </div>
      <CardContainer title="Learning Projects" />
      <div className="project-style">
        {earlyProjects.map((data) => {
          return (
            <ImageCard
              key={data.id}
              name={data.name}
              image={data.image}
              webpage={data.webpage}
              repository={data.repository}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MyProjects;
