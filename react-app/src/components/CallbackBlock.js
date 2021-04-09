import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import "../components/CallbackBlock.css";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import PhoneFoto from "../images/pngtree-phone-icon-png-image_1757859.jpg";
import Vector12 from "../images/Vector (12).png";
import Vector11 from "../images/Vector11.jpg";
import { CircularProgress } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  input: {
    height: 30,
    border: "none",
    borderRadius: 25,
    background: "rgba(255,255,255,.1)",
  },
  label: {
    color: "white",
  },
  textCenter: {
    marginBottom: 50,
    color: "#fff",
    fontSize: 23,
    display: "block",
    textAlign: "center",
  },
  Errorscolor: { color: "red" },
  Hidepass: {
    display: "none",
  },
  CircleLoad: {
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
}));

const RegistSchema = Yup.object().shape({
  username: Yup.string().min(2, "Too Short!").max(20, "Too Long!"),
  email: Yup.string().email("Invalid email").required("Required"),
  desc: Yup.string().min(2, "Too Short!").max(100, "Too Long!"),
});

export default function CallbackBlock() {
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [desc, setDesc] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://lfkkn.herokuapp.com/users", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
        confirmed: true,
      }),
    });

    const res = await fetch("https://lfkkn.herokuapp.com/reviews", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name: username,
        description: desc,
      }),
    });

    const data = await response.json();
    const data1 = await res.json();
    console.log(data);
    console.log(data1);
    setLoading(false);

    setTimeout(() => {
      setLoading(true);
      alert("Hello, " + username + "\nThanks, for you respond!!!!");
    }, 2000);

    const form = e.target;
    form.reset();
  };

  function disableScrolling() {
    document.body.style.overflowY = "hidden";
  }

  function enableScrolling() {
    const form = document.getElementById("form");
    form.reset();
    document.body.style.overflowY = "scroll";
  }

  function urlPass() {
    setTimeout(function () {
      window.location.href = "/respond";
    }, 2500);
  }

  return (
    <div className="CallbackBlock">
      <div className="containers">
        <h1>
          <div className="main_block_animation">
            <div className="main_background_callback">
              <div className="main_background_callback">
                <div onClick={disableScrolling} className="background_callback">
                  <a href="#menus">
                    <div className="round_callback">
                      <div className="img_callback">
                        <img src={Vector12} alt=">>>" width="25" height="15" />
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </h1>
        <div className="popover" id="menus">
          <div className="contents">
            <a onClick={enableScrolling} href="#" class="close"></a>
            <h2>Написати відгук</h2>
            {loading ? (
              <Formik
                initialValues={{
                  username: "",
                  email: "",
                  password: "1111111",
                  desc: "",
                }}
                validationSchema={RegistSchema}
                onSubmit={(values, { setSubmitting }) => {
                  setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                  }, 400);
                }}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  /* and other goodies */
                }) => (
                  <div className="form">
                    <form id="form" onSubmit={handleSubmit}>
                      <div className="user-box">
                        <input
                          type="name"
                          name="username"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={setUsername(values.username)}
                          placeholder={
                            errors.username &&
                            touched.username &&
                            errors.username
                          }
                        />
                        <label htmlFor="firstName">Username</label>
                      </div>
                      <div className="user-box">
                        <input
                          type="name"
                          name="email"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={setEmail(values.email)}
                          placeholder={
                            errors.email && touched.email && errors.email
                          }
                        />
                        <label htmlFor="firstName">Email</label>
                        <div className={classes.Errorscolor}>
                          {errors.email && touched.email && errors.email}
                        </div>
                      </div>
                      <div className="user-box">
                        <input
                          type="name"
                          name="desc"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={setDesc(values.desc)}
                          placeholder={
                            errors.desc && touched.desc && errors.desc
                          }
                        />
                        <label htmlFor="firstName">Desc</label>
                      </div>
                      <div className="user-box">
                        <br />
                        <input
                          className={classes.Hidepass}
                          type="password"
                          name="password"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={setPassword(values.password)}
                          placeholder="1111111"
                          disabled
                        />
                        {/* <label htmlFor="firstName">Password</label> */}
                        <div className={classes.Errorscolor}>
                          {errors.password &&
                            touched.password &&
                            errors.password}
                        </div>
                      </div>
                      <Button
                        id="btn"
                        type="submit"
                        onClick={urlPass}
                        disabled={!(values.username && values.desc)}
                      >
                        Надіслати
                      </Button>
                    </form>
                  </div>
                )}
              </Formik>
            ) : (
              <div className={classes.CircleLoad}>
                <CircularProgress color="secondary" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
