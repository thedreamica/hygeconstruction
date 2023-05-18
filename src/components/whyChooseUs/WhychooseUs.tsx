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
        mt: "6.5em",
        mb: "3em",
        px: "1.3em",
        overflow: "hidden",
      }}
    >
      <Box>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "600",
            fontSize: { xs: "2.5em", sm: "2.5em", lg: "4em" },
            lineHeight: "1.3em",
            mb: "1em",
          }}
        >
          Why Choose us
        </Typography>
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "auto", sm: "auto", lg: "auto auto" },
          columnGap: { xs: "0em", sm: "0", lg: "15em" },
          rowGap: { xs: "2.5em", sm: "2.5em", lg: "5em" },
        }}
      >
        {ChooseUsData.map((item) => {
          const { id, img, description, title } = item;
          const mtPosition = id % 2 === 1 ? "0em" : "7em";
          return (
            <Box
              key={id}
              sx={{
                width: { xs: "330px", sm: "330px", lg: "500px" },
                height: { xs: "450px", sm: "450px", lg: "600px" },
                position: "relative",
                mt: { xs: "0", sm: "0", lg: mtPosition },
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
                  background: "rgba(255,255,255,0.850)",
                  width: { xs: "400px", sm: "300px", lg: "500px" },
                  height: { xs: "450px", sm: "450px", lg: "600px" },
                  position: "absolute",
                  zIndex: "-1",
                }}
              ></Box>
              <Box
                sx={{
                  pt: { xs: "1.5em", sm: "1.5em", lg: "8.2em" },
                  px: { xs: "1.3em", sm: "1.3em", lg: "3.7em" },
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "2.2em", sm: "2.2em", lg: "2.5em" },
                    fontWeight: "600",
                    mb: "1.2em",
                  }}
                >
                  {title}
                </Typography>
                <Divider
                  sx={{
                    background: "black",
                    display: { xs: "block", sm: "block", lg: "none" },
                    mb: "2em",
                  }}
                />
                <Typography
                  sx={{
                    fontSize: { xs: "1.5em", sm: "1.5em", lg: "1.8em" },
                    fontWeight: "500",
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