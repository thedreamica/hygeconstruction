import { HeadphonesOutlined } from "@mui/icons-material";
import ImageIcon from "@mui/icons-material/Image";
import DescriptionIcon from "@mui/icons-material/Description";
import BusinessIcon from "@mui/icons-material/Business";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import VerifiedIcon from "@mui/icons-material/Verified";

const AccordionData = [
  {
    id: 1,
    title: "Initial Consultation",
    description:
      " The first step in our process of working with clients involves meeting with them to discuss their needs and evaluate the project requirements. We provide initial recommendations and proposals based on this consultation to help clients understand how we can help them achieve their goals.",
    img: "https://i.ibb.co/jvL8wGd/Rectangle-20.jpg",
    icon: (
      <HeadphonesOutlined
        sx={{
          color: "white",
          fontSize: { xs: "3.3em", sm: "3.3em", lg: "7em" },
          ml: { xs: "0em", sm: "0em", lg: "1em" },
          mb: { xs: "0em", sm: "0em", lg: "0.60em" },
        }}
      />
    ),
  },
  {
    id: 2,
    title: "Planning & Design",
    description:
      "The first step in our process of working with clients involves meeting with them to discuss their needs and evaluate the project requirements. We provide initial recommendations and proposals based on this consultation to help clients understand how we can help them achieve their goals.",
    img: "https://i.ibb.co/jvL8wGd/Rectangle-20.jpg",
    icon: (
      <ImageIcon
        sx={{
          color: "white",
          fontSize: { xs: "3.3em", sm: "3.3em", lg: "7em" },
          ml: { xs: "0em", sm: "0em", lg: "1em" },
          mb: { xs: "0em", sm: "0em", lg: "0.60em" },
        }}
      />
    ),
  },
  {
    id: 3,
    title: "Project Management",
    description:
      "The first step in our process of working with clients involves meeting with them to discuss their needs and evaluate the project requirements. We provide initial recommendations and proposals based on this consultation to help clients understand how we can help them achieve their goals.",
    img: "https://i.ibb.co/jvL8wGd/Rectangle-20.jpg",
    icon: (
      <DescriptionIcon
        sx={{
          color: "white",
          fontSize: { xs: "3.3em", sm: "3.3em", lg: "7em" },
          ml: { xs: "0em", sm: "0em", lg: "1em" },
          mb: { xs: "0em", sm: "0em", lg: "0.60em" },
        }}
      />
    ),
  },
  {
    id: 4,
    title: "Construction",
    description:
      "The first step in our process of working with clients involves meeting with them to discuss their needs and evaluate the project requirements. We provide initial recommendations and proposals based on this consultation to help clients understand how we can help them achieve their goals.",
    img: "https://i.ibb.co/jvL8wGd/Rectangle-20.jpg",
    icon: (
      <BusinessIcon
        sx={{
          color: "white",
          fontSize: { xs: "3.3em", sm: "3.3em", lg: "7em" },
          ml: { xs: "0em", sm: "0em", lg: "1em" },
          mb: { xs: "0em", sm: "0em", lg: "0.60em" },
        }}
      />
    ),
  },
  {
    id: 5,
    title: "Safety Check",
    description:
      "The first step in our process of working with clients involves meeting with them to discuss their needs and evaluate the project requirements. We provide initial recommendations and proposals based on this consultation to help clients understand how we can help them achieve their goals.",
    img: "https://i.ibb.co/jvL8wGd/Rectangle-20.jpg",
    icon: (
      <HowToRegIcon
        sx={{
          color: "white",
          fontSize: { xs: "3.3em", sm: "3.3em", lg: "7em" },
          ml: { xs: "0em", sm: "0em", lg: "1em" },
          mb: { xs: "0em", sm: "0em", lg: "0.60em" },
        }}
      />
    ),
  },
  {
    id: 6,
    title: "Completions & Follow-ups",
    description:
      "The first step in our process of working with clients involves meeting with them to discuss their needs and evaluate the project requirements. We provide initial recommendations and proposals based on this consultation to help clients understand how we can help them achieve their goals.",
    img: "https://i.ibb.co/jvL8wGd/Rectangle-20.jpg",
    icon: (
      <VerifiedIcon
        sx={{
          color: "white",
          fontSize: { xs: "3.3em", sm: "3.3em", lg: "7em" },
          ml: { xs: "0em", sm: "0em", lg: "1em" },
          mb: { xs: "0em", sm: "0em", lg: "0.60em" },
        }}
      />
    ),
  },
];

export default AccordionData;