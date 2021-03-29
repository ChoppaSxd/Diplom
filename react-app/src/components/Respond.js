import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import "../components/Respond.css";
import Paper from "@material-ui/core/Paper";
import { CircularProgress } from "@material-ui/core";
import LinearProgress from "@material-ui/core/LinearProgress";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "block",
    marginTop: 120,
    marginLeft: "auto",
    marginRight: "auto",
    position: "absolute",
    maxWidth: 1077.5,
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
  rootTwo: {
    position: "absolute",
    maxWidth: 1077.5,
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
  paper: {
    background: "none",
    border: "none",
    marginTop: 120,
    marginBottom: 120,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function Respond() {
  const classes = useStyles();
  const [infores, setInfores] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(async () => {
    const response = await fetch("https://lfkkn.herokuapp.com/reviews", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    setInfores(data);
    setLoading(true);
    //console.log(infores.name);
  }, []);

  return (
    <div>
      <div className="container">
        <Paper className={classes.paper}>
          <table className="table-fill">
            <thead>
              <tr>
                <th className="text-left">Ім'я</th>
                <th className="text-left">Відгук</th>
                <th className="text-left">Опубліковано</th>
              </tr>
            </thead>
            <tbody className="table-hover">
              {loading ? (
                infores.map((item) => (
                  <tr key={item.id}>
                    <td className="text-left">{item.name}</td>
                    <td className="text-left">{item.description}</td>
                    <td className="text-left">{item.published_at}</td>
                  </tr>
                ))
              ) : (
                <div>
                  <div className={classes.root}>
                    <CircularProgress color="secondary" />
                  </div>
                  <div className={classes.rootTwo}>
                    <LinearProgress color="secondary" />
                  </div>
                </div>
              )}
            </tbody>
          </table>
        </Paper>
      </div>
    </div>
  );
}
