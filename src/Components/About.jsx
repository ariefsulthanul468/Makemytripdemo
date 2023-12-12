import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const sections = [
  {
    title: "Why MakeMyTrip?",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam debitis nisi, quas similique ex perferendis harum suscipit? Ut aut quo, laudantium nisi corrupti saepe, repellat veritatis explicabo, voluptate labore obcaecati.",
  },
  {
    title: "Booking Flights with MakeMyTrip",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique non aut eius minima mollitia, tenetur totam vitae earum minus ipsam labore perferendis omnis error neque reprehenderit rerum repellendus vel quasi.",
  },
  {
    title: "Domestic Flights with MakeMyTrip",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, minima ipsum! Delectus consectetur, enim iure quisquam voluptatibus officiis! Non ea atque aperiam eaque unde corporis doloremque consequuntur recusandae ipsam voluptatum!",
  },
];

const About = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        maxWidth={false}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          justifyContent: "space-around",
          backgroundColor: "lightgrey",
          padding: "20px",
        }}
      >
        <Grid container spacing={4}>
          {sections.map((section, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Box sx={{ width: "100%" }}>
                <Typography variant="h5" sx={{ marginBottom: 2, fontWeight: "700" }}>
                  {section.title}
                </Typography>
                <Typography variant="body2" sx={{ width: "100%" }}>
                  {section.content}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default About;
