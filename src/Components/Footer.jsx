import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        height: "200px",
        backgroundColor: "black",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: "0 20px", // Adjust padding as needed
        boxSizing: "border-box",
      }}
    >
      <Container maxWidth="xl">
        <Typography variant="body1">&copy; 2023 Your Company</Typography>
        <Typography variant="body1" sx={{ marginTop: "5px" }}>
          Country Name Inida
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
