import Grid from "@mui/material/Grid";

import AboutMe from "../AboutMe/AboutMe";
import MyProjects from "../MyProjects/MyProjects";

const MainView = () => {
  return (
    <Grid container>
      {/* ABOUT ME */}
      <Grid item xs="auto" md={1}></Grid>
      <Grid item xs={12} md={10} alignContent="center">
        <AboutMe />
      </Grid>
      <Grid item xs="auto" md={1}></Grid>

      {/* MY PROJECTS */}
      <Grid item xs="auto" md={1}></Grid>
      <Grid item xs={12} md={10} marginBottom="200px" justifyContent="center">
        <MyProjects />
      </Grid>
      <Grid item xs="auto" md={1}></Grid>
    </Grid>
  );
};

export default MainView;
