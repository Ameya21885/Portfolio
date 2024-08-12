import { Box, Button, Card, Modal, Typography, Grid } from "@mui/material";
import React, { useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CloseIcon from "@mui/icons-material/Close";
import Qualification from "./Qualification";
import CodeIcon from '@mui/icons-material/Code';
import PreviewIcon from '@mui/icons-material/Preview';
import EngineeringIcon from '@mui/icons-material/Engineering';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import StoreIcon from '@mui/icons-material/Store';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import GitHubIcon from '@mui/icons-material/GitHub';
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "90%", sm: "80%", md: "60%", lg: "50%" },
  bgcolor: "background.paper",
  borderRadius: "12px",
  p: { xs: 3, sm: 4, md: 5 },
  boxShadow: 24,
  maxHeight: "80vh", // Limit height to 80% of viewport
  overflowY: "auto", // Enable scrolling if content exceeds height
  margin: "1rem", // Add margin to prevent it from touching screen edges
};

const Services = () => {
  const [openModalIndex, setOpenModalIndex] = useState(null);

  const handleOpen = (index) => setOpenModalIndex(index);
  const handleClose = () => setOpenModalIndex(null);

  const serviceCards = [
    {
      icon: <CodeIcon fontSize="large" color="primary"/>,
      title: "Web Development",
      description:
        "Crafting robust, responsive websites that offer seamless user experiences across all devices. We specialize in building custom web solutions using the latest technologies.",
      features: [
        "Responsive Web Design: Creating websites that adapt seamlessly to different screen sizes and devices, ensuring a consistent user experience across desktop, tablet, and mobile devices.",
        "Custom Website Development: Building custom websites tailored to specific client needs using HTML, CSS, JavaScript, and modern frameworks like React.js.",
        "Single Page Applications (SPAs): Developing SPAs that offer a smooth and fast user experience by loading content dynamically without reloading the entire page.",
        "Landing Pages: Designing and developing landing pages optimized for conversions, often used for marketing campaigns, product launches, or lead generation.",
        "Progressive Web Apps (PWAs): Creating web applications that provide an app-like experience, including offline functionality, push notifications, and fast load times.",
      ],
    },
    {
      icon: <PreviewIcon fontSize="large" color="primary"/>,
      title: "UI/UX Design",
      description:
        "Designing intuitive and visually appealing interfaces that prioritize user experience. We create designs that are not only beautiful but also functional and user-centric.",
      features: [
        "User Interface (UI) Design: Crafting visually appealing and user-friendly interfaces that align with the brand's identity and enhance user engagement.",
        "User Experience (UX) Design: Conducting user research, wireframing, and prototyping to create intuitive and enjoyable user experiences.",
        "Design System Development: Building a cohesive design system with reusable components and guidelines to ensure consistency across all digital products.",
        "Accessibility Optimization: Ensuring that websites and applications are accessible to all users, including those with disabilities, by following accessibility standards like WCAG.",
      ],
    },
    {
      icon: <EngineeringIcon fontSize="large" color="primary"/>,
      title: "Website Maintenance & Support",
      description:
        " Keeping your website up-to-date, secure, and performing at its best with ongoing maintenance and support services.",
      features: [
        "Ongoing Website Maintenance: Regularly updating content, fixing bugs, and ensuring that the website remains secure and performs optimally.",
        "Performance Optimization: Improving website speed and performance by optimizing images, code, and server configurations.",
        "Cross-Browser Compatibility: Testing and ensuring that the website works correctly across all major browsers (Chrome, Firefox, Safari, Edge, etc.).",
      ],
    },
    {
      icon: <DeveloperModeIcon fontSize="large" color="primary"/>,
      title: "Frontend Frameworks & Libraries",
      description:
        "Leveraging modern frontend frameworks and libraries to build dynamic, responsive web applications that are both powerful and efficient.",
      features: [
        "React.js Development: Building dynamic and interactive web applications using React.js, including state management with Redux or Context API.",
        "Next.js Development: Developing server-side rendered applications or static websites using these React frameworks for SEO optimization.",
      ],
    },
    {
      icon: <StoreIcon fontSize="large" color="primary"/>,
      title: "E-commerce Development",
      description:
        "Building robust e-commerce platforms that provide seamless shopping experiences and integrate with secure payment gateways.",
      features: [
        "E-commerce Website Development: Building online stores using platforms like Shopify, WooCommerce, or custom solutions, ensuring a seamless shopping experience.",
        "Payment Gateway Integration: Setting up secure payment processing systems to enable online transactions.",
      ],
    },
    {
      icon: <ManageSearchIcon fontSize="large" color="primary"/>,
      title: "SEO Optimization",
      description:
        "Enhancing your website's visibility in search engines through comprehensive SEO strategies, from on-page optimization to technical improvements.",
      features: [
        "On-Page SEO: Implementing SEO best practices to improve website visibility in search engines, including meta tags, alt texts, and clean code structure.",
        "Technical SEO: Enhancing website speed, mobile-friendliness, and crawlability to meet search engine requirements.",
      ],
    },
    {
      icon: <IntegrationInstructionsIcon fontSize="large" color="primary"/>,
      title: "API Integration",
      description:
        "Seamlessly integrating third-party APIs or developing custom APIs to extend your website's functionality and connect with external services.",
      features: [
        "Third-Party API Integration: Connecting websites and applications with external services like payment gateways, social media platforms, and data feeds.",
        "Custom API Development: Developing and integrating custom APIs for tailored functionality and data exchange between front-end and back-end systems.",
      ],
    },
    {
      icon: <GitHubIcon fontSize="large" color="primary"/>,
      title: "Version Control & Collaboration",
      description:
        "treamlining the development process with version control systems and continuous integration/deployment pipelines for efficient collaboration.",
      features: [
        "Git/GitHub Services: Using version control systems like Git to manage code, collaborate with teams, and deploy updates efficiently.",
        "CI/CD Integration: Setting up continuous integration and continuous deployment pipelines to automate testing and deployment processes.",
      ],
    },
    {
      icon: <ViewQuiltIcon fontSize="large" color="primary"/>,
      title: "Graphic Design",
      description:
        "Enhancing your brand's visual appeal with stunning graphic design, from promotional banners to custom illustrations.",
      features: [
        "Banner and Ad Design: Creating promotional banners, ads, and other marketing materials for online campaigns.",
        "Icon and Illustration Design: Designing custom icons, illustrations, and graphics to enhance the visual appeal of websites and apps.",
      ],
    },
    {
      icon:<DeveloperModeIcon fontSize="large" color="primary"/>,
      title: "Mobile-First Development",
      description:
        "Prioritizing mobile users by developing websites and applications that deliver smooth, optimized experiences on all mobile devices.",
      features: [
        "Mobile Optimization: Ensuring that websites and applications are optimized for mobile devices with a focus on touch interfaces and small screens.",
        "Hybrid Mobile App Development: Creating cross-platform mobile applications using frameworks like React Native or Ionic.",
      ],
    },
  ];

  return (
    <Box sx={{ padding: { xs: "1rem", sm: "2rem", md: "3rem" } }}>
      {/* Heading */}
      <Box
        sx={{
          textAlign: "center",
          padding: { xs: "2rem 1rem", md: "3rem 2rem" },
        }}
      >
        <Typography
          variant="h3"
          fontWeight="bold"
          gutterBottom
          sx={{ fontFamily: "Roboto, sans-serif" }}
        >
          Services
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          gutterBottom
          sx={{ fontFamily: "Roboto, sans-serif" }}
        >
          What I offer
        </Typography>
      </Box>

      {/* Service Cards */}
      <Grid
        container
        spacing={3}
        sx={{ width: { xs: "90%", sm: "80%", md: "70%" }, margin: "auto" }}
      >
        {serviceCards.map((service, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "1.5rem",
                textAlign: "center",
                justifyContent: "center",
                boxShadow: 3,
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: 6,
                },
                minHeight: "250px",
                minWidth: "200px",
              }}
            >
            {service.icon}
              {/* <SpaceDashboardIcon fontSize="large" color="primary" /> */}
              <Typography
                variant="h6"
                component="div"
                fontWeight="bold"
                gutterBottom
                sx={{ fontFamily: "Roboto, sans-serif" }}
              >
                {service.title}
              </Typography>
              <Button
                size="small"
                endIcon={<ArrowForwardIcon />}
                onClick={() => handleOpen(index)}
                sx={{
                  mt: 1,
                  fontFamily: "Roboto, sans-serif",
                  fontWeight: "bold",
                }}
              >
                Learn More
              </Button>
            </Card>

            <Modal
              open={openModalIndex === index}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={modalStyle}>
                <Box
                  sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}
                >
                  <CloseIcon
                    onClick={handleClose}
                    sx={{ cursor: "pointer", color: "text.secondary" }}
                  />
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    mb: 3,
                  }}
                >
                  <Typography
                    variant="h5"
                    fontWeight="bold"
                    gutterBottom
                    sx={{ fontFamily: "Roboto, sans-serif" }}
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    color="text.secondary"
                    gutterBottom
                    sx={{ fontSize: 16, fontFamily: "Roboto, sans-serif" }}
                  >
                    {service.description}
                  </Typography>
                </Box>

                <Box>
                  {service.features.map((feature, idx) => (
                    <Box
                      key={idx}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        mb: 1,
                      }}
                    >
                      <CheckCircleOutlineIcon color="success" />
                      <Typography
                        color="text.secondary"
                        gutterBottom
                        sx={{ fontSize: 15, fontFamily: "Roboto, sans-serif" }}
                      >
                        {feature}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Modal>
          </Grid>
        ))}
      </Grid>

      {/* Qualification Section */}
      <Qualification />
    </Box>
  );
};

export default Services;
