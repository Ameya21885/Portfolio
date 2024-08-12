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

const alldata=[
  {
    
  }
]

const PortfolioTabs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
        <PortfolioCards />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Typography variant="h6" gutterBottom>
          Web Projects
        </Typography>
        <PortfolioCards />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Typography variant="h6" gutterBottom>
          App Projects
        </Typography>
        <PortfolioCards />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <Typography variant="h6" gutterBottom>
          Design Projects
        </Typography>
        <PortfolioCards />
      </CustomTabPanel>
    </Box>
  );
};

export default PortfolioTabs;
