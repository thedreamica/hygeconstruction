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
    lineHeight: { xs: "10px", sm: "10px", lg: "90px" },
    fontSize: { xs: "17px", sm: "17px", lg: "15px" },
    textDecoration: "none",
    mx: { xs: "0", sm: "0", lg: "2.6em" },
    my: { xs: "1.8em", sm: "1.8em", lg: "0em" },
    fontWeight: "600",
  };
  const btn = {
    color: "black",
    bgcolor: "#FFCC00",
    textTransform: "uppercase",
    py: "1.8em",
    px: "2em",
    fontSize: "15px",
    lineHeight: "10px",
    fontWeight: "700",
    borderRadius: "10px",
    ":hover": {
      bgcolor: "#FFCC00",
    },
  };
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        bgcolor: "white",
        height: { xs: "10vh", sm: "10vh", lg: "10.50vh" },
        mx: { xs: "0em", sm: "0em", lg: "1.50em" },
        my: { xs: "0em", sm: "0em", lg: "1em" },
        px: { sx: "1em", sm: "1em", lg: "1.5em" },
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: { xs: "156px", sm: "160px", lg: "145px" },
          height: { xs: "70px", sm: "70px", lg: "87px" },
          mx: { xs: "1em", sm: "1em", lg: "0" },
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
              sm: open ? "flex" : "none",
              lg: "flex",
            },
            flexDirection: { xs: "column", sm: "column", lg: "row" },
            alignItems: "center",
            height: { xs: "40em", sm: "40em", lg: "0em" },
            bgcolor: { xs: "white", sm: "white", lg: "transparent" },
            position: { xs: "absolute", sm: "absolute", lg: "relative" },
            left: "0",
            right: "0",
            top: "0",
          }}
        >
          <Box
            sx={{
              display: {
                xs: "flex",
                sm: "flex",
                lg: "block",
              },
              position: { xs: "absolute", sm: "absolute", lg: "relative" },
              flexDirection: { xs: "column", sm: "column", lg: "row" },
              top: { xs: "6em", sm: "6em", lg: "0" },
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
              position: { xs: "absolute", sm: "absolute", lg: "relative" },
              top: { xs: "30em", sm: "30em", lg: "0" },
              display: { xs: "block", sm: "block", lg: "none" },
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
                display: { xs: "block", sm: "block", lg: "none" },
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
              display: { xs: "block", sm: "block", lg: "none" },
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
          display: { xs: "none", sm: "none", lg: "flex" },
        }}
      >
        <Button sx={btn}>Request quote</Button>
      </Box>
    </Box>
  );
};

export default NavBar;