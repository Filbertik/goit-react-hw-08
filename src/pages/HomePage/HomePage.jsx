import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ArrowUpward";
import s from "./HomePage.module.css";
import { useEffect, useState } from "react";
import { FcPortraitMode, FcAbout } from "react-icons/fc";

const HomePage = () => {
  const [policy, setPolicy] = useState(false);

  useEffect(() => {
    if (window.location.hash === "#policy") return setPolicy(true);
  }, []);

  return (
    <Box>
      <FcPortraitMode className={s.logo} />
      <h1 className={s.title}>The PhoneBook.</h1>
      <h2 className={s.title}>Welcome into PhoneBook!</h2>
      <h3 className={s.title}>
        I hope, this app will help you improve your life!
      </h3>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>
            <FcAbout />
            &nbsp; Information about me.
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ fontStyle: "italic" }}>
          <Typography>
            Hello. My name is Viktor Kukharskyi. I am a beginner fullstack
            developer. Now skills are HTML, CSS, JavaScript, React, Redux. I
            have experience with some JS libraries. Now, I am looking for a job
            as a Frontend Developer.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};
export default HomePage;
