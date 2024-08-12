import { Box, Typography, Tabs, Tab } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import TimeLine from "../components/timeline/TimeLine";
import SchoolIcon from "@mui/icons-material/School";
import Fintaar from "../assets/images/fintaar.png";
import Fin from "../assets/images/4Fin.png";
import Preneurship from "../assets/images/preneurship.png";
import technoboot from "../assets/images/technoboot.png";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`custom-tabpanel-${index}`}
      aria-labelledby={`custom-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box
          sx={{
            p: 4,
            display: "flex",
            justifyContent: "center",
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
    id: `custom-tab-${index}`,
    "aria-controls": `custom-tabpanel-${index}`,
  };
}

const educationData = [
  {
    date: "2021 - 2024",
    title: "B.Tech",
    subtitle: "Government College of Engineering",
    description: "Computer Science and Engineering",
    marks: "7.8 CGPA",
    icn: <SchoolIcon />,
  },
  {
    date: "2020",
    title: "XII",
    subtitle: "Vasantrao Naik College",
    description: "Maharashtra State Board",
    marks: "68.62%",
    icn: <SchoolIcon />,
  },
  {
    date: "2018",
    title: "X",
    subtitle: "Saint Xaviers School",
    description: "Maharashtra State Board",
    marks: "72%",
    icn: <SchoolIcon />,
  },
];

const experienceData = [
  // {
  //   date: "07/2024",
  //   title: "Freeliancing",
  //   subtitle: "Frontend Developer",
  //   // image: Fintaar,
  // },
  {
    date: "01/2024 - 06/2024",
    title: "Fintaar.ai",
    subtitle: "Frontend Developer",
    image: Fintaar,
  },

  {
    date: "03/23 - 04/2023",
    title: "4Fin.com",
    subtitle: "Frontend Developer",
    image: Fin,
  },
  {
    date: "08/2023",
    title: "TechnoBoot",
    subtitle: "Frontend Developer",
    image: technoboot,
  },
  {
    date: "04/2022 - 06/2022",
    title: "Preneurship",
    subtitle: "Frontend Developer",
    image: Preneurship,
  },
];

const Qualification = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      {/* Heading */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: { xs: "2rem 1rem", md: "3rem 2rem" },
        }}
      >
        <Typography
          variant="h3"
          fontWeight="bold"
          gutterBottom
          sx={{ fontFamily: "Roboto, sans-serif" }}
        >
          Qualification
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          gutterBottom
          sx={{ fontFamily: "Roboto, sans-serif" }}
        >
          My personal journey
        </Typography>
      </Box>

      {/* Tabs */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          borderBottom: 1,
          borderColor: "divider",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="qualification tabs"
          centered
        >
          <Tab
            icon={<SchoolIcon />}
            iconPosition="start"
            label="Education"
            sx={{ fontFamily: "Roboto, sans-serif", fontWeight: "bold" }}
          />
          <Tab
            icon={<BusinessCenterOutlinedIcon />}
            iconPosition="start"
            label="Experience"
            sx={{ fontFamily: "Roboto, sans-serif", fontWeight: "bold" }}
          />
        </Tabs>
      </Box>

      {/* Tab Panels */}
      <CustomTabPanel value={value} index={0}>
        <TimeLine items={educationData} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <TimeLine items={experienceData} />
      </CustomTabPanel>
    </Box>
  );
};

export default Qualification;
