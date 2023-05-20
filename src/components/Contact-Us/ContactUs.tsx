import React from "react";
import Image from "next/image";
import { Box, Button, TextField, Typography } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const ContactUs = () => {
  const text = {
    color: "black",
  };
  return (
    <Box
      id="contactUs"
      sx={{
        px: { xs: "1.3em", sm: "1.3em", lg: "8em" },
        my: "5em",
        pb: { xs: "3.3em", sm: "3.3em", lg: "0" },
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontWeight: "600",
          mb: "0.50em",
          fontSize: { xs: "2.5em", sm: "2.5em", lg: "3em" },
        }}
      >
        CONTACT US
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: { xs: "center", sm: "center", lg: "space-between" },
          height: { xs: "auto", sm: "auto", lg: "500px" },
          flexDirection: { xs: "column", sm: "column", lg: "row" },
        }}
      >
        {/* first box */}
        <Box>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "auto", sm: "auto", lg: "auto auto" },
              height: "400px",
              gap: "3.5em",
              width: { xs: "auto", sm: "auto", lg: "800px" },
            }}
          >
            <TextField label="Name" variant="standard" />
            <TextField label="Email" variant="standard" />
            <TextField label="Phone" variant="standard" />
            <TextField label="Subject" variant="standard" />
            <TextField
              sx={{ width: { xs: "auto", sm: "auto", lg: "213%" } }}
              label="Message"
              multiline
              rows={6}
              variant="standard"
            />
          </Box>
          <Button
            sx={{
              color: "black",
              borderRadius: "10px",
              width: "fit-content",
              bgcolor: "#FFCC00",
              py: { xs: "0.80em", sm: "0.80em", lg: "1.2em" },
              px: { xs: "1.8em", sm: "1.8em", lg: "2.6em" },
              fontWeight: "600",
              fontSize: "1em",
              mt: { xs: "14.50em", sm: "14.50em", lg: "2em" },
              ":hover": {
                bgcolor: "#FFCC00",
              },
            }}
          >
            Contact Us
            <ArrowOutwardIcon
              sx={{
                fontSize: "1.8em",
                ml: "5px",
                mb: "10px",
              }}
            />
          </Button>
        </Box>
        {/* second */}
        <Box
          sx={{
            position: "relative",
            width: { xs: "auto", sm: "auto", lg: "600px" },
            height: "400px",
            mt: { xs: "3em", sm: "3em", lg: "0" },
          }}
        >
          <Typography
            variant="h4"
            sx={{
              width: "10em",
              color: "white",
              fontSize: { xs: "2em", sm: "2em", lg: "2.5em" },
              fontWeight: "600",
              mt: { xs: "8.2em", sm: "8.2em", lg: "6.3em" },
              ml: { xs: "0.5em", sm: "0.5em", lg: "1.2em" },
            }}
          >
            ON DEMAND CONSTRUCTION SERVICE
          </Typography>
          <Image
            src="https://i.postimg.cc/4dHnb3yR/contact-Us.jpg"
            alt=""
            fill={true}
            style={{ objectFit: "cover", zIndex: -1 }}
          />
          <Typography
            sx={{
              fontSize: { xs: "1.4em", sm: "1.4em", lg: "1.8em" },
              fontWeight: "600",
              display: "flex",
              justifyContent: "center",
              mt: { xs: "1.2em", sm: "1.2em", lg: "0.40em" },
            }}
          >
            support@hygeinfotech.com
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactUs;