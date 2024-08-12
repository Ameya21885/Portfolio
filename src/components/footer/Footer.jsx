import { Box, Typography } from "@mui/material";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: { xs: 4, md: 8 }, // Adjusted padding for responsiveness
        gap: 4, // Increased gap for better spacing
        backgroundColor: "#f5f5f5", // Optional: Add background color
      }}
    >
      {/* Heading */}
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        Ameya Thakur
      </Typography>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {/* Links */}
        <Box
          sx={{
            display: "flex",
            gap: { xs: 2, md: 4 }, // Responsive gap
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Link to="about" style={{ color: "inherit", textDecoration: "none" }}>
            <Typography variant="subtitle1" fontWeight="medium" gutterBottom>
              About
            </Typography>
          </Link>
          <Link
            to="portfolio"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <Typography variant="subtitle1" fontWeight="medium" gutterBottom>
              Projects
            </Typography>
          </Link>
          <Link
            to="services"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <Typography variant="subtitle1" fontWeight="medium" gutterBottom>
              Services
            </Typography>
          </Link>
        </Box>

        {/* Social Icons */}
        <Box
          sx={{
            display: "flex",
            gap: 2, // Consistent gap for icons
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Link
            to="https://www.facebook.com/share/6oxCZiZHK3igcoRj/?mibextid=qi2Omg"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <FacebookIcon />
          </Link>
          <Link
            to="https://www.instagram.com/ameya_thakur57?utm_source=qr&igsh=cDV3emdqM3NocTYw"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <InstagramIcon />
          </Link>
          <Link
            to="https://x.com/ameya_thak18767?t=jebtvPb3t8sO0oYsqGXeNA&s=08"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <TwitterIcon />
          </Link>
        </Box>
      </Box>

      {/* Copyright */}
      <Box>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          © Copyright 2024 Ameya Thakur
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
