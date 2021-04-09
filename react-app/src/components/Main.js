import React, { useState, useEffect } from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../components/Main.css";
import "../components/Animation.css";
import "../components/Media.css";
import NewsBlock from "../components/NewsBlock";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import foto from "../images/ldk.jpg";
import { CircularProgress } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
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
  textspacing: { padding: theme.spacing(1) },
  loadcss: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

const eventData = [
  {
    id: 1,
    img:
      "http://lfkhp.com.ua/wp-content/uploads/2021/03/%D0%A1%D0%BB%D0%B0%D0%B9%D0%B41.jpg",
    title: "ДНІ ГОСТИННОСТІ СПЕЦІАЛЬНОСТЕЙВ ОНЛАЙН-ФОРМАТІ",
    desc:
      "ВСП «Львівський фаховий коледж харчової і переробної промисловості НУХТ» впродовж місяця проводив Дні гостинності спеціальностей в онлайн-форматі. В рамках проведених заходів потенційні абітурієнти та їх батьки мали можливість ознайомитися з: 🗸   перевагами коледжу,🗸   спеціальностями та освітньо-професійними програмами, 🗸   за якими здійснюється підготовка фахових…",
    data: "27/02/2021",
  },
  {
    id: 2,
    img: "http://lfkhp.com.ua/wp-content/uploads/2021/02/vol6.jpg",
    title:
      "ЗАХИСТ ДИПЛОМНОГО ПРОЄКТУ (СПЕЦІАЛЬНІСТЬ «БРОДИЛЬНЕ ВИРОБНИЦТВО І ВИНОРОБСТВО»)",
    desc:
      "25 лютого завершився захист дипломних проєктів студентів денної форми навчання за спеціальністю «Харчові технології. Бродильне виробництво і виноробство”. Під час захисту студенти продемонстрували презентації, у яких відобразили інноваційні рішення, виконання науково-дослідних робіт, графічну частину та техніко-економічні показники проєкту.",
    data: "26/02/2021",
  },
  {
    id: 3,
    img: "http://lfkhp.com.ua/wp-content/uploads/2021/02/Lesya-web2.jpg",
    title: "ДО 150-РІЧЧЯ З ДНЯ НАРОДЖЕННЯ ЛЕСІ УКРАЇНКИ",
    desc:
      "25.02.2021 року виповнилось 150 років від дня народження Лесі Українки – видатної української письменниці та громадської діячки, однієї з центральних постатей національної культури. Ювілейний рік Лесі Українки – це нагода привернути увагу до творчості письменниці й актуалізувати її спадок.",
    data: "25/02/2021",
  },
  {
    id: 4,
    img: "http://lfkhp.com.ua/wp-content/uploads/2021/02/nazar3.jpg",
    title:
      "ЗАХИСТ ДИПЛОМНОГО ПРОЄКТУ («ТЕХНОЛОГІЇ ХЛІБОПЕКАРСЬКОГО І КОНДИТЕРСЬКОГО ВИРОБНИЦТВ»)",
    desc:
      "23 лютого 2021р у ЦК “Технології хлібопекарського і кондитерського виробництв” відбувся захист дипломних проєктів у групі ХМКс – 3з на здобуття кваліфікації “молодший спеціаліст” в галузі хлібопекарського, кондитерського і макаронного виробництв та харчових концентратів у присутності Державної кваліфікаційної комісії:голова ДКК…",
    data: "24/02/2021",
  },
];

export default function Main() {
  const classes = useStyles();
  const [info, setInfo] = useState([]);
  const [loading, setloading] = useState(false);

  const NewsScreenOne = () => {
    window.scrollTo(0, 100);
  };

  useEffect(async () => {
    const response = await fetch("https://lfkkn.herokuapp.com/novynies", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    setInfo(data);
    setloading(true);
    //console.log(infores.name);
  }, []);

  return (
    <div className="Main">
      <section>
        <div className="f-text">
          <img className="foto" src={foto} />
          <div className="center"></div>
        </div>

        <div className="block_two">
          <div className="container card_cont">
            <div className="row">
              <div className="col-xs-md-4">
                <div className="card border_cards">
                  <div className="face face1">
                    <div className="content">
                      <img src="https://www.daliform.com/wp-content/uploads/2020/05/img-book.png" />
                      <h3>Бібліотека</h3>
                    </div>
                  </div>
                  <div className="face face2">
                    <div className="content">
                      <p>Електронна біоліотека</p>
                      <Nav.Link
                        target="_blank"
                        href="http://www.elib-lcnuht.lviv.ua/"
                      >
                        Перейти
                      </Nav.Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-md-4">
                <div className="card border_cards">
                  <div className="face face1">
                    <div className="content">
                      <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/code_128.png?raw=true" />
                      <h3>Тести</h3>
                    </div>
                  </div>
                  <div className="face face2">
                    <div className="content">
                      <p>Тести для майбутніх програмістів</p>
                      <Nav.Link
                        href="http://tvoemisto.tv/news/u_lvovi_vidkryvaietsya_ofis_itkompanii_intetics_yaki_vakansii_proponuyut_test_92401.html"
                        target="_blank"
                      >
                        Перейти
                      </Nav.Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-md-4">
                <div className="card border_cards">
                  <div className="face face1">
                    <div className="content">
                      <img src="https://www.daliform.com/wp-content/uploads/2020/05/img-software.png" />
                      <h3>Курси</h3>
                    </div>
                  </div>
                  <div className="face face2">
                    <div className="content">
                      <p>Основи програмування курси</p>
                      <Nav.Link
                        target="_blank"
                        href="https://courses.prometheus.org.ua/courses/KPI/Programming101/2015_T1/about"
                      >
                        Перейти
                      </Nav.Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-md-4">
                <div className="card border_cards">
                  <div className="face face1">
                    <div className="content">
                      <img src="https://findicons.com/files/icons/1580/devine_icons_part_2/128/home.png" />
                      <h3>Головна</h3>
                    </div>
                  </div>
                  <div className="face face2">
                    <div className="content">
                      <p>Головний сайт коледжу</p>
                      <Nav.Link target="_blank" href="http://lfkhp.com.ua/">
                        Перейти
                      </Nav.Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="block_about_us">
          <div className="container">
            <Grid container direction="row" spacing={3}>
              {loading ? (
                info.map((item) => (
                  <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Link
                      className="link"
                      onClick={NewsScreenOne}
                      key={item.id}
                      to={`/newsinfo`}
                    >
                      <NewsBlock
                        img={item.imageURL}
                        title={item.title}
                        desc={item.description}
                        data={item.date}
                      />
                    </Link>
                  </Grid>
                ))
              ) : (
                <div className={classes.loadcss}>
                  <CircularProgress color="secondary" />
                </div>
              )}
            </Grid>
          </div>
        </div>
      </section>
    </div>
  );
}
