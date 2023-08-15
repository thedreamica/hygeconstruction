import React from "react";
import Image from "next/image";
import { Box, Button, Link, TextField, Typography } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const ContactUs = () => {
  return (
    <Box
      id="contactUs"
      sx={{
        px: { xs: "1.5em", md: "10em" },
        pt: { xs: 13, md: 8 },
        pb: { xs: 3, md: 8 },
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontSize: { xs: "2.4em", md: "3em" },
          fontWeight: "600",
          lineHeight: "1.3em",
          mb: 3,
        }}
      >
        CONTACT US
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: { xs: "center", md: "space-between" },
          height: { xs: "auto", md: "500px" },
          flexDirection: { xs: "column", md: "row" },
          mb: { xs: 5, md: 0 },
        }}
      >
        <Box>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "auto", md: "auto auto" },
              height: "400px",
              gap: { xs: "3em", md: "3.5em" },
              width: { xs: "100%", md: "800px" },
            }}
          >
            <TextField label="Name" variant="standard" />
            <TextField label="Email" variant="standard" />
            <TextField label="Phone" variant="standard" />
            <TextField label="Subject" variant="standard" />
            <TextField
              sx={{ width: { xs: "100%", md: "213%" } }}
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
              bgcolor: "primary.main",
              py: { xs: ".8em", md: ".8em" },
              px: { xs: "1.8em", md: "2.5em" },
              fontWeight: "600",
              fontSize: { xs: "1em", md: "1.2em" },
              mt: { xs: "12em", md: "2em" },
              ":hover": {
                bgcolor: "primary.main",
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
        <Box
          sx={{
            position: "relative",
            width: { xs: "100%", md: "600px" },
            height: { xs: "300px", md: "400px" },
            mt: { xs: "3em", md: 0 },
            background:
              "linear-gradient(90deg, #000 0%, rgba(0, 0, 0, 0.00) 100%)",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              width: "10em",
              color: "white",
              fontSize: { xs: "2em", md: "2.5em" },
              fontWeight: "600",
              mt: { xs: "5.3em", md: "6.3em" },
              ml: { xs: ".5em", md: "1.2em" },
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
              fontSize: { xs: "1.3em", md: "1.8em" },
              fontWeight: "600",
              display: "flex",
              justifyContent: "center",
              mt: { xs: "1.2em", md: ".4em" },
            }}
          >
            <Link
              sx={{ color: "black", textDecoration: "none" }}
              href="mailto:support@hygeinfotech.com"
            >
              support@hygeinfotech.com
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactUs;