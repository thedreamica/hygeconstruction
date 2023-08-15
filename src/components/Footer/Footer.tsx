import React from "react";
import Image from "next/image";
import { Box, Button, Typography, Link } from "@mui/material";

import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

import Marquee from "react-fast-marquee";

const Footer = () => {
  const para = {
    fontSizde: "1em",
    fontWeight: "600",
    lineHeight: "1.7em",
  };
  const title = {
    fontSize: "1.8em",
    fontWeight: "700",
  };
  const marqueeTitle = {
    fontSize: { xs: "2.4em", md: "2.8em" },
    fontWeight: "600",
  };
  const marqueeBox = {
    display: "flex",
    mx: { xs: "2.8em", md: "8em" },
  };
  const marqueeStar = {
    color: "primary.main",
    mr: { xs: "0.80em", md: "2.5em" },
  };
  const iconStyles = { fontSize: "1.8em", color: "white" };
  return (
    <Box
      sx={{
        bgcolor: "black",
        color: "white",
        py: { xs: "1.5em", md: "2em" },
      }}
    >
      <Marquee speed={200}>
        <Box sx={marqueeBox}>
          <Typography variant="h3" sx={marqueeStar}>
            *
          </Typography>
          <Typography variant="h3" sx={marqueeTitle}>
            Quality Craftsmanship Guaranteed
          </Typography>
        </Box>
        <Box sx={marqueeBox}>
          <Typography variant="h3" sx={marqueeStar}>
            *
          </Typography>
          <Typography variant="h3" sx={marqueeTitle}>
            Innovative Design Solutions
          </Typography>
        </Box>
        <Box sx={marqueeBox}>
          <Typography variant="h3" sx={marqueeStar}>
            *
          </Typography>
          <Typography variant="h3" sx={marqueeTitle}>
            Reliable Construction Services
          </Typography>
        </Box>
        <Box sx={marqueeBox}>
          <Typography variant="h3" sx={marqueeStar}>
            *
          </Typography>
          <Typography variant="h3" sx={marqueeTitle}>
            Expert Team Collaboration
          </Typography>
        </Box>
        <Box sx={marqueeBox}>
          <Typography variant="h3" sx={marqueeStar}>
            *
          </Typography>
          <Typography variant="h3" sx={marqueeTitle}>
            Timely Project Completion
          </Typography>
        </Box>
      </Marquee>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: { xs: "center", md: "space-between" },
          alignItems: "center",
          pl: { xs: "1.3em", md: "6em" },
          pr: { xs: "1.3em", md: "11em" },
          my: { xs: "2.4em", md: "5em" },
        }}
      >
        <Box
          sx={{
            height: "15em",
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: "144px",
              height: "87px",
            }}
          >
            <Image
              style={{ objectFit: "cover" }}
              src="https://i.ibb.co/JjK73FB/Group-74.png"
              alt="Hyge-Logo"
              fill={true}
            />
          </Box>
          <Typography
            sx={{
              ...para,
              width: { xs: "auto", md: "23em" },
              mt: "1.1em",
            }}
          >
            At Hyge Construction, we are committed to providing top-quality
            construction services to meet the needs of our clients.
          </Typography>
        </Box>
        <Box
          sx={{
            height: "15em",
          }}
        >
          <Typography sx={{ ...title, mb: ".5em" }}>Address</Typography>
          <Typography
            sx={{
              ...para,
              width: { xs: "auto", md: "16em" },
              mb: { xs: 2, md: 0 },
            }}
          >
            Dot Cowork - Tidel Park, 1st Floor D Block, Tharamani, Chennai -
            600113
          </Typography>
          <Typography
            sx={{
              ...para,
              textDecoration: "underline",
              textUnderlineOffset: "4px",
              my: "6px",
            }}
          >
            <Link
              href="mailto:hello@hygeconstruction.com"
              sx={{ color: "white", textDecoration: "none" }}
            >
              hello@hygeconstruction.com
            </Link>
          </Typography>
          <Typography sx={para}>Mon - Friday, 8am : 5pm</Typography>
        </Box>
        <Box
          sx={{
            height: { xs: "7em", md: "15em" },
            width: "auto",
          }}
        >
          <Typography sx={{ ...title, display: { xs: "none", md: "block" } }}>
            We Build your Dream
            <span style={{ color: "#FFCC00" }}>!</span>
          </Typography>
          <Button
            href="#contactUs"
            sx={{
              color: "white",
              background: "transparent",
              border: "1px solid white",
              py: ".6em",
              px: { xs: "2.1em", md: "2.5em" },
              borderRadius: "1em",
              mt: "1em",
              display: "flex",
              mx: { xs: "auto", md: 0 },
              fontWeight: "600",
              fontSize: { xs: "1em", md: "1.2em" },
            }}
          >
            CONTACT US
            <ArrowOutwardIcon
              sx={{
                color: { xs: "white", md: "primary.main" },
                mb: "8px",
                ml: "3px",
                fontSize: { xs: "1.6em", md: "2em" },
              }}
            />
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          display: { xs: "flex", md: "none" },
          justifyContent: "center",
          alignItems: "center",
          columnGap: "1.2em",
          mb: "2em",
        }}
      >
        <Link href="">
          <FacebookOutlinedIcon sx={iconStyles} />
        </Link>
        <Link href="">
          <TwitterIcon sx={iconStyles} />
        </Link>
        <Link href="">
          <InstagramIcon sx={iconStyles} />
        </Link>
        <Link href="">
          <YouTubeIcon sx={iconStyles} />
        </Link>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: { xs: "1.3em", md: "6em" },
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: ".7em", md: "1em" },
            mx: { xs: "auto", md: 0 },
            fontWeight: "600",
          }}
        >
          © Copyright 2023
          <span
            style={{
              color: "primary.main",
              marginLeft: "4px",
            }}
          >
            hyge Construction
          </span>
          , All Rights Reserved.
        </Typography>
        <Link href="#home">
          <KeyboardArrowUpIcon
            sx={{
              fontSize: "3em",
              color: "primary.main",
              display: { xs: "none", md: "block" },
            }}
          />
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;
