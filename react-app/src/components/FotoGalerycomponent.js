import React from "react";
import { Link } from "react-router-dom";
import "../components/FotoGalerycomponenta.css";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import ListSubheader from "@material-ui/core/ListSubheader";
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import image from "../images/caption_2.jpg";
import foto1 from "../images/foto1.jpg";
import foto2 from "../images/foto2.jpg";
import foto3 from "../images/foto3.jpg";
import foto4 from "../images/foto4.jpg";
import foto5 from "../images/foto5.jpg";
import foto6 from "../images/foto6.jpg";
import foto7 from "../images/foto7.jpg";
import foto8 from "../images/foto8.jpg";
import foto9 from "../images/foto9.jpg";
import foto10 from "../images/foto10.jpg";
import foto11 from "../images/vidk1.jpg";
import foto12 from "../images/vidk2.jpg"
import { Scrollbars } from "react-custom-scrollbars";
import { blue } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    //backgroundColor: theme.palette.background.main,
    background: "#231F20",
  },
  gridList: {
    width: "100%",
    height: 600,
  },
  title: {
    fontSize: 30,
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
}));

const tileData = [
  {
    img: foto1,
    title: "Image1",
    author: "Admin",
    cols: 2,
    rows: 2,
  },
  { img: foto2, title: "Image2", author: "Admin", cols: 1, rows: 2 },
  { img: foto3, title: "Image3", author: "Admin", cols: 1, rows: 2 },
  { title: "???????? ?????????????????? ???????????? 2019", author: null, cols: 3, rows: 0 },
  { img: foto4, title: "Image4", author: "Admin", cols: 1, rows: 2 },
  { img: foto5, title: "Image5", author: "Admin", cols: 1, rows: 2 },
  { img: foto11, title: "Image5", author: "Admin", cols: 1, rows: 2 },
  { img: foto12, title: "Image5", author: "Admin", cols: 1, rows: 2 },
  { title: "???????????????????? 2020", author: null, cols: 3, rows: 0 },
  { img: foto6, title: "Image6", author: "Admin", cols: 1, rows: 2 },
  { img: foto7, title: "Image7", author: "Admin", cols: 2, rows: 2 },
  { img: foto8, title: "Image8", author: "Admin", cols: 1, rows: 3 },
  { img: foto9, title: "Image9", author: "Admin", cols: 1, rows: 3 },
  { img: foto10, title: "Image10", author: "Admin", cols: 1, rows: 3 },

];

// Custom Scrollbar


export default function ImageGridList() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div className={classes.root}>
      <GridList
        cellHeight={180}
        spacing={1}
        className={classes.gridList}
        cols={3}
      >
        !!!!
        <GridListTile
          key="Subheader"
          cols={2}
          style={{ height: "auto", minHeight: 40 }}
        >
          <ListSubheader className={classes.title} component="div" style={{ color: "#7EB3FF" }}>
            ?????????????? ???????????? ???? ?????? ????????????????????
          </ListSubheader>
        </GridListTile>
        {tileData.map((tile, index) => (
          <GridListTile
            key={tile.img}
            cols={tile.cols || 1}
            rows={tile.rows || 1}
          >
            <img id="gallary" tabindex="0" src={tile.img} />
            {(index === 3) ? (<GridListTileBar title={<h2 style={{ color: "#7EB3FF" }}>{tile.title}</h2>} />) :
              (index === 8) ? (<GridListTileBar title={<h2 style={{ color: "#7EB3FF" }}>{tile.title}</h2>} />) : (null)}
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
