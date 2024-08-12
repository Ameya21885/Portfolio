import { Box, Typography } from "@mui/material";
import React from "react";
import TestimonialCarousel from "../components/portfolio/TestimonialCarousel";

const Testimonial = () => {
  return (
    <Box sx={{ padding: { xs: "1rem", sm: "2rem", md: "3rem" }, marginTop: "2rem" }}>
      {/* Heading */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          marginBottom: "2rem",
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" }, fontWeight: "bold" }}
        >
          Testimonials
        </Typography>
        <Typography
          variant="body2"
          gutterBottom
          sx={{ fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" }, color: "text.secondary" }}
        >
          What My Clients Are Saying
        </Typography>
      </Box>

      {/* Carousel */}
      <TestimonialCarousel />
    </Box>
  );
};

export default Testimonial;
