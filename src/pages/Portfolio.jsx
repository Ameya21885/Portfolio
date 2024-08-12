import { Box, Typography } from "@mui/material";
import React from "react";
import PortfolioTabs from "../components/portfolio/PortfolioTabs";
import Testimonial from "./Testimonial";

const Portfolio = () => {
  return (
    <Box sx={{ padding: { xs: 2, sm: 3, md: 4 } }}>
      {/* Heading */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          marginBottom: 4, // Adjusted for consistency
        }}
      >
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Portfolio
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Most recent work
        </Typography>
      </Box>

      {/* Portfolio Tabs */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginBottom: 4, // Added spacing below tabs
        }}
      >
        <PortfolioTabs />
      </Box>

      {/* Testimonials */}
      <Box sx={{ marginTop: 6 }}> {/* Adjusted margin for consistency */}
        <Testimonial />
      </Box>
    </Box>
  );
};

export default Portfolio;
