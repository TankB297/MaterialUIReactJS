import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import "../Styles/Content.css";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MainBG from "../Images/main-bg-remove.png";

export default function Content() {
  return (
    <div className="content-main-01">
      <div className="content-main">
        <Stack direction="column" spacing={2}>
          <h1>
            Experience a journey of a thousand miles with just a single page
          </h1>
          <h2>
            Join us exploring the most exciting adventures from the world you
            have ever felt before
          </h2>
          <Stack direction="row" spacing={2}>
            <Button variant="contained">Get Started</Button>
            <Button startIcon={<PlayCircleIcon />}>See Demo</Button>
          </Stack>
          <Stack className="content-main-button" direction="row" spacing={2}>
            <Button startIcon={<FacebookIcon />}>Facebook</Button>
            <Button startIcon={<InstagramIcon />}>Instagram</Button>
            <Button startIcon={<LinkedInIcon />}>LinkedIn</Button>
          </Stack>
        </Stack>
      </div>
      <img className="content-main-background" src={MainBG} alt="Background-TankB" />
    </div>
  );
}
