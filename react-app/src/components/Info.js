import React from "react";
import "../components/Info.css";
import "../components/Media.css";
import Footer from "../components/Footer";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { blue, red } from '@material-ui/core/colors';
import Screenshot_1 from "../images/Screenshot_1.png";


// CARD
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    marginTop: 50,
  },
  media: {
    height: 312,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  name: {
    color: "black",
    textAlign: "center",
  },
  name1: {
    color: "black",
    textAlign: "center",
  },
  name2: {
    color: "black",
    textAlign: "center",
  },
}));

const eventsData = [
  {
    id: 0,
    image: "http://lfkhp.com.ua/wp-content/uploads/2020/10/Betsa-web.jpg",
    description:
      "Беца Ірина Миколаївна"
  },
  {
    id: 1,
    image: "http://lfkhp.com.ua/wp-content/uploads/2020/10/Grytsak-web.jpg",
    description: "Грицак Володимир Андрійович"
  },
];
const eventsData2 = [
  {
    id: 0,
    image: "http://lfkhp.com.ua/wp-content/uploads/2020/10/Zaharyak-web.jpg",
    description:
      "Захаряк Оксана Іванівна"
  },
  {
    id: 1,
    image: "http://lfkhp.com.ua/wp-content/uploads/2020/10/Marton-web.jpg",
    description: "Мартон Олег Володимирович"
  },

];
const eventsData3 = [
  {
    id: 0,
    image: "http://lfkhp.com.ua/wp-content/uploads/2020/10/Mysholivska-web.jpg",
    description:
      "Мишолівська Марта Василівна"
  },
  {
    id: 1,
    image: "http://lfkhp.com.ua/wp-content/uploads/2020/10/Popovych-web.jpg",
    description: "Попович Орест Петрович"
  },

];

export default function Info({ id, image, title, location, description, avatar, paragraph }) {

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const eventsList = eventsData.map(({ id, image, title, location, description, avatar, paragraph }, index) => (
    <Card
      key={index}
      id={id}
      avatar={avatar}
      paragraph={paragraph}
      image={image}
      title={title}
      location={location}
      description={description}
      className={classes.root}
    >
      <CardMedia
        className={classes.media}
        image={image}
        title="Викладачі"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          <p className={classes.name}>
            {description}
          </p>
        </Typography>
      </CardContent>
    </Card>
  ));

  const eventsList2 = eventsData2.map(({ id, image, title, location, description, avatar, paragraph }, index) => (
    <Card
      key={index}
      id={id}
      avatar={avatar}
      paragraph={paragraph}
      image={image}
      title={title}
      location={location}
      description={description}
      className={classes.root}
    >
      <CardMedia
        className={classes.media}
        image={image}
        title="Викладачі"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          <p className={classes.name1}>
            {description}
          </p>
        </Typography>
      </CardContent>
    </Card>
  ));
  const eventsList3 = eventsData3.map(({ id, image, title, location, description, avatar, paragraph }, index) => (
    <Card
      key={index}
      id={id}
      avatar={avatar}
      paragraph={paragraph}
      image={image}
      title={title}
      location={location}
      description={description}
      className={classes.root}
    >
      <CardMedia
        className={classes.media}
        image={image}
        title="Викладачі"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          <p className={classes.name2}>
            {description}
          </p>
        </Typography>
      </CardContent>
    </Card>
  ));

  return (
    <div className="Info">
      <section>
        <div className="container">
          <div className="row mb-4">
            <div className="col-md-4">
              {eventsList}
            </div>
            <div className="col-md-4">
              {eventsList2}
            </div>
            <div className="col-md-4">
              {eventsList3}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}