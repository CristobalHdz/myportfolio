import Grid from "@mui/material/Grid";

import AboutMe from "../AboutMe/AboutMe";
import ContactInfo from "../ContactInfo/ContactInfo";
import MyProjects from "../MyProjects/MyProjects";

const MainView = () => {
  return (
    <Grid container margin="0">
      {/* ABOUT ME */}
      <Grid item xs="auto" md={1}></Grid>
      <Grid item xs={12} md={10} marginBottom="100px" alignContent="center">
        <AboutMe />
      </Grid>
      <Grid item xs="auto" md={1}></Grid>

      {/* MY PROJECTS */}
      <Grid item xs="auto" md={1}></Grid>
      <Grid item xs={12} md={10} marginBottom="100px" justifyContent="center">
        <MyProjects />
      </Grid>

      {/* CONTACT INFO */}
      <Grid item xs={12} justifyContent="center">
        <ContactInfo />
      </Grid>
    </Grid>
  );
};

export default MainView;
