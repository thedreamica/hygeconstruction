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
    color: "primary.main",
    mr: "8px",
  };
  const ulNames = {
    color: "black",
    textDecoration: "none",
    fontSize: { xs: "1em", md: "1.2em" },
    fontWeight: "600",
  };
  const para = {
    lineHeight: "25px",
    fontSize: { xs: "1em", md: "1.2em" },
    fontWeight: "500",
    width: { xs: "auto", md: "40em" },
  };
  const sections = {
    display: "flex",
    flexDirection: "column",
    width: { xs: "auto", md: "100%" },
  };
  const imageStyles = {
    position: "relative",
    width: "100%",
    mb: "2em",
  };
  return (
    <Box
      id="aboutUs"
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: { xs: "center", md: "space-between" },
        px: { xs: "1.5em", md: "10em" },
        py: { xs: "0", md: "1.5em" },
        mb: { xs: "-4em", md: "6em" },
        position: "relative",
        width: "100%",
        MinHeight: "100vh",
        gap: { xs: "0", md: "3em" },
        cursor: "default",
      }}
    >
      <Box sx={{ ...sections, order: { xs: 2, md: 1 } }}>
        <Box
          sx={{
            ...imageStyles,
            height: { xs: "250px", md: "380px" },
            order: { xs: 2, md: 0 },
          }}
        >
          <Image
            style={{
              objectFit: "cover",
            }}
            src="https://i.postimg.cc/pLSRtmDw/AboutUs.png"
            alt=""
            fill={true}
          />
        </Box>
        <Box>
          <Box
            sx={{
              order: { xs: 3, md: 2 },
              position: { xs: "absolute", md: "relative" },
              top: { xs: "5em", md: 0 },
            }}
          >
            <Typography
              sx={{
                color: "primary.main",
                fontSize: { xs: "1.5em", md: "2em" },
                fontWeight: "600",
                mb: ".2em",
              }}
            >
              About us
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontWeight: "600",
                fontSize: { xs: "2.4em", md: "3.5em" },
                lineHeight: "1.3em",
              }}
            >
              Welcome to hyge Construction. We are professional & reliable.
            </Typography>
          </Box>
          <Link href="#contactUs">
            <Button
              variant="contained"
              sx={{
                order: { xs: 1, md: 3 },
                color: "black",
                borderRadius: "10px",
                width: "fit-content",
                bgcolor: "primary.main",
                py: { xs: ".8em", md: ".8em" },
                px: { xs: "1.8em", md: "2em" },
                fontWeight: "600",
                fontSize: { xs: "1em", md: "1.2em" },
                mt: { xs: "1.5em", md: "1.5em" },
                mb: { xs: "3.5em", md: "0" },
                ":hover": {
                  bgcolor: "primary.main",
                },
              }}
            >
              CONTACT US
              <ArrowOutwardIcon
                sx={{
                  fontSize: { xs: "1.8em", md: "1.5em" },
                  ml: "5px",
                  mb: { xs: "7px", md: "10px" },
                }}
              />
            </Button>
          </Link>
        </Box>
      </Box>
      <Box
        sx={{
          ...sections,
          order: { xs: 1, md: 2 },
          mt: { xs: "21.5em", md: 0 },
        }}
      >
        <Box
          sx={{
            ...imageStyles,
            height: { xs: "250px", md: "450px" },
          }}
        >
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
              mb: { xs: "1em", md: "1.5em" },
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
