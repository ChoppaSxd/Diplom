import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: 745,
    height: "100%",
    cursor: "pointer",
  },
  dividerFullWidth: {
    margin: `-0.7px -2px 0 ${theme.spacing(-0.1)}px`,
  },
  dividerInset: {
    margin: `5px 0 0 ${theme.spacing(9)}px`,
  },
  paper: {
    width: "100%",
    padding: theme.spacing(0),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  textspacing: { margin: theme.spacing(1) },
  textspacingTitle: { padding: theme.spacing(1) },
}));

export default function NewsBlock({ img, desc, data, title }) {
  const classes = useStyles();
  return (
    <div>
      <Paper
        className={classes.root}
        style={{ border: "none" }}
        variant="outlined"
      >
        <img
          style={{ borderRadius: 4, minHeight: 360 }}
          src={img}
          height="100%"
          width="100%"
        />
        <br />
        <br />
        <h1 className={classes.textspacingTitle} style={{ textAlign: "start", fontSize: 18, fontWeight: 700 }}>
          {title}
        </h1>
        <Divider />
        <Divider />
        <Divider />
        <p className={classes.textspacing} style={{ fontSize: 17.4 }}>
          {desc}
        </p>
        <Divider />
        <Divider />
        <Divider />
        <List className={classes.paper}>
          <Grid container spacing={10} alignItems="center">
            <Grid item xs sm>
              <ListItem>
                <ListItemText primary="Дата:" secondary={data} />
              </ListItem>
            </Grid>
            <Grid item xs={6} sm={6}>
              <Button variant="contained" color="primary">
                Читати далі
              </Button>
            </Grid>
          </Grid>
        </List>
        <br />
      </Paper>
    </div>
  );
}
