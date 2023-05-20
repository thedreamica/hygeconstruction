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
      "Our team carefully plans and designs each construction project, taking into account any site surveys or assessments that may be required. We also consider any architectural or engineering work that may be necessary to ensure that the project is feasible and will meet our clients' needs.",
    img: "https://i.postimg.cc/RhzD99sx/4.png",
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
      "Our company takes a comprehensive approach to project management, which includes scheduling, budgeting, and oversight of subcontractors and suppliers. We work closely with our clients to ensure that the project is completed on time and within budget.",
    img: "https://i.postimg.cc/bvcY7Sx6/2.png",
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
      "Once the planning and design phase is complete, our team begins the construction phase of the project. This involves site preparation, building, and quality control measures to ensure that the project meets our clients' expectations.",
    img: "https://i.postimg.cc/52SCsX2L/5.png",
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
      "At our company, safety is our top priority. We take all necessary measures to ensure the safety of workers and clients on construction sites. This includes implementing specific protocols and safety measures to prevent accidents and injuries.",
    img: "https://i.postimg.cc/SQM4hxK3/3.png",
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
      "Once the project is completed, our company provides follow-up support and maintenance as required. We believe that this ongoing support is essential for ensuring the long-term success of the project and the satisfaction of our clients.",
    img: "https://i.postimg.cc/85LZZ91K/6.png",
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