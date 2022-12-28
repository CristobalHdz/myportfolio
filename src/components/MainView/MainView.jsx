import Grid from "@mui/material/Grid";

import AboutMe from "../AboutMe/AboutMe";
import ContactInfo from "../ContactInfo/ContactInfo";
import MyProjects from "../MyProjects/MyProjects";
import NavBar from "../NavBar/Navbar";

import "./MainView.css";

const MainView = () => {
  return (
    <Grid container>
      <NavBar />
      {/* ABOUT ME */}
      <Grid
        item
        xs={12}
        id="AboutMe"
        paddingBottom="100px"
        alignContent="center"
        className="about-me"
      >
        <AboutMe />
      </Grid>

      {/* MY PROJECTS */}
      <Grid item xs="auto" md={1} className="projects"></Grid>
      <Grid
        item
        xs={12}
        md={10}
        id="MyProjects"
        paddingBottom="100px"
        justifyContent="center"
        className="projects"
      >
        <MyProjects />
      </Grid>
      <Grid item xs="auto" md={1} className="projects"></Grid>

      {/* CONTACT INFO */}
      <Grid item xs={1} md={1} className="contact"></Grid>
      <Grid
        item
        xs={10}
        md={10}
        id="Contact"
        justifyContent="center"
        className="contact"
      >
        <ContactInfo />
      </Grid>
      <Grid item xs={1} md={1} className="contact"></Grid>
    </Grid>
  );
};

export default MainView;
