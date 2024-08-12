import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import SendIcon from "@mui/icons-material/Send";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useFormik } from "formik";
import * as yup from "yup";
import { useForm } from "@formspree/react";
import XIcon from "@mui/icons-material/X";

const talkToMeCardData = [
  {
    icon: <EmailOutlinedIcon />,
    icontitle: "Email",
    subtitle: "ameyathakur21@gmail.com",
  },
  {
    icon: <EmailOutlinedIcon />,
    icontitle: "Whatsapp",
    subtitle: "+91-9923304405",
  },
  {
    icon: <XIcon />,
    icontitle: "Messenger",
    subtitle: "@ameya_thak18767",
    link: "https://x.com/ameya_thak18767?t=jebtvPb3t8sO0oYsqGXeNA&s=08",
  },
];

const validationSchema = yup.object({
  name: yup.string("Enter your name").required("Name is required"),
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  project: yup
    .string("Details about the project")
    .required("Please enter the details about the project"),
});

const Contact = () => {
  const [state, handleSubmit] = useForm("xpwarogb");

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      project: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

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
          gutterBottom
          sx={{ fontFamily: "Roboto, sans-serif", fontWeight: 700 }}
        >
          Contact Me
        </Typography>
        <Typography
          variant="h6"
          gutterBottom
          sx={{ fontFamily: "Roboto, sans-serif", color: "text.secondary" }}
        >
          Get in touch
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: "2rem",
          justifyContent: "center",
          width: "100%",
          margin: "auto",
        }}
      >
        {/* Talk to Me Section */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <Typography
            variant="h5"
            gutterBottom
            sx={{ fontFamily: "Roboto, sans-serif", fontWeight: 600 }}
          >
            Talk to me
          </Typography>
          {talkToMeCardData.map((item, index) => (
            <Card
              key={index}
              sx={{
                width: { xs: "100%", sm: "18rem" },
                padding: "1rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "1rem",
                boxShadow: 3,
                borderRadius: "1rem",
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
                {item.icon}
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ fontFamily: "Roboto, sans-serif", fontWeight: 600 }}
                >
                  {item.icontitle}
                </Typography>
                {item.subtitle && (
                  <Typography
                    sx={{
                      mb: 1.5,
                      color: "text.secondary",
                      fontFamily: "Roboto, sans-serif",
                    }}
                  >
                    {item.subtitle}
                  </Typography>
                )}
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    <Button
                      size="small"
                      endIcon={<ArrowForwardIcon />}
                      sx={{
                        textTransform: "none",
                        fontFamily: "Roboto, sans-serif",
                      }}
                    >
                      Write me
                    </Button>
                  </a>
                )}
              </CardContent>
            </Card>
          ))}
        </Box>

        {/* Contact Form Section */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "2rem",
          }}
        >
          <Typography
            variant="h5"
            gutterBottom
            sx={{ fontFamily: "Roboto, sans-serif", fontWeight: 600 }}
          >
            Write me your project
          </Typography>

          {state.succeeded ? (
            <Typography
              variant="h6"
              sx={{ textAlign: "center", marginTop: "2rem" }}
            >
              Thanks for reaching out! Ill get back to you soon.
            </Typography>
          ) : (
            <Box
              component="form"
              onSubmit={formik.handleSubmit}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
                width: { xs: "100%", sm: "80%", md: "70%" },
              }}
            >
              <TextField
                label="Name"
                id="name"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
                placeholder="Insert your name"
                variant="outlined"
                size="small"
                fullWidth
                required
                sx={{ fontFamily: "Roboto, sans-serif" }}
              />
              <TextField
                label="Email"
                id="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                placeholder="Insert your email"
                variant="outlined"
                size="small"
                fullWidth
                required
                sx={{ fontFamily: "Roboto, sans-serif" }}
              />
              <TextField
                label="Project"
                id="project"
                name="project"
                value={formik.values.project}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.project && Boolean(formik.errors.project)}
                helperText={formik.touched.project && formik.errors.project}
                placeholder="Write your project"
                variant="outlined"
                size="small"
                multiline
                fullWidth
                rows={4}
                required
                sx={{ fontFamily: "Roboto, sans-serif" }}
              />
              <Button
                type="submit"
                variant="contained"
                endIcon={<SendIcon />}
                sx={{
                  width: "fit-content",
                  textTransform: "none",
                  fontFamily: "Roboto, sans-serif",
                  padding: "0.75rem 1.5rem",
                }}
                disabled={state.submitting}
              >
                Send Message
              </Button>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
