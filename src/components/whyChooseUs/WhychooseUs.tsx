import React from "react";
import Image from "next/image";
import { Box, Divider, Typography } from "@mui/material";
import ChooseUsData from "./chooseUsData";

const WhychooseUs = () => {
  return (
    <Box
      sx={{
        display: "grid",
        placeItems: "center",
        px: { xs: "1.5em", md: "10em" },
        py: { xs: 0, md: 6 },
        overflow: "hidden",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontWeight: "600",
          fontSize: { xs: "2.4em", md: "3.5em" },
          lineHeight: "1.3em",
        }}
      >
        Why Choose us
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "auto", md: "auto auto" },
          columnGap: { xs: 0, md: "15em" },
          rowGap: { xs: "2.5em", md: "5em" },
          my: { xs: "2em", md: "2.5em" },
        }}
      >
        {ChooseUsData.map((item) => {
          const { id, img, description, title } = item;
          const mtPosition = id % 2 === 1 ? "0em" : "7em";
          return (
            <Box
              key={id}
              sx={{
                position: "relative",
                width: { xs: "100%", md: "500px" },
                height: { xs: "100%", md: "600px" },
                mt: { xs: 0, md: mtPosition },
                pb: { xs: 5, md: 0 },
              }}
            >
              <Image
                style={{
                  objectFit: "cover",
                  zIndex: "-1",
                }}
                src={img}
                alt=""
                fill={true}
              />
              <Box
                sx={{
                  position: "absolute",
                  width: "100%",
                  height: { xs: "450px", md: "600px" },
                  background: "rgba(255,255,255,0.850)",
                  zIndex: "-1",
                }}
              ></Box>
              <Box
                sx={{
                  pt: { xs: "1.5em", md: "8.2em" },
                  px: { xs: "1.3em", md: "3.7em" },
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "2.2em", md: "2.5em" },
                    fontWeight: "600",
                    mb: { xs: ".7em", md: "1em" },
                  }}
                >
                  {title}
                </Typography>
                <Divider
                  sx={{
                    background: "black",
                    display: { xs: "block", md: "none" },
                    mb: "2em",
                  }}
                />
                <Typography
                  sx={{
                    fontSize: { xs: "1.5em", md: "1.8em" },
                    fontWeight: "400",
                    lineHeight: "2em",
                  }}
                >
                  {description}
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default WhychooseUs;
