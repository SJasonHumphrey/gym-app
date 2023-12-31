import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import HeroBannerImg from "../assets/images/banner.png";
const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" },
      }}
      position="relative"
      p="20px"
    >
      <Typography color="#00b4d8" fontWeight="600" fontSize="26px">
        Get Fit
      </Typography>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        mb="23px" mt="30px"
      >
        Sweat, Smile...
        <br />
        and Repeat
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={4}>
        Create the most effective workout
      </Typography>
      <Button variant="contained" color="primary" href="#exercises"
      sx={{ backgroundColor: "#00b4d8", padding: "10px"}}
      >
        Explore Exercises
      </Button>
      <Typography
      fontWeight={600}
      color="#00b4d8"
      sx={{
        opacity: 0.1,
        display: {lg: 'block', xs: 'none'}
      }}
      fontSize="200px"
      >
        Fitness
      </Typography>
      <img src={HeroBannerImg} alt="banner" className="hero-banner-img" style={{ borderRadius: 40}}/>
    </Box>
  );
};

export default HeroBanner;
