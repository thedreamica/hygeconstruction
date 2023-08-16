import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Box, Button, Typography } from "@mui/material";

import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import CircleIcon from "@mui/icons-material/Circle";

import CarouselData from "./CarouselData";
import NavBar from "./navBar";

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === CarouselData.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <Box id="home">
      <Box
        sx={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
          wIndexth: "100%",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            width: "100%",
            zIndex: 2,
            position: { xs: "fixed", md: "relative" },
          }}
        >
          <NavBar />
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: { xs: "12em", md: "7em" },
            mx: "auto",
            left: 0,
            right: 0,
            zIndex: 1,
          }}
        >
          {CarouselData.map((_, index) => (
            <Button
              key={index}
              onClick={() => handleDotClick(index)}
              sx={{
                color: "transparent",
              }}
            >
              <CircleIcon
                sx={{
                  color: activeIndex === index ? "primary.main" : "white",
                  fontSize: { xs: "1.7em", md: "2em" },
                  mx: { xs: ".6em", md: ".7em" },
                  transition: "color 0.5s ease",
                }}
              />
            </Button>
          ))}
        </Box>
        {CarouselData.map((items, slidesIndex) => {
          const { id, img, title, description } = items;
          return (
            <Box
              key={id}
              sx={{
                position: "absolute",
                width: "100%",
                top: 0,
                left: `${(slidesIndex - activeIndex) * 100}%`,
                transition: "left 0.5s ease",
              }}
            >
              <Box
                sx={{
                  zIndex: 1,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  height: "100vh",
                  color: "white",
                }}
              >
                <Box
                  sx={{
                    MaxHeight: "auto",
                  }}
                >
                  <Typography
                    variant="h1"
                    sx={{
                      fontWeight: "700",
                      lineHeight: { xs: "1em", md: "1.3em" },
                      width: { xs: "100%", md: "13em" },
                      fontSize: { xs: "1.8em", md: "5em" },
                      mx: "auto",
                    }}
                  >
                    {title}
                  </Typography>
                  <Typography
                    sx={{
                      my: "1em",
                      fontSize: { xs: "1em", md: "1.2em" },
                      fontWeight: "400",
                      width: { xs: "100%", md: "60%" },
                      mx: "auto",
                    }}
                  >
                    {description}
                  </Typography>
                  <Button
                    sx={{
                      color: "black",
                      bgcolor: "primary.main",
                      textTransform: "uppercase",
                      py: { xs: ".9em", md: "1.2em" },
                      px: { xs: "1.9em", md: "2.2em" },
                      mt: "1em",
                      fontSize: { xs: "14px", md: "16px" },
                      lineHeight: "10px",
                      fontWeight: "600",
                      borderRadius: "10px",
                      ":hover": {
                        bgcolor: "primary.main",
                      },
                    }}
                  >
                    EXPLORE MORE
                    <ArrowOutwardIcon
                      sx={{
                        mb: "0.30em",
                        ml: "5px",
                        fontSize: { xs: "1.6em", md: "1.7em" },
                      }}
                    />
                  </Button>
                </Box>
              </Box>
              <Box>
                <Image
                  style={{
                    zIndex: -1,
                    objectFit: "cover",
                  }}
                  src={img}
                  alt="bg-cover"
                  fill={true}
                />
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Hero;
