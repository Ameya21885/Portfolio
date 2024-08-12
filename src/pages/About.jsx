import React from "react";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import ameya from "../assets/ameya.jpeg";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import HeadsetMicOutlinedIcon from "@mui/icons-material/HeadsetMicOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";

const About = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "../assets/cv/Ameya.pdf"; // Replace with the actual path to your PDF file
    link.download = "Ameya_Thakur_CV.pdf"; // The name you want the file to be downloaded as
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <Box sx={{ padding: { xs: "1rem", sm: "2rem", md: "3rem" } }}>
      {/* Heading */}
      <Box
        sx={{
          textAlign: "center",
          marginBottom: "2rem",
        }}
      >
        <Typography
          variant="h3"
          fontWeight="700"
          sx={{ fontFamily: "Roboto, sans-serif" }}
        >
          About Me
        </Typography>
        <Typography
          variant="h6"
          color="text.secondary"
          sx={{ fontFamily: "Roboto, sans-serif" }}
        >
          A brief introduction
        </Typography>
      </Box>

      {/* Main Content */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: "2rem", md: "4rem" },
          width: { xs: "90%", md: "80%" },
          margin: "auto",
          alignItems: "center",
        }}
      >
        {/* Image */}
        <Box sx={{ textAlign: "center" }}>
          <img
            src={ameya}
            alt="Ameya Thakur"
            width={250}
            style={{
              borderRadius: "20px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            }}
          />
        </Box>

        {/* Main Content */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            alignItems: { xs: "center", md: "flex-start" },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          {/* Cards */}
          <Box
            sx={{
              display: "flex",
              gap: "2rem",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
            }}
          >
            {/* Card 1 */}
            <Card
              sx={{
                minWidth: 150,
                padding: "1rem",
                boxShadow: 3,
                borderRadius: "10px",
              }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <WorkspacePremiumIcon fontSize="large" />
                <Typography
                  variant="h6"
                  fontWeight="600"
                  sx={{ fontFamily: "Roboto, sans-serif" }}
                >
                  Experience
                </Typography>
                <Typography
                  sx={{
                    color: "text.secondary",
                    fontFamily: "Roboto, sans-serif",
                  }}
                >
                  &lt; 1 years
                </Typography>
              </CardContent>
            </Card>

            {/* Card 2 */}
            <Card
              sx={{
                minWidth: 150,
                padding: "1rem",
                boxShadow: 3,
                borderRadius: "10px",
              }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <WorkOutlineOutlinedIcon fontSize="large" />
                <Typography
                  variant="h6"
                  fontWeight="600"
                  sx={{ fontFamily: "Roboto, sans-serif" }}
                >
                  Projects
                </Typography>
                <Typography
                  sx={{
                    color: "text.secondary",
                    fontFamily: "Roboto, sans-serif",
                  }}
                >
                  4+ completed
                </Typography>
              </CardContent>
            </Card>

            {/* Card 3 */}
            <Card
              sx={{
                minWidth: 150,
                padding: "1rem",
                boxShadow: 3,
                borderRadius: "10px",
              }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <HeadsetMicOutlinedIcon fontSize="large" />
                <Typography
                  variant="h6"
                  fontWeight="600"
                  sx={{ fontFamily: "Roboto, sans-serif" }}
                >
                  Support
                </Typography>
                <Typography
                  sx={{
                    color: "text.secondary",
                    fontFamily: "Roboto, sans-serif",
                  }}
                >
                  Online 24/7
                </Typography>
              </CardContent>
            </Card>
          </Box>

          <Typography
            variant="body1"
            sx={{
              width: { xs: "100%", md: "80%" },
              fontFamily: "Roboto, sans-serif",
            }}
          >
            I’m Ameya Thakur, a passionate front-end developer with over 8 years
            of experience. I have successfully completed 48+ projects, ranging
            from small websites to complex applications. I am committed to
            providing round-the-clock support to ensure the best user
            experience.
          </Typography>

          <Button
            variant="contained"
            endIcon={<DescriptionOutlinedIcon />}
            sx={{
              width: "fit-content",
              textTransform: "none",
              fontFamily: "Roboto, sans-serif",
              padding: "0.75rem 1.5rem",
            }}
            onClick={handleDownload}
          >
            Download CV
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
