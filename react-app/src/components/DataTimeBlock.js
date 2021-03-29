import React, { useState, useEffect } from "react";
import TableGroup from "../components/TableGroup";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Nav } from "react-bootstrap";
import Button from "@material-ui/core/Button";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import { Link } from "react-router-dom";
import saveAs from "file-saver";
import axios from "axios";
import rozFoto from "../images/rozfoto.PNG";
import ROZFOTOTWO from "../images/ROZFOTOTWO.PNG";
import rozFoto3 from "../images/rozfoto3.PNG";
import rozFoto4 from "../images/rozfoto4.PNG";

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
  paper2: { padding: theme.spacing(2) },
  link: { border: "none", textAlign: "start", fontWeight: 700 },
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

export default function DataTimeBlock() {
  const classes = useStyles();
  let [data, setData] = useState(new Date());

  useEffect(() => {
    let timer = setInterval(() => setData(new Date()), 1000);

    return function Cleanup() {
      clearInterval(timer);
    };
  });

  function downloadPhotoOne() {
    axios({
      url: rozFoto,
      method: "GET",
      responseType: "blob", // important
    }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "rozonecurse.jpg");
      document.body.appendChild(link);
      link.click();
    }, []);
  }

  function downloadPhotoTwo() {
    axios({
      url: ROZFOTOTWO,
      method: "GET",
      responseType: "blob", // important
    }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "roztwocurse.jpg");
      document.body.appendChild(link);
      link.click();
    }, []);
  }

  function downloadPhotoThre() {
    axios({
      url: rozFoto3,
      method: "GET",
      responseType: "blob", // important
    }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "rozfotothrecurse.jpg");
      document.body.appendChild(link);
      link.click();
    }, []);
  }

  function downloadPhotoForth() {
    axios({
      url: rozFoto4,
      method: "GET",
      responseType: "blob", // important
    }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "rozfotoforthcurse.jpg");
      document.body.appendChild(link);
      link.click();
    }, []);
  }

  return (
    <div>
      <div className="container">
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <TextField
                disabled
                id="filled-disabled"
                label={
                  <p style={{ color: "#F2F8FD" }}>
                    Time : {data.toLocaleTimeString()}
                  </p>
                }
                variant="filled"
                helperText={<p style={{ color: "#F2F8FD" }}>Time now</p>}
              />
              <TextField
                disabled
                id="filled-disabled"
                label={
                  <p style={{ color: "#F2F8FD" }}>
                    Data : {data.toLocaleDateString()}
                  </p>
                }
                variant="filled"
                helperText={<p style={{ color: "#F2F8FD" }}>Data now</p>}
              />
              <table
                style={{
                  width: "100%",
                  border: "1px solid black",
                }}
                cellspacing="0"
                cellpadding="10"
              >
                <caption>РОЗКЛАД ДЗВІНКІВ</caption>
                <tr>
                  <th style={{ border: "1px solid black" }}>Пари</th>
                  <th style={{ border: "1px solid black" }}>Години</th>
                </tr>
                <tr>
                  <td style={{ border: "1px solid black" }}>1 пара</td>
                  <td style={{ border: "1px solid black" }}>8.00 – 9.20</td>
                </tr>
                <tr>
                  <td style={{ border: "1px solid black" }}>2 пара</td>
                  <td style={{ border: "1px solid black" }}>9.30 – 10.50</td>
                </tr>
                <tr>
                  <td style={{ border: "1px solid black" }}>3 пара</td>
                  <td style={{ border: "1px solid black" }}>11.20 – 12.40</td>
                </tr>
                <tr>
                  <td style={{ border: "1px solid black" }}>4 пара</td>
                  <td style={{ border: "1px solid black" }}>12.50 – 14.10</td>
                </tr>
                <tr>
                  <td style={{ border: "1px solid black" }}>5 пара</td>
                  <td style={{ border: "1px solid black" }}>14.20 – 15.40</td>
                </tr>
                <tr>
                  <td style={{ border: "1px solid black" }}>6 пара</td>
                  <td style={{ border: "1px solid black" }}>15.50 – 17.10</td>
                </tr>
              </table>
            </Grid>
            <Grid item xs={12} sm={12} md={8} lg={8}>
              <Paper className={classes.paper2}>
                <img
                  src="http://lfkhp.com.ua/wp-content/uploads/2020/09/Rozklad-urokiv-web.jpg"
                  width="100%"
                  height="100%"
                />
                <br />
                <br />
                <div className={classes.link}>
                  <div className="row">
                    <div className="col-md-8">
                      <Nav.Link
                        target="__blank"
                        href="http://lfkhp.com.ua/wp-content/uploads/2021/03/%D0%A0%D0%BE%D0%B7%D0%BA%D0%BB%D0%B0%D0%B4-%D1%83%D1%80%D0%BE%D0%BA%D1%96%D0%B2-1%D0%BA%D1%83%D1%80%D1%81II%D1%81%D0%B5%D0%BC%D0%B5%D1%81%D1%82%D1%80-scaled.jpg"
                      >
                        Розклад занять для студентів I курсу (2 семестр)
                      </Nav.Link>
                    </div>
                    <div className="col-md-4">
                      <Button
                        variant="contained"
                        color="default"
                        size="small"
                        onClick={downloadPhotoOne}
                        className={classes.button}
                        startIcon={<CloudUploadIcon />}
                      >
                        Завантажити
                      </Button>
                    </div>
                    <div className="col-md-8">
                      <Nav.Link
                        target="__blank"
                        href="http://lfkhp.com.ua/wp-content/uploads/2021/03/%D0%A0%D0%BE%D0%B7%D0%BA%D0%BB%D0%B0%D0%B4-%D1%83%D1%80%D0%BE%D0%BA%D1%96%D0%B2-2%D0%BA%D1%83%D1%80%D1%81II%D1%81%D0%B5%D0%BC%D0%B5%D1%81%D1%82%D1%80-scaled.jpg"
                      >
                        Розклад занять для студентів II курсу (2 семестр)
                      </Nav.Link>
                    </div>
                    <div className="col-md-4">
                      <Button
                        variant="contained"
                        color="default"
                        size="small"
                        onClick={downloadPhotoTwo}
                        className={classes.button}
                        startIcon={<CloudUploadIcon />}
                      >
                        Завантажити
                      </Button>
                    </div>
                    <div className="col-md-8">
                      <Nav.Link
                        target="__blank"
                        href="http://lfkhp.com.ua/wp-content/uploads/2021/03/%D0%A0%D0%BE%D0%B7%D0%BA%D0%BB%D0%B0%D0%B4-%D1%83%D1%80%D0%BE%D0%BA%D1%96%D0%B2-3%D0%BA%D1%83%D1%80%D1%81II%D1%81%D0%B5%D0%BC%D0%B5%D1%81%D1%82%D1%80.jpg"
                      >
                        Розклад занять для студентів III курсу (2 семестр)
                      </Nav.Link>
                    </div>
                    <div className="col-md-4">
                      <Button
                        variant="contained"
                        color="default"
                        size="small"
                        onClick={downloadPhotoThre}
                        className={classes.button}
                        startIcon={<CloudUploadIcon />}
                      >
                        Завантажити
                      </Button>
                    </div>
                    <div className="col-md-8">
                      <Nav.Link
                        target="__blank"
                        href="http://lfkhp.com.ua/wp-content/uploads/2021/03/%D0%A0%D0%BE%D0%B7%D0%BA%D0%BB%D0%B0%D0%B4-%D1%83%D1%80%D0%BE%D0%BA%D1%96%D0%B2-4%D0%BA%D1%83%D1%80%D1%81II%D1%81%D0%B5%D0%BC%D0%B5%D1%81%D1%82%D1%80.jpg"
                      >
                        Розклад занять для студентів IV курсу (2 семестр)
                      </Nav.Link>
                    </div>
                    <div className="col-md-4">
                      <Button
                        variant="contained"
                        color="default"
                        size="small"
                        onClick={downloadPhotoForth}
                        className={classes.button}
                        startIcon={<CloudUploadIcon />}
                      >
                        Завантажити
                      </Button>
                    </div>
                  </div>
                </div>
              </Paper>
            </Grid>
          </Grid>
          <TableGroup />
        </Paper>
      </div>
    </div>
  );
}
