import React from "react";
import "../components/Banquest.css";
import "../components/Media.css";
import SwipeableTextMobileStepper from "../components/Stepper";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    background: "#01142F",
    color: "#F2F8FD",
    padding: theme.spacing(2),
    margin: "auto",
    marginTop: 120,
    maxWidth: "100%",
    minHeight: 800,
  },
}));

export default function Banquest() {
  const classes = useStyles();

  return (
    <div>
      <div className="container">
        <Paper className={classes.paper}>
          <SwipeableTextMobileStepper />
        </Paper>
      </div>
    </div>
  );
}
