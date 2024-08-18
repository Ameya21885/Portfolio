import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Modal,
  Box,
  Grid,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "90%", sm: "80%", md: "60%", lg: "40%" },
  bgcolor: "background.paper",
  borderRadius: "10px",
  p: { xs: 2, sm: 3, md: 4 },
};

const PortfolioCards = ({ data }) => {
  const [open, setOpen] = React.useState(false);
  const [selectedData, setSelectedData] = React.useState(null);

  const handleOpen = (item) => {
    setSelectedData(item);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedData(null);
  };

  return (
    <>
      <Grid
        container
        spacing={3}
        sx={{
          width: { xs: "90%", sm: "80%", md: "60%" },
          margin: "auto",
        }}
      >
        {data.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ maxWidth: 350 }}>
              <CardContent>
                <CardMedia
                  sx={{ height: 160, borderRadius: "1rem" }}
                  image="https://i.pinimg.com/564x/b5/9e/32/b59e3257ab88767b64814da011966757.jpg"
                  title={item.name}
                />
                <Typography gutterBottom variant="h5" component="div">
                  {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.smallDescription}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={() => handleOpen(item)}>
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              mb: 2,
            }}
          >
            <CloseIcon
              onClick={handleClose}
              sx={{ cursor: "pointer", color: "text.secondary" }}
            />
          </Box>

          {selectedData && (
            <Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  mb: 2,
                }}
              >
                <Typography variant="h5" component="div" gutterBottom>
                  {selectedData.name}
                </Typography>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  {selectedData.smallDescription}
                </Typography>
              </Box>

              {selectedData.features.map((feature, idx) => (
                <Box
                  key={idx}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    mb: 1,
                  }}
                >
                  <CheckCircleOutlineIcon color="success" />
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    {feature}
                  </Typography>
                </Box>
              ))}
            </Box>
          )}
        </Box>
      </Modal>
    </>
  );
};

export default PortfolioCards;
