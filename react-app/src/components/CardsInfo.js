import React from "react";
import "../components/Info.css";
import "../components/Media.css";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { blue, red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Screenshot_1 from "../images/Screenshot_1.png";

// CARD
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    marginTop: 50,
  },
  media: {
    height: 312,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",

    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
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
  spacing: { margin: theme.spacing(-4, "auto"), marginBottom: 8 },
}));

export default function Info({ image, description, typ, stan, object, title }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <Card className={classes.root}>
        <CardMedia className={classes.media} image={image} title="Викладачі" />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            <h5 className={classes.name}>{description}</h5>
            <h6 className={classes.name}>{title}</h6>
          </Typography>
        </CardContent>
        <CardActions className={classes.spacing} disableSpacing>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon fontSize="large" color="primary" />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>
              <span style={{ fontWeight: 700 }}>Освіта: </span>
              {typ}
              <br />
              <span style={{ fontWeight: 700 }}>Педагогічний стаж: </span>
              {stan}
              <br />
              <span style={{ fontWeight: 700 }}>Викладає дисципліни: </span>
              {object}
              <br />
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}
