import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
//import SwipeableViews from "react-swipeable-views";
//import { autoPlay } from "react-swipeable-views-utils";
import Divider from "@material-ui/core/Divider";

//const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    title: "ІСТОРИЧНА ДОВІДКА",
    label:
      "Львівський технікум харчової промисловості створений на базі комерційного ліцею в 1940 році згідно Постанови РНК УРСР від 11.06.1940 р. № 842 „Про організацію вищих і середніх спеціальних навчальних закладів у Західних областях УРСР”.",
    imgPath: "https://ldkhpp-ikt.at.ua/_si/0/s51989282.jpg",
  },
  {
    title: "ІСТОРИЧНА ДОВІДКА",
    label:
      "Розпорядженням Кабінету Міністрів України 22 вересня 2004 року коледж передано до сфери управління Міністерства освіти і науки України.",
    imgPath: "https://ldkhpp-ikt.at.ua/_si/0/s52531336.jpg",
  },
  {
    title: "ІСТОРИЧНА ДОВІДКА",
    label:
      "Згідно з наказом Міністерства освіти і науки України № 910 від 2 грудня 2004 року коледж став структурним підрозділом Національного університету харчових технологій.",
    imgPath: "http://lfkhp.com.ua/wp-content/uploads/2020/12/kolege-old11.jpg",
  },
  {
    title: "ІСТОРИЧНА ДОВІДКА",
    label:
      "Відповідно до наказу МОН України №538 від 22.04.2020р. Львівський державний коледж харчової і переробної промисловості Національного університету харчових технологій перейменовано на – Відокремлений структурний підрозділ «Львівський фаховий коледж харчової і переробної промисловості Національного університету харчових технологій» – скорочено: ВСП «ЛФКХПП НУХТ»",
    imgPath: "http://lfkhp.com.ua/wp-content/uploads/2020/12/kolege-old2.jpg",
  },
  {
    title: "МАТЕРІАЛЬНО-ТЕХНІЧНА БАЗА",
    label:
      "Будівлі і споруди ВСП «Львівський фаховий коледж харчової і переробної промисловості НУХТ» pозміщені на земельній ділянці площею 2,25 га.",
    imgPath:
      "http://lfkhp.com.ua/wp-content/uploads/2020/08/material_technical_1.jpg",
  },
  {
    title: "МАТЕРІАЛЬНО-ТЕХНІЧНА БАЗА",
    label:
      "Матеріально-технічна база складається з навчального корпусу загальною площею 10763 кв.м., у тому числі навчальна площа – 8364 кв.м, в розрахунку 11,1 кв.м. на одного студента. У коледжі розміщуються 22 навчальних кабінети та 24 лабораторії, які забезпечують підготовку фахових молодших бакалаврів за відповідними освітньо-професійними програмами.",
    imgPath: "http://lfkhp.com.ua/wp-content/uploads/2020/10/Slide1.jpg",
  },
  {
    title: "Бібліотека",
    label:
      "Бібліотека розміщена в навчальному корпусі коледжу і має абонемент, читальний зал на 80 місць, книгосховище загальною площею 320 кв.м., у якому налічується понад 124 тис. екземплярів книг. У гуртожитку функціонує читальний зал на 30 робочих місць. У бібліотеці впроваджена комп’ютерна система «Бібліограф». Студенти і викладачі мають доступ до світових електронних інформаційних ресурсів через мережу Інтернет.",
    imgPath: "http://lfkhp.com.ua/wp-content/uploads/2020/07/bibl1web.jpg",
  },
  {
    title: "Кабінети інформатики",
    label:
      "У навчально-виховному процесі задіяно понад 100 сучасних персональних комп’ютерів з відповідним периферійним обладнанням. У коледжі обладнано п’ять навчальних лабораторій інформатики і комп’ютерної техніки та лабораторія інформаційних систем і технологій. Усі комп’ютери об’єднані в локальну комп’ютерну мережу, забезпечується необмежений в обсязі та часі доступ до глобальної мережі Інтернет студентам, викладачам і співробітникам з будь-якого комп’ютера за допомогою радіоканалу або виділеної лінії.",
    imgPath: "http://lfkhp.com.ua/wp-content/uploads/2020/10/Konf8.jpg",
  },
  {
    title: "Лекційні кабінети",
    label:
      "Лекційні заняття проводяться в кабінетах, спеціально обладнаних мультимедійними технічними засобами та відповідною комп’ютерною технікою. Наявні кабінети і лабораторії мають необхідні технічні засоби навчання, навчальні й інформаційні стенди, засоби візуального супроводу занять.",
    imgPath: "http://lfkhp.com.ua/wp-content/uploads/2020/10/Konf7.jpg",
  },
  {
    title: "Практика",
    label:
      "Для проведення навчальних практик з усіх спеціальностей в коледжі створені навчально-виробничі майстерні та лабораторії: слюсарно-механічні майстерні; лабораторія-мініпекарня; лабораторія-цех з виробництва хлібного квасу; лабораторія-їдальня і навчальний бар; навчальний готель.",
    imgPath:
      "http://lfkhp.com.ua/wp-content/uploads/2020/08/material_technical_3.jpg",
  },
  {
    title: "Їдальня",
    label:
      "У коледжі працюють їдальня на 176 місць, обладнана найновішим устаткуванням, студентське кафе, де проходять практичну підготовку студенти спеціальності 181 «Харчові технології» освітньо-професійна програма «Виробництво харчової продукції». У їдальні проводяться святкові вечори, інші урочистості для студентів і працівників коледжу.",
    imgPath:
      "http://lfkhp.com.ua/wp-content/uploads/2020/08/material_technical_2.jpg",
  },
  {
    title: "Спортивний комплекс",
    label:
      "До спортивного комплексу входить спортивний зал площею 288 кв.м, зал гімнастики площею 75 кв.м, тренажерний зал площею 45 кв.м, лижна база, оздоровчий центр, стадіон, баскетбольний, футбольний, волейбольний, майданчики, сектори для занять легкою атлетикою. У коледжі діють спортивні секції, в яких студенти займаються різними видами спорту, зокрема важкою атлетикою, аеробікою, спортивними танцями, футболом. Студенти коледжу постійно стають переможцями обласних та загальноукраїнських спортивних змагань.",
    imgPath: "http://lfkhp.com.ua/wp-content/uploads/2020/10/Konf6.jpg",
  },
  {
    title: "Гуртожиток",
    label:
      "Можливість проживання у гуртожитку коледжу надається іногороднім студентам. Правом на проживання на сесійний період у гуртожитку користуються також студенти заочної форми навчання. Першочерговим правом надання місць у гуртожитку надається іногороднім студентам, які відносяться до пільгових категорій (діти-сироти, інваліди, студенти з багатодітних сімей та особи 1-2 категорії, які постраждали внаслідок Чорнобильської катастрофи).",
    imgPath: "http://lfkhp.com.ua/wp-content/uploads/2020/09/gurt1.jpg",
  },
  {
    title: "Гуртожиток",
    label:
      "Зручне розташування та транспортне сполучення, житлово-побутова інфраструктура підкреслюють вигідність проживання студентів з іншої місцевості. У гуртожитку створені відповідні умови для того, щоб студенти почували себе максимально комфортно. Кімнати укомплектовані необхідними меблями: ліжками, тумбочками, столом та стільцями. У гуртожитку є кухні, санітарно-гігієнічні приміщення, кімнати для самопідготовки та відпочинку.",
    imgPath:
      "http://lfkhp.com.ua/wp-content/uploads/2020/10/gurt4-web-e1601835425453.jpg",
  },
  {
    title: "Гуртожиток",
    label:
      "З метою організації змістовного дозвілля студентів, які мешкають у гуртожитках, проводяться спортивно-масові, культурно-масові та виховні заходи. Виховна робота в гуртожитку спрямована на підтримання зразкових побутових умов, дотримання мешканцями правил і норм проживання у гуртожитку, забезпечення активного культурного відпочинку мешканців. У гуртожитку діють органи самоврядування – збори студентів, студентська рада. Основна робота органів самоврядування спрямована на згуртування колективу, на активне дозвілля, на надання допомоги студентам, яким важко дається навчання, на дотримання санітарно-гігієнічних норм проживання, удосконалення умов проживання.",
    imgPath: "http://lfkhp.com.ua/wp-content/uploads/2020/09/gurt3-web.jpg",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 660,
    flexGrow: 1,
    marginLeft: "auto",
    marginRight: "auto",
  },
  header: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    padding: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: 385,
    display: "block",
    maxWidth: 660,
    overflow: "hidden",
    width: "100%",
  },
}));

export default function SwipeableTextMobileStepper() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div className={classes.root}>
      <Paper
        style={{
          textTransform: "uppercase",
          background: "black",
          color: "white",
        }}
        square
        elevation={0}
        className={classes.header}
      >
        <Typography>{tutorialSteps[activeStep].title}</Typography>
      </Paper>
      <img
        className={classes.img}
        src={tutorialSteps[activeStep].imgPath}
        alt={tutorialSteps[activeStep].label}
      />
      <MobileStepper
        steps={maxSteps}
        style={{ background: "black", color: "white" }}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button
            style={{ color: "white" }}
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button
            style={{ color: "white" }}
            size="small"
            onClick={handleBack}
            disabled={activeStep === 0}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
      <Divider />
      <Paper
        style={{ background: "black", color: "white" }}
        square
        elevation={0}
        className={classes.header}
      >
        <Typography>{tutorialSteps[activeStep].label}</Typography>
      </Paper>
    </div>
  );
}
