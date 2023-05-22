import React from "react";
import { Box, Button, Typography } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const ReadMore = () => {
  const title = {
    fontSize: { xs: "1.6em", sx: "1.6em", lg: "2em" },
    fontWeight: "600",
    lineHeight: "1.4em",
  };
  const description = {
    mt: "1.8em",
    fontSize: { xs: "1.1em", sx: "1.1em", lg: "1.2em" },
    fontWeight: "300",
    lineHeight: "23px",
    width: { xs: "auto", sx: "auto", lg: "23em" },
  };
  const btn = {
    color: "black",
    fontWeight: "600",
    fontSize: "1.1em",
    mt: "1.2em",
  };
  const icons = {
    mb: "5px",
    ml: "8px",
    fontSize: "1.4em",
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sx: "column", lg: "row" },
        justifyContent: { xs: "center", sx: "center", lg: "space-between" },
        py: { xs: "2em", sm: "2em", lg: "5em" },
        px: { xs: "1.3em", sx: "1.3em", lg: "8em" },
      }}
    >
      <Box
        sx={{
          my: { xs: "1.8em", sx: "1.8em", lg: "0" },
        }}
      >
        <Typography sx={title}>Commercial construction</Typography>
        <Typography sx={description}>
          From retail spaces and office buildings to warehouses and industrial
          facilities our industrial experts got you covered.
        </Typography>
        <Button sx={btn}>
          READ MORE
          <ArrowOutwardIcon sx={icons} />
        </Button>
      </Box>
      <Box
        sx={{
          my: { xs: "1.8em", sx: "1.8em", lg: "0" },
        }}
      >
        <Typography sx={title}>Residential construction</Typography>
        <Typography sx={description}>
          We specialize in residential construction projects of all sizes, from
          small home renovations to custom home builds.
        </Typography>
        <Button sx={btn}>
          READ MORE
          <ArrowOutwardIcon sx={icons} />
        </Button>
      </Box>
      <Box
        sx={{
          my: { xs: "1.8em", sx: "1.8em", lg: "0" },
        }}
      >
        <Typography sx={title}>Remodeling</Typography>
        <Typography sx={description}>
          Our team has the expertise to handle any remodeling project, whether
          it&apos;s a simple update or a complete renovation.
        </Typography>
        <Button sx={btn}>
          READ MORE
          <ArrowOutwardIcon sx={icons} />
        </Button>
      </Box>
    </Box>
  );
};

export default ReadMore;