import React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import Body from "../body/Body";
import Footer from "../footer/Footer";
import See from "../see/See";
import Class11 from "../class11/Class11";
import Class12 from "../class12/Class12";
import Chapter from "../Chapters";

import { Routes, Route, Link } from "react-router-dom";

import "./dashboard.css";

function Dashboard() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <div className="navBar">
        <h5>LOGO</h5>
        <nav>
          <Link to="/see">SEE</Link>
        </nav>

        <div>
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            color="primary"
          >
            +2
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <Link to="+2/11">
              <MenuItem>11</MenuItem>
            </Link>
            <Link to="+2/12">
              <MenuItem>12</MenuItem>
            </Link>
          </Menu>
        </div>
        <h4>Register</h4>
      </div>
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/see" element={<See />} />
        <Route path="/+2/11" element={<Class11 />} />
        <Route path="/+2/12" element={<Class12 />} />
        <Route path="/+2/11/:subject" element={<Chapter />} />
      </Routes>
    </>
  );
}

export default Dashboard;
