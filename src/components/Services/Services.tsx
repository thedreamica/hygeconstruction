import React from "react";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const Services = () => {
  const subTitles = {
    fontSize: { xs: "1.4em", md: "1.8em" },
    fontWeight: "600",
    my: "0.52em",
  };
  const icons = {
    mb: "1px",
    fontSize: "2em",
    ml: "6px",
  };
  const paraDiv = {
    display: "flex",
    alignItems: "center",
  };
  return (
    <Box
      id="services"
      sx={{
        display: "flex",
        justifyContent: { xs: "center", md: "space-between" },
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        px: { xs: "1.5em", md: "10em" },
        py: { xs: 12, md: 6 },
        MinHight: "100vh",
        width: "100%",
        gap: 5,
      }}
    >
      <Box>
        <Box>
          <Typography
            sx={{
              color: "primary.main",
              fontSize: { xs: "1.5em", md: "2em" },
              fontWeight: "600",
              mb: ".5em",
            }}
          >
            Services
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontWeight: "600",
              fontSize: { xs: "2.4em", md: "3.5em" },
              lineHeight: "1.3em",
              width: { xs: "100%", md: "11em" },
            }}
          >
            Providing solutions that meet your needs.
          </Typography>
        </Box>
        <Box sx={{ mt: { xs: "1.5em", md: "3em" } }}>
          <Box sx={paraDiv}>
            <Typography sx={subTitles}>/ Commercial construction</Typography>
            <ArrowOutwardIcon sx={icons} />
          </Box>
          <Box sx={paraDiv}>
            <Typography sx={subTitles}>/ Residential construction</Typography>
            <ArrowOutwardIcon sx={icons} />
          </Box>
          <Box sx={paraDiv}>
            <Typography sx={subTitles}>/ Industrial construction</Typography>
            <ArrowOutwardIcon sx={icons} />
          </Box>
          <Box sx={paraDiv}>
            <Typography sx={subTitles}>/ Institutional construction</Typography>
            <ArrowOutwardIcon sx={icons} />
          </Box>
          <Box sx={paraDiv}>
            <Typography sx={subTitles}>/ Hill Side construction</Typography>
            <ArrowOutwardIcon sx={icons} />
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          position: "relative",
          width: { xs: "100%", md: "50%" },
          height: { xs: "300px", md: "700px" },
        }}
      >
        <Image
          src="https://i.postimg.cc/6qR17vkc/services.jpg"
          alt="Services"
          fill={true}
          priority
          style={{ objectFit: "cover" }}
        />
      </Box>
    </Box>
  );
};

export default Services;