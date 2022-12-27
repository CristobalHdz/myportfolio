import { Card } from "@mui/material";
import Grid from "@mui/material/Grid";
import CardContainer from "./shared/CardContainer";

const AboutMe = () => {
  return (
    <Grid container>
      <Grid item xs={12} alignContent="start">
        <h1>About Me</h1>
      </Grid>
      <CardContainer />
    </Grid>
  );
};

export default AboutMe;
