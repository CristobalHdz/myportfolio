import Grid from "@mui/material/Grid";

import AboutMe from "../AboutMe/AboutMe";

const MainView = () => {
  return (
    <Grid container >
      <Grid item xs="auto" md={1}></Grid>
      <Grid item xs={12} md={10}>
        <AboutMe />
      </Grid>
      <Grid item xs="auto" md={1}></Grid>
    </Grid>
  );
};

export default MainView;
