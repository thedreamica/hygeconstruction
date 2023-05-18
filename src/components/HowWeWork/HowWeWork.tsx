import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Divider,
  Typography,
} from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionData from "./AccordionData";

const HowWeWork = () => {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  // const sectionRef = useRef<HTMLDivElement | null>(null);

  return (
    <Box
      // ref={sectionRef}
      sx={{
        width: "100%",
        height: { xs: "auto", sm: "auto", lg: "100vh" },
        px: { xs: "0em", sm: "0em", lg: "8em" },
        bgcolor: { xs: "black", sm: "black", lg: "transparent" },
        py: { xs: "4em", sm: "4em", lg: "0em" },
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Image
        src="https://i.postimg.cc/yNZ9CycL/how-We-Work.jpg"
        alt=""
        fill={true}
        style={{
          objectFit: "cover",
          zIndex: "-1",
        }}
      />
      <Typography
        variant="h4"
        sx={{
          color: "white",
          fontSize: { xs: "2.5em", sm: "2.5em", lg: "3.5em" },
          fontWeight: "600",
          py: { xs: "0.80em", sm: "0.80em", lg: "1em" },
          px: { xs: "1em", sm: "1em", lg: "0" },
        }}
      >
        How we work
      </Typography>
      <Box
        sx={{
          display: {
            xs: "none",
            sm: "none",
            lg: "flex",
          },
          flexDirection: "column",
          overflow: "auto",
          height: "100vh",
        }}
      >
        {AccordionData.map((item) => {
          return (
            <Box
              key={item.id}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                height: "75%",
                alignItems: "center",
                my: "2em",
              }}
            >
              {/* first */}
              <Box
                sx={{
                  color: "white",
                }}
              >
                {item.icon}
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: { xs: "2.7em", sm: "2.7em", lg: "3em" },
                    fontWeight: "600",
                    mb: "0.50em",
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  sx={{
                    width: "20em",
                    lineHeight: "1.5em",
                    fontSize: { xs: "1.3em", sm: "1.3em", lg: "1.5em" },
                  }}
                >
                  {item.description}
                </Typography>
                <Divider
                  sx={{
                    background: "white",
                    width: "10em",
                    my: "1.8em",
                  }}
                />
                <Button
                  sx={{
                    color: "white",
                    fontSize: "1.3em",
                  }}
                >
                  CONTACT US
                  <ArrowOutwardIcon />
                </Button>
              </Box>
              {/* second */}
              <Box
                sx={{
                  position: "relative",
                  width: "600px",
                  height: "600px",
                }}
              >
                <Image
                  src="https://i.ibb.co/jvL8wGd/Rectangle-20.jpg"
                  alt=""
                  fill={true}
                />
              </Box>
            </Box>
          );
        })}
      </Box>
      {/* accordion */}
      <Box
        sx={{
          display: { xs: "block", sm: "block", lg: "none" },
        }}
      >
        {AccordionData.map((item) => {
          const { id, img, title, description, icon } = item;
          const panelId = `panel${id}`;
          return (
            <Accordion
              key={id}
              sx={{ bgcolor: "black", color: "white" }}
              expanded={expanded === panelId}
              onChange={handleChange(panelId)}
            >
              <AccordionSummary
                sx={{ borderBottom: "1px solid #707070", mx: "1em" }}
                expandIcon={
                  <ExpandMoreIcon sx={{ color: "yellow", fontSize: "2.4em" }} />
                }
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1em",
                  }}
                >
                  {icon}
                  <Typography
                    sx={{
                      width: "8em",
                      flexShrink: 0,
                      fontSize: "1.3em",
                      fontWeight: "600",
                      mx: "0.50em",
                    }}
                  >
                    {title}
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails sx={{ mx: "1em" }}>
                <Typography
                  sx={{
                    fontSize: "1.1em",
                    fontWeight: "500",
                    lineHeight: "1.5em",
                    my: "2em",
                  }}
                >
                  {description}
                </Typography>
                <Box
                  sx={{
                    position: "relative",
                    width: "300px",
                    height: "300px",
                  }}
                >
                  <Image src={img} alt={title} fill={true} />
                </Box>

                <Button
                  sx={{
                    color: "white",
                    fontSize: "1.2em",
                    mt: "2.5em",
                  }}
                >
                  CONTACT US
                  <ArrowOutwardIcon
                    sx={{ mb: "7px", ml: "5px", fontSize: "1.5em" }}
                  />
                </Button>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </Box>
    </Box>
  );
};

export default HowWeWork;
