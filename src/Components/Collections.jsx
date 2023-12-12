import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
// import "./picker.css";

const baseUrl =
  "https://images.pexels.com/photos/772803/pexels-photo-772803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const content = "stay & Around Delhi for a weekend Gateway";

// Create an array of 20 objects with the specified URL and content
const imageArray = Array.from({ length: 20 }, (_, index) => ({
  url: `${baseUrl}&index=${index + 1}`, // Appending index to make each URL unique
  content: content,
}));

// Log the array to the console
console.log(imageArray);

const theme = createTheme({
  components: {
    ImageListItemBar: {
      styleOverrides: {},
    },
  },
});

export default function Collections({ title, image }) {
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <CssBaseline />

        <Container maxWidth="xl">
          <Paper
            elevation={8}
            sx={{
              borderRadius: "10px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                padding: "20px",
                marginTop: "20px",
              }}
            >
              <Box>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "700",
                  }}
                >
                  Unlocak Lesser-Known Wonders of india
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="span"
                  sx={{
                    fontWeight: "600",
                  }}
                >
                  View all
                </Typography>
              </Box>
            </Box>
            <Box>
              <ImageList
                sx={{ display: "flex", overflow: "hiiden", marginLeft: "10px" }}
                className="caros"
              >
                {imageArray.map((item) => (
                  <ImageListItem key={item.url}>
                    <Box
                      sx={{
                        padding: "10px",
                      }}
                    >
                      <img
                        srcSet={`${item.url}`}
                        src={`${item.url}`}
                        alt={item.title}
                        loading="lazy"
                        style={{
                          width: "300px",
                          height: "170px",
                          borderRadius: "10px",
                        }}
                      />

                      <ImageListItemBar
                        title={item.content}
                        sx={{
                          backgroundColor: "transparent",
                          top: 40,
                          left: 10,
                        }}
                        className="text-wrap"
                      />
                    </Box>
                  </ImageListItem>
                ))}
              </ImageList>
            </Box>
          </Paper>
        </Container>
      </React.Fragment>
    </ThemeProvider>
  );
}
