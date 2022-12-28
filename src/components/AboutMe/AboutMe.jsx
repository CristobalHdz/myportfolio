import CardContainer from "../Shared/CardContainer";
import CardComponent from "./AboutMeCards/CardComponent";

const AboutMe = () => {
  return (
    <div>
      <CardContainer title="About Me">
        <CardComponent header="Who am I?">
          <p>
            Although I studied everything regarding logistics; I have always
            have an interest on software development.
          </p>
          <p>When I am not developing, I like to go to: </p>
          <ul>
            <li>the gym</li>
            <li>do some mountain biking</li>
            <li>do woodwork</li>
            <li>
              take a walk and spend some time in the nature
            </li>
          </ul>
        </CardComponent>
        <CardComponent header="Education">
          <p>
            December 2021 <br />
            Full-stack development bootcamp <br />
            Trilogy Education/ Instituto Tecnológico y de Estudios Superiores de
            Monterrey
          </p>
          <p>
            December 2018 <br />
            B.S. Industrial Engineering with minor in System Logistics <br />
            Instituto Tecnológico y de Estudios Superiores de Monterrey
          </p>
          <p>
            July 2016 <br />
            Business administration and entrepreneurship summer program <br />
            Oklahoma State University
          </p>
        </CardComponent>
        <CardComponent header="Skills">
          <p>
            Web <br />
            HTML, CSS, JavaScript, GraphiQL,Vue.js framework, React Library with
            exposure to Redux
          </p>
          <p>
            Tools <br />
            Version control tools(git and BitBucket), VSC, Jira
          </p>
          <p>
            Database <br />
            MongoDB, MySQL, Firebase
          </p>
          <p>
            Exposure to <br />
            Elixir, AWS, MongoDB, Firebase, SQL, NoSQL, ProModel
          </p>
        </CardComponent>
      </CardContainer>
    </div>
  );
};

export default AboutMe;
