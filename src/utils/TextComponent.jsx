import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function TextComponent({ Heading, content }) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            justifyContent: "left",
            alignItems: "left",
            padding: [2, 1], // Responsive padding
            marginBottom: 1, // Add some bottom margin
          }}
        >
          <Typography
            variant="h5"
            sx={{
              textAlign: "left",
              fontSize: { xs: "1rem", sm: "2rem", md: "1.3rem" },
              fontWeight: "bold ", // Responsive font size
            }}
          >
            {Heading}
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="body2"
            sx={{
              textAlign: "left",
              fontSize: { xs: "1rem", sm: "1.2rem", md: "1rem" }, // Responsive font size
            }}
          >
            {content}
          </Typography>
        </Box>
      </Container>
    </React.Fragment>
  );
}
