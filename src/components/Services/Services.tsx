import React from "react";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const Services = () => {
  const subTitles = {
    fontSize: { xs: "1.4em", sm: "1.4em", lg: "1.6em" },
    fontWeight: "600",
    my: "0.40em",
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
      sx={{
        display: "flex",
        justifyContent: { xs: "center", sm: "center", lg: "space-between" },
        flexDirection: { xs: "column", sm: "column", lg: "row" },
        alignContent: "center",
        px: { xs: "1.3em", sm: "1.3em", lg: "8em" },
      }}
    >
      <Box>
        <Box>
          <Typography
            sx={{
              color: "#FFCC00",
              fontSize: "1.8em",
              fontWeight: "600",
              mb: "0.25em",
            }}
          >
            Services
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "600",
              fontSize: { xs: "2.450em", sm: "2.450em", lg: "4em" },
              lineHeight: "1.3em",
              width: { xs: "auto", sm: "auto", lg: "11em" },
            }}
          >
            Providing solutions that meet your needs.
          </Typography>
        </Box>

        <Box
          sx={{
            mt: "2em",
          }}
        >
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
          width: { xs: "auto", sm: "auto", lg: "700px" },
          height: { xs: "320px", sm: "320px", lg: "700px" },
          position: "relative",
          mt: { xs: "2.3em", sm: "2.3em", lg: "0" },
        }}
      >
        <Image
          src="https://i.postimg.cc/6qR17vkc/services.jpg"
          alt=""
          fill={true}
        />
      </Box>
    </Box>
  );
};

export default Services;