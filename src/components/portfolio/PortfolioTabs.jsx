import React from "react";
import PropTypes from "prop-types";
import { Tabs, Tab, Box, Typography } from "@mui/material";
import PortfolioCards from "./PortfolioCards";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box
          sx={{
            p: { xs: 2, sm: 3 },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            minHeight: "200px",
            textAlign: "center",
          }}
        >
          {children}
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const alldata = [
  {
    name: "EliteGear",
    smallDescription:
      "A premium e-commerce platform offering high-quality gear and accessories for outdoor enthusiasts.",
    features: [
      "User-friendly interface for seamless shopping experience.",
      "Advanced search and filtering options for quick product discovery.",
      "Secure payment gateway integration.",
      "Responsive design for mobile and desktop views.",
      "Wishlist and product comparison features.",
    ],
  },
  {
    name: "Todo-app",
    smallDescription:
      "A feature-rich to-do list application designed to help you manage tasks efficiently.",
    features: [
      "Add, edit, and delete tasks with ease.",
      "Organize tasks by priority and due dates.",
      "Set reminders and notifications for upcoming tasks.",
      "Collaborate with others by sharing tasks.",
      "Progress tracking with visual indicators.",
    ],
  },
  {
    name: "YouTube-clone",
    smallDescription:
      "A clone of the popular video streaming platform, featuring core functionalities of YouTube.",
    features: [
      "Watch and upload videos in various formats.",
      "Search for videos using keywords and filters.",
      "Like, comment, and subscribe to channels.",
      "Personalized recommendations based on watch history.",
      "Responsive design for all device types.",
    ],
  },
  {
    name: "Face-recognization",
    smallDescription:
      "A face recognition system for secure access and attendance management.",
    features: [
      "Real-time face detection and recognition.",
      "Automated attendance marking with timestamp.",
      "Support for multiple users and roles.",
      "Secure data storage and management.",
      "Integration with existing security systems.",
    ],
  },
];

const Web = [...alldata]; // Assuming Web data is the same as alldata for now
const App = [...alldata]; // Similarly for App and Design
const Design = [...alldata];

const PortfolioTabs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const getCurrentData = () => {
    switch (value) {
      case 0:
        return alldata;
      case 1:
        return Web;
      case 2:
        return App;
      case 3:
        return Design;
      default:
        return alldata;
    }
  };

  return (
    <Box sx={{ width: "100%", marginTop: "2rem" }}>
      <Box
        sx={{ borderBottom: 1, borderColor: "divider", marginBottom: "1rem" }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="Portfolio Tabs"
          centered
          sx={{
            "& .MuiTab-root": {
              textTransform: "none", // Keep text case as is
              fontWeight: "bold",
              fontSize: { xs: "0.8rem", sm: "1rem" }, // Responsive font size
            },
            "& .MuiTabs-indicator": {
              backgroundColor: "primary.main", // Custom indicator color
            },
          }}
        >
          <Tab label="All" {...a11yProps(0)} />
          <Tab label="Web" {...a11yProps(1)} />
          <Tab label="App" {...a11yProps(2)} />
          <Tab label="Design" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Typography variant="h6" gutterBottom>
          All Projects
        </Typography>
        <PortfolioCards data={getCurrentData()} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Typography variant="h6" gutterBottom>
          Web Projects
        </Typography>
        <PortfolioCards data={getCurrentData()} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Typography variant="h6" gutterBottom>
          App Projects
        </Typography>
        <PortfolioCards data={getCurrentData()} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <Typography variant="h6" gutterBottom>
          Design Projects
        </Typography>
        <PortfolioCards data={getCurrentData()} />
      </CustomTabPanel>
    </Box>
  );
};

export default PortfolioTabs;
