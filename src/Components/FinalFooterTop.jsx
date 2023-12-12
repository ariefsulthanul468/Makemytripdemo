import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function FinalFooterTop() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        maxWidth={false}
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' }, // Switch to column layout on small screens
          gap: 2,
          justifyContent: 'space-around',
          backgroundColor: "grey",
          padding: '20px'
        }}
      >
        <Box
          sx={{
            width: { xs: '100%', md: '30%' }, // Adjust width for different screen sizes
          }}
        >
          <Typography
            variant="h5"
            sx={{
              textAlign: 'left',
              marginBottom: { xs: '3%', md: '5%' }, // Responsive margin
              fontWeight: '700',
            }}
          >
            Why MakeMyTrip?
          </Typography>
          <Typography
            variant="body2"
            sx={{
              textAlign: 'left',
              width: '100%', // Adjust width for small screens
            }}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam debitis nisi, quas similique ex perferendis harum suscipit? Ut aut quo, laudantium nisi corrupti saepe, repellat veritatis explicabo, voluptate labore obcaecati.
          </Typography>
        </Box>

        <Box
          sx={{
            width: { xs: '100%', md: '40%' }, // Adjust width for different screen sizes
          }}
        >
          <Typography
            variant="h5"
            sx={{
              textAlign: 'left',
              marginBottom: { xs: '3%', md: '5%' }, // Responsive margin
              fontWeight: '700',
            }}
          >
            Booking Fights with MakeMyTrip
          </Typography>
          <Typography
            variant="body2"
            sx={{
              textAlign: 'left',
              width: '100%', // Adjust width for small screens
            }}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique non aut eius minima mollitia, tenetur totam vitae earum minus ipsam labore perferendis omnis error neque reprehenderit rerum repellendus vel quasi Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ad tenetur error voluptas molestias, laudantium modi doloremque, voluptates dignissimos architecto esse, quo nulla quidem fugit et eos velit unde quas.
          </Typography>
        </Box>

        <Box
          sx={{
            width: { xs: '100%', md: '30%' }, // Adjust width for different screen sizes
          }}
        >
          <Typography
            variant="h5"
            sx={{
              textAlign: 'left',
              marginBottom: { xs: '3%', md: '5%' }, // Responsive margin
              fontWeight: '700',
            }}
          >
            Domestic Fights with MakeMyTrip
          </Typography>
          <Typography
            variant="body2"
            sx={{
              textAlign: 'left',
              width: '100%', // Adjust width for small screens
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, minima ipsum! Delectus consectetur, enim iure quisquam voluptatibus officiis! Non ea atque aperiam eaque unde corporis doloremque consequuntur recusandae ipsam voluptatum!
          </Typography>
        </Box>
      </Container>
    </React.Fragment>
  );
}
