import React, { useState } from "react";
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
  const [expanded, setExpanded] = useState<string | false>(false);
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  return (
    <Box
      id="howWeWork"
      sx={{
        width: "100%",
        height: { xs: "auto", md: "100vh" },
        px: { xs: "1.5em", md: "10em" },
        py: { xs: 3, md: 0 },
        bgcolor: { xs: "black", md: "transparent" },
        position: "relative",
        overflow: "hidden",
        mb: { xs: -5, md: 0 },
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
        variant="h3"
        sx={{
          color: "white",
          fontWeight: "600",
          fontSize: { xs: "2.4em", md: "3.5em" },
          lineHeight: "1.3em",
          py: { xs: ".8em", md: "1em" },
        }}
      >
        How we work
      </Typography>
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          flexDirection: "column",
          height: "100vh",
          overflow: "auto",
        }}
      >
        {AccordionData.map((item) => {
          const ContentsOrder = item.id % 2 === 1 ? "1" : "2";
          const imgOrder = item.id % 2 === 1 ? "2" : "1";
          return (
            <Box
              key={item.id}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                height: "75%",
                alignItems: "center",
                mb: "15em",
              }}
            >
              <Box
                sx={{
                  color: "white",
                  order: ContentsOrder,
                }}
              >
                {item.icon}
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: { xs: "2.7em", md: "3em" },
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
                    fontSize: { xs: "1.3em", md: "1.5em" },
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
              <Box
                sx={{
                  order: imgOrder,
                  position: "relative",
                  width: "600px",
                  height: "600px",
                }}
              >
                <Image src={item.img} alt="" fill={true} />
              </Box>
            </Box>
          );
        })}
      </Box>
      <Box
        sx={{
          display: { xs: "block", md: "none" },
          mb: 5,
        }}
      >
        {AccordionData.map((item) => {
          const { id, img, title, description, icon } = item;
          const panelId = `panel${id}`;
          return (
            <Accordion
              key={id}
              sx={{
                bgcolor: "black",
                color: "white",
                ".MuiAccordionSummary-root": { p: 0 },
                ".MuiAccordionDetails-root": { p: 0 },
              }}
              expanded={expanded === panelId}
              onChange={handleChange(panelId)}
            >
              <AccordionSummary
                sx={{
                  borderBottom: "1px solid",
                  borderColor: "primary.light",
                }}
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
                      mx: ".5em",
                    }}
                  >
                    {title}
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
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
                    width: "100%",
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
