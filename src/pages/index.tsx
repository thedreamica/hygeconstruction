import { Box } from "@mui/material";
import Hero from "@/components/Hero /Hero";
import ReadMore from "@/components/ReadMore/ReadMore";
import AboutUs from "@/components/AboutUs/AboutUs";
import Services from "@/components/Services/Services";
import WhychooseUs from "@/components/whyChooseUs/WhychooseUs";
import HowWeWork from "@/components/HowWeWork/HowWeWork";
import ContactUs from "@/components/Contact-Us/ContactUs";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <Box>
      <Hero />
      <ReadMore />
      <AboutUs />
      <Services />
      <WhychooseUs />
      <HowWeWork />
      <ContactUs />
      <Footer />
    </Box>
  );
}