import React from "react";
import { Box, Button, Link, Typography } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const ReadMore = () => {
  const title = {
    fontSize: { xs: "1.6em", md: "2em" },
    fontWeight: "600",
    lineHeight: "1.4em",
  };
  const description = {
    mt: { xs: "1em", md: "1.2em" },
    fontSize: { xs: "1.1em", md: "1.2em" },
    fontWeight: "400",
    lineHeight: "1.5em",
    width: { xs: "auto", md: "23em" },
  };
  const btnStyles = {
    fontSize: { xs: "1em", md: "1.2em" },
    fontWeight: "600",
    color: "black",
    p: 0,
  };
  const linkStyles = {
    color: "black",
    mt: "1.2em",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    width: "fit-content",
  };
  const icons = {
    mb: ".3em",
    ml: ".3em",
    fontSize: "1.8em",
  };
  const boxStyles = {
    my: { xs: "1.3em", md: "0" },
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: { xs: "center", md: "space-between" },
        px: { xs: "1.5em", md: "10em" },
        py: { xs: "2em", md: "5em" },
        mb: { xs: "-5em", md: 0 },
      }}
    >
      <Box sx={boxStyles}>
        <Typography sx={title}>Commercial construction</Typography>
        <Typography sx={description}>
          From retail spaces and office buildings to warehouses and industrial
          facilities our industrial experts got you covered.
        </Typography>
        <Link href="" sx={linkStyles}>
          <Button sx={btnStyles}>READ MORE</Button>
          <ArrowOutwardIcon sx={icons} />
        </Link>
      </Box>
      <Box sx={boxStyles}>
        <Typography sx={title}>Residential construction</Typography>
        <Typography sx={description}>
          We specialize in residential construction projects of all sizes, from
          small home renovations to custom home builds.
        </Typography>
        <Link href="" sx={linkStyles}>
          <Button sx={btnStyles}>READ MORE</Button>
          <ArrowOutwardIcon sx={icons} />
        </Link>
      </Box>
      <Box sx={boxStyles}>
        <Typography sx={title}>Remodeling</Typography>
        <Typography sx={description}>
          Our team has the expertise to handle any remodeling project, whether
          it&apos;s a simple update or a complete renovation.
        </Typography>
        <Link href="" sx={linkStyles}>
          <Button sx={btnStyles}>READ MORE</Button>
          <ArrowOutwardIcon sx={icons} />
        </Link>
      </Box>
    </Box>
  );
};

export default ReadMore;
