import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Box, Button, Link } from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const handleScroll = () => {
      setOpen(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const links = {
    color: "black",
    lineHeight: { xs: "10px", md: "90px" },
    fontSize: { xs: "17px", md: "15px" },
    textDecoration: "none",
    mx: { xs: 0, md: "2.6em" },
    my: { xs: "1.8em", md: 0 },
    fontWeight: "600",
  };
  const btn = {
    color: "black",
    bgcolor: "primary.main",
    textTransform: "uppercase",
    py: "1.8em",
    px: "2em",
    fontSize: "15px",
    lineHeight: "10px",
    fontWeight: "700",
    borderRadius: "10px",
    ":hover": {
      bgcolor: "primary.main",
    },
  };
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        bgcolor: "white",
        height: { xs: "10vh", md: "10.5vh" },
        mx: { xs: 0, md: "1.5em" },
        my: { xs: 0, md: "1em" },
        px: { sx: "1em", md: "1.5em" },
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: { xs: "156px", md: "145px" },
          height: { xs: "70px", md: "87px" },
        }}
      >
        <Image
          src="https://i.ibb.co/JjK73FB/Group-74.png"
          alt="hyge"
          style={{ objectFit: "contain" }}
          fill={true}
        />
      </Box>
      <Box>
        <Box
          sx={{
            display: {
              xs: open ? "flex" : "none",
              md: "flex",
            },
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            height: { xs: "40em", md: 0 },
            bgcolor: { xs: "white", md: "transparent" },
            position: { xs: "absolute", md: "relative" },
            left: 0,
            right: 0,
            top: 0,
          }}
        >
          <Box
            sx={{
              display: {
                xs: "flex",
                md: "block",
              },
              position: { xs: "absolute", md: "relative" },
              flexDirection: { xs: "column", md: "row" },
              top: { xs: "6em", md: 0 },
            }}
          >
            <Link href="#home" sx={links}>
              Home
            </Link>
            <Link href="#aboutUs" sx={links}>
              About Us
            </Link>
            <Link href="#services" sx={links}>
              Services
            </Link>
            <Link href="" sx={links}>
              Our Values
            </Link>
            <Link href="#contactUs" sx={links}>
              Contact Us
            </Link>
          </Box>
          <Box
            sx={{
              position: { xs: "absolute", md: "relative" },
              top: { xs: "30em", md: "0" },
              display: { xs: "block", md: "none" },
            }}
          >
            <Button sx={btn}>Request quote</Button>
          </Box>
        </Box>

        {open ? (
          <Button disableRipple onClick={handleMenu}>
            <CloseIcon
              sx={{
                fontSize: "2.5em",
                color: "black",
                display: { xs: "block", md: "none" },
                ml: "6.5em",
              }}
            />
          </Button>
        ) : (
          <Button
            disableRipple
            sx={{
              background: "transparent",
              color: "transparent",
              display: { xs: "block", md: "none" },
              width: "fit-content",
              float: "right",
            }}
            onClick={handleMenu}
          >
            <MenuIcon
              sx={{
                fontSize: "3em",
                color: "black",
              }}
            />
          </Button>
        )}
      </Box>
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
        }}
      >
        <Button sx={btn}>Request quote</Button>
      </Box>
    </Box>
  );
};

export default NavBar;