import React from "react";
import FotoGaleryCopm from "../components/FotoGalerycomponent";
import { makeStyles } from "@material-ui/core/styles";
import "../components/Fotogalery.css";
import "../components/Media.css";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    textAlign: "start",
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

export default function Fotogalery() {
  const classes = useStyles();

  return (
    <div className="Fotogalery">
      <section>
        <div className="container">
          <div className="block_one">
            <div className="row">
              <div className="col-md-12">
                <i className="slider_s">
                  <input
                    className="int_slider slide_foto_1"
                    type="radio"
                    name="s"
                    title="Random Picture 1"
                  />
                  <input
                    className="int_slider slide_foto_2"
                    checked
                    type="radio"
                    name="s"
                    title="Random Picture 2"
                  />
                  <input
                    className="int_slider slide_foto_3"
                    type="radio"
                    name="s"
                    title="Random Picture 3"
                  />
                  <input
                    className="int_slider slide_foto_4"
                    type="radio"
                    name="s"
                    title="Random Picture 4"
                  />
                  <input
                    className="int_slider slide_foto_5"
                    type="radio"
                    name="s"
                    title="Random Picture 5"
                  />
                </i>
              </div>
            </div>

            <Grid style={{ paddingTop: 120 }} container spacing={4}>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <Paper className={classes.paper}>
                  <h2>Lolololo</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facere qui pariatur odio deleniti ratione delectus ea
                    tempore, dolorem adipisci hic quas facilis dolorum maiores
                    asperiores, deserunt molestiae numquam. Accusantium, error?
                  </p>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <Paper className={classes.paper}>
                  <h2>Lolololo</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facere qui pariatur odio deleniti ratione delectus ea
                    tempore, dolorem adipisci hic quas facilis dolorum maiores
                    asperiores, deserunt molestiae numquam. Accusantium, error?
                  </p>
                </Paper>
              </Grid>
            </Grid>

            <div>
              <div style={{ paddingTop: 120 }} className="Title_Foto_Galery">
                <div className="row">
                  <div className="col-md-12">
                    <FotoGaleryCopm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
