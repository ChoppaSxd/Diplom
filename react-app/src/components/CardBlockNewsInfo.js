import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  blockAboutUs: {
    height: "100%",
    width: "100%",
    paddingTop: 120,
    paddingBottom: 80,
    background: "#000000",
    color: "#ffffff",
  },
  paper: {
    width: "100%",
    marginTop: 40,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function CardBlockNewsInfo({ img, descOne, descTwo }) {
  const classes = useStyles();
  const NewsScreenOne = () => {
    window.scrollTo(0, 1100);
  };

  return (
    <div>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={3}
      >
        <Grid item xs={8} sm={8} md={8} lg={8}>
          <Paper
            className={classes.paper}
            style={{ border: "none" }}
            variant="outlined"
          >
            <img src={img.img1} height="100%" width="100%" />
            <br />
            <br />
            <Divider />
            <Divider />
            <Divider />
            <p style={{ fontSize: 18 }}>{descOne}</p>
            <Divider />
            <Divider />
            <Divider />
            <br />
            <br />
            <img src={img.img2} height="100%" width="100%" />
            <br />
            <br />
            <img src={img.img3} height="100%" width="100%" />
            <img
              style={{ paddingTop: 10 }}
              src={img.img4}
              height="100%"
              width="100%"
            />
            <br />
            <br />
            <Divider />
            <Divider />
            <Divider />
            <p style={{ fontSize: 18 }}>{descTwo}</p>
            <Link to="/main" style={{ textDecoration: "none" }}>
              <Button
                variant="outlined"
                color="primary"
                onClick={NewsScreenOne}
                href="#outlined-buttons"
              >
                Get back
              </Button>
            </Link>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
