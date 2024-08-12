import { Box, Button, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import SendIcon from "@mui/icons-material/Send";
import ameya from "../assets/ameya.jpeg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          // border: "2px solid black",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
          width: "3%",
          padding: { xs: "1rem", md: "0" },
          marginBottom: { xs: "2rem", md: "0" },
        }}
      >
        <Link
          to="https://www.instagram.com/ameya_thakur57/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "inherit", textDecoration: "none" }}
        >
          <InstagramIcon />
        </Link>
        <Link
          to="https://www.linkedin.com/in/ameya-thakur-92ab82206"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "inherit", textDecoration: "none" }}
        >
          <LinkedInIcon />
        </Link>
        <Link
          to="https://github.com/Ameya21885"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "inherit", textDecoration: "none" }}
        >
          <GitHubIcon />
        </Link>
      </Box>
      <Box
        sx={{
          gap: "1rem",
          display: "flex",
          // border: "2px solid black",
          width: { xs: "90%", md: "70%" },
          margin: { xs: "2rem auto", md: "10rem auto" },
          flexDirection: { xs: "column-reverse", md: "row" },
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            alignItems: { xs: "center", md: "flex-start" },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Typography
            variant="h3"
            gutterBottom
            sx={{ fontWeight: "bold", fontSize: { xs: "2rem", md: "2.5rem" } }}
          >
            Ameya Thakur
          </Typography>
          <Typography
            variant="h5"
            gutterBottom
            sx={{
              fontWeight: "medium",
              fontSize: { xs: "1.5rem", md: "2rem" },
            }}
          >
            Front-end Developer
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            sx={{ fontSize: { xs: "1rem", md: "1.2rem" } }}
          >
            I specialize in crafting dynamic and responsive web applications
            using the latest front-end technologies. Let's create something
            great together!
          </Typography>
          <Button
            component={Link}
            to={"contact"}
            variant="contained"
            endIcon={<SendIcon />}
            sx={{
              width: "fit-content",
              fontWeight: "bold",
              fontSize: { xs: "1rem", md: "1.2rem" },
            }}
          >
            Get in Touch
          </Button>
        </Box>
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            display: "flex",
            justifyContent: "center",
            marginTop: { xs: "1rem", md: "0" },
          }}
        >
          <img
            src={ameya}
            alt="Ameya Thakur"
            style={{
              maxWidth: "300px",
              height: "auto",
              borderRadius: "8px",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
