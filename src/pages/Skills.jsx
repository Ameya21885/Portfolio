import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import VerifiedIcon from "@mui/icons-material/Verified";

const Skills = () => {
  return (
    <Box sx={{ padding: { xs: "1rem", sm: "2rem", md: "3rem" } }}>
      {/* Heading */}
      <Box
        sx={{
          textAlign: "center",
          marginBottom: "2rem",
        }}
      >
        <Typography variant="h4"  fontWeight="700"
          sx={{ fontFamily: 'Roboto, sans-serif' }}>
          Skills
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom  sx={{ fontFamily: 'Roboto, sans-serif' }}>
          My technical level
        </Typography>
      </Box>

      {/* Skills Card */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Card
          sx={{
            width: { xs: "90%", sm: "70%", md: "50%", lg: "40%" }, // Adjust width for different screen sizes
            minWidth: 275,  borderRadius: "10px",
            boxShadow: 3,
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography variant="h5" gutterBottom  fontWeight="600"
              sx={{ fontFamily: 'Roboto, sans-serif', marginBottom: "1.5rem" }}>
              Frontend Developer
            </Typography>

            {/* Skills Grid */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)", // Two columns layout
                gap: "1rem", // Gap between items
              
              }}
            >
              {[
                { skill: "HTML", level: "Basic" },
                { skill: "CSS", level: "Intermediate" },
                { skill: "JavaScript", level: "Advanced" },
                { skill: "React", level: "Advanced" },
                { skill: "TypeScript", level: "Intermediate" },
                { skill: "Tailwind CSS", level: "Intermediate" },
                { skill: "Next.js", level: "Intermediate" },
                { skill: "Figma", level: "Intermediate" },
                { skill: "Git & GitHub", level: "Intermediate" },
                { skill: "Testing", level: "Intermediate" },
              ].map(({ skill, level }, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    alignItems: "center", // Align items vertically in the center
                    gap: "0.5rem", // Small gap between icon and text
                  
                  }}
                >
                  <VerifiedIcon color="primary" />
                  <Box>
                    <Typography variant="h6" component="div" fontWeight="500"
                      sx={{ fontFamily: 'Roboto, sans-serif' }}>
                      {skill}
                    </Typography>
                    <Typography
                      sx={{ fontSize: "0.875rem", fontFamily: 'Roboto, sans-serif' }}
                      color="text.secondary"
                      gutterBottom
                    >
                      {level}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default Skills;
