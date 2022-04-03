import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "./chapter.css";
// For drawer
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Drawer from "@mui/material/Drawer";

import Pdf from "../pdf/Pdf";

import { Routes, Route } from "react-router-dom";

// Import chapters
import { class11_Nepali_Chapters } from "./chaptersFunction";
import { class11_Computer_Chapters } from "./chaptersFunction";
import { class12_Computer_Chapters } from "./chaptersFunction";

// Tabs
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { SignalCellularNullSharp } from "@mui/icons-material";

// For Drawer
// const drawerWidth = 240;

// const openedMixin = (theme) => ({
//   width: drawerWidth,
//   transition: theme.transitions.create("width", {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.enteringScreen,
//   }),
//   overflowX: "hidden",
// });

// const closedMixin = (theme) => ({
//   transition: theme.transitions.create("width", {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   overflowX: "hidden",
//   width: `calc(${theme.spacing(7)} + 1px)`,
//   [theme.breakpoints.up("sm")]: {
//     width: `calc(${theme.spacing(9)} + 1px)`,
//   },
// });

// const DrawerHeader = styled("div")(({ theme, open }) => ({
//   display: "flex",
//   alignItems: "center",
//   ...(open ? { justifyContent: "flex-end" } : { justifyContent: "center" }),
//   padding: theme.spacing(0, 1),
//   // necessary for content to be below app bar
//   ...theme.mixins.toolbar,
// }));

// const Drawer = styled(MuiDrawer, {
//   shouldForwardProp: (prop) => prop !== "open",
// })(({ theme, open }) => ({
//   width: drawerWidth,
//   flexShrink: 0,
//   whiteSpace: "nowrap",
//   boxSizing: "border-box",
//   ...(open && {
//     ...openedMixin(theme),
//     "& .MuiDrawer-paper": openedMixin(theme),
//   }),
//   ...(!open && {
//     ...closedMixin(theme),
//     "& .MuiDrawer-paper": closedMixin(theme),
//   }),
// }));

// function Chapter() {
//   const param = useParams();

//   const theme = useTheme();
//   const [open, setOpen] = React.useState(false);

//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };

//   const handleDrawerClose = () => {
//     setOpen(false);
//   };

//   // Tabs

//   const [tabValue, setTabValue] = React.useState(0);

//   const handleChangeTab = (event, newValue) => {
//     setTabValue(newValue);
//   };

//   return (
//     <>
//       {/* <div className="subjectContainer">
//         <h4 className="subjectContainerTitle">Choose Chapter</h4>
//         <div className="subjectContainerFlex">
//           {class11Chapter.map((item) => (
//             <Link to={`/+2/11/${item}`}>
//               <div className="subjectContainerItem">{item.split(".")[0]}</div>
//             </Link>
//           ))}
//         </div>
//       </div> */}

//       <Box
//         sx={{
//           width: "100%",
//           bgcolor: "background.paper",
//           position: "sticky",
//           top: "0",
//         }}
//       >
//         <Tabs value={tabValue} onChange={handleChangeTab} centered>
//           <Tab label="Notes" />
//           <Tab label="MCQ" />
//           <Tab label="Syllabus" />
//           <Tab label="Question Collection" />
//         </Tabs>
//       </Box>

//       <Box sx={{ display: "flex" }}>
//         <CssBaseline />

//         <Drawer variant="permanent" open={open}>
//           <DrawerHeader>
//             {open ? (
//               <IconButton onClick={handleDrawerClose}>
//                 {theme.direction === "rtl" ? (
//                   <ChevronRightIcon />
//                 ) : (
//                   <ChevronLeftIcon />
//                 )}
//               </IconButton>
//             ) : (
//               <IconButton
//                 color="inherit"
//                 aria-label="open drawer"
//                 onClick={handleDrawerOpen}
//                 edge="center"
//                 sx={{
//                   marginRight: "36px",
//                   ...(open && { display: "none" }),
//                 }}
//               >
//                 <MenuIcon />
//               </IconButton>
//             )}
//           </DrawerHeader>

