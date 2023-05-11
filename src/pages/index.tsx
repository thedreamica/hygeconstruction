import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
// import styles from "@/styles/Home.module.css";
import { Box } from "@mui/material";
import NavigationBar from "@/components/navBar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Box>
      <NavigationBar /> <Box> Hello Hyge Construction</Box>
    </Box>
  );
}
