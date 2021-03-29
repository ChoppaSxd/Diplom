import React from "react";
import { Nav } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import "../components/Links.css";
import IconButton from "@material-ui/core/IconButton";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import YouTubeIcon from "@material-ui/icons/YouTube";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  mainblock: {
    position: "fixed",
    top: "35%",
    zIndex: 99,
    left: 0,
    height: "auto",
    width: 20,
    background: "#01142F",
  },
  icons: { width: 0 },
  blockfix: { width: 0 },
}));

export default function Links() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const classes = useStyles();

  return (
    <div>
      <div id="mainblock" className={classes.mainblock}>
        <div className={classes.blockfix}>
          <IconButton
            className={classes.icons}
            aria-controls="fade-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <ArrowForwardIosIcon color="secondary" />
          </IconButton>
        </div>
        <Menu
          id="fade-menu"
          anchorEl={anchorEl}
          keepMounted
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
          PaperProps={{
            style: {
              maxHeight: 250,
            },
          }}
        >
          <MenuItem onClick={handleClose}>
            <Nav.Link
              style={{
                backgroundColor: "none",
              }}
              target="_blank"
              href="https://www.youtube.com/watch?v=a7Q7KOblUzk&ab_channel=%D0%92%D0%BE%D0%BB%D0%BE%D0%B4%D0%B8%D0%BC%D0%B8%D1%80%D0%93%D1%80%D0%B8%D1%86%D0%B0%D0%BA"
            >
              <YouTubeIcon fontSize="large" color="secondary" />
            </Nav.Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Nav.Link
              target="_blank"
              href="https://www.facebook.com/groups/718670371953953"
            >
              <FacebookIcon fontSize="large" color="secondary" />
            </Nav.Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Nav.Link
              target="_blank"
              href="https://www.instagram.com/ldkhpp_nuht_pk/"
            >
              <InstagramIcon fontSize="large" color="secondary" />
            </Nav.Link>
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
}
