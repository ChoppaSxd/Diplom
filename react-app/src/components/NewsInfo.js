import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardBlockNewsInfo from "./CardBlockNewsInfo";
import { CircularProgress } from "@material-ui/core";

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
  loadcss: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

const cardData = [
  {
    id: 1,
    img: {
      img1:
        "http://lfkhp.com.ua/wp-content/uploads/2021/03/%D0%A1%D0%BB%D0%B0%D0%B9%D0%B41.jpg",
      img2:
        "http://lfkhp.com.ua/wp-content/uploads/2021/03/%D0%A1%D0%BB%D0%B0%D0%B9%D0%B44-1024x576.jpg",
      img3:
        "http://lfkhp.com.ua/wp-content/uploads/2021/03/%D0%A1%D0%BB%D0%B0%D0%B9%D0%B45-1024x576.jpg",
    },
    descOne:
      "ВСП «Львівський фаховий коледж харчової і переробної промисловості НУХТ» впродовж місяця проводив Дні гостинності спеціальностей в онлайн-форматі. В рамках проведених заходів потенційні абітурієнти та їх батьки мали можливість ознайомитися з: 🗸   перевагами коледжу, 🗸   спеціальностями та освітньо-професійними програмами, 🗸   за якими здійснюється підготовка фахових молодших бакалаврів, 🗸   матеріально-технічною базою освітнього закладу, 🗸   переглянули мотиваційні ролики від випускників та студентів, 🗸   отримали відповіді на запитання щодо вступу та навчання у коледжі.",
    descTwo:
      "У дистанційному режимі спілкувались із гостями заходів та відповідали на запитання щодо вступної кампанії 2021р. – Григорців Михайло Володимирович к.е.н, доцент, заслужений працівник освіти України, директор коледжу; адміністрація коледжу; відповідальний секретар Приймальної комісії; гаранти освітніх програм.",
  },
  {
    id: 2,
    img: {
      img1: "http://lfkhp.com.ua/wp-content/uploads/2021/02/vol1.jpg",
      img2: "http://lfkhp.com.ua/wp-content/uploads/2021/02/vol3.jpg",
      img3: "http://lfkhp.com.ua/wp-content/uploads/2021/02/vol2.jpg",
    },
    descOne:
      "25 лютого завершився захист дипломних проєктів студентів денної форми навчання за спеціальністю «Харчові технології. Бродильне виробництво і виноробство”. Під час захисту студенти продемонстрували презентації, у яких відобразили інноваційні рішення, виконання науково-дослідних робіт, графічну частину та техніко-економічні показники проєкту.",
    descTwo:
      "Голова та члени державної кваліфікаційної комісії відмітили належну підготовку студентів на здобуття кваліфікації «Молодший спеціаліст».",
  },
  {
    id: 3,
    img: {
      img1: "http://lfkhp.com.ua/wp-content/uploads/2021/02/Lesya-web2.jpg",
      img2: "http://vilnogirsk-rada.gov.ua/upload/images/1(6).png",
      img3: "https://dolyna.if.ua/wp-content/uploads/2021/02/unnamed-8.jpg",
    },
    descOne:
      "25.02.2021 року виповнилось 150 років від дня народження Лесі Українки – видатної української письменниці та громадської діячки, однієї з центральних постатей національної культури.",
    descTwo:
      "Ювілейний рік Лесі Українки – це нагода привернути увагу до творчості письменниці й актуалізувати її спадок. До відзначення ювілейної дати задля популяризації та вшанування творчості письменниці студенти спеціальності готельно-ресторанна справа приєдналися до флешмобу #150лесіукраїнці",
  },
  {
    id: 4,
    img: {
      img1: "http://lfkhp.com.ua/wp-content/uploads/2021/02/nazar6.jpg",
      img2: "http://lfkhp.com.ua/wp-content/uploads/2021/02/nazar2.jpg",
      img3: "http://lfkhp.com.ua/wp-content/uploads/2021/02/nazar3.jpg",
      img4: "http://lfkhp.com.ua/wp-content/uploads/2021/02/nazar5.jpg",
    },
    descOne:
      "23 лютого 2021р у ЦК “Технології хлібопекарського і кондитерського виробництв” відбувся захист дипломних проєктів у групі ХМКс – 3з на здобуття кваліфікації “молодший спеціаліст” в галузі хлібопекарського, кондитерського і макаронного виробництв та харчових концентратів у присутності Державної кваліфікаційної комісії: голова ДКК – начальник виробництва ПрАТ “Концерн Хлібпром” ВП “Львівський хлібозавод 1” – Антошків О.П., заступник голови ДКК – директор ВСП ЛФКХПП НУХТ, доцент, к.е.н. – Григорців М. В., Назар М.І – голова циклової комісії, к.т.н., викладач спец дисциплін; Демцюх Н.Р., – викладач охорони праці; Старик Р.Я.,– к.е.н, викладач економічних дисциплін.",
    descTwo:
      "Під час захисту усі студенти на високому рівні продемонстрували свої знання здобуті за роки навчання у коледжі. Голова та члени ДКК отримали позитивні враження від доповідей студентів!",
  },
];

export default function NewsInfo() {
  const classes = useStyles();
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(false);

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
    setLoading(true);
    //console.log(infores.name);
  }, []);

  return (
    <div>
      <div className={classes.blockAboutUs}>
        <div className="container">
          {loading ? (
            info.map((item) => (
              <CardBlockNewsInfo
                key={item.id}
                img={item.imageURL}
                descOne={item.title}
                descTwo={item.description}
              />
            ))
          ) : (
            <div className={classes.loadcss}>
              <CircularProgress color="secondary" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
