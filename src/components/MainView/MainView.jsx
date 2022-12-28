import { useRef } from "react";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import AboutMe from "../AboutMe/AboutMe";
import ContactInfo from "../ContactInfo/ContactInfo";
import MyProjects from "../MyProjects/MyProjects";
import NavBar from "../NavBar/Navbar";

import "./MainView.css";

const MainView = () => {
  const ref = useRef(null);
  const scrollHandler = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Grid container>
      <NavBar />

      <Grid item xs={12}>
        <Box className="cover">
          <div className="cover-text-wrapper">
            <p className="cover-text">
              My name is Cristobal Hernandez. I am a front-end web developer
            </p>
          </div>
          <div className="cover-btn-wrapper">
            <button onClick={scrollHandler} className="scroll-btn">
              ◥
            </button>
          </div>
        </Box>
      </Grid>
      {/* ABOUT ME */}
      <Grid
        item
        xs={12}
        id="AboutMe"
        paddingBottom="100px"
        alignContent="center"
        className="about-me"
        ref={ref}
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
