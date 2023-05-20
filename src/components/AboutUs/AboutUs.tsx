import React from "react";
import Image from "next/image";
import { Box, Button, Link, Typography } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import CircleIcon from "@mui/icons-material/Circle";

const AboutUs = () => {
  const links = {
    display: "flex",
    alignItems: "center",
    my: "7px",
  };
  const icons = {
    fontSize: "12px",
    color: "#FFCC00",
    mr: "8px",
  };
  const ulNames = {
    color: "black",
    textDecoration: "none",
    fontSize: "1.1em",
    fontWeight: "600",
  };
  const para = {
    lineHeight: "25px",
    fontSize: "1.2em",
    fontWeight: "500",
    width: { xs: "auto", sx: "auto", lg: "40em" },
  };
  const images = {
    mb: "3em",
    width: { xs: "auto", sx: "auto", lg: "800px" },
    height: { xs: "320px", sx: "320px", lg: "500px" },
    position: "relative",
  };
  const sections = {
    display: "flex",
    flexDirection: "column",
    width: { xs: "auto", sx: "auto", lg: "800px" },
  };

  return (
    <Box
      id="aboutUs"
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "column", lg: "row" },
        justifyContent: { xs: "center", sx: "center", lg: "space-between" },
        width: "100%",
        mb: { xs: "1.7em", sm: "1.7em", lg: "6em" },
        cursor: "default",
        px: { xs: "1.2em", sx: "1.2em", lg: "8em" },
        position: "relative",
      }}
    >
      <Box sx={{ ...sections, order: { xs: 2, sm: 2, lg: 1 } }}>
        <Box
          sx={{
            mb: "3em",
            width: { xs: "auto", sx: "auto", lg: "800px" },
            height: { xs: "320px", sx: "320px", lg: "440px" },
            position: "relative",
            order: { xs: 2, sm: 2, lg: 0 },
          }}
        >
          <Image
            style={{
              objectFit: "cover",
            }}
            src="https://i.postimg.cc/PJF0ZHJf/about-1.jpg"
            alt=""
            fill={true}
          />
        </Box>
        <Box>
          <Box
            sx={{
              order: { xs: 3, sm: 3, lg: 2 },
              position: { xs: "absolute", sm: "absolute", lg: "relative" },
              top: "0",
            }}
          >
            <Typography
              sx={{
                color: "#FFCC00",
                fontSize: { xs: "1.8em", sm: "2.3em", lg: "2.3em" },
                fontWeight: "600",
                mb: "0.35em",
              }}
            >
              About us
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontWeight: "600",
                fontSize: { xs: "2.6em", sm: "2.6em", lg: "4em" },
                lineHeight: "1.3em",
              }}
            >
              Welcome to hyge Construction. We are professional & reliable.
            </Typography>
          </Box>
          <Button
            sx={{
              order: { xs: 1, sm: 1, lg: 3 },
              color: "black",
              borderRadius: "10px",
              width: "fit-content",
              bgcolor: "#FFCC00",
              py: { xs: "0.80em", sm: "0.80em", lg: "1.2em" },
              px: { xs: "1.8em", sm: "1.8em", lg: "2.6em" },
              fontWeight: "600",
              fontSize: "1em",
              mt: { xs: "1.5em", sm: "1.5em", lg: "2em" },
              mb: { xs: "3.5em", sm: "3.5em", lg: "0" },
              ":hover": {
                bgcolor: "#FFCC00",
              },
            }}
          >
            CONTACT US
            <ArrowOutwardIcon
              sx={{
                fontSize: "1.8em",
                ml: "5px",
                mb: "10px",
              }}
            />
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          ...sections,
          order: { xs: 1, sm: 1, lg: 2 },
          mt: { xs: "19em", sm: " 19em", lg: "0em" },
        }}
      >
        <Box sx={images}>
          <Image
            style={{
              objectFit: "cover",
            }}
            src="https://i.postimg.cc/FsLTG3nV/about-2.jpg"
            alt=""
            fill={true}
          />
        </Box>
        <Box>
          <Typography
            sx={{
              ...para,
              mb: "2em",
            }}
          >
            At HYGE Construction, we understand that every project is unique,
            and we work closely with our clients to develop customized solutions
            that meet their specific needs.
          </Typography>
          <Typography
            sx={{
              ...para,
              mb: "1em",
            }}
          >
            We specialize in residential, commercial, institutional, and
            industrial constructions. Trust us for quality workmanship and
            outstanding results.
          </Typography>
          <Box>
            <Box sx={links}>
              <CircleIcon sx={icons} />
              <Link sx={ulNames}>Expertise</Link>
            </Box>
            <Box sx={links}>
              <CircleIcon sx={icons} />
              <Link sx={ulNames}>Quality</Link>
            </Box>
            <Box sx={links}>
              <CircleIcon sx={icons} />
              <Link sx={ulNames}>Transparency</Link>
            </Box>
            <Box sx={links}>
              <CircleIcon sx={icons} />
              <Link sx={ulNames}>Safety</Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutUs;