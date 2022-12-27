import Card from "@mui/material/Card";
import Box from "@mui/material/Box";

import classes from "./CardContainer.module.css";

const CardContainer = (props) => {
  return <Box className={classes.cardcontainer}>
    <Card>aaaaaa</Card>
    <Card>aaaaaa</Card>
    <Card>aaaaaa</Card>
  </Box>;
};

export default CardContainer;
