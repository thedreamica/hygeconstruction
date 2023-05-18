import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Box, Button, Typography } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import CircleIcon from "@mui/icons-material/Circle";
import CarouselData from "./CarouselData";
import NavBar from "./navBar";

const Hero = () => {
  const [Data, setData] = useState(CarouselData);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === Data.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(intervalId);
  }, [Data.length]);

  return (
    <Box>
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
            zIndex: "1",
          }}
        >
          <NavBar />
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: { xs: "12em", sx: "12em", lg: "6em" },
            left: "0",
            right: "0",
            mx: "auto",
            zIndex: "1",
          }}
        >
          {Data.map((_, index) => (
            <Button
              key={index}
              onClick={() => handleDotClick(index)}
              sx={{
                color: "transparent",
              }}
            >
              <CircleIcon
                sx={{
                  color: activeIndex === index ? "#FFCC00" : "white",
                  fontSize: { xs: "1.7em", sx: "1.7em", lg: "2em" },
                  mx: { xs: "0.60em", sx: "0.60em", lg: "0.70em" },
                  transition: "color 0.5s ease",
                  ":hover": {
                    color: "#FFCC00",
                  },
                }}
              />
            </Button>
          ))}
        </Box>
        {Data.map((items, slidesIndex) => {
          const { id, img, title, description } = items;
          return (
            <Box
              key={id}
              sx={{
                pt: { xs: "0", sx: "0", lg: "4.3em" },
                position: "absolute",
                width: "100%",
                top: "0",
                left: `${(slidesIndex - activeIndex) * 100}%`,
                transition: "left 0.5s ease",
              }}
            >
              <Box
                sx={{
                  zIndex: "1",
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
                      lineHeight: { xs: "40px", sm: "40px", lg: "100px" },
                      width: "13em",
                      fontSize: { xs: "2em", sm: "2em", lg: "6em" },
                      mx: "auto",
                    }}
                  >
                    {title}
                  </Typography>
                  <Typography
                    sx={{
                      my: "1em",
                      fontSize: { xs: "18px", sm: "18px", lg: "24px" },
                      fontWeight: "500",
                      width: { xs: "90%", sx: "90%", lg: "60%" },
                      mx: "auto",
                    }}
                  >
                    {description}
                  </Typography>
                  <Button
                    sx={{
                      color: "black",
                      bgcolor: "#FFCC00",
                      textTransform: "uppercase",
                      py: { xs: "0.90em", sm: "0.90em", lg: "1.2em" },
                      px: { xs: "1.9em", sm: "1.9em", lg: "2.2em" },
                      mt: "1em",
                      fontSize: { xs: "14px", sx: "14px", lg: "16px" },
                      lineHeight: "10px",
                      fontWeight: "600",
                      borderRadius: "10px",
                      ":hover": {
                        bgcolor: "#FFCC00",
                      },
                    }}
                  >
                    EXPLORE MORE
                    <ArrowOutwardIcon
                      sx={{
                        mb: "0.30em",
                        ml: "5px",
                        fontSize: { xs: "1.6em", sx: "1.6em", lg: "1.7em" },
                      }}
                    />
                  </Button>
                </Box>
              </Box>
              <Box>
                <Image
                  style={{
                    zIndex: "-1",
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