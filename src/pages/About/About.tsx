import React from "react";

// mui components
import { Box, Typography, List, ListItem } from "@mui/material";

function About() {
  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom>
        About Weather Search
      </Typography>

      <Typography variant="body1" paragraph>
        Welcome to Weather Search, your go-to destination for real-time weather
        information from around the globe. Our application provides a seamless
        experience for users to stay updated on the current weather conditions
        of any city on Earth.
      </Typography>

      <Typography variant="h5" gutterBottom>
        Key Features:
      </Typography>
      <List>
        <ListItem>
          <Typography variant="body1">
            <strong>Search Functionality:</strong> Easily find the weather
            details of your desired city with our user-friendly search feature.
          </Typography>
        </ListItem>
        <ListItem>
          <Typography variant="body1">
            <strong>Detailed Weather Information:</strong> Get accurate and
            up-to-date information about the current temperature, weather
            conditions, and more.
          </Typography>
        </ListItem>
        <ListItem>
          <Typography variant="body1">
            <strong>Intuitive Design:</strong> Our application boasts a clean
            and intuitive design, ensuring a hassle-free experience for users of
            all levels.
          </Typography>
        </ListItem>
        <ListItem>
          <Typography variant="body1">
            <strong>Responsive and Fast:</strong> Weather Search is designed to
            be responsive, delivering fast and reliable weather data at your
            fingertips.
          </Typography>
        </ListItem>
      </List>

      <Typography variant="h5" gutterBottom>
        How to Use:
      </Typography>
      <List>
        <ListItem>
          <Typography variant="body1">
            <strong>Search:</strong> Simply enter the name of the city you want
            to know the weather for in the search box.
          </Typography>
        </ListItem>
        <ListItem>
          <Typography variant="body1">
            <strong>Explore:</strong> Explore detailed weather information,
            including temperature, humidity, wind speed, and more.
          </Typography>
        </ListItem>
        <ListItem>
          <Typography variant="body1">
            <strong>Stay Informed:</strong> Plan your day effectively by staying
            informed about the current weather conditions wherever you are.
          </Typography>
        </ListItem>
      </List>

      <Typography variant="body1" paragraph>
        Weather Search is your reliable companion for staying connected with the
        weather, ensuring you're always prepared for whatever Mother Nature has
        in store.
      </Typography>

      <Typography variant="body1">
        Thank you for choosing WeatherApp for all your weather-related needs!
      </Typography>
    </Box>
  );
}

export default About;
