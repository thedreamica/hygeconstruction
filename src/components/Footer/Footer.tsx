import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Box, Button, Typography } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
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
    fontSize: { xs: "2.4em", sm: "2.4em", lg: "2.8em" },
    fontWeight: "600",
  };
  const marqueeBox = {
    display: "flex",
    mx: { xs: "2.8em", sm: "2.8em", lg: "8em" },
  };
  const marqueeStar = {
    color: "#FFCC00",
    mr: { xs: "0.80em", sm: "0.80em", lg: "2.5em" },
  };
  return (
    <Box
      sx={{
        bgcolor: "black",
        color: "white",
        py: { xs: "1.5em", sm: "2em", lg: "2em" },
      }}
    >
      <Marquee>
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
        {/* third */}
        <Box sx={marqueeBox}>
          <Typography variant="h3" sx={marqueeStar}>
            *
          </Typography>
          <Typography variant="h3" sx={marqueeTitle}>
            Reliable Construction Services
          </Typography>
        </Box>
        {/* fourth */}
        <Box sx={marqueeBox}>
          <Typography variant="h3" sx={marqueeStar}>
            *
          </Typography>
          <Typography variant="h3" sx={marqueeTitle}>
            Expert Team Collaboration
          </Typography>
        </Box>
        {/* fifth */}
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
          flexDirection: { xs: "column", sm: "column", lg: "row" },
          justifyContent: { xs: "center", sm: "center", lg: "space-between" },
          alignItems: "center",
          pl: { xs: "1.3em", sm: "1.3em", lg: "6em" },
          pr: { xs: "1.3em", sm: "1.3em", lg: "11em" },
          my: { xs: "2.4em", sm: "2.4em", lg: "5em" },
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
              width: { xs: "auto", sm: "auto", lg: "23em" },
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
          <Typography sx={{ ...title, mb: "0.50em" }}>Address</Typography>
          <Typography
            sx={{
              ...para,
              width: { xs: "auto", sm: "auto", lg: "16em" },
              mb: { xs: "2em", sm: "2em", lg: "0" },
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
            support@hygeinfotech.com
          </Typography>
          <Typography sx={para}>Mon - Friday, 8am : 5pm</Typography>
        </Box>
        <Box
          sx={{
            height: { xs: "7em", sm: "7em", lg: "15em" },

            width: { xs: "100%", sm: "100%", lg: "auto" },
          }}
        >
          <Typography
            sx={{ ...title, display: { xs: "none", sm: "none", lg: "block" } }}
          >
            We Build your Dream
            <span style={{ color: "#FFCC00" }}>!</span>
          </Typography>
          <Button
            sx={{
              color: "white",
              background: "transparent",
              border: "1px solid white",
              py: "0.60em",
              px: { xs: "2.1em", sm: "2.1em", lg: "3.5em" },
              borderRadius: "1em",
              mt: "1em",
              display: "flex",
              mx: { xs: "auto", sm: "auto", lg: "0" },
              fontWeight: "600",
            }}
          >
            CONTACT US
            <ArrowOutwardIcon
              sx={{
                color: { xs: "white", sm: "white", lg: "#FFCC00" },
                mb: "8px",
                ml: "3px",
                fontSize: { xs: "1.6em", sm: "1.6em", lg: "2em" },
              }}
            />
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          display: { xs: "flex", sm: "flex", lg: "none" },
          justifyContent: "center",
          alignItems: "center",
          columnGap: "1.2em",
          mb: "2em",
        }}
      >
        <FacebookOutlinedIcon sx={{ fontSize: "1.8em" }} />
        <TwitterIcon sx={{ fontSize: "1.8em" }} />
        <InstagramIcon sx={{ fontSize: "1.8em" }} />
        <YouTubeIcon sx={{ fontSize: "1.8em" }} />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: { xs: "1.3em", sm: "1.3em", lg: "6em" },
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "0.75em", sm: "0.75em", lg: "1em" },
            mx: { xs: "auto", sm: "auto", lg: "0" },
            fontWeight: "600",
          }}
        >
          © Copyright 2023
          <span
            style={{
              color: "#FFCC00",
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
              color: "#FFCC00",
              display: { xs: "none", sm: "none", lg: "block" },
            }}
          />
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;