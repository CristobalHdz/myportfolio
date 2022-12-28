import CardContainer from "../Shared/CardContainer";
import CardComponent from "./AboutMeCards/CardComponent";

const AboutMe = () => {
  return (
    <div>
      <CardContainer title="About Me">
        <CardComponent header="Who am I?">
          <p>
            {">"}I am a front-end web-developer and a self-starter who works
            well in teams under tight deadlines.
          </p>
          <p>
            {">"}I am a critical thinker with advanced analytical skills who
            tackles challenges creatively and picks up new subjects areas
            rapidly.
          </p>
          <p>
            {">"}I have experience in working with the Vue.js framework and
            React library as well as exposure to Redux.
          </p>
          <p>{">"}When I am not developing, I like to: </p>
          <ul>
            <li>Go to the gym</li>
            <li>Go mountain biking</li>
            <li>Do woodwork</li>
            <li>Take a walk and spend time in nature</li>
          </ul>
        </CardComponent>
        <CardComponent header="Skills">
          <p>
            {">"}Web <br />
            HTML, CSS, JavaScript, GraphiQL, Vue.js framework, React Library
            with exposure to Redux
          </p>
          <p>
            {">"}Tools <br />
            Version control tools (git and BitBucket), VSC, Jira
          </p>
          <p>
            {">"}Database <br />
            MongoDB, MySQL, Firebase
          </p>
          <p>
            {">"}Exposure to <br />
            Elixir, AWS, MongoDB, Firebase, SQL, NoSQL, ProModel
          </p>
        </CardComponent>
        <CardComponent header="Education">
          <p>
            {">"}While I enjoyed studying industrial engineering, I have always
            have a passion for software development.
          </p>
          <p>
            {">"}December 2021 <br />
            Full-stack development bootcamp <br />
            Trilogy Education / Instituto Tecnológico y de Estudios Superiores
            de Monterrey
          </p>
          <p>
            {">"}December 2018 <br />
            B.S. Industrial Engineering with minor in System Logistics <br />
            Instituto Tecnológico y de Estudios Superiores de Monterrey
          </p>
          <p>
            {">"}July 2016 <br />
            Business administration and entrepreneurship summer program <br />
            Oklahoma State University
          </p>
        </CardComponent>
      </CardContainer>
    </div>
  );
};

export default AboutMe;