//           <Divider />
//           <List>
//             {class11_Nepali_Chapters.map((item, index) => (
//               <Link to={`/+2/11/${param.subject}/${item}`}>
//                 <ListItem button key={index}>
//                   <ListItemIcon>
//                     {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//                   </ListItemIcon>
//                   <ListItemText>
//                     <span>{item}</span>
//                   </ListItemText>
//                 </ListItem>
//               </Link>
//             ))}
//           </List>
//           <Divider />
//           <List>
//             {["All mail", "Trash", "Spam"].map((text, index) => (
//               <ListItem button key={text.split(".")[0]}>
//                 <ListItemIcon>
//                   {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//                 </ListItemIcon>
//                 <ListItemText primary={text} />
//               </ListItem>
//             ))}
//           </List>
//         </Drawer>
//         <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
//           {/* <DrawerHeader />          */}
//           <Pdf />
//         </Box>
//         <div style={{ height: "100vh" }}>
//           hello boxContrary to popular belief, Lorem Ipsum is not simply random
//           text. It has roots in a piece of classical Latin literature from 45
//           BC, making it over 2000 years old. Richard McClintock, a Latin
//           professor at Hampden-Sydney College in Virginia, looked up one of the
//           more obscure Latin words, consectetur, from a Lorem Ipsum passage, and
//           going through the cites of the word in classical literature,
//           discovered the undoubtable source. Lorem Ipsum comes from sections
//           1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
//           of Good and Evil) by Cicero, written in 45 BC. This book is a treatise
//           on the theory of ethics, very popular during the Renaissance. The
//           first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from
//           a line in section 1.10.32. The standard chunk of Lorem Ipsum used
//           since the 1500s is reproduced below for those interested. Sections
//           1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are
//           also reproduced in their exact original form, accompanied by English
//           versions from the 1914 translation by H. Rackham.
//         </div>
//       </Box>
//     </>
//   );
// }

// export default Chapter;

const drawerWidth = 200;

export default function Chapters() {
  const param = useParams();
  console.log(param);
  const [tabValue, setTabValue] = React.useState(0);

  const handleChangeTab = (event, newValue) => {
    setTabValue(newValue);
  };

  const chapters11_needed =
    param.subject === "Nepali"
      ? class11_Nepali_Chapters
      : param.subject === "Computer Science (4271)"
      ? class11_Computer_Chapters
      : SignalCellularNullSharp;

  const chapters12_needed = [
    param.subject === "Computer Science (4281)"
      ? class12_Computer_Chapters
      : null,
  ];
  const chapters_needed =
    chapters11_needed.length > 0
      ? chapters11_needed
      : chapters12_needed.length > 0
      ? chapters12_needed
      : ["None"];

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List sx={{ height: "100vh", overflowY: "scroll", pb: 4}}>
          {chapters_needed.map((text, index) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", pl: 3 }}
      >
        <Box
          sx={{
            width: "100%",
            bgcolor: "background.paper",
            position: "sticky",
            top: "0",
            pb: 4,
          }}
        >
          <Tabs value={tabValue} onChange={handleChangeTab} centered>
            <Tab label="Notes" />
            <Tab label="MCQ" />
            <Tab label="Syllabus" />
            <Tab label="Question Collection" />
          </Tabs>
        </Box>
        <Pdf />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
          dolor purus non enim praesent elementum facilisis leo vel. Risus at
          ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
          quisque non tellus. Convallis convallis tellus id interdum velit
          laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed
          adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
          integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
          eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
          quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
          vivamus at augue. At augue eget arcu dictum varius duis at consectetur
          lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
          faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
          ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
          elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse
          sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat
          mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
          risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas
          purus viverra accumsan in. In hendrerit gravida rutrum quisque non
          tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
          morbi tristique senectus et. Adipiscing elit duis tristique
          sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </Box>
    </Box>
  );
}
